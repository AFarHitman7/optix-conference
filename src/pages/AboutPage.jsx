import React from "react";
import styles from "./AboutPage.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.page}>
        <div className={styles.container}>
          {/* Section 1: About NIT Calicut */}
          <section className={styles.section}>
            <div className={styles.content}>
              <div className={styles.tag}>Legacy of Excellence</div>
              <h2 className={styles.heading}>
                About <span>NIT Calicut</span>
              </h2>
              <p className={styles.description}>
                The National Institute of Technology Calicut (NITC), recognised
                as an Institution of National Importance and fully funded by the
                Government of India, boasts a 63-year legacy of excellence. As
                one of the largest NITs in the country, NITC hosts approximately
                8,000 students and 420 faculty members across 15 departments,
                offering undergraduate, postgraduate, and doctoral programmes
                with strong interdisciplinary foundations.
              </p>
            </div>

            <div className={styles.mediaWrapper}>
              <img
                src="https://placehold.co/600x400/141428/FFF?text=NITC+Campus"
                alt="NIT Calicut Campus"
                className={styles.singleImage}
              />
            </div>
          </section>

          {/* Section 2: Optica Student Chapter */}
          <section className={`${styles.section} ${styles.sectionReverse}`}>
            <div className={styles.content}>
              <div className={styles.tag}>Student Initiative</div>
              <h2 className={styles.heading}>
                NITC <span>Optica Student Chapter</span>
              </h2>
              <p className={styles.description}>
                Optica is a global platform for optics and photonics that
                facilitates knowledge exchange through publications, meetings,
                and collaborative initiatives. The NITC Optica Student Chapter
                is a student-led body focused on advancing research, innovation,
                and professional development through workshops, seminars,
                competitions, and global networking opportunities.
              </p>
            </div>

            <div className={styles.mediaWrapper}>
              <img
                src="https://placehold.co/600x400/141428/FFF?text=Optica+Team"
                alt="Optica Student Chapter"
                className={styles.singleImage}
              />
            </div>
          </section>

          {/* Section 3: About the Conference */}
          <section className={styles.section}>
            <div className={styles.content}>
              <div className={styles.tag}>OPTIX 2026</div>
              <h2 className={styles.heading}>
                About <span>The Conference</span>
              </h2>
              <p className={styles.description}>
                OPTIX 2026 marks the first international conference organised by
                the NIT Calicut Optica Student Chapter. Built on years of
                academic outreach, workshops, and technical events, the
                conference aims to foster meaningful exchange between
                researchers, students, and industry professionals in optics and
                photonics.
              </p>
            </div>

            <div className={styles.mediaWrapper}>
              <div className={styles.imageStack}>
                <img
                  src="https://placehold.co/400x300/101015/FFF?text=Workshops"
                  alt="Workshops"
                />
                <img
                  src="https://placehold.co/400x300/1e1e3a/FFF?text=Exhibition"
                  alt="Exhibition"
                />
                <img
                  src="https://placehold.co/400x300/262b55/FFF?text=Talks"
                  alt="Talks"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Advisory Committee */}
          <section className={styles.section}>
            <div className={styles.content}>
              <div className={styles.tag}>Guidance & Oversight</div>
              <h2 className={styles.heading}>
                Advisory <span>Committee</span>
              </h2>
              <h3 className={styles.subHeading}></h3>

              <div className={styles.peopleGrid}>
                {[
                  {
                    name: "Dr Natesan Yogesh",
                    role: "Asst. Professor (Grade II)",
                    dept: "Dept of Physics, NIT Calicut",
                  },
                  {
                    name: "Dr P Muhammed Shafi",
                    role: "INSPIRE Faculty",
                    dept: "Dept of Physics, NIT Calicut",
                  },
                  {
                    name: "Dr Vari Shivaji Reddy",
                    role: "HoD, Associate Professor",
                    dept: "Dept of Physics, NIT Calicut",
                  },
                  {
                    name: "Prof. Chandrasekharan K.",
                    role: "Professor (HAG)",
                    dept: "Dept of Physics, NIT Calicut",
                  },
                  {
                    name: "Prof. Ravi Varma Mundakkara Kovilakam",
                    role: "Professor",
                    dept: "Dept of Physics, NIT Calicut",
                  },
                  {
                    name: "Prof. Aji A Anappara",
                    role: "Professor",
                    dept: "Dept of Physics, NIT Calicut",
                  },
                ].map((person, index) => (
                  <div key={index} className={styles.personCard}>
                    <div className={styles.photoPlaceholder} />
                    <h3>{person.name}</h3>
                    <p className={styles.role}>{person.role}</p>
                    <p className={styles.dept}>{person.dept}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Organizing Committee */}
          <section className={styles.section}>
            <div className={styles.content}>
              <div className={styles.tag}>Execution Team</div>
              <h2 className={styles.heading}>
                Organizing <span>Committee</span>
              </h2>

              <h3 className={styles.subHeading}>NITC Optica Student Chapter</h3>

              <div className={styles.peopleGrid}>
                {[
                  ["President", "Hasana Jahan E K"],
                  ["Vice President", "Salma Jose"],
                  ["Secretary", "Nazeeb Abdu Taikkaden"],
                  ["Joint Secretary", "Sreedath Chandran"],
                  ["Treasurer", "Arunya Raj R"],
                ].map(([role, name], index) => (
                  <div key={index} className={styles.personCard}>
                    <div className={styles.photoPlaceholder} />
                    <h3>{name}</h3>
                    <p className={styles.role}>{role}</p>
                  </div>
                ))}
              </div>

              <h3 className={styles.subHeading}>Bhauthiki Members</h3>

              <div className={styles.peopleGrid}>
                {[
                  ["Secretary", "Athul C Nagesh"],
                  ["Joint Secretary", "Amana Fathima Ali S"],
                  ["Assistant Secretary & Media Head", "Allen Stephen Samuel"],
                  ["Treasurer", "Sreedath Chandran"],
                ].map(([role, name], index) => (
                  <div key={index} className={styles.personCard}>
                    <div className={styles.photoPlaceholder} />
                    <h3>{name}</h3>
                    <p className={styles.role}>{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
