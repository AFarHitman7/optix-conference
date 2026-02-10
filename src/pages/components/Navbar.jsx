import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "./Navbar.module.css";

const triggerRipple = (e) => {
  const btn = e.currentTarget;
  btn.classList.remove(styles.rippleActive);
  void btn.offsetWidth;
  btn.classList.add(styles.rippleActive);
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => navigate("/")} role="button">
        <img src={logo} alt="Optix Logo" />
      </div>
      {/* Nav links */}
      <div className={styles.navlinks}>
        <ul>
          <li>
            <a
              onClick={() => scrollToSection("home")}
              style={{ cursor: "pointer" }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("about")}
              style={{ cursor: "pointer" }}
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("schedule")}
              style={{ cursor: "pointer" }}
            >
              PROGRAM
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("speakers")}
              style={{ cursor: "pointer" }}
            >
              SPEAKERS
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("contact")}
              style={{ cursor: "pointer" }}
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
      {/* Register button */}
      <button
        onMouseEnter={triggerRipple}
        onClick={() => navigate("/register")}
        className={styles.button}
      >
        <span className={styles.button_lg}>
          <span className={styles.button_sl}></span>
          <span className={styles.button_text}>Register Now</span>
        </span>
      </button>
    </nav>
  );
}
