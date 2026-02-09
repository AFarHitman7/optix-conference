import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./Home.module.css";
import background2 from "./assets/background2.svg";
import prev1 from "./assets/prev1.webp";
import prev2 from "./assets/prev2.webp";
import prev3 from "./assets/prev3.webp";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className={styles.heroSection}>
        <div className={styles.background}>
          <img src={background2} alt="Background" />
        </div>
        <div className={styles.leftColumn}>
          <div className={styles.date}>April 1 - 2 2026, NIT Calicut</div>
          <h1 className={styles.title}>Optix International Conference 2026</h1>
          <p className={styles.description}>
            An international academic conference by the Optica Student Chapter,
            Department of Physics, NIT Calicut, uniting researchers and
            professionals in optics, lasers, and photonics.
          </p>
          <div className={styles.buttons}>
            <button
              className={`${styles.registerButton} ${styles.btnShine}`}
              onClick={() => navigate("./register")}
            >
              <span>Register</span>
            </button>{" "}
            <button className={`${styles.moreButton}  ${styles.btnShine}`}>
              <span>Learn more</span>
            </button>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.imageStack}>
            <img src={prev1} loading="lazy" alt="group of people" />
            <img src={prev2} loading="lazy" alt="previous event image" />
            <img src={prev3} loading="lazy" alt="previous workshop" />
          </div>
          <p>
            An international academic conference on optics, lasers, and
            photonics.
          </p>
        </div>
      </div>
      <About noNav={true} />
      <Contact noNav={true} />
    </div>
  );
}
