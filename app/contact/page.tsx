'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import styles from './page.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
              <h1 className={styles.heroTitle}>
                Let's Build What's <span className={styles.accent}>Next</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Ready to transform your brand? We'd love to hear about your project and explore how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              {/* Contact Form */}
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Start Your Project</h2>
                <p className={styles.formSubtitle}>
                  Tell us about your vision and we'll get back to you within 24 hours.
                </p>
                
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Thank you for your message!</h3>
                    <p>We'll get back to you within 24 hours to discuss your project.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    <div className={styles.errorIcon}>⚠</div>
                    <h3>Something went wrong</h3>
                    <p>Please try again or contact us directly at hello@brandqraft.com</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={styles.formInput}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={styles.formInput}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.formLabel}>Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="budget" className={styles.formLabel}>Project Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="project" className={styles.formLabel}>Project Type</label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                    >
                      <option value="">Select project type</option>
                      <option value="brand-identity">Brand Identity & Strategy</option>
                      <option value="digital-product">Digital Product Design</option>
                      <option value="creative-campaign">Creative Campaign</option>
                      <option value="website-design">Website Design</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={styles.formTextarea}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className={styles.infoContainer}>
                <h2 className={styles.infoTitle}>Get in Touch</h2>
                <p className={styles.infoSubtitle}>
                  Prefer to reach out directly? We're here to help.
                </p>

                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.contactDetails}>
                      <h3 className={styles.contactLabel}>Email</h3>
                      <p className={styles.contactValue}>info@brandqraft.co</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09A2 2 0 0 1 9 3.72l1.2 2.8a2 2 0 0 1-.45 2.18L8.09 9.91a16 16 0 0 0 6 6l1.21-1.21a2 2 0 0 1 2.18-.45l2.8 1.2A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className={styles.contactDetails}>
                      <h3 className={styles.contactLabel}>Phone</h3>
                      <p className={styles.contactValue}>+91 40 674 25564 • +91 95360 84444</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div className={styles.contactDetails}>
                      <h3 className={styles.contactLabel}>Address</h3>
                      <p className={styles.contactValue}>Office No:228, 6-3-252/2, Opp Taj Deccan Workafella, Banjara Hills, Hyderabad, India, 500082</p>
                    </div>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <h3 className={styles.socialTitle}>Follow Us</h3>
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C18.2091 8 20 9.79086 20 12V21H16V12C16 11.4696 15.7893 10.9609 15.4142 10.5858C15.0391 10.2107 14.5304 10 14 10C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V21H8V8H12V9.5C12.5 8.5 13.5 8 14.5 8H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61172 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61552 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39524C5.36074 6.60467 4.01032 5.43866 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="Instagram">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5772 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22768 13.4228 8.09405 12.5922C7.96042 11.7616 8.09208 10.9099 8.47034 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87662 12.63 8C13.4789 8.12591 14.2648 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What's your typical project timeline?</h3>
                <p className={styles.faqAnswer}>
                  Most projects range from 6-12 weeks depending on scope. Brand identity projects typically take 8-10 weeks, while digital products can take 10-16 weeks.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you work with startups?</h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We work with companies of all sizes, from early-stage startups to established enterprises. We offer flexible engagement models to fit different budgets.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What's included in your process?</h3>
                <p className={styles.faqAnswer}>
                  Our process includes discovery, strategy, design, and implementation phases. We provide detailed project plans, regular check-ins, and comprehensive deliverables.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you provide ongoing support?</h3>
                <p className={styles.faqAnswer}>
                  Yes! We offer retainer relationships for ongoing brand management, design updates, and strategic guidance to help you maintain brand consistency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
