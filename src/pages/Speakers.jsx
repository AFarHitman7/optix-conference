import styles from "./Speakers.module.css";
import { useRef, useEffect, useState } from "react";

const images = import.meta.glob("./assets/speakers/*.png", { eager: true });

const speakerMeta = {
  "101.png": {
    name: "Dr. A. Raman",
    designation: "IISc Bangalore",
  },
  "102.png": {
    name: "Prof. Meera Nair",
    designation: "NIT Calicut",
  },
  "103.png": {
    name: "Dr. Arjun Menon",
    designation: "IIT Madras",
  },
  "104.png": {
    name: "Dr. Kavya Iyer",
    designation: "TIFR Mumbai",
  },
};

const speakers = Object.entries(images).map(([path, module], index) => {
  const fileName = path.split("/").pop(); // "01.png"

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
  const [activeIndex, setActiveIndex] = useState(0);

  const infiniteSpeakers = [...speakers, ...speakers, ...speakers];

  const updateActive = () => {
    const el = carouselRef.current;
    if (!el) return;

    const center = el.scrollLeft + el.offsetWidth / 2;

    const cards = Array.from(el.children);
    let closest = 0;
    let min = Infinity;

    cards.forEach((card, i) => {
      const box = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(center - box);
      if (d < min) {
        min = d;
        closest = i;
      }
    });

    setActiveIndex(closest);
  };

  const getScrollAmount = () => {
    const el = carouselRef.current;
    if (!el) return 0;

    const width = el.offsetWidth;

    // Responsive scroll amounts based on screen width
    if (width <= 380) {
      // Very small mobile - scroll nearly full width (90%)
      return width * 0.9;
    } else if (width <= 480) {
      // Small mobile - scroll 85% of width
      return width * 0.85;
    } else if (width <= 640) {
      // Mobile portrait - scroll 70% of width
      return width * 0.7;
    } else if (width <= 900) {
      // Small tablets - scroll 50% (one card when 2 visible)
      return width * 0.5;
    } else if (width <= 1200) {
      // Tablets - scroll 33% (one card when 3 visible)
      return width * 0.33;
    } else {
      // Desktop - scroll 25% (one card when 4 visible)
      return width * 0.25;
    }
  };

  const autoScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    el.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };

  const scroll = (dir) => {
    const el = carouselRef.current;
    if (!el) return;

    const amount = getScrollAmount();

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });

    stopAutoScroll();
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(autoScroll, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // start from middle set
    el.scrollLeft = el.scrollWidth / 3;

    startAutoScroll();

    el.addEventListener("scroll", updateActive);

    // Handle window resize to recalculate scroll amounts
    const handleResize = () => {
      updateActive();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      stopAutoScroll();
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.navButton}
        onClick={() => scroll("left")}
        aria-label="Previous speaker"
      >
        ‹
      </button>

      <div
        className={styles.carousel}
        ref={carouselRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        onTouchStart={stopAutoScroll}
        onTouchEnd={startAutoScroll}
      >
        {infiniteSpeakers.map((speaker, i) => (
          <div
            key={`${speaker.id}-${i}`}
            className={`${styles.slide} ${
              i === activeIndex ? styles.active : ""
            }`}
          >
            <SpeakerCard speaker={speaker} />
          </div>
        ))}
      </div>

      <button
        className={styles.navButton}
        onClick={() => scroll("right")}
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
