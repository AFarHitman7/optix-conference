import { useState } from "react";
import styles from "./EventSchedule.module.css";

const scheduleData = {
  day01: [
    {
      time: "9:00 - 10:30",
      location: "Main Hall",
      title: "APARAJITA BANDYAPADHYAY",
      subtitle: "(Goethe - Universität Frankfurt, Germany)",
      event: "Inauguration & Keynote Address",
    },
    {
      time: "10:45 - 12:00",
      location: "Main Hall",
      title: "Prof. Pavan Kumar GV",
      subtitle: "Department of Physics, IISER Pune",
      event: "Plenary Talks",
    },
    {
      time: "12:00 - 13:00",
      location: "Main Hall",
      title: "Prof. Chennupati Jagadish",
      subtitle: "The Australian National University, Canberra ",
      event: "Plenary Talks",
    },
    {
      time: "14:00 - 14:45",
      location: "",
      title: "CHAIR: DR. ANIRBAN SANKAR",
      subtitle: "Asst. Professor, PHY, NIT Calicut",
      event: "Keynote Talk",
    },
    {
      time: "14:45 - 15:45",
      location: "Room 1: Laser & Laser Technology",
      title: "",
      subtitle: "",
      event: "Oral Presentations",
    },
    {
      time: "14:00 - 14:45",
      location: "",
      title: "CHAIR: DR. NATESAN YOGESH",
      subtitle: "Asst. Professor, PHY, NIT Calicut",
      event: "Keynote Talk",
    },
    {
      time: "14:45 - 15:45",
      location: "Room 2: Metamaterials & Photonic Crystals",
      title: "",
      subtitle: "",
      event: "Oral Presentations",
    },
  ],
  day02: [
    {
      time: "9:00 - 10:30",
      location: "Main Hall",
      title: "Day 2 Speaker",
      subtitle: "(University Name)",
      event: "Morning Session",
    },
    // Add more day 2 events here
  ],
};

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState("day01");

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Event Schedule</h2>
          <p className={styles.dateRange}>01 - 02 APRIL '26</p>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeDay === "day01" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveDay("day01")}
          >
            DAY 01
          </button>
          <button
            className={`${styles.tab} ${
              activeDay === "day02" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveDay("day02")}
          >
            DAY 02
          </button>
        </div>

        <div className={styles.scheduleList}>
          {scheduleData[activeDay].map((item, index) => (
            <div
              key={index}
              className={`${styles.scheduleItem} ${
                item.isBreak ? styles.breakItem : ""
              }`}
            >
              <div className={styles.timeSection}>
                <span className={styles.time}>{item.time}</span>
                {item.location && (
                  <span className={styles.location}>{item.location}</span>
                )}
              </div>

              <div className={styles.detailsSection}>
                {item.title && (
                  <div className={styles.titleGroup}>
                    <h3
                      className={`${styles.eventTitle} ${
                        item.isBreak ? styles.breakTitle : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className={styles.subtitle}>{item.subtitle}</p>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.eventSection}>
                {item.event && (
                  <span className={styles.eventType}>{item.event}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.downloadSection}>
          <button className={styles.downloadButton}>
            Download Brochure
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 11L4 7H7V3H9V7H12L8 11Z" fill="currentColor" />
              <path d="M3 13H13V15H3V13Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
