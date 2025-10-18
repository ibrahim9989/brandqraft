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
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <div className={styles.servicesGrid}>
              {/* Branding */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}></div>
                <h3 className={styles.serviceTitle}>Branding</h3>
                <ul className={styles.serviceFeatures}>
                  <li>Brand naming</li>
                  <li>Logo design</li>
                  <li>Visual identity development</li>
                  <li>Type-Face</li>
                  <li>Color Palette</li>
                  <li>Pattern and Graphical Elements</li>
                  <li>Stationery Design</li>
                  <li>Design Mockups</li>
                  <li>PPT Design Template</li>
                  <li>Brochure/ Profile Design</li>
                </ul>
              </div>

              {/* Digital Marketing Management */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}></div>
                <h3 className={styles.serviceTitle}>Digital Marketing Management</h3>
                <ul className={styles.serviceFeatures}>
                  <li>Marketing Brief</li>
                  <li>Quarterly Marketing Plan</li>
                  <li>Monthly Social Media Content Calendar</li>
                  <li>Creatives</li>
                  <li>Performance Marketing</li>
                  <li>Analytics and Reporting</li>
                </ul>
              </div>

              {/* Website Development */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}></div>
                <h3 className={styles.serviceTitle}>Website Development</h3>
                <ul className={styles.serviceFeatures}>
                  <li>Purchase Domain / Hosting</li>
                  <li>Website UI Design</li>
                  <li>Website Development</li>
                  <li>SEO</li>
                </ul>
              </div>

              {/* Business Scaling */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}></div>
                <h3 className={styles.serviceTitle}>Business Scaling</h3>
                <ul className={styles.serviceFeatures}>
                  <li>Sales funnel optimization and lead generation</li>
                  <li>CRM setup and management</li>
                  <li>Process design and operational efficiency</li>
                  <li>Tech adoption and deployment</li>
                  <li>Business data analytics, reporting and insights</li>
                </ul>
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
