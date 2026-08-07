import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from '@/lib/helmet';
import { base44 } from '@/api/base44Client';
import { Clock, Calendar, ArrowLeft, ChevronRight, Phone } from 'lucide-react';

const site = 'https://cobrainsurance.health';

function markdownComponents() {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-8 mb-3" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold mt-6 mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed mb-4" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>{children}</p>
    ),
    ul: ({ children }) => <ul className="flex flex-col gap-2 mb-4 ml-5 list-disc" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>{children}</ul>,
    ol: ({ children }) => <ol className="flex flex-col gap-2 mb-4 ml-5 list-decimal" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>{children}</ol>,
    li: ({ children }) => <li className="text-base leading-relaxed" style={{ color: '#333333', fontFamily: 'var(--font-sans)' }}>{children}</li>,
    a: ({ href, children }) => {
      const isInternal = href && href.startsWith('/');
      return isInternal ? (
        <Link to={href} className="font-semibold underline transition-colors" style={{ color: '#e01f1f' }}>{children}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: '#e01f1f' }}>{children}</a>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 py-2 mb-4 italic" style={{ borderColor: '#e01f1f', color: '#555555', fontFamily: 'var(--font-sans)' }}>{children}</blockquote>
    ),
    strong: ({ children }) => <strong className="font-bold" style={{ color: '#3c4c63' }}>{children}</strong>,
    hr: () => <hr className="my-6" style={{ borderColor: '#eeeeee' }} />,
    code: ({ children }) => <code className="px-1.5 py-0.5 rounded text-sm" style={{ background: '#f3f4f6', color: '#e01f1f', fontFamily: 'var(--font-mono)' }}>{children}</code>,
  };
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setNotFound(false);
      try {
        const results = await base44.entities.BlogPost.filter({ slug, status: 'published' });
        if (!results || results.length === 0) {
          setNotFound(true);
        } else {
          const p = results[0];
          setPost(p);
          // Load related posts in same category
          if (p.category) {
            const rel = await base44.entities.BlogPost.filter({ status: 'published', category: p.category }, '-published_date', 4);
            setRelated((rel || []).filter(r => r.id !== p.id).slice(0, 3));
          }
        }
      } catch (e) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-3" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
            Article Not Found
          </h1>
          <p className="text-sm mb-6" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
            This article doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="px-6 py-3 rounded font-bold text-sm text-white" style={{ background: '#e01f1f', fontFamily: 'var(--font-sans)' }}>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `${site}/blog/${post.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    headline: post.title,
    description: post.meta_description,
    url: canonicalUrl,
    datePublished: post.published_date || post.created_date,
    dateModified: post.updated_date || post.published_date || post.created_date,
    author: { '@type': 'Organization', name: post.author || 'HealthLink Insurance Agency' },
    publisher: { '@id': `${site}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    keywords: (post.keywords || []).join(', '),
    articleSection: post.category,
  };

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {post.og_image && <meta property="og:image" content={post.og_image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.meta_description} />
        {post.og_image && <meta name="twitter:image" content={post.og_image} />}
        {post.keywords && post.keywords.length > 0 && <meta name="keywords" content={post.keywords.join(', ')} />}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <main>
        {/* Breadcrumb */}
        <section className="w-full py-4" style={{ background: '#efefef', borderBottom: '1px solid #eeeeee' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              <Link to="/" className="hover:underline" style={{ color: '#888888' }}>Home</Link>
              <ChevronRight className="w-3 h-3" style={{ color: '#aaaaaa' }} />
              <Link to="/blog" className="hover:underline" style={{ color: '#888888' }}>Blog</Link>
              <ChevronRight className="w-3 h-3" style={{ color: '#aaaaaa' }} />
              <span className="truncate" style={{ color: '#3c4c63' }}>{post.category}</span>
            </nav>
          </div>
        </section>

        {/* Article header */}
        <section className="w-full py-10 lg:py-14" style={{ background: '#fbfbfb' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {post.category && (
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: '#fef2f2', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                {post.category}
              </span>
            )}
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
            >
              {post.title}
            </h1>
            <p
              className="text-base lg:text-lg leading-relaxed mb-5"
              style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
            >
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              {post.published_date && (
                <span className="flex items-center gap-1.5 text-sm" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                  <Calendar className="w-4 h-4" />
                  {new Date(post.published_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              )}
              {post.reading_time_minutes && (
                <span className="flex items-center gap-1.5 text-sm" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                  <Clock className="w-4 h-4" />
                  {post.reading_time_minutes} min read
                </span>
              )}
              <span className="text-sm" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                By {post.author || 'HealthLink Insurance Agency'}
              </span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="w-full py-12 lg:py-16" style={{ background: '#ffffff' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none">
              <ReactMarkdown components={markdownComponents()}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="w-full py-14" style={{ background: '#e01f1f' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Compare Your Options?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}>
              Our licensed advisors can help you decide whether COBRA or an alternative plan is right for you — free, no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Compare Alternatives →
              </Link>
              <a
                href="tel:8772627241"
                className="flex items-center gap-2 px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Phone className="w-4 h-4" />
                877-262-7241
              </a>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="w-full py-14" style={{ background: '#efefef' }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to={`/blog/${r.slug}`}
                    className="rounded-xl p-5 transition-shadow hover:shadow-md"
                    style={{ background: '#fbfbfb', border: '1px solid #eeeeee' }}
                  >
                    <span className="text-xs font-bold uppercase tracking-wide block mb-2" style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>
                      {r.category}
                    </span>
                    <h3 className="text-sm font-bold leading-snug mb-2" style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}>
                      {r.title}
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
                      {r.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <section className="w-full py-8" style={{ background: '#fbfbfb' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
              style={{ color: '#3c4c63', fontFamily: 'var(--font-sans)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}