import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'
import styles from './page.module.css'

export default function Blog() {
  const blogPosts = [
    {
      id: 'brand-strategy-2024',
      title: 'The Future of Brand Strategy in 2024',
      excerpt: 'How emerging technologies and changing consumer behaviors are reshaping the way we think about brand strategy and positioning.',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Strategy',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'design-systems-guide',
      title: 'Building Scalable Design Systems',
      excerpt: 'A comprehensive guide to creating design systems that grow with your organization and maintain consistency across all touchpoints.',
      author: 'Sarah Martinez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Design',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'ux-research-methods',
      title: 'Essential UX Research Methods for Product Teams',
      excerpt: 'Discover the most effective user research methods that help product teams make informed design decisions and create better user experiences.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'UX Research',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'sustainable-design',
      title: 'Sustainable Design: Building for the Future',
      excerpt: 'How designers can contribute to environmental sustainability through thoughtful design choices and sustainable practices.',
      author: 'Emma Thompson',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Sustainability',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'brand-psychology',
      title: 'The Psychology of Color in Branding',
      excerpt: 'Understanding how color choices influence consumer perception and behavior, and how to use this knowledge in your brand strategy.',
      author: 'Alex Chen',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Psychology',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'remote-design-collaboration',
      title: 'Mastering Remote Design Collaboration',
      excerpt: 'Best practices and tools for maintaining creative collaboration and team cohesion in distributed design teams.',
      author: 'Sarah Martinez',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Collaboration',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ]

  const categories = ['All', 'Strategy', 'Design', 'UX Research', 'Sustainability', 'Psychology', 'Collaboration']

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Insights & <span className={styles.accent}>Inspiration</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Explore our thoughts on design, strategy, and the future of branding. Stay ahead of trends and discover new perspectives.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.filterTabs}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterTab} ${category === 'All' ? styles.active : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className={styles.featuredSection}>
            <div className={styles.container}>
              <div className={styles.featuredLabel}>Featured Article</div>
              <div className={styles.featuredPost}>
                <div className={styles.featuredImage}>
                  <div className={styles.imagePlaceholder}></div>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postCategory}>{featuredPost.category}</span>
                    <span className={styles.postDate}>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h2 className={styles.featuredTitle}>
                    <Link href={`/blog/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                  <div className={styles.featuredFooter}>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorAvatar}></div>
                      <div className={styles.authorDetails}>
                        <span className={styles.authorName}>{featuredPost.author}</span>
                        <span className={styles.readTime}>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`} className={styles.readMore}>
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className={styles.postsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Latest Articles</h2>
            <div className={styles.postsGrid}>
              {regularPosts.map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <div className={styles.postImage}>
                    <div className={styles.imagePlaceholder}></div>
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <span className={styles.postCategory}>{post.category}</span>
                      <span className={styles.postDate}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <h3 className={styles.postTitle}>
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <div className={styles.postFooter}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorAvatar}></div>
                        <div className={styles.authorDetails}>
                          <span className={styles.authorName}>{post.author}</span>
                          <span className={styles.readTime}>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <div className={styles.container}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Stay Updated</h2>
              <p className={styles.newsletterSubtitle}>
                Get our latest insights delivered straight to your inbox. No spam, just valuable content.
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
                <p className={styles.newsletterDisclaimer}>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className={styles.topicsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Explore Topics</h2>
            <div className={styles.topicsGrid}>
              <div className={styles.topicCard}>
                <div className={styles.topicIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.topicTitle}>Brand Strategy</h3>
                <p className={styles.topicDescription}>
                  Strategic thinking and positioning for modern brands
                </p>
                <span className={styles.topicCount}>12 articles</span>
              </div>
              <div className={styles.topicCard}>
                <div className={styles.topicIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.topicTitle}>Design Systems</h3>
                <p className={styles.topicDescription}>
                  Building scalable and maintainable design systems
                </p>
                <span className={styles.topicCount}>8 articles</span>
              </div>
              <div className={styles.topicCard}>
                <div className={styles.topicIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.topicTitle}>UX Research</h3>
                <p className={styles.topicDescription}>
                  User-centered design and research methodologies
                </p>
                <span className={styles.topicCount}>15 articles</span>
              </div>
              <div className={styles.topicCard}>
                <div className={styles.topicIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.topicTitle}>Innovation</h3>
                <p className={styles.topicDescription}>
                  Emerging trends and future-forward thinking
                </p>
                <span className={styles.topicCount}>6 articles</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
