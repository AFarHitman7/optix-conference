import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./Home.module.css";
import background2 from "./assets/background.png";
import fees from "./assets/fees.png";
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
            <div className={styles.date}>April 1 - 2 2026, NIT Calicut</div>
            <h1 className={styles.title}>OPTIX 2026</h1>
            <h1 className={styles.subtitle}>
              Internation Conference on Optics, Lasers & Photonics
            </h1>
            <p className={styles.description}>
              Organised by NIT Calicut Optica student chapter, Department of
              physics, National Institute of Technology Calicut
            </p>
            <div className={styles.buttons}>
              <button
                className={`${styles.registerButton} ${styles.btnShine}`}
                onClick={() => navigate("./register")}
              >
                <span>Register</span>
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
        <div id="fees">
          <div className={styles.feeWrapper}>
            <img src={fees} alt="fee structure" />
          </div>
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
