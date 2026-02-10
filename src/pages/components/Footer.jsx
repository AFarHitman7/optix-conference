import styles from "./Footer.module.css";
import logo from "../assets/logo.svg";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.lightBeam}></div>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <div className={styles.logoSection}>
              <img src={logo} alt="Optix Logo" className={styles.logo} />
              <h3 className={styles.brandName}>
                Optix International Conference 2026
              </h3>
            </div>
            <p className={styles.description}>
              Join us for an immersive exploration of cutting-edge research in
              optics, lasers, and photonics. Connect with leading experts and
              discover the future of light-based technologies.
            </p>
            <div className={styles.conferenceInfo}>
              <p className={styles.infoItem}>
                <span className={styles.icon}>📅</span>
                April 1-2, 2026
              </p>
              <p className={styles.infoItem}>
                <span className={styles.icon}>📍</span>
                NIT Calicut, Kerala, India
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  onClick={() => scrollToSection("home")}
                  className={styles.link}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("about")}
                  className={styles.link}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("speakers")}
                  className={styles.link}
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("schedule")}
                  className={styles.link}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("contact")}
                  className={styles.link}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.icon}>📧</span>
                <a href="mailto:optica@nitc.ac.in" className={styles.link}>
                  optica@nitc.ac.in
                </a>
              </li>
              <li>
                <span className={styles.icon}>📞</span>
                <a href="tel:+914952286831" className={styles.link}>
                  +91 495 228 6831
                </a>
              </li>
              <li>
                <span className={styles.icon}>🏛️</span>
                <span className={styles.text}>
                  Department of Physics
                  <br />
                  National Institute of Technology Calicut
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    fill="#0a0a15"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="#0a0a15" />
                </svg>
              </a>
            </div>
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Newsletter</h4>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2026 Optix International Conference - Optica Student Chapter, NIT
            Calicut. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#privacy" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <span className={styles.separator}>•</span>
            <a href="#terms" className={styles.bottomLink}>
              Terms of Service
            </a>
            <span className={styles.separator}>•</span>
            <a href="#cookies" className={styles.bottomLink}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Decorative light refraction elements */}
      <div className={styles.prismLight1}></div>
      <div className={styles.prismLight2}></div>
      <div className={styles.prismLight3}></div>
    </footer>
  );
};

export default Footer;
