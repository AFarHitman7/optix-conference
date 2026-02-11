import styles from "./Gallery.module.css";
import { useRef, useEffect, useState } from "react";

const images = import.meta.glob("./assets/gallery/*.{png,jpg,jpeg}", {
  eager: true,
});

const galleryItems = Object.values(images).map((m, i) => ({
  id: i + 1,
  img: m.default,
  title: `Gallery ${i + 1}`,
}));

const GalleryCard = ({ item, active }) => {
  return (
    <div className={`${styles.galleryCard} ${active ? styles.active : ""}`}>
      <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
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

    // Responsive scroll amounts based on screen width
    if (width <= 380) {
      // Very small mobile - scroll 95% of width
      return width * 0.95;
    } else if (width <= 480) {
      // Small mobile - scroll 90% of width
      return width * 0.9;
    } else if (width <= 640) {
      // Mobile portrait - scroll 85% of width
      return width * 0.85;
    } else if (width <= 768) {
      // Mobile landscape - scroll 80% of width
      return width * 0.8;
    } else if (width <= 1024) {
      // Tablets - scroll 50% of width (one card when 2 visible)
      return width * 0.5;
    } else {
      // Desktop - scroll 33.33% (one card when 3 visible)
      return width * 0.3333;
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
    intervalRef.current = setInterval(autoScroll, 3500);
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
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>
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
