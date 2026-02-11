import styles from "./AboutPage.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import vs from "./assets/about/varisivaji.png";
import rv from "./assets/about/RaviVarma.png";
import cs from "./assets/about/chandrashekaran.png";

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
                institutions in the country, NITC is the largest among the NITs,
                hosting approximately 8,000 students and 420 faculty members.
                Committed to attaining international acclaim of the highest
                calibre, NITC offers 11 undergraduate and 30 postgraduate
                programs across 15 departments, along with several
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
                NITC <span>Optica Student Chapter</span>
              </h2>
              <p className={styles.description}>
                Optica serves as a prominent global platform for optics and
                photonics, aiming to share quality knowledge and facilitate
                inspiring connections through its worldwide activities,
                including inspiring interactions, publications, meetings, and
                membership. The Optica Student Chapter is a student-driven
                initiative focused on advancing research and innovation in
                optics, photonics, and related fields. It aims to create
                opportunities for networking with global experts, peers, and
                professionals while organising workshops, seminars, and
                competitions to foster learning and skill development.
                Additionally, the chapter facilitates access to resources,
                scholarships, and conferences supported by Optica.
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
                Through a series of interactive workshops, technical talks,
                outreach initiatives, and an exhibition focused on optics and
                photonics for students and the larger academic community, the
                NIT Calicut Optica Student Chapter has continuously been active
                in advancing education and awareness in these fields. As the
                chapter's first international conference, OPTIX-2026 represents
                a major milestone built upon this solid foundation of academic
                and outreach initiatives. The chapter's dedication to promoting
                excellent scientific exchange and providing a forum for
                communication between researchers, students, and business
                professionals is reflected in the conference. By organising
                OPTIX-2026, the chapter hopes to transform its academic
                involvement from regional endeavours into a worldwide research
                forum in photonics, optics, and lasers. By introducing them to
                cutting-edge research fields and distinguished professionals
                from academia and business, the event also aims to inspire young
                researchers. All things considered, OPTIX-2026 is a calculated
                move to improve the culture of optics and photonics research at
                NIT Calicut and elsewhere.
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
                    name: "Dr Vari Shivaji Reddy",
                    role: "HoD, Associate Professor",
                    dept: "Dept of Physics, NIT Calicut",
                    image: vs,
                  },
                  {
                    name: "Prof. Chandrasekharan K.",
                    role: "Professor (HAG)",
                    dept: "Dept of Physics, NIT Calicut",
                    image: cs,
                  },
                  {
                    name: "Prof. Ravi Varma Mundakkara Kovilakam",
                    role: "Professor",
                    dept: "Dept of Physics, NIT Calicut",
                    image: rv,
                  },
                  {
                    name: "Prof. Aji A Anappara",
                    role: "Professor",
                    dept: "Dept of Physics, NIT Calicut",
                  },
                ].map((person, index) => (
                  <div key={index} className={styles.personCard}>
                    <div className={styles.photoPlaceholder}>
                      <img src={person.image} alt="" />
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

              <h3 className={styles.subHeading}>NITC Optica Student Chapter</h3>

              <div className={styles.peopleGrid}>
                {[
                  ["Faculty Advisor", "Dr Natesan Yogesh"],
                  ["Faculty Co-Advisor", "Dr P Muhammed Shafi"],
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
