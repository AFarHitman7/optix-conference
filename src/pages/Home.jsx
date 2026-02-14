import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import styles from "./Home.module.css";
import background2 from "./assets/background.png";
import optixLogo from "./assets/optix.svg";
import nitcLogo from "./assets/nitc.png";
import About from "./About";
import Speakers from "./Speakers";
import Contact from "./Contact";
import TechnicalProgramme from "./TechnicalProgramme";
import Footer from "./components/Footer";
import Sponsors from "./Sponsor";
import Gallery from "./Gallery";

export default function Home() {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div id="home" className={styles.heroSection}>
          <div className={styles.background}>
            <img src={background2} alt="Background" />
          </div>
          <div className={styles.mainColumn}>
            <div className={styles.logoRow}>
              <img
                src={optixLogo}
                alt="Optix logo"
                className={`${styles.topLogo} ${styles.optixLogo}`}
              />
              <img src={nitcLogo} alt="NIT Calicut logo" className={styles.topLogo} />
            </div>
            <div className={styles.date}>April 1 - 2 2026, NIT Calicut</div>
            <h1 className={styles.title}>OPTIX 2026</h1>
            <h1 className={styles.subtitle}>
              International Conference on Optics, Lasers & Photonics
            </h1>
            <p className={styles.description}>
              Organised by NIT Calicut Optica Student Chapter, <br />
              National Institute of Technology Calicut
            </p>
            <p className={styles.venue}>
              Venue: ABC Complex, National Institute of Technology Calicut
            </p>
            <div className={styles.buttons}>
              <button
                className={`${styles.registerButton} ${styles.btnShine}`}
                onClick={() => navigate("./abstract")}
              >
                <span>Call for Abstracts</span>
              </button>{" "}
              <button
                className={`${styles.moreButton} ${styles.btnShine}`}
                onClick={() => navigate("./about")}
              >
                <span>Learn more</span>
              </button>
            </div>
          </div>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="speakers">
          <Speakers />
        </div>
        <div id="technical">
          <TechnicalProgramme />
        </div>

        <div id="sponsor">
          <Sponsors />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
