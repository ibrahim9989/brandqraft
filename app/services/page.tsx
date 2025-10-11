import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import styles from './page.module.css'

export default function Services() {
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
                End-to-End <span className={styles.accent}>Brand Evolution</span>
              </h1>
              <p className={styles.heroSubtitle}>
                From initial strategy to final execution, we provide comprehensive solutions that transform your brand into a powerful business asset.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.servicesOverview}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <p className={styles.overviewText}>
                  We don't just create beautiful designs—we build strategic foundations that drive business growth. Our integrated approach ensures every touchpoint reinforces your brand's value proposition.
                </p>
                <div className={styles.statsGrid}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>150+</div>
                    <div className={styles.statLabel}>Projects Delivered</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>98%</div>
                    <div className={styles.statLabel}>Client Satisfaction</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>5</div>
                    <div className={styles.statLabel}>Years Experience</div>
                  </div>
                </div>
              </div>
              <div className={styles.overviewVisual}>
                <div className={styles.serviceFlow}>
                  <div className={styles.flowStep}>
                    <div className={styles.stepIcon}>1</div>
                    <div className={styles.stepLabel}>Strategy</div>
                  </div>
                  <div className={styles.flowArrow}>→</div>
                  <div className={styles.flowStep}>
                    <div className={styles.stepIcon}>2</div>
                    <div className={styles.stepLabel}>Design</div>
                  </div>
                  <div className={styles.flowArrow}>→</div>
                  <div className={styles.flowStep}>
                    <div className={styles.stepIcon}>3</div>
                    <div className={styles.stepLabel}>Develop</div>
                  </div>
                  <div className={styles.flowArrow}>→</div>
                  <div className={styles.flowStep}>
                    <div className={styles.stepIcon}>4</div>
                    <div className={styles.stepLabel}>Launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className={styles.detailedServices}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <div className={styles.servicesGrid}>
              {/* Brand Identity & Strategy */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Brand Identity & Strategy</h3>
                <p className={styles.serviceDescription}>
                  Comprehensive brand strategy that defines your unique position in the market and creates a cohesive visual identity system.
                </p>
                <ul className={styles.serviceFeatures}>
                  <li>Brand Strategy & Positioning</li>
                  <li>Visual Identity Design</li>
                  <li>Brand Guidelines</li>
                  <li>Logo & Mark Development</li>
                  <li>Brand Architecture</li>
                </ul>
                <div className={styles.servicePrice}>Starting at $15,000</div>
              </div>

              {/* Digital Product Design */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Digital Product Design</h3>
                <p className={styles.serviceDescription}>
                  User-centered design solutions that create intuitive, engaging digital experiences across all platforms and devices.
                </p>
                <ul className={styles.serviceFeatures}>
                  <li>UX/UI Design</li>
                  <li>Web Application Design</li>
                  <li>Mobile App Design</li>
                  <li>Design Systems</li>
                  <li>Prototyping & Testing</li>
                </ul>
                <div className={styles.servicePrice}>Starting at $25,000</div>
              </div>

              {/* Creative Campaigns */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Creative Campaigns</h3>
                <p className={styles.serviceDescription}>
                  Strategic marketing campaigns that capture attention, build brand awareness, and drive meaningful engagement with your audience.
                </p>
                <ul className={styles.serviceFeatures}>
                  <li>Campaign Strategy</li>
                  <li>Creative Direction</li>
                  <li>Content Creation</li>
                  <li>Social Media Design</li>
                  <li>Print & Digital Assets</li>
                </ul>
                <div className={styles.servicePrice}>Starting at $10,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <h3 className={styles.stepTitle}>Discover</h3>
                <p className={styles.stepDescription}>
                  We dive deep into your business, market, and audience to understand the foundation of your brand.
                </p>
                <div className={styles.stepDuration}>1-2 weeks</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <h3 className={styles.stepTitle}>Define</h3>
                <p className={styles.stepDescription}>
                  We develop a clear strategy and positioning that differentiates you in the market.
                </p>
                <div className={styles.stepDuration}>2-3 weeks</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <h3 className={styles.stepTitle}>Design</h3>
                <p className={styles.stepDescription}>
                  We create compelling visual solutions that bring your strategy to life across all touchpoints.
                </p>
                <div className={styles.stepDuration}>3-4 weeks</div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <h3 className={styles.stepTitle}>Deliver</h3>
                <p className={styles.stepDescription}>
                  We implement and launch your brand with precision, ensuring every detail is perfect.
                </p>
                <div className={styles.stepDuration}>1-2 weeks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
            <div className={styles.industriesGrid}>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}>Technology</h3>
                <p className={styles.industryDescription}>
                  From startups to enterprise, we help tech companies communicate complex ideas simply.
                </p>
              </div>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}>Healthcare</h3>
                <p className={styles.industryDescription}>
                  Building trust and clarity in healthcare through thoughtful design and strategic communication.
                </p>
              </div>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}>Finance</h3>
                <p className={styles.industryDescription}>
                  Creating sophisticated brands that convey stability and innovation in financial services.
                </p>
              </div>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}>E-commerce</h3>
                <p className={styles.industryDescription}>
                  Driving conversions and building loyalty through strategic brand and user experience design.
                </p>
              </div>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}>Education</h3>
                <p className={styles.industryDescription}>
                  Helping educational institutions connect with students and stakeholders through compelling design.
                </p>
              </div>
              <div className={styles.industryCard}>
                <h3 className={styles.industryTitle}>Non-Profit</h3>
                <p className={styles.industryDescription}>
                  Amplifying impact and driving engagement for organizations making a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Transform Your Brand?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss your project and explore how we can help you achieve your goals.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Your Project
                </a>
                <a href="/work" className={styles.secondaryButton}>
                  View Case Studies
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
