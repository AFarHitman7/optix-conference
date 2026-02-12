import styles from "./EventSchedule.module.css";

const TechnicalProgramme = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Programme</h2>
        </div>

        <div className={styles.programmeContent}>
          <p>
            The technical programme of OPTIX 2026 – International Conference on
            Optics, Lasers & Photonics is designed to foster scientific exchange
            and collaboration through keynote talks, oral and poster
            presentations, special sessions, and cultural events.
          </p>

          <h3>Keynote & Invited Talks</h3>
          <p>
            OPTIX 2026 will feature keynote and invited lectures by leading
            experts from academia, research laboratories, and industry,
            highlighting recent advances, emerging trends, and future directions
            in optics and photonics.
          </p>

          <h3>Oral Presentations</h3>
          <p>
            The conference includes thematic oral presentation sessions covering
            a broad range of topics such as laser technology, quantum optics,
            photonic materials, optical sensing, fiber optics, and applied
            photonics. These sessions provide a platform for researchers to
            present and discuss their latest findings.
          </p>

          <h3>Poster Presentations</h3>
          <p>
            Poster sessions offer an interactive forum for presenting innovative
            ideas, ongoing research, and preliminary results. Dedicated poster
            slots encourage direct discussion and networking, particularly
            benefiting students and early-career researchers.
          </p>

          <h3>Special & Parallel Sessions</h3>
          <p>
            Special and parallel sessions focus on emerging and
            interdisciplinary areas, enabling in-depth discussions on
            specialized topics and applications in optics and photonics.
          </p>

          <h3>Cultural & Networking Events</h3>
          <p>
            OPTIX 2026 also features cultural and networking events, providing
            opportunities for informal interaction, collaboration, and
            engagement beyond the technical sessions.
          </p>

          <h3>Conference Proceedings</h3>
          <p>
            All accepted and presented contributions will be published in the
            conference proceedings, serving as a lasting scientific record of
            OPTIX 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProgramme;
