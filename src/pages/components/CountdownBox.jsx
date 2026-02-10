import { useEffect, useState } from "react";
import styles from "./CountdownBox.module.css";
import cdbg from "../assets/about/cdbg.png";

const TARGET_DATE = new Date("2026-02-20T09:00:00");

function getTimeLeft() {
  const diff = TARGET_DATE - new Date();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownBox() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <div className={styles.imgWrap}>
          <img src={cdbg} alt="background" className={styles.bgImg} />
        </div>
        <p className={styles.label}>Countdown To</p>
        <h2 className={styles.title}>OPTIX 2026</h2>
      </div>

      <div className={styles.right}>
        {Object.entries(time).map(([k, v]) => (
          <div key={k} className={styles.unit}>
            <span className={styles.value}>{v}</span>
            <small className={styles.caption}>{k}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
