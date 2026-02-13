import styles from "./AboutPage.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import vs from "./assets/about/varisivaji.png";
import rv from "./assets/about/RaviVarma.png";
import cs from "./assets/about/chandrashekaran.png";

import prev1 from "./assets/prev1.webp";
import prev2 from "./assets/prev2.webp";
import prev3 from "./assets/prev3.webp";

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
                Government of India, boasts a remarkable 63-year legacy of
                excellence. As one of the leading technical education
                institutions in the country, NITC is the largest among the
                NITs. Committed to attaining international acclaim of the
                highest calibre, NITC offers 11 undergraduate and 30
                postgraduate programs across 15 departments, along with several
                inter-disciplinary and multidisciplinary centres. Additionally,
                full-time and part-time doctoral research programs are available
                in all departments.
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
                NIT Calicut <span>Optica Student Chapter</span>
              </h2>
              <p className={styles.description}>
                Optica serves as a prominent global platform for optics and
                photonics, aiming to share quality knowledge and facilitate
                inspiring connections through its worldwide activities. The
                Optica Student Chapter is a student-driven initiative focused
                on advancing research and innovation in optics, photonics, and
                related fields. It aims to create opportunities for networking
                with global experts, peers, and professionals while organising
                various events to foster learning and skill development.
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
                The NIT Calicut Optica Student Chapter has continuously been
                active in advancing education and awareness in these fields
                through a series of events. OPTIX-2026 is the chapter&apos;s first
                international conference, a major milestone built upon this
                solid foundation of the successful initiatives. The chapter&apos;s
                dedication to promoting excellent scientific exchange and
                providing a forum for communication among academia and business,
                is reflected in the conference. By organising OPTIX-2026, the
                chapter hopes to transform its academic involvement from
                regional endeavours into a worldwide research forum in optics,
                lasers and photonics. By introducing them to innovative
                research fields and distinguished professionals, the event also
                aims to inspire young researchers. All things considered,
                OPTIX-2026 is a calculated move to improve the culture of
                optics and photonics research at NIT Calicut and elsewhere.
              </p>
            </div>

            <div className={styles.mediaWrapper}>
              <div className={styles.imageStack}>
                <img src={prev1} alt="Workshops" />
                <img src={prev2} alt="Exhibition" />
                <img src={prev3} alt="Talks" />
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
                    name: "Dr Vari Sivaji Reddy",
                    role: "HoD - Associate Professor",
                    dept: "NIT Calicut",
                    image: vs,
                  },
                  {
                    name: "Prof. Chandrasekharan K.",
                    role: "Professor (HAG)",
                    dept: "NIT Calicut",
                    image: cs,
                  },
                  {
                    name: "Prof M K Ravi Varma",
                    role: "Professor",
                    dept: "NIT Calicut",
                    image: rv,
                  },
                  {
                    name: "Prof Aji A Anappara",
                    role: "Professor",
                    dept: "NIT Calicut",
                  },
                  {
                    name: "Prof T Srinivas",
                    role: "Professor",
                    dept: "IISc Bangalore",
                  },
                  {
                    name: "Prof R Ganesan",
                    role: "Professor",
                    dept: "IISc Bangalore",
                  },
                  {
                    name: "Prof Ganesan A R",
                    role: "Professor",
                    dept: "IIT Madras",
                  },
                  {
                    name: "Prof C S Narayananmurthy",
                    role: "Professor",
                    dept: "IIST Thiruvananthapuram",
                  },
                ].map((person, index) => (
                  <div key={index} className={styles.personCard}>
                    <div className={styles.photoPlaceholder}>
                      {person.image ? <img src={person.image} alt="" /> : null}
                    </div>
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

              {/* ===== Faculty Advisors Section ===== */}
              <div className={styles.advisorSection}>
                <h3 className={styles.subHeading}>Faculty Advisors</h3>

                <div className={styles.peopleGrid}>
                  {[
                    {
                      name: "Dr Natesan Yogesh",
                      role: "Faculty Advisor",
                      designation: "Asst. Professor (Grade I)",
                      dept: "NIT Calicut",
                      image: vs,
                    },
                    {
                      name: "Dr P Muhammed Shafi",
                      role: "Faculty Co-Advisor",
                      designation: "Inspire Faculty",
                      dept: "NIT Calicut",
                      image: cs,
                    },
                  ].map((person, index) => (
                    <div key={index} className={styles.personCard}>
                      <div className={styles.photoPlaceholder}>
                        <img src={person.image} alt="" />
                      </div>
                      <h3>{person.name}</h3>
                      <p className={styles.role}>{person.role}</p>
                      <p className={styles.role}>{person.designation}</p>
                      <p className={styles.dept}>{person.dept}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== Student Chapter Section ===== */}
              <h3 className={styles.subHeading}>NIT Calicut Optica Student Chapter</h3>

              <div className={styles.peopleGrid}>
                {[
                  ["President", "Hasana Jahan E K"],
                  ["Vice President", "Salma Jose"],
                  ["Secretary", "Naseeb Abdu Taikkaden"],
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

              {/* ===== Bhauthiki Members ===== */}
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
