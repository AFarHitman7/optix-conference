import styles from "./Speakers.module.css";
import { useRef, useEffect } from "react";
import sp1 from "./assets/speakers/sp1.png";
import sp2 from "./assets/speakers/sp2.png";
import sp3 from "./assets/speakers/sp3.png";
import sp4 from "./assets/speakers/sp4.png";
// import sp5 from "./assets/speakers/sp5.png";
// import sp6 from "./assets/speakers/sp6.png";
// import sp7 from "./assets/speakers/sp7.png";

const speakers = [
  {
    id: 1,
    img: sp1,
    name: "Dr. John Smith",
    designation: "Professor of Photonics",
  },
  {
    id: 2,
    img: sp2,
    name: "Dr. Sarah Johnson",
    designation: "Laser Research Lead",
  },
  {
    id: 3,
    img: sp3,
    name: "Dr. Michael Chen",
    designation: "Optics Specialist",
  },
  {
    id: 4,
    img: sp4,
    name: "Dr. Emily Williams",
    designation: "Quantum Physicist",
  },
  { id: 5, img: "", name: "Speaker 5", designation: "Industry Expert" },
  { id: 6, img: "", name: "Speaker 6", designation: "Research Director" },
  { id: 7, img: "", name: "Speaker 7", designation: "Principal Scientist" },
];

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

  // Duplicate speakers for infinite loop
  const infiniteSpeakers = [...speakers, ...speakers, ...speakers];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 4;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkAndResetPosition = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.offsetWidth;

      // Calculate the width of one set of speakers
      const singleSetWidth = scrollWidth / 3;

      // If we've scrolled past 2 sets, reset to the middle set
      if (scrollLeft >= singleSetWidth * 2 - clientWidth) {
        carouselRef.current.scrollLeft = singleSetWidth;
      }
      // If we've scrolled before the first set, jump to the second set
      else if (scrollLeft <= 0) {
        carouselRef.current.scrollLeft = singleSetWidth;
      }
    }
  };

  const autoScroll = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 4;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });

      // Check position after animation completes
      setTimeout(checkAndResetPosition, 500);
    }
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(autoScroll, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    // Set initial scroll position to the middle set
    if (carouselRef.current) {
      const singleSetWidth = carouselRef.current.scrollWidth / 3;
      carouselRef.current.scrollLeft = singleSetWidth;
    }

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  const handleManualScroll = (direction) => {
    stopAutoScroll();
    scroll(direction);
    setTimeout(checkAndResetPosition, 500);
    startAutoScroll();
  };

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <button
        className={styles.navButton}
        onClick={() => handleManualScroll("left")}
        aria-label="Previous"
      >
        ‹
      </button>
      <div className={styles.carousel} ref={carouselRef}>
        {infiniteSpeakers.map((speaker, index) => (
          <SpeakerCard key={`${speaker.id}-${index}`} speaker={speaker} />
        ))}
      </div>
      <button
        className={styles.navButton}
        onClick={() => handleManualScroll("right")}
        aria-label="Next"
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
