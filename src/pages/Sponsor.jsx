import styles from "./Sponsor.module.css";

import sponsor1 from "./assets/sponsors/01.png";
import sponsor2 from "./assets/sponsors/02.jpeg";
import sponsor3 from "./assets/sponsors/anrf.svg";
import sponsor4 from "./assets/sponsors/comsol.jpeg";

const platinumSponsors = [
  {
    id: 1,
    img: sponsor1,
    name: "Optica",
    tagline: "Technology Partner",
  },
  {
    id: 2,
    img: sponsor3,
    name: "Anusandhan National Research Foundation",
    tagline: "Platinum Sponsor",
  },
];

const bronzeSponsors = [
  {
    id: 1,
    img: sponsor2,
    name: "COMTEK",
    tagline: "Industry Collaborator",
  },
  {
    id: 2,
    img: sponsor4,
    name: "COMSOL",
    tagline: "Bronze Sponsor",
  },
];

export default function Sponsors() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span>Platinum Sponsor</span>
          </h1>
        </div>

        <div className={styles.sponsorGrid}>
          {platinumSponsors.map((sponsor) => (
            <div key={sponsor.id} className={styles.sponsorCard}>
              <div
                className={`${styles.imageWrap} ${styles.mainSponsorImageWrap}`}
              >
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.sponsorName}>{sponsor.name}</h3>
                  <p className={styles.sponsorTagline}>{sponsor.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${styles.coTitle}`}>
            <span>Bronze Sponsor</span>
          </h1>
        </div>

        <div className={styles.sponsorGrid}>
          {bronzeSponsors.map((sponsor) => (
            <div key={sponsor.id} className={styles.sponsorCard}>
              <div
                className={`${styles.imageWrap} ${styles.coSponsorImageWrap}`}
              >
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.sponsorName}>{sponsor.name}</h3>
                  <p className={styles.sponsorTagline}>{sponsor.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
