import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./Abstract.module.css";
import { useNavigate } from "react-router-dom";

const Abstract = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const abstractTemplateUrl =
    "https://docs.google.com/document/d/197eLkyrAXZBg2RQGu4oAmn5xLBHGgr3P/";

  const categories = [
    {
      id: "laser",
      title: "Laser & Laser Technology",
      topics: [
        "Laser sources and systems (CW, pulsed, ultrafast)",
        "Solid-state, fiber, semiconductor, and gas lasers",
        "Laser-matter interaction",
        "High-power and high-energy lasers",
        "Laser spectroscopy and diagnostics",
        "Laser processing and micromachining",
        "Biomedical and industrial laser applications",
      ],
    },
    {
      id: "metamaterials",
      title: "Metamaterials & Photonic Crystals",
      topics: [
        "Electromagnetic and optical metamaterials",
        "Photonic crystals and bandgap engineering",
        "Plasmonics and nanophotonics",
        "Topological photonics",
        "Tunable, active, and nonlinear metamaterials",
        "Metasurfaces and flat optics",
        "Electromagnetic, THz and optical metamaterials",
        "Applications in sensing, imaging, and communication",
      ],
    },
    {
      id: "optofluidics",
      title: "Optofluidics",
      topics: [
        "Integrated optofluidic systems and lab-on-chip devices",
        "Light-matter interaction in micro/nanofluidic platforms",
        "Optofluidic biosensing and chemical sensing",
        "Reconfigurable and tunable photonic devices using fluids",
        "Optical manipulation and trapping in fluids",
        "Environmental and biomedical optofluidic applications",
      ],
    },
    {
      id: "quantum",
      title: "Quantum Optics",
      topics: [
        "Quantum light sources and detectors",
        "Quantum coherence and entanglement",
        "Cavity quantum electrodynamics",
        "Quantum communication and cryptography",
        "Quantum sensing and metrology",
        "Integrated and chip-scale quantum photonics",
        "Atom-photon and matter-light interactions",
      ],
    },
    {
      id: "nonlinear",
      title: "Nonlinear and Optical Materials",
      topics: [
        "Nonlinear optical phenomena and frequency conversion",
        "Novel optical and photonic materials",
        "Nanomaterials and hybrid materials for optics",
        "Ultrafast and strong-field optical effects",
        "Optical characterization of materials",
        "Photonic and optoelectronic material systems",
        "Applications in lasers, sensors, and photonic devices",
      ],
    },
    {
      id: "applied",
      title: "Applied Optics",
      subtitle:
        "(Optoelectronics, Optical Instrumentation, Fiber Optics & Sensing)",
      topics: [
        "Optoelectronic devices and systems",
        "Optical instrumentation and metrology",
        "Fiber optics and fiber-based sensors",
        "Spectroscopic techniques and applications",
        "Environmental, atmospheric, and industrial sensing",
        "Imaging systems and optical diagnostics",
        "Integrated photonic and sensing platforms",
      ],
    },
  ];

  const guidelines = [
    {
      title: "Full paper title",
      description: "",
    },
    {
      title: "Complete list of authors with institutional affiliations",
      description: "",
    },
    {
      title: "A self-contained abstract limited to 50 words",
      description: "",
    },
    {
      title: "A detailed summary (300–1000 words)",
      description:
        "Describing the problem, methods, and results. Maximum length: two pages, including figures",
    },
    {
      title: "References",
      description: "",
    },
    {
      title: "Written permission and proper attribution",
      description:
        "For any copyrighted or trademarked images. This includes images of individuals, logos, or materials owned by third parties",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.container}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <div className={styles.tag}>OPTIX 2026</div>
              <h1 className={styles.heroTitle}>
                Call for <span>Abstracts</span>
              </h1>
              <p className={styles.heroDescription}>
                All submitted abstracts undergo peer-review process to curate a
                high-quality technical program focused on emerging research
                works. Presenters will be part of a strong scientific forum
                alongside leading researchers and subject-matter experts. The
                audience will include fellow researchers, industry
                professionals, and prospective collaborators. Additionally,
                every accepted abstract will be published in the OPTIX-2026
                Abstract Book and assigned an ISBN number.
              </p>
              <div className={styles.deadline}>
                <div className={styles.deadlineLabel}>
                  Abstract and summary submission deadline
                </div>
                <div className={styles.deadlineDate}>10th March 2026</div>
              </div>
            </div>
          </section>

          {/* Presentation Formats */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Presentation Format and <span>Awards</span>
            </h2>

            <div className={styles.formatsGrid}>
              <div className={styles.formatCard}>
                <h3>Oral Presentations</h3>
                <p className={styles.formatDetails}>
                  10 minutes presentation followed by 5 minutes of discussion
                </p>
                <div className={styles.award}>
                  Awards will be presented for Best Oral Presentation in each
                  session
                </div>
              </div>

              <div className={styles.formatCard}>
                <h3>Poster Presentations</h3>
                <p className={styles.formatDetails}>A0 size format</p>
                <div className={styles.award}>
                  Awards will be presented for Best Poster Presentation in each
                  session
                </div>
              </div>
            </div>
          </section>

          {/* Submission Guidelines */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Submission <span>Requirements</span>
            </h2>

            <div className={styles.requirementBox}>
              <h3>50-word Abstract</h3>
              <p>A concise summary highlighting the presentation topic.</p>
            </div>

            <div className={styles.requirementBox}>
              <h3>Expanded Description</h3>
              <p>
                An expanded description must clearly state the research problem,
                methodology, key results, and conclusions.
              </p>
            </div>

            <div className={styles.requirementBox}>
              <h3>Abstract Template</h3>
              <p>
                Use the official OPTIX 2026 abstract template while preparing
                your submission.
              </p>
              <a
                href={abstractTemplateUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.templateLink}
                style={{ cursor: "pointer" }}
              >
                Open template →
              </a>
            </div>

            <h3 className={styles.subsectionTitle}>
              DOC Submission Guidelines
            </h3>
            <p className={styles.subsectionIntro}>
              To be eligible for publication, all DOC submissions must include
              the following components:
            </p>

            <div className={styles.guidelinesGrid}>
              {guidelines.map((item, index) => (
                <div key={index} className={styles.guidelineCard}>
                  <div className={styles.guidelineNumber}>{index + 1}</div>
                  <div className={styles.guidelineContent}>
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoContent}>
                <h4>Copyright Agreement</h4>
                <p>
                  The submission process includes an electronic copyright
                  transfer agreement. No additional documentation is required.
                </p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoContent}>
                <h4>Registration and Authorization</h4>
                <p>
                  Registration and abstract submission for technical sessions
                  are open to members of the global scientific and technical
                  community. Authors are responsible for obtaining any necessary
                  institutional or organizational approvals prior to presenting
                  their work at this international conference.
                </p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoContent}>
                <h4>Category Selection</h4>
                <p>
                  Category Selection Authors must select the topic category that
                  best aligns with their work. Submissions may also be nominated
                  for consideration under a relevant session.
                </p>
              </div>
            </div>
          </section>

          {/* Topic Categories */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Topic <span>Categories</span>
            </h2>

            <div className={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`${styles.categoryCard} ${
                    selectedCategory === category.id
                      ? styles.categoryActive
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category.id ? null : category.id,
                    )
                  }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.categoryHeader}>
                    <h3>{category.title}</h3>
                    {category.subtitle && (
                      <p className={styles.categorySubtitle}>
                        {category.subtitle}
                      </p>
                    )}
                    <div className={styles.expandIcon}>
                      {selectedCategory === category.id ? "−" : "+"}
                    </div>
                  </div>

                  {selectedCategory === category.id && (
                    <div className={styles.categoryTopics}>
                      <ul>
                        {category.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Submit Your Abstract</h2>
              <p>
                Be part of a strong scientific forum alongside leading
                researchers and subject-matter experts at OPTIX 2026.
              </p>
              <a
                onClick={() => {
                  navigate("/register");
                }}
                className={styles.ctaButton}
              >
                Register and Submit
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Abstract;
