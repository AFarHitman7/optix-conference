import styles from "./Footer.module.css";
import logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
                ABC Block, NIT Calicut Campus, Kerala, India
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <a onClick={() => navigate("/")} className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/about")} className={styles.link}>
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
                  onClick={() => navigate("/abstract")}
                  className={styles.link}
                >
                  Abstract
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
                <a href="mailto:osc@nitc.ac.in" className={styles.link}>
                  osc@nitc.ac.in
                </a>
              </li>
              <li>
                <span className={styles.icon}>📞</span>
                <a href="tel:+916235747806" className={styles.link}>
                  +91 6235747806
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
              <a
                href="https://www.linkedin.com/company/the-optical-society/"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
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
              <a
                href="https://www.instagram.com/opticanitc/"
                className={styles.socialLink}
                aria-label="Instagram"
              >
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
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2026 Optix International Conference - Optica Student Chapter, NIT
            Calicut. All rights reserved.
          </p>
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
