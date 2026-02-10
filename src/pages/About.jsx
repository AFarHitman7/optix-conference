import styles from "./About.module.css";
import CountdownBox from "./components/CountdownBox";
import image1 from "./assets/about/about.png";

export default function About() {
  return (
    <>
      <section className={styles.page}>
        <div className={styles.container}>
          {/* OPTIX CONFERENCE */}
          <CountdownBox />
          <div className={styles.section}>
            <div className={styles.section}>
              <div className={styles.media}>
                <img src={image1} alt="OPTIX Conference" />
              </div>

              <div className={styles.content}>
                <span className={styles.date}>About OPTIX 2026</span>

                <h1 className={styles.heading}>
                  International Conference On
                  <br />
                  <span> Optics, Lasers & Photonics</span>
                </h1>

                <p className={styles.description}>
                  OPTIX 2026 is an international academic conference organized
                  by the Optica Student Chapter, Department of Physics, National
                  Institute of Technology Calicut. The conference brings
                  together students, researchers, academicians, and industry
                  professionals to discuss recent advancements and emerging
                  trends in optics, lasers, and photonics. The event aims to
                  foster knowledge exchange, encourage interdisciplinary
                  collaboration, and promote research dissemination through
                  keynote lectures, invited talks, and technical sessions.
                </p>

                <button className={styles.registerButton}>
                  <span>Register As Attendee →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
