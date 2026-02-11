import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./Home.module.css";
import background2 from "./assets/background.png";
import prev1 from "./assets/prev1.webp";
import prev2 from "./assets/prev2.webp";
import prev3 from "./assets/prev3.webp";
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
            <h1 className={styles.title}>
              Optix International <br></br>Conference 2026
            </h1>
            <p className={styles.description}>
              An international academic conference by the Optica Student
              Chapter, Department of Physics, NIT Calicut, uniting researchers
              and professionals in optics, lasers, and photonics.
            </p>
            <div className={styles.buttons}>
              <button
                className={`${styles.registerButton} ${styles.btnShine}`}
                onClick={() => navigate("./register")}
              >
                <span>Register</span>
              </button>{" "}
              <button className={`${styles.moreButton} ${styles.btnShine}`}>
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
