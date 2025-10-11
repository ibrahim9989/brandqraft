import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'
import styles from './page.module.css'

// This would typically come from a CMS or markdown files
const blogPosts = {
  'brand-strategy-2024': {
    title: 'The Future of Brand Strategy in 2024',
    excerpt: 'How emerging technologies and changing consumer behaviors are reshaping the way we think about brand strategy and positioning.',
    content: `
      <p>The landscape of brand strategy is evolving rapidly, driven by technological advances and shifting consumer expectations. As we move through 2024, several key trends are reshaping how brands connect with their audiences and build lasting relationships.</p>
      
      <h2>The Rise of AI-Driven Personalization</h2>
      <p>Artificial intelligence is no longer a futuristic concept—it's a present reality that's fundamentally changing how brands understand and engage with their customers. AI-powered personalization allows brands to deliver highly targeted experiences at scale, creating deeper connections with individual consumers.</p>
      
      <h2>Sustainability as a Core Brand Value</h2>
      <p>Today's consumers are increasingly conscious of environmental impact, making sustainability not just a nice-to-have but a fundamental brand requirement. Brands that authentically integrate environmental responsibility into their core values are seeing stronger customer loyalty and market differentiation.</p>
      
      <h2>The Importance of Brand Authenticity</h2>
      <p>In an age of information overload, consumers are seeking genuine connections with brands that share their values. Authenticity has become a key differentiator, with transparent communication and honest storytelling driving brand preference.</p>
      
      <h2>Conclusion</h2>
      <p>As we look ahead, successful brands will be those that can adapt to these changing dynamics while maintaining their core identity. The future belongs to brands that can balance technological innovation with human connection, creating experiences that are both efficient and emotionally resonant.</p>
    `,
    author: 'Alex Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Strategy',
    image: '/api/placeholder/800/400',
    tags: ['Brand Strategy', 'AI', 'Personalization', 'Sustainability']
  },
  'design-systems-guide': {
    title: 'Building Scalable Design Systems',
    excerpt: 'A comprehensive guide to creating design systems that grow with your organization and maintain consistency across all touchpoints.',
    content: `
      <p>Design systems have become essential tools for modern organizations looking to maintain consistency and efficiency across their digital products. A well-crafted design system not only improves the user experience but also accelerates development and reduces maintenance overhead.</p>
      
      <h2>What Makes a Great Design System</h2>
      <p>A successful design system is more than just a collection of components—it's a living ecosystem that evolves with your organization's needs. Key elements include comprehensive component libraries, clear documentation, and robust governance processes.</p>
      
      <h2>Getting Started</h2>
      <p>Building a design system from scratch can seem overwhelming, but starting small and iterating is the key to success. Begin with your most commonly used components and gradually expand your system as your needs grow.</p>
      
      <h2>Maintaining Your System</h2>
      <p>The work doesn't end once your design system is built. Regular maintenance, updates, and community engagement are crucial for keeping your system relevant and useful for your team.</p>
    `,
    author: 'Sarah Martinez',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Design',
    image: '/api/placeholder/800/400',
    tags: ['Design Systems', 'UI/UX', 'Components', 'Documentation']
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <>
        <Navigation />
        <main className={styles.notFound}>
          <div className={styles.container}>
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link href="/blog" className={styles.backLink}>
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.breadcrumb}>
                <Link href="/blog">Blog</Link>
                <span>→</span>
                <span>{post.title}</span>
              </div>
              <div className={styles.articleMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <h1 className={styles.articleTitle}>{post.title}</h1>
              <p className={styles.articleExcerpt}>{post.excerpt}</p>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{post.author}</span>
                  <span className={styles.authorTitle}>Creative Director</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className={styles.imageSection}>
          <div className={styles.container}>
            <div className={styles.articleImage}>
              <div className={styles.imagePlaceholder}></div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <article 
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className={styles.tagsSection}>
                <h3>Tags</h3>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              <div className={styles.relatedCard}>
                <div className={styles.relatedImage}>
                  <div className={styles.imagePlaceholder}></div>
                </div>
                <div className={styles.relatedContent}>
                  <h3 className={styles.relatedTitle}>
                    <Link href="/blog/ux-research-methods">Essential UX Research Methods for Product Teams</Link>
                  </h3>
                  <p className={styles.relatedExcerpt}>
                    Discover the most effective user research methods that help product teams make informed design decisions.
                  </p>
                </div>
              </div>
              <div className={styles.relatedCard}>
                <div className={styles.relatedImage}>
                  <div className={styles.imagePlaceholder}></div>
                </div>
                <div className={styles.relatedContent}>
                  <h3 className={styles.relatedTitle}>
                    <Link href="/blog/sustainable-design">Sustainable Design: Building for the Future</Link>
                  </h3>
                  <p className={styles.relatedExcerpt}>
                    How designers can contribute to environmental sustainability through thoughtful design choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className={styles.newsletterSection}>
          <div className={styles.container}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Enjoyed this article?</h2>
              <p className={styles.newsletterSubtitle}>
                Subscribe to our newsletter for more insights on design, strategy, and branding.
              </p>
              <form className={styles.newsletterForm}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={styles.emailInput}
                    required
                  />
                  <button type="submit" className={styles.subscribeButton}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
