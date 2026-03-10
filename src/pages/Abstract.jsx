import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./Abstract.module.css";
import { IoIosArrowDropdown } from "react-icons/io";

const Abstract = () => {

  const abstractTemplateUrl =
    "https://docs.google.com/document/d/197eLkyrAXZBg2RQGu4oAmn5xLBHGgr3P/export?format=docx";

  const presenterNotice =
    "Individuals intending to present at the conference are required to submit their abstracts and refrain from completing registration, including payment, until official notification of abstract acceptance has been communicated via email by the review committee.";

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
                  Abstract/Summary submission deadline
                </div>
                <div className={styles.deadlineDate}><s>10th March 2026</s> 17th March 2026</div>
                <div className={styles.deadlineExtension}>
                  Abstract deadline extended to 17 March 2026
                </div>
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
              <h3>250-word Abstract</h3>
              <p>A concise summary highlighting the presentation topic.</p>
            </div>

            <div className={styles.orDivider}>OR</div>

            <div className={styles.requirementBox}>
              <h3>Extended Description</h3>
              <p>
                An extended description must clearly state the research problem,
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
              <p className={styles.highlightNotice}>{presenterNotice}</p>
            </div>

            <h3 className={styles.subsectionTitle}>Abstract Submission Guidelines</h3>
            <p className={styles.subsectionIntro}>
              Authors may submit either a self-contained abstract (up to 250
              words) or a two-page extended summary of their work.
            </p>
            <p className={styles.subsectionIntro}>
              Authors who initially submit a 250-word abstract will be required
              to submit a two-page extended summary before the conference for
              inclusion in the Conference Abstract Proceedings (ISBN).
            </p>
            <p className={styles.subsectionIntro}>
              Templates for both the abstract and the two-page extended summary
              are provided, and authors are requested to follow the prescribed
              formats.
            </p>

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
                href="https://forms.gle/7EsF9rMywhZpVzRw9"
                target="_blank"
                rel="noreferrer"
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
