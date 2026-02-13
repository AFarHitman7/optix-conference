import styles from "./Gallery.module.css";
import { useRef, useEffect, useState } from "react";

const imageModules = import.meta.glob("./assets/gallery/*.{png,jpg,jpeg}", {
  eager: true,
});

const attractionDetails = [
  {
    fileName: "South Beach Kozhikode.jpg",
    title: "South Beach Kozhikode",
    description:
      "Popular seaside promenade ideal for sunset views and evening walks. (~25 km from NIT Calicut)",
  },
  {
    fileName: "Beypore Beach.jpg",
    title: "Beypore Beach",
    description:
      "Historic port area at the Chaliyar River mouth, known for fishing culture and calm shores. (~30 km from NIT Calicut)",
  },
  {
    fileName: "Regional Science Centre and Planetarium, Calicut.jpg",
    title: "Regional Science Centre and Planetarium, Calicut",
    description:
      "Interactive science centre with hands-on exhibits and immersive planetarium shows on astronomy and space science. (~24 km from NIT Calicut)",
  },
  {
    fileName: "Kappad Beach.jpg",
    title: "Kappad Beach",
    description:
      "Historic landing site of Vasco da Gama with a scenic rocky coastline and cultural significance. (~40 km from NIT Calicut)",
  },
  {
    fileName: "Kadalundi Bird Sanctuary.jpg",
    title: "Kadalundi Bird Sanctuary",
    description:
      "Protected wetland habitat famous for migratory birds and nature observation. (~30 km from NIT Calicut)",
  },
  {
    fileName: "SM Street (Mittayi Theruvu), Kozhikode.jpg",
    title: "SM Street (Mittayi Theruvu), Kozhikode",
    description:
      "Traditional market street known for local sweets, snacks, and souvenirs. (~23 km from NIT Calicut)",
  },
  {
    fileName: "wayanad.jpg",
    title: "Wayanad",
    description:
      "Scenic hill district known for forests, waterfalls, wildlife, and a cool climate retreat. (~85 km from NIT Calicut)",
  },
  {
    fileName: "Mananchira Square.jpg",
    title: "Mananchira Square",
    description:
      "Historic urban park with a central pond and heritage surroundings in the city centre. (~23 km from NIT Calicut)",
  },
];

const galleryItems = attractionDetails
  .map((item, index) => {
    const moduleKey = Object.keys(imageModules).find((key) =>
      key.endsWith(item.fileName)
    );

    if (!moduleKey) return null;

    return {
      id: index + 1,
      img: imageModules[moduleKey].default,
      title: item.title,
      description: item.description,
    };
  })
  .filter(Boolean);

const GalleryCard = ({ item, active }) => {
  return (
    <div className={`${styles.galleryCard} ${active ? styles.active : ""}`}>
      <div className={styles.imageWrap}>
        <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDescription}>{item.description}</p>
      </div>
    </div>
  );
};

export default function Gallery() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const infiniteItems = [...galleryItems, ...galleryItems, ...galleryItems];

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

    if (width <= 768) {
      return width * 0.9;
    } else if (width <= 1024) {
      return width * 0.5;
    }

    return width * 0.3333;
  };

  const isMobileViewport = () => window.innerWidth <= 768;

  const autoScroll = () => {
    const el = carouselRef.current;
    if (!el || isMobileViewport()) return;

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
    if (isMobileViewport()) {
      stopAutoScroll();
      return;
    }

    if (!intervalRef.current) {
      intervalRef.current = setInterval(autoScroll, 3500);
    }
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || !galleryItems.length) return;

    el.scrollLeft = el.scrollWidth / 3;

    startAutoScroll();

    el.addEventListener("scroll", updateActive);

    const handleResize = () => {
      updateActive();

      if (isMobileViewport()) {
        stopAutoScroll();
      } else {
        startAutoScroll();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      stopAutoScroll();
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Attractions</h1>
        <div className={styles.carouselWrap}>
          <button
            className={styles.nav}
            onClick={() => scroll("left")}
            aria-label="Previous"
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
            {infiniteItems.map((item, i) => (
              <GalleryCard
                key={`${item.id}-${i}`}
                item={item}
                active={i === activeIndex}
              />
            ))}
          </div>
          <button
            className={styles.nav}
            onClick={() => scroll("right")}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
