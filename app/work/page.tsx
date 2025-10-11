import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'
import styles from './page.module.css'

export default function Work() {
  const projects = [
    {
      id: 'techflow',
      title: 'TechFlow',
      category: 'Technology',
      description: 'Complete brand identity and digital platform for a B2B SaaS startup disrupting the workflow automation space.',
      image: '/api/placeholder/600/400',
      tags: ['Brand Identity', 'Web Design', 'UI/UX'],
      results: ['300% increase in user engagement', '50% faster onboarding', 'Series A funding secured']
    },
    {
      id: 'healthwise',
      title: 'HealthWise',
      category: 'Healthcare',
      description: 'Patient-centered healthcare platform that simplifies complex medical information through intuitive design.',
      image: '/api/placeholder/600/400',
      tags: ['Healthcare Design', 'Mobile App', 'Accessibility'],
      results: ['95% patient satisfaction', '40% reduction in support calls', 'HIPAA compliant']
    },
    {
      id: 'greenvest',
      title: 'GreenVest',
      category: 'Finance',
      description: 'Sustainable investment platform that makes ESG investing accessible to everyday investors.',
      image: '/api/placeholder/600/400',
      tags: ['Financial Services', 'Brand Strategy', 'Web Platform'],
      results: ['$2M in assets under management', '25% month-over-month growth', 'Industry recognition']
    },
    {
      id: 'artisan',
      title: 'Artisan Collective',
      category: 'E-commerce',
      description: 'Curated marketplace connecting independent artisans with conscious consumers worldwide.',
      image: '/api/placeholder/600/400',
      tags: ['E-commerce', 'Brand Identity', 'Social Impact'],
      results: ['500+ artisan partnerships', 'Global shipping network', 'B-Corp certification']
    },
    {
      id: 'edulink',
      title: 'EduLink',
      category: 'Education',
      description: 'Learning management system that bridges the gap between traditional and digital education.',
      image: '/api/placeholder/600/400',
      tags: ['EdTech', 'Platform Design', 'User Research'],
      results: ['10,000+ active students', '85% course completion rate', 'Award-winning UX']
    },
    {
      id: 'hope-foundation',
      title: 'Hope Foundation',
      category: 'Non-Profit',
      description: 'Rebrand and digital transformation for a non-profit focused on youth mental health advocacy.',
      image: '/api/placeholder/600/400',
      tags: ['Non-Profit', 'Brand Strategy', 'Community Impact'],
      results: ['200% increase in donations', 'National awareness campaign', 'Policy influence']
    }
  ]

  const categories = ['All', 'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Non-Profit']

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
                Trusted by <span className={styles.accent}>Visionaries</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Explore our portfolio of transformative brand experiences that drive real business results.
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

        {/* Projects Grid */}
        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <div className={styles.imagePlaceholder}></div>
                    <div className={styles.projectOverlay}>
                      <Link href={`/work/${project.id}`} className={styles.viewProject}>
                        View Case Study
                      </Link>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectCategory}>{project.category}</span>
                      <div className={styles.projectTags}>
                        {project.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectResults}>
                      <h4 className={styles.resultsTitle}>Key Results:</h4>
                      <ul className={styles.resultsList}>
                        {project.results.map((result, index) => (
                          <li key={index} className={styles.resultItem}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialText}>
                    "BrandQraft didn't just design our brand—they transformed our entire business. The strategic thinking behind every decision was evident from day one."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>Sarah Chen</h4>
                      <p className={styles.authorTitle}>CEO, TechFlow</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialText}>
                    "Working with BrandQraft was like having a strategic partner who truly understood our mission. They delivered beyond our expectations."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>Michael Rodriguez</h4>
                      <p className={styles.authorTitle}>Founder, HealthWise</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialText}>
                    "The attention to detail and strategic approach made all the difference. Our brand now truly reflects who we are and where we're going."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>Emma Thompson</h4>
                      <p className={styles.authorTitle}>Director, Hope Foundation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className={styles.awardsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Recognition & Awards</h2>
            <div className={styles.awardsGrid}>
              <div className={styles.award}>
                <div className={styles.awardIcon}>🏆</div>
                <h3 className={styles.awardTitle}>Best Brand Identity</h3>
                <p className={styles.awardOrganization}>Design Excellence Awards 2024</p>
              </div>
              <div className={styles.award}>
                <div className={styles.awardIcon}>⭐</div>
                <h3 className={styles.awardTitle}>Top Creative Agency</h3>
                <p className={styles.awardOrganization}>Creative Review 2024</p>
              </div>
              <div className={styles.award}>
                <div className={styles.awardIcon}>🎯</div>
                <h3 className={styles.awardTitle}>Innovation in Design</h3>
                <p className={styles.awardOrganization}>UX Design Awards 2024</p>
              </div>
              <div className={styles.award}>
                <div className={styles.awardIcon}>💡</div>
                <h3 className={styles.awardTitle}>Strategic Excellence</h3>
                <p className={styles.awardOrganization}>Brand Strategy Awards 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Create Your Success Story?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss your project and explore how we can help you achieve similar results.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Your Project
                </a>
                <a href="/services" className={styles.secondaryButton}>
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
