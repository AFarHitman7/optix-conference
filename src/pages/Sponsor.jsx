import styles from "./Sponsor.module.css";

import sponsor1 from "./assets/sponsors/01.png";
import sponsor2 from "./assets/sponsors/02.jpeg";

const sponsors = [
  {
    id: 1,
    img: sponsor1,
    name: "Optica",
    tagline: "Technology Partner",
  },
  {
    id: 2,
    img: sponsor2,
    name: "COMTEK",
    tagline: "Industry Collaborator",
  },
];

export default function Sponsors() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span>Platinum Sponsors</span>
          </h1>
        </div>

        <div className={styles.sponsorCard}>
          <div className={`${styles.imageWrap} ${styles.mainSponsorImageWrap}`}>
            <img
              src={sponsors[0].img}
              alt={sponsors[0].name}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3 className={styles.sponsorName}>{sponsors[0].name}</h3>
              <p className={styles.sponsorTagline}>{sponsors[0].tagline}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${styles.coTitle}`}>
            <span>Bronze Sponsors</span>
          </h1>
        </div>

        <div className={styles.sponsorCard}>
          <div className={`${styles.imageWrap} ${styles.coSponsorImageWrap}`}>
            <img
              src={sponsors[1].img}
              alt={sponsors[1].name}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3 className={styles.sponsorName}>{sponsors[1].name}</h3>
              <p className={styles.sponsorTagline}>{sponsors[1].tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
