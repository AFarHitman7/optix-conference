import { useEffect, useState } from "react";
import styles from "./Speakers.module.css";

const images = import.meta.glob("./assets/speakers/*.png", { eager: true });

const speakerMeta = {
  "101.png": {
    name: "Prof Chennupati  Jagadish",
    designation: "The Australian National University, Canberra",
  },
  "102.png": {
    name: "Prof Ashokan",
    designation: "IISc Bengaluru",
  },
  "103.png": {
    name: "Dr Ashok Kumar",
    designation: "IIST Thiruvananthapuram",
  },
  "104.png": {
    name: "Aparajita Bandyopadhyay",
    designation: "Goethe Universitat Frankfurt, Germany",
  },
  "105.png": {
    name: "Dr Mukesh Jewariya",
    designation: "Senior Scientist, CSIR -NPL",
  },
  "106.png": {
    name: "Prof Pavan Kumar GV",
    designation: "IISER Pune",
  },
  "107.png": {
    name: "Dr Shivakiran B N Bhaktha",
    designation: "IIT Kharagpur",
  },
  "108.png": {
    name: "Prof V Subramanian",
    designation: "IIT Madras",
  },
  "109.png": {
    name: "Dr K Nithyanandan",
    designation: "IIT Hyderabad",
  },
  "110.png": {
    name: "Prof Prem B Bisht",
    designation: "IIT Madras",
  },
  "111.png": {
    name: "Dr Sajan Daniel George",
    designation: "Manipal Institute of Applied Physics",
  },
};

const speakers = Object.entries(images)
  .map(([path, module]) => {
    const fileName = path.split("/").pop();

    return {
      id: fileName,
      img: module.default,
      name: speakerMeta[fileName]?.name || "Unknown Speaker",
      designation: speakerMeta[fileName]?.designation || "",
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

const getVisibleCount = (width) => {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  return 3;
};

const SpeakerCard = ({ speaker }) => (
  <article className={styles.speakerCard}>
    <div className={styles.imageWrap}>
      <img src={speaker.img} alt={speaker.name} className={styles.image} />
      <div className={styles.overlay}>
        <h3 className={styles.speakerName}>{speaker.name}</h3>
        <p className={styles.speakerDesignation}>{speaker.designation}</p>
      </div>
    </div>
  </article>
);

const SpeakerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = Math.max(0, speakers.length - visibleCount);

  useEffect(() => {
    if (activeIndex > maxStartIndex) {
      setActiveIndex(maxStartIndex);
    }
  }, [activeIndex, maxStartIndex]);

  const next = () => {
    setActiveIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  const previous = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.navButton}
        onClick={previous}
        aria-label="Previous speaker"
        type="button"
      >
        ‹
      </button>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            width: `${(speakers.length * 100) / visibleCount}%`,
            transform: `translateX(-${(activeIndex * 100) / speakers.length}%)`,
          }}
        >
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={styles.slide}
              style={{ width: `${100 / speakers.length}%` }}
            >
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.navButton}
        onClick={next}
        aria-label="Next speaker"
        type="button"
      >
        ›
      </button>
    </div>
  );
};

export default function Speakers() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Meet Our Speakers</h1>
          <p>
            Meet our esteemed speakers from academia and industry who will share
            their expertise and research insights in optics, lasers, and
            photonics.
          </p>
        </div>
        <SpeakerCarousel />
      </div>
    </section>
  );
}
