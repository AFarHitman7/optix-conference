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
      {/* <p className={styles.caption}>{item.title}</p> */}
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

  const autoScroll = () => {
    const el = carouselRef.current;
    el.scrollBy({
      left: el.offsetWidth / 3,
      behavior: "smooth",
    });
  };

  const scroll = (dir) => {
    const el = carouselRef.current;
    const amount = el.offsetWidth / 3;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = carouselRef.current;
    el.scrollLeft = el.scrollWidth / 3;

    intervalRef.current = setInterval(autoScroll, 3500);

    el.addEventListener("scroll", updateActive);

    return () => {
      clearInterval(intervalRef.current);
      el.removeEventListener("scroll", updateActive);
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
            onMouseEnter={() => clearInterval(intervalRef.current)}
            onMouseLeave={() =>
              (intervalRef.current = setInterval(autoScroll, 3500))
            }
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
