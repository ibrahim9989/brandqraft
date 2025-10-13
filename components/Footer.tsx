import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1400&auto=format&fit=crop"
            alt="Subtle texture"
            style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 24, opacity: 0.06 }}
          />
        </div>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>BrandQraft</div>
            <p className={styles.footerTagline}>Crafting brands that build businesses.</p>
          </div>
          <div className={styles.footerLinks}>
            <h4 className={styles.footerSectionTitle}>Quick Links</h4>
            <ul className={styles.footerNav}>
              <li><Link href="#about" data-cursor-hover>About</Link></li>
              <li><Link href="#expertise" data-cursor-hover>Services</Link></li>
              <li><Link href="#work" data-cursor-hover>Work</Link></li>
              <li><Link href="#contact" data-cursor-hover>Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h4 className={styles.footerSectionTitle}>Get in Touch</h4>
            <p className={styles.footerEmail}>hello@brandqraft.com</p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink} data-cursor-hover>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink} data-cursor-hover>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                </svg>
              </a>
              <a href="#" aria-label="Behance" className={styles.socialLink} data-cursor-hover>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22,7H15.5V5.5H22V7M17.5,15.53C17.5,16.37 18.15,17.11 19.04,17.11C19.71,17.11 20.26,16.76 20.5,16.12H21.96C21.54,17.66 20.35,18.58 19.04,18.58C17.36,18.58 16,17.3 16,15.54C16,13.8 17.36,12.5 19.04,12.5C20.77,12.5 22,13.81 22,15.54V16H17.5V15.53M19.04,13.93C18.33,13.93 17.75,14.43 17.62,15.07H20.5C20.42,14.43 19.82,13.93 19.04,13.93M13,13.91C13,15.5 11.72,16.77 10.13,16.77H5.5V7.23H10.13C11.66,7.23 12.92,8.38 12.92,9.91C12.92,10.87 12.41,11.72 11.64,12.17C12.6,12.62 13,13.5 13,13.91M7.15,11.64H10.13C10.85,11.64 11.44,11.05 11.44,10.33C11.44,9.6 10.85,9 10.13,9H7.15V11.64M10.13,15.14C10.91,15.14 11.53,14.53 11.53,13.75C11.53,13 10.91,12.36 10.13,12.36H7.15V15.14H10.13Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; 2025 BrandQraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


