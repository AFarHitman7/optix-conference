import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.heroOverlay} />
            <h1 className={styles.heroTitle}>Contacts</h1>
          </div>

          <div className={styles.grid}>
            {/* CONTACT DETAILS */}
            <div className={styles.card}>
              <h2>Reach us</h2>

              <div className={styles.item}>
                <span className={styles.label}>Email</span>
                <a href="mailto:osc@nitc.ac.in" className={styles.value}>
                  osc@nitc.ac.in
                </a>
              </div>
              <div className={styles.item}>
                <span className={styles.label}>Address</span>
                <span className={styles.value}>
                  Department of Physics, National Institute of Technology
                  Calicut, NIT Campus P.O., PIN - 673601, Kozhikode, Kerala,
                  India
                </span>
              </div>


              <div className={styles.item}>
                <span className={styles.label}>Venue</span>
                <span className={styles.value}>
                  ABC Complex, <br />
                  National Institute of Technology Calicut,
                  <br />
                  Kozhikode, Kerala
                </span>
              </div>
            </div>

            {/* MAP */}
            <div className={styles.mapCard}>
              <iframe
                title="NIT Calicut Map"
                src="https://www.google.com/maps?q=Department%20of%20Physics%2C%20NIT%20Calicut&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
