import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import styles from './page.module.css'

export default function About() {
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
                Where Vision Meets <span className={styles.accent}>Precision</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We're not just another agency. We're strategic partners who understand that great brands are built on deep insights, creative excellence, and unwavering attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <div className={styles.storyContent}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p className={styles.storyText}>
                  BrandQraft was born from a simple belief: that every visionary deserves a brand that matches their ambition. Founded by a team of strategists, designers, and developers who had grown tired of cookie-cutter solutions, we set out to create something different.
                </p>
                <p className={styles.storyText}>
                  Today, we work with forward-thinking leaders who refuse to blend in. From startups disrupting industries to established companies ready for transformation, we craft brands that don't just look good—they drive results.
                </p>
              </div>
              <div className={styles.storyVisual}>
                <div className={styles.visualElement}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Strategic Thinking</h3>
                <p className={styles.valueDescription}>
                  Every decision is backed by research, data, and deep understanding of your market and audience.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Creative Excellence</h3>
                <p className={styles.valueDescription}>
                  We push boundaries while maintaining clarity and purpose in every piece of work we create.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Partnership</h3>
                <p className={styles.valueDescription}>
                  We're not vendors—we're partners invested in your long-term success and growth.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>Innovation</h3>
                <p className={styles.valueDescription}>
                  We stay ahead of trends and technologies to deliver solutions that are both current and timeless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Meet the Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}></div>
                <h3 className={styles.memberName}>Alex Chen</h3>
                <p className={styles.memberRole}>Founder & Creative Director</p>
                <p className={styles.memberBio}>
                  Former Pentagram designer with 12 years of experience building brands for Fortune 500 companies.
                </p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}></div>
                <h3 className={styles.memberName}>Sarah Martinez</h3>
                <p className={styles.memberRole}>Strategy Director</p>
                <p className={styles.memberBio}>
                  McKinsey alum who brings data-driven insights to every brand strategy we develop.
                </p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}></div>
                <h3 className={styles.memberName}>David Kim</h3>
                <p className={styles.memberRole}>Lead Developer</p>
                <p className={styles.memberBio}>
                  Full-stack developer who ensures every digital experience is as beautiful as it is functional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Build Something Extraordinary?</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how we can help bring your vision to life.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className={styles.primaryButton}>
                  Start Your Project
                </a>
                <a href="/work" className={styles.secondaryButton}>
                  View Our Work
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
