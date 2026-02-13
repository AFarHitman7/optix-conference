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
            The OPTIX 2026 conference, the International Conference on Optics,
            Lasers & Photonics, has a remarkably interesting technical
            programme. There are ample opportunities for the exchange of ideas
            and collaboration. The technical programme includes keynote
            speeches by experts in the field, poster sessions of the work of
            the participants, and various sessions along with cultural events.
            Taken together, these features of the OPTIX 2026 conference
            facilitate networking and knowledge sharing among the participants.
          </p>

          <h3>Keynote & Invited Talks</h3>
          <p>
            The OPTIX 2026 conference will feature keynote speeches by leading
            personalities from universities, research organizations, and
            industry. They will present their views on the latest developments
            in the field of optics and photonics and will also present their
            expectations regarding future trends and directions in these
            fields, with special emphasis on OPTIX and the latest developments
            in the field of optics and photonics.
          </p>

          <h3>Oral Presentations</h3>
          <p>
            The conference includes sessions where the participants will
            discuss a wide range of topics such as laser technology, quantum
            optics, and photonic materials. These sessions will provide an
            appropriate forum for the participants to present their latest
            results in the field of laser technology and quantum optics and to
            get constructive feedback from their peers. Other topics to be
            discussed include optical sensing, fiber optics, and applied
            photonics.
          </p>

          <h3>Poster Presentations</h3>
          <p>
            Poster presentation sessions serve as platforms for the
            dissemination of innovative ideas and ongoing research. The sessions
            allow participants to present preliminary findings, and they serve
            as platforms for scholarly discourse. Students and young
            professionals find poster presentation sessions valuable as they
            serve as platforms for interaction with others on their research.
          </p>

          <h3>Special & Parallel Sessions</h3>
          <p>
            Special and parallel sessions at OPTIX 2026 focus on
            interdisciplinary themes. The sessions serve as platforms for
            scholarly discourse on particular themes and applications in the
            field of optics and photonics.
          </p>

          <h3>Cultural & Networking Events</h3>
          <p>
            OPTIX 2026 will feature a number of cultural events and networking
            sessions. The events serve as platforms for informal discourse and
            collaborative engagement, allowing participants to network beyond
            the technical sessions.
          </p>

          <h3>Conference Proceedings</h3>
          <p>
            The conference proceedings will include all accepted and presented
            papers, thus forming a permanent scientific record of OPTIX 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProgramme;
