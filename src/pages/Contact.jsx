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
                <span className={styles.label}>Phone</span>
                <a href="tel:+917358377064" className={styles.value}>
                  +91 7358377064 Dr Natesan Yogesh (Convenor, OPTIX 2026)
                </a>
              </div>

              <div className={styles.item}>
                <span className={styles.label}>Phone</span>
                <a href="tel:+916235747806" className={styles.value}>
                  +91 6235747806 Naseeb Abdu Taikkaden (Student Coordinator,
                  OPTIX 2026)
                </a>
              </div>

              <div className={styles.item}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>
                  ABC Block, <br />
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
                src="https://www.google.com/maps?q=NIT%20Calicut&output=embed"
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
