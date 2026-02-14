import styles from "./Speakers.module.css";
import { useRef, useEffect, useState, useMemo } from "react";

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

const speakers = Object.entries(images).map(([path, module], index) => {
  const fileName = path.split("/").pop();

  return {
    id: index + 1,
    img: module.default,
    name: speakerMeta[fileName]?.name || "Unknown Speaker",
    designation: speakerMeta[fileName]?.designation || "",
  };
});

const SpeakerCard = ({ speaker }) => {
  return (
    <div className={styles.speakerCard}>
      <div className={styles.imageWrap}>
        <img src={speaker.img} alt={speaker.name} className={styles.image} />
        <div className={styles.overlay}>
          <h3 className={styles.speakerName}>{speaker.name}</h3>
          <p className={styles.speakerDesignation}>{speaker.designation}</p>
        </div>
      </div>
    </div>
  );
};

const SpeakerCarousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loopedIndex, setLoopedIndex] = useState(1);
  const loopedIndexRef = useRef(1);

  const loopedSpeakers = useMemo(() => {
    if (!speakers.length) return [];
    return [speakers[speakers.length - 1], ...speakers, speakers[0]];
  }, []);

  const isMobileViewport = () => window.innerWidth <= 768;

  const scrollToIndex = (index, behavior = "smooth") => {
    const el = carouselRef.current;
    if (!el || !el.children[index]) return;

    el.scrollTo({
      left: el.children[index].offsetLeft,
      behavior,
    });
  };

  const normalizeLoopPosition = (index) => {
    if (index === 0) {
      setLoopedIndex(speakers.length);
      loopedIndexRef.current = speakers.length;
      setActiveIndex(speakers.length - 1);
      requestAnimationFrame(() => scrollToIndex(speakers.length, "auto"));
      return true;
    }

    if (index === speakers.length + 1) {
      setLoopedIndex(1);
      loopedIndexRef.current = 1;
      setActiveIndex(0);
      requestAnimationFrame(() => scrollToIndex(1, "auto"));
      return true;
    }

    return false;
  };

  const updateFromScroll = () => {
    const el = carouselRef.current;
    if (!el || !el.children.length) return;

    const center = el.scrollLeft + el.offsetWidth / 2;
    let nearestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    Array.from(el.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = index;
      }
    });

    setLoopedIndex(nearestIndex);
    loopedIndexRef.current = nearestIndex;

    if (normalizeLoopPosition(nearestIndex)) {
      return;
    }

    setActiveIndex(nearestIndex - 1);
  };

  const moveTo = (delta) => {
    const nextIndex = loopedIndex + delta;
    setLoopedIndex(nextIndex);
    loopedIndexRef.current = nextIndex;
    scrollToIndex(nextIndex);
    stopAutoScroll();
  };

  const startAutoScroll = () => {
    if (isMobileViewport() || intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setLoopedIndex((prev) => {
        const next = prev + 1;
        loopedIndexRef.current = next;
        scrollToIndex(next);
        return next;
      });
    }, 3200);
  };

  const stopAutoScroll = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (!carouselRef.current || !loopedSpeakers.length) return;

    scrollToIndex(1, "auto");
    loopedIndexRef.current = 1;
    startAutoScroll();

    const handleResize = () => {
      scrollToIndex(loopedIndexRef.current, "auto");
      if (isMobileViewport()) {
        stopAutoScroll();
      } else {
        startAutoScroll();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      stopAutoScroll();
      window.removeEventListener("resize", handleResize);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [loopedSpeakers.length]);

  const handleScroll = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(updateFromScroll, 120);
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.navButton}
        onClick={() => moveTo(-1)}
        aria-label="Previous speaker"
      >
        ‹
      </button>

      <div
        className={styles.carousel}
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        onTouchStart={stopAutoScroll}
        onTouchEnd={startAutoScroll}
      >
        {loopedSpeakers.map((speaker, index) => (
          <div
            key={`${speaker.id}-${index}`}
            className={`${styles.slide} ${
              (index - 1 + speakers.length) % speakers.length === activeIndex
                ? styles.active
                : ""
            }`}
          >
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>

      <button
        className={styles.navButton}
        onClick={() => moveTo(1)}
        aria-label="Next speaker"
      >
        ›
      </button>
    </div>
  );
};

export default function Speakers() {
  return (
    <>
      <section className={styles.page}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Meet Our Speakers</h1>
            <p>
              Meet our esteemed speakers from academia and industry who will
              share their expertise and research insights in optics, lasers, and
              photonics.
            </p>
          </div>
          <SpeakerCarousel />
        </div>
      </section>
    </>
  );
}
