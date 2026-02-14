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
                  <br />
                  <br />
                  For the conference venue, please see the Google Map displayed
                  on the right.
                </span>
              </div>
            </div>

            {/* MAP */}
            <div className={styles.mapCard}>
              <iframe
                title="NIT Calicut Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1884886086746!2d75.9340528!3d11.3209296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba643485e72f1a1%3A0xec2880df47736a18!2sAryabhata%20Hall!5e0!3m2!1sen!2sin!4v1771070980691!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
