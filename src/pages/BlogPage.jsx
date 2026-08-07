import { useState, useEffect } from 'react';
import { Helmet } from '@/lib/helmet';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const site = 'https://cobrainsurance.health';
const canonicalUrl = `${site}/blog`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${canonicalUrl}#blog`,
  name: 'CobraInsurance.Health Blog',
  url: canonicalUrl,
  description: 'Expert guides on COBRA insurance, costs, enrollment, and affordable alternatives for workers between jobs.',
  publisher: { '@id': `${site}/#organization` },
};

const CATEGORIES = ['All', 'COBRA Basics', 'Costs & Savings', 'Enrollment', 'Alternatives', 'State Rules', 'Life Events', 'Industry News'];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const data = await base44.entities.BlogPost.filter({ status: 'published' }, '-published_date', 100);
        setPosts(data || []);
      } catch (e) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = posts.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = !searchTerm ||
      p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>COBRA Insurance Blog — Guides, Cost Tips & Coverage Alternatives</title>
        <meta
          name="description"
          content="Expert COBRA insurance blog — enrollment guides, cost-saving tips, state rules, and alternatives to COBRA. Free advice from licensed advisors at CobraInsurance.Health."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="COBRA Insurance Blog — CobraInsurance.Health" />
        <meta property="og:description" content="Expert guides on COBRA costs, enrollment, and affordable alternatives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="w-full py-14 lg:py-20" style={{ background: '#3c4c63' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-5"
              style={{ background: '#e01f1f' }}
            >
              COBRA Insurance Blog
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Guides, Tips & Coverage Insights
            </h1>
            <p
              className="text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: '#c8d4e0', fontFamily: 'var(--font-sans)' }}
            >
              Expert advice on COBRA costs, enrollment deadlines, state rules, and affordable
              alternatives — written by licensed insurance advisors.
            </p>
          </div>
        </section>

        {/* Search + Category filter */}
        <section className="w-full py-8" style={{ background: '#efefef' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-5">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#888888' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg outline-none"
                style={{ border: '1px solid #d1d5db', fontFamily: 'var(--font-sans)', color: '#1f2937', background: '#ffffff' }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-colors"
                  style={{
                    background: activeCategory === cat ? '#e01f1f' : '#fbfbfb',
                    color: activeCategory === cat ? '#ffffff' : '#3c4c63',
                    border: activeCategory === cat ? '1px solid #e01f1f' : '1px solid #eeeeee',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="w-full py-14 lg:py-16" style={{ background: '#fbfbfb' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-sm" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
                  No articles found. Check back soon — we publish new content twice weekly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group rounded-2xl overflow-hidden transition-shadow hover:shadow-lg flex flex-col"
                    style={{ background: '#ffffff', border: '1px solid #eeeeee' }}
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {post.category && (
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-bold"
                            style={{ background: '#fef2f2', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
                          >
                            {post.category}
                          </span>
                        )}
                        {post.reading_time_minutes && (
                          <span className="flex items-center gap-1 text-xs" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                            <Clock className="w-3 h-3" />
                            {post.reading_time_minutes} min
                          </span>
                        )}
                      </div>
                      <h2
                        className="text-lg font-bold mb-2 leading-snug group-hover:text-red-600 transition-colors"
                        style={{ color: '#3c4c63', fontFamily: 'var(--font-heading)' }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-sm leading-relaxed mb-4 flex-1"
                        style={{ color: '#555555', fontFamily: 'var(--font-sans)' }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#f3f3f3' }}>
                        {post.published_date && (
                          <span className="flex items-center gap-1.5 text-xs" style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}>
                            <Calendar className="w-3 h-3" />
                            {new Date(post.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-xs font-bold" style={{ color: '#e01f1f', fontFamily: 'var(--font-sans)' }}>
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Band */}
        <section className="w-full py-14" style={{ background: '#e01f1f' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Have Questions About Your Coverage?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}>
              Our licensed advisors can help you compare COBRA against affordable alternatives — at no cost to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/alternatives"
                className="px-6 py-3 rounded font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: '#ffffff', color: '#e01f1f', fontFamily: 'var(--font-sans)' }}
              >
                Compare Alternatives →
              </Link>
              <Link
                to="/get-help"
                className="px-6 py-3 rounded font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-red-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Speak with an Advisor →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}