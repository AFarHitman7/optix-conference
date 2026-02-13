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
            The programme for OPTIX 2026 is really interesting. OPTIX 2026 is
            the International Conference, on Optics, Lasers & Photonics. It has
            lots of things to help people share ideas and work together. There
            are keynote talks where experts speak. People also give poster
            presentations. OPTIX 2026 has sessions and fun cultural events. All
            these things help people meet and learn from each other at
            OPTIX 2026.
          </p>

          <h3>Keynote & Invited Talks</h3>
          <p>
            The OPTIX 2026 event is going to have some important talks by
            experts who are leaders, in their field. These experts come from
            universities, research labs and companies. They will talk about the
            things that have been discovered in optics and photonics. They will
            also discuss what is coming next in these fields and what people
            are expecting to happen in the future with OPTIX and optics and
            photonics.
          </p>

          <h3>Oral Presentations</h3>
          <p>
            The conference has sessions where people talk about lots of things
            like laser technology, quantum optics and photonic materials. These
            sessions are great for researchers to share what they have found out
            recently about laser technology and quantum optics and get feedback
            from others. The conference also covers topics such, as optical
            sensing, fiber optics and applied photonics.
          </p>

          <h3>Poster Presentations</h3>
          <p>
            Poster sessions are a way to share new ideas and research that is
            still in progress. You can show people what you have found out far.
            The poster sessions are like a meeting place where people can talk
            to each other about their work. Students and people who are just
            starting their careers really, like the poster sessions because they
            get to talk to others about their work. Poster sessions make it
            easy for people to meet and talk about their research.
          </p>

          <h3>Special & Parallel Sessions</h3>
          <p>
            The special sessions and the parallel sessions are about combined
            fields. They let people have talks, about specific subjects and uses
            of optics and photonics.
          </p>

          <h3>Cultural & Networking Events</h3>
          <p>
            OPTIX 2026 has some cool cultural events and networking things too.
            These are great for talking to people and working together in a
            relaxed way. You can also get to know people outside of the
            technical sessions, at OPTIX 2026.
          </p>

          <h3>Conference Proceedings</h3>
          <p>
            All accepted and presented contributions will be published in the
            conference proceedings, serving as a lasting scientific record of
            OPTIX 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProgramme;
