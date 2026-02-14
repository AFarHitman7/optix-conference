import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./Abstract.module.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

const Abstract = () => {
  const navigate = useNavigate();

  const abstractTemplateUrl =
    "https://docs.google.com/document/d/197eLkyrAXZBg2RQGu4oAmn5xLBHGgr3P/";

  const categories = [
    {
      id: "laser",
      title: "Laser & Laser Technology",
      topics: [
        "Laser system and materials (CW, pulsed, ultrafast)",
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
        "Photonic crystals and bandgap engineering",
        "Plasmonics and nanophotonics",
        "Topological photonics",
        "Tunable, active, and nonlinear metamaterials",
        "Metasurfaces and flat optics",
        "Electromagnetic, THz and optical metamaterials",
        "Hyperbolic metamaterials, graphene based tunable metamaterials.",
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
      title: "Nonlinear Optics and Optical Materials",
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
      title: "The title of the research work",
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
      title: "A detailed summary (300-1000 words)",
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
                All accepted submissions will be included in the Conference
                Abstract Book / Digital Proceedings. Selected high-quality
                papers will be invited for submission to a special collection in
                Journal of the Optical Society of America B (JOSA B), Optica
                Publishing Group, (subject to peer review), with full paper
                submission scheduled after the conference.
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
                  10 minutes presentation followed by 2 minutes of discussion
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
              all submissions must include the following components:
            </p>

            <ol className={styles.guidelinesList}>
              {guidelines.map((item, index) => (
                <li key={index} className={styles.guidelineListItem}>
                  <strong>{item.title}</strong>
                  {item.description && <span> - {item.description}</span>}
                </li>
              ))}
            </ol>

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
                  Authors are requested to submit abstracts under the topic
                  category that most closely aligns with their work; however,
                  submissions are not strictly limited to the listed categories,
                  and relevant contributions in related areas are also
                  encouraged.
                </p>
              </div>
            </div>
          </section>

          {/* Topic Categories */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Topic <span>Categories</span>
            </h2>

            <div className={styles.categoryList}>
              {categories.map((category) => (
                <details key={category.id} className={styles.categoryItem}>
                  <summary className={styles.categorySummary}>
                    <h3>{category.title}</h3>
                    <span className={styles.categoryChevron}>
                      <IoIosArrowDropdown />
                    </span>
                  </summary>
                  <ul>
                    {category.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </details>
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
                Submit Abstract
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
