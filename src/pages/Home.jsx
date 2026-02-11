import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./Home.module.css";
import background2 from "./assets/background.png";
import About from "./About";
import Speakers from "./Speakers";
import Contact from "./Contact";
import EventSchedule from "./EventSchedule";
import Footer from "./components/Footer";
import Sponsors from "./Sponsor";
import Gallery from "./Gallery";

export default function Home() {
  const navigate = useNavigate();
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
              physics, NIT Calicut
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
        <div id="schedule">
          <EventSchedule />
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
