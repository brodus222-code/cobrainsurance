import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

const SITE = 'https://cobrainsurance.health';

const INTERNAL_LINKS = [
  { url: '/knowledge-base', label: 'COBRA Knowledge Base' },
  { url: '/alternatives', label: 'Alternatives to COBRA' },
  { url: '/start-cobra', label: 'How to Start COBRA' },
  { url: '/manage-cobra', label: 'Manage Your COBRA Coverage' },
  { url: '/calculator', label: 'COBRA Cost Calculator' },
  { url: '/quiz', label: 'Coverage Recommendation Quiz' },
  { url: '/the-cobra-trap', label: 'The COBRA Trap' },
  { url: '/get-help', label: 'Speak with a Licensed Advisor' },
  { url: '/about', label: 'About HealthLink Insurance Agency' },
  { url: '/state-laws', label: 'State COBRA & Mini-COBRA Rules' },
  { url: '/unemployment', label: 'Unemployment Insurance Guide' },
];

const CONTENT_PILLARS = [
  'COBRA basics & eligibility (who qualifies, qualifying events, 60-day election window)',
  'COBRA costs & savings (premium calculations, 2% admin fee, cost comparisons by state)',
  'Enrollment & timelines (election notice, 45-day first payment, grace periods)',
  'Alternatives to COBRA (ACA marketplace, short-term plans, Medicaid, spouse coverage)',
  'State-specific COBRA & mini-COBRA rules (CA, NY, TX, FL, IL, etc.)',
  'Life events & COBRA (job loss, divorce, aging off parents plan, disability)',
  'COBRA vs. ACA marketplace (subsidies, special enrollment, network differences)',
  'Managing active COBRA (payments, dependents, cancellation, verification)',
  'Industry news & regulatory updates (COBRA law changes, IRS limits, DOL guidance)',
];

