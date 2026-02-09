import styles from "./About.module.css";
import Navbar from "./components/Navbar";

export default function About({ noNav = false }) {
  return (
    <>
      {!noNav && <Navbar />}
      <section className={styles.page}>
        <div className={styles.container}>
          {/* OPTIX CONFERENCE */}
          <div className={styles.heroCard}>
            <span className={styles.tag}>Conference</span>
            <h1 className={styles.heroTitle}>Optix</h1>
            <p className={styles.heroText}>
              Optix is the flagship optics and photonics conference organized at
              NIT Calicut, bringing together students, researchers, and industry
              practitioners to discuss emerging work in light-based
              technologies.
            </p>
            <p className={styles.heroSub}>
              Talks, workshops, and technical sessions focused on depth rather
              than spectacle.
            </p>
          </div>

          {/* OPTICA CLUB */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Optica Club · NIT Calicut</h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>What we do</h3>
                <p>
                  Optica Club is a student-led technical community centered on
                  optics, photonics, and applied light sciences. We translate
                  theory into practice through talks, experiments, and
                  collaborative projects.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Focus areas</h3>
                <p>
                  Our interests span lasers, fiber optics, imaging systems,
                  sensors, integrated photonics, and adjacent interdisciplinary
                  fields that rely on optical principles.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Culture</h3>
                <p>
                  The club values clarity over jargon and curiosity over
                  credentials. Participation is open across branches and years,
                  with an emphasis on discussion and shared learning.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTNOTE */}
          <div className={styles.footer}>
            <p>
              Based at the National Institute of Technology Calicut.
              <br />
              Student-run. Academically grounded.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
