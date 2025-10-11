import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'
import styles from './page.module.css'

// This would typically come from a CMS or database
const caseStudies = {
  'techflow': {
    title: 'TechFlow',
    category: 'Technology',
    description: 'Complete brand identity and digital platform for a B2B SaaS startup disrupting the workflow automation space.',
    challenge: 'TechFlow needed to establish a strong brand presence in the competitive B2B SaaS market while clearly communicating their complex workflow automation technology to potential customers.',
    solution: 'We developed a comprehensive brand strategy that positioned TechFlow as the intelligent automation partner for modern businesses, with a clean, tech-forward visual identity that made complex concepts accessible.',
    results: [
      '300% increase in user engagement',
      '50% faster onboarding process',
      'Series A funding secured ($15M)',
      '95% customer satisfaction score'
    ],
    timeline: '8 weeks',
    team: ['Alex Chen - Creative Director', 'Sarah Martinez - Strategy Director', 'David Kim - Lead Developer'],
    technologies: ['React', 'TypeScript', 'Figma', 'After Effects'],
    images: [
      { src: '/api/placeholder/800/600', alt: 'TechFlow Brand Identity' },
      { src: '/api/placeholder/800/600', alt: 'Website Design' },
      { src: '/api/placeholder/800/600', alt: 'Mobile App Interface' }
    ]
  },
  'healthwise': {
    title: 'HealthWise',
    category: 'Healthcare',
    description: 'Patient-centered healthcare platform that simplifies complex medical information through intuitive design.',
    challenge: 'HealthWise needed to create a healthcare platform that could handle complex medical data while remaining accessible and trustworthy for patients of all technical backgrounds.',
    solution: 'We designed a human-centered interface that prioritizes clarity and empathy, using progressive disclosure to make complex medical information digestible without overwhelming users.',
    results: [
      '95% patient satisfaction rate',
      '40% reduction in support calls',
      'HIPAA compliant implementation',
      '50% increase in patient engagement'
    ],
    timeline: '12 weeks',
    team: ['Sarah Martinez - UX Director', 'Emma Thompson - Healthcare Specialist', 'David Kim - Lead Developer'],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Figma'],
    images: [
      { src: '/api/placeholder/800/600', alt: 'HealthWise Dashboard' },
      { src: '/api/placeholder/800/600', alt: 'Patient Interface' },
      { src: '/api/placeholder/800/600', alt: 'Mobile App Design' }
    ]
  },
  'greenvest': {
    title: 'GreenVest',
    category: 'Finance',
    description: 'Sustainable investment platform that makes ESG investing accessible to everyday investors.',
    challenge: 'GreenVest needed to build trust in the emerging ESG investment space while making sustainable investing approachable for retail investors who were new to the concept.',
    solution: 'We created a sophisticated yet approachable brand that balanced financial credibility with environmental consciousness, using clear visual hierarchy and educational content to guide users through their investment journey.',
    results: [
      '$2M in assets under management',
      '25% month-over-month growth',
      'Industry recognition and awards',
      '4.8/5 app store rating'
    ],
    timeline: '10 weeks',
    team: ['Alex Chen - Creative Director', 'Sarah Martinez - Strategy Director', 'David Kim - Lead Developer'],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Figma'],
    images: [
      { src: '/api/placeholder/800/600', alt: 'GreenVest Brand Identity' },
      { src: '/api/placeholder/800/600', alt: 'Investment Dashboard' },
      { src: '/api/placeholder/800/600', alt: 'Mobile App Interface' }
    ]
  }
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return (
      <>
        <Navigation />
        <main className={styles.notFound}>
          <div className={styles.container}>
            <h1>Case Study Not Found</h1>
            <p>The case study you're looking for doesn't exist.</p>
            <Link href="/work" className={styles.backLink}>
              ← Back to Work
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
                <Link href="/work">Work</Link>
                <span>→</span>
                <span>{caseStudy.title}</span>
              </div>
              <div className={styles.heroMeta}>
                <span className={styles.category}>{caseStudy.category}</span>
                <span className={styles.timeline}>{caseStudy.timeline}</span>
              </div>
              <h1 className={styles.heroTitle}>{caseStudy.title}</h1>
              <p className={styles.heroDescription}>{caseStudy.description}</p>
            </div>
          </div>
        </section>

        {/* Project Images */}
        <section className={styles.imagesSection}>
          <div className={styles.container}>
            <div className={styles.imagesGrid}>
              {caseStudy.images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <div className={styles.imagePlaceholder}></div>
                  <p className={styles.imageCaption}>{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className={styles.challengeSection}>
          <div className={styles.container}>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeContent}>
                <h2 className={styles.sectionTitle}>The Challenge</h2>
                <p className={styles.challengeText}>{caseStudy.challenge}</p>
              </div>
              <div className={styles.solutionContent}>
                <h2 className={styles.sectionTitle}>Our Solution</h2>
                <p className={styles.solutionText}>{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className={styles.resultsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Results</h2>
            <div className={styles.resultsGrid}>
              {caseStudy.results.map((result, index) => (
                <div key={index} className={styles.resultCard}>
                  <div className={styles.resultNumber}>{index + 1}</div>
                  <p className={styles.resultText}>{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className={styles.detailsSection}>
          <div className={styles.container}>
            <div className={styles.detailsGrid}>
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Timeline</h3>
                <p className={styles.detailValue}>{caseStudy.timeline}</p>
              </div>
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Team</h3>
                <ul className={styles.detailList}>
                  {caseStudy.team.map((member, index) => (
                    <li key={index} className={styles.detailItem}>{member}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Technologies</h3>
                <div className={styles.techTags}>
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
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
                <Link href="/contact" className={styles.primaryButton}>
                  Start Your Project
                </Link>
                <Link href="/work" className={styles.secondaryButton}>
                  View More Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