function buildPrompt(topic, categoryHint, recentTitles, model, webSearch) {
  const topicLine = topic && topic.trim()
    ? `Write a comprehensive blog post about: "${topic.trim()}"`
    : `Choose a fresh, relevant topic from the content pillars below. Pick an angle that has NOT already been covered (see recently published titles) and that targets a high-intent search query a consumer would type after losing employer health coverage.`;

  const recentBlock = recentTitles.length > 0
    ? `\n\nRECENTLY PUBLISHED (do not duplicate these topics — choose a different angle):\n${recentTitles.map(t => `- ${t}`).join('\n')}`
    : '';

  const webNote = webSearch
    ? '\n\nYou have live web search enabled. Research current trending keywords, recent COBRA/healthcare news, and seasonal search patterns. Incorporate fresh, accurate data and cite current figures where relevant. Optimize for keywords that consumers are actively searching for right now.'
    : '';

  return `You are an expert SEO content writer and licensed health insurance advisor for CobraInsurance.Health, a platform helping workers between jobs navigate COBRA and find affordable health coverage. HealthLink Insurance Agency LLC, licensed in 22 states since 1999.

${topicLine}${recentBlock}${webNote}

CONTENT PILLARS (rotate through these):
${CONTENT_PILLARS.map((p, i) => `${i + 1}. ${p}`).join('\n')}${categoryHint ? `\n\nPreferred category: ${categoryHint}` : ''}

SEO REQUIREMENTS:
- Target one primary keyword phrase naturally in the title, first 100 words, and at least two H2 headings.
- Include 3-5 related/LSI keywords throughout the body.
- Write a compelling meta description under 160 characters that includes the primary keyword and a benefit.
- The title (H1) should be under 60 characters, benefit-driven, and include the primary keyword.
- Create a clean URL slug (lowercase, hyphen-separated, no stop words).
- Provide 5-8 target keywords for tracking.

WRITING REQUIREMENTS:
- 1,500-2,500 words, comprehensive and genuinely useful.
- Use Markdown formatting: one H1 (the title), multiple H2 and H3 subheadings, bullet lists, and numbered lists where helpful.
- Open with an engaging intro (2-3 short paragraphs) that hooks the reader and states the benefit.
- Include a "Key Takeaways" section near the top (bullet list of 3-5 points).
- Use conversational but authoritative tone — 7th-8th grade reading level.
- Include a FAQ section (3-5 Q&As) near the end with common consumer questions.
- End with a clear call-to-action encouraging readers to compare alternatives or speak with a licensed advisor.
- Where contextually appropriate, include INTERNAL LINKS to these site pages using Markdown link syntax [anchor text](url). Use natural, descriptive anchor text — do not force links:
${INTERNAL_LINKS.map(l => `  - [${l.label}](${l.url})`).join('\n')}
- Never fabricate specific dollar amounts, dates, or legal citations. Use ranges and qualitative language ("typically $400-$700/month", "usually 18 months", "check your state rules").
- Do NOT include any front matter, title tags, or meta tags in the content field — just the Markdown body starting with the H1.

Return ONLY the JSON object specified by the schema. The "content" field must be pure Markdown starting with the H1.`;
}

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Forbidden — admin only' }, { status: 403 });

    const body = await req.json().catch(() => ({}));
    const { topic, model, use_web_search, category_hint } = body;

    const llmModel = model || 'claude_sonnet_4_6';
    const webSearch = !!use_web_search;

    // Fetch recent titles to avoid topic duplication
    const recent = await base44.asServiceRole.entities.BlogPost.list('-created_date', 20);
    const recentTitles = (recent || []).map(p => p.title).filter(Boolean);

    const prompt = buildPrompt(topic, category_hint, recentTitles, llmModel, webSearch);

    const result = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt,
      model: llmModel,
      add_context_from_internet: webSearch,
      response_json_schema: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          slug: { type: 'string' },
          meta_description: { type: 'string' },
          excerpt: { type: 'string' },
          content: { type: 'string' },
          category: { type: 'string' },
          keywords: { type: 'array', items: { type: 'string' } },
          reading_time_minutes: { type: 'number' }
        },
        required: ['title', 'slug', 'meta_description', 'excerpt', 'content', 'category', 'keywords']
      }
    });

    // InvokeLLM may return a parsed object, an object wrapped in "response", or a JSON string
    let data = result;
    if (result && typeof result === 'object' && result.response) {
      data = result.response;
    } else if (typeof result === 'string') {
      try { data = JSON.parse(result); } catch (e) {
        return Response.json({ error: 'LLM returned unparseable response', preview: result.slice(0, 500) }, { status: 500 });
      }
    }
    if (!data || !data.title) {
      return Response.json({ error: 'LLM response missing required fields', got: typeof data, keys: data ? Object.keys(data) : null, preview: JSON.stringify(data).slice(0, 500) }, { status: 500 });
    }

    // Sanitize slug
    let slug = (data.slug || '').toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    if (!slug) slug = 'blog-post';

    // Deduplicate slug
    const existing = await base44.asServiceRole.entities.BlogPost.filter({ slug });
    if (existing.length > 0) {
      slug = `${slug}-${Date.now().toString(36).slice(-4)}`;
    }

    // Clamp category to allowed enum
    const allowedCategories = ['COBRA Basics', 'Costs & Savings', 'Enrollment', 'Alternatives', 'State Rules', 'Life Events', 'Industry News'];
    const category = allowedCategories.includes(data.category) ? data.category : 'COBRA Basics';

    const post = await base44.asServiceRole.entities.BlogPost.create({
      title: data.title,
      slug,
      meta_description: data.meta_description,
      excerpt: data.excerpt,
      content: data.content,
      category,
      keywords: data.keywords || [],
      author: 'HealthLink Insurance Agency',
      status: 'draft',
      model_used: llmModel,
      reading_time_minutes: data.reading_time_minutes || null,
    });

    return Response.json({ success: true, post });
  } catch (error) {
    console.error('generateBlogPost error:', error);
    return Response.json({ error: 'An unexpected error occurred while generating the blog post.' }, { status: 500 });
  }
}