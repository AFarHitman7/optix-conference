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
                The NIT Calicut Optica Student Chapter has continuously been
                active in advancing education and awareness in these fields
                through a series of events. OPTIX-2026 is the chapter&apos;s
                first international conference, a major milestone built upon
                this solid foundation of the successful initiatives. The
                chapter&apos;s dedication to promoting excellent scientific
                exchange and providing a forum for communication among academia
                and business, is reflected in the conference. By organising
                OPTIX-2026, the chapter hopes to transform its academic
                involvement from regional endeavours into a worldwide research
                forum in optics, lasers and photonics. By introducing them to
                innovative research fields and distinguished professionals, the
                event also aims to inspire young researchers. All things
                considered, OPTIX-2026 is a calculated move to improve the
                culture of optics and photonics research at NIT Calicut and
                elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
