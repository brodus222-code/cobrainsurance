const SITE = 'https://cobrainsurance.health';

const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/knowledge-base', priority: '0.9', changefreq: 'monthly' },
  { path: '/alternatives', priority: '0.9', changefreq: 'monthly' },
  { path: '/start-cobra', priority: '0.8', changefreq: 'monthly' },
  { path: '/manage-cobra', priority: '0.8', changefreq: 'monthly' },
  { path: '/calculator', priority: '0.8', changefreq: 'monthly' },
  { path: '/quiz', priority: '0.7', changefreq: 'monthly' },
  { path: '/the-cobra-trap', priority: '0.8', changefreq: 'monthly' },
  { path: '/cobra-eligibility', priority: '0.8', changefreq: 'monthly' },
  { path: '/cobra-vs-aca', priority: '0.8', changefreq: 'monthly' },
  { path: '/cobra-costs', priority: '0.8', changefreq: 'monthly' },
  { path: '/state-laws', priority: '0.7', changefreq: 'monthly' },
  { path: '/unemployment', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/get-help', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'daily' },
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export default async function(req: Request): Promise<Response> {
  try {
    const { createClientFromRequest } = await import('npm:@base44/sdk@0.8.40');
    const base44 = createClientFromRequest(req);

    // Fetch all published blog posts
    const posts = await base44.asServiceRole.entities.BlogPost.filter({ status: 'published' }, '-published_date', 500);

    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Static pages
    for (const page of STATIC_PAGES) {
      xml += buildUrlEntry(`${SITE}${page.path}`, today, page.changefreq, page.priority);
    }

    // Dynamic blog posts
    for (const post of posts) {
      const lastmod = post.published_date
        ? new Date(post.published_date).toISOString().split('T')[0]
        : today;
      xml += buildUrlEntry(`${SITE}/blog/${escapeXml(post.slug)}`, lastmod, 'weekly', '0.6');
    }

    xml += '</urlset>\n';

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('sitemap error:', error);
    return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
      status: 500,
    });
  }
}