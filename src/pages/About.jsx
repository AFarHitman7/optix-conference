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
                The National Institute of Technology Calicut (NITC), recognised
                as an Institution of National Importance and fully funded by the
                Government of India, boasts a remarkable 63-year legacy of
                excellence. As one of the leading technical education
                institutions in the country, NITC is the largest among the NITs,
                hosting approximately 8,000 students and 420 faculty members.
                Committed to attaining international acclaim of the highest
                calibre, NITC offers 11 undergraduate and 30 postgraduate
                programs across 15 departments, along with several
                inter-disciplinary and multidisciplinary centres. Additionally,
                full-time and part-time doctoral research programs are available
                in all departments.
              </p>

              <button className={styles.registerButton}>
                <span>Register As Attendee →</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
