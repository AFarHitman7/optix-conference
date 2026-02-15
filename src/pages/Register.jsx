import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import styles from "./Register.module.css";
import qrImage from "./assets/register/image.png";
import bg from "./assets/register/bg.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Footer from "./components/Footer";

export default function Register() {
  const [designation, setDesignation] = useState("");
  const [isOpticaMember, setIsOpticaMember] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [isPresenting, setIsPresenting] = useState("");
  const [presentation, setPresentation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [amount, setAmount] = useState(null);
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/about") {
      navigate("/about", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const formRef = useRef(null);

  // Early Bird deadline - March 22, 2026
  const EARLY_BIRD_DEADLINE = new Date("2026-03-22T23:59:59");
  const isEarlyBird = new Date() <= EARLY_BIRD_DEADLINE;

  /* ---------------- Pricing ---------------- */

  const deriveAmount = (designation, isOpticaMember) => {
    const isMember = isOpticaMember === "yes";
    const isEarly = isEarlyBird;

    // Students (UG/PG/PhD)
    if (["ug", "pg", "phd"].includes(designation)) {
      if (isMember) {
        return isEarly ? 2950 : 3894;
      }
      return isEarly ? 3540 : 4484;
    }

    // Faculty/Scientists/Postdocs
    if (["faculty", "postdoc", "scientist"].includes(designation)) {
      if (isMember) {
        return isEarly ? 5900 : 7080;
      }
      return isEarly ? 6490 : 7788;
    }

    // Industry
    if (designation === "industry") {
      if (isMember) {
        return isEarly ? 8260 : 9440;
      }
      return isEarly ? 8850 : 10030;
    }

    return null;
  };

  const isNitcEmail = email.trim().toLowerCase().endsWith("@nitc.ac.in");

  useEffect(() => {
    const baseAmount = deriveAmount(designation, isOpticaMember);

    if (!baseAmount) {
      setAmount(null);
      return;
    }

    setAmount(isNitcEmail ? Math.round(baseAmount / 1.18) : baseAmount);
  }, [designation, isOpticaMember, isNitcEmail]);

  /* ---------------- Validation ---------------- */

  const validate = (form) => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.get("name")?.trim()) errs.name = "Name required";
    if (!emailRegex.test(form.get("email") || ""))
      errs.email = "Valid email required";
    if (!phoneRegex.test(form.get("contact") || ""))
      errs.contact = "Enter valid 10 digit number";
    if (!form.get("designation")) errs.designation = "Select designation";

    if (
      ["ug", "pg", "phd"].includes(form.get("designation")) &&
      !form.get("year")
    ) {
      errs.year = "Year required";
    }

    if (!form.get("institute")) errs.institute = "Institute required";
    if (!form.get("isOpticaMember"))
      errs.isOpticaMember = "Select Optica membership status";

    if (form.get("isOpticaMember") === "yes" && !form.get("opticaId")) {
      errs.opticaId = "Optica ID required";
    }

    if (!form.get("accommodation"))
      errs.accommodation = "Select accommodation option";
    if (!form.get("food")) errs.food = "Select food preference";

    if (form.get("isPresenting") === "yes") {
      if (presentation.length === 0)
        errs.presentation = "Select presentation type";
    }

    if (!form.get("transactionType"))
      errs.transactionType = "Select transaction type";
    if (!form.get("transactionId"))
      errs.transactionId = "Transaction ID required";

    return errs;
  };

  /* ---------------- Scroll + Focus First Error ---------------- */

  const focusFirstError = (errs) => {
    const firstKey = Object.keys(errs)[0];
    if (!firstKey) return;

    const element = formRef.current?.querySelector(`[name="${firstKey}"]`);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.focus();
    }
  };

  /* ---------------- Handlers ---------------- */

  const togglePresentation = (value) => {
    setPresentation((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      focusFirstError(validationErrors);
      setLoading(false);
      return;
    }

    setErrors({});
    const formData = Object.fromEntries(form.entries());

    try {
      const res = await fetch(
        "https://bnjxlenjjcouhxxnzmtq.supabase.co/functions/v1/clever-task",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            ...formData,
            amount,
            presentation,
            isEarlyBird,
          }),
        },
      );

      if (!res.ok) throw new Error();

      setShowSuccess(true);
      e.target.reset();
      setPresentation([]);
      setDesignation("");
      setIsOpticaMember("");
      setAccommodation("");
      setIsPresenting("");
      setEmail("");
    } catch {
      setShowErrorModal(true);
    }

    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <div id="home" className={styles.heroSection}>
        <div className={styles.background}>
          <img src={bg} alt="Background" />
        </div>
        <div className={styles.leftColumn}>
          <div className={styles.date}>April 1 - 2 2026, NIT Calicut</div>
          <h1 className={styles.title}>OPTIX 2026</h1>
          <p className={styles.description}>
            <HiOutlineLocationMarker />
            NIT Calicut
          </p>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.mouse}>
            <span className={styles.wheel}></span>
          </span>
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Fill the form to join the event.</h1>
          <p className={styles.subtitle}>
            Register to participate in OPTIX 2026 International Conference on
            Optics, Lasers & Photonics.
          </p>
          <p className={styles.abstractLinkWrapper}>
            Want full abstract guidelines?{" "}
            <a
              onClick={() => {
                navigate("/abstract");
              }}
              className={styles.abstractLink}
              style={{ cursor: "pointer" }}
            >
              View details →
            </a>
          </p>
          <p className={styles.abstractLinkWrapper}>
            See Fee Structure{" "}
            <a
              onClick={() => scrollToSection("fees")}
              style={{ cursor: "pointer" }}
              className={styles.abstractLink}
            >
              View details →
            </a>
          </p>
          {isEarlyBird && (
            <div className={styles.earlyBirdBanner}>
              🎉 Early Bird Registration Available Until March 22, 2026
            </div>
          )}
        </div>
        <form
          id="registerForm"
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.field}>
            <input
              className={styles.input}
              name="name"
              placeholder="Full Name"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <input
              className={styles.input}
              name="contact"
              placeholder="Contact Number"
            />
            {errors.contact && (
              <span className={styles.error}>{errors.contact}</span>
            )}
          </div>

          <div className={styles.field}>
            <select
              className={styles.select}
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="">Select Designation</option>
              <option value="ug">Student (UG)</option>
              <option value="pg">Student (PG)</option>
              <option value="phd">PhD Scholar</option>
              <option value="postdoc">Post Doctoral Fellow</option>
              <option value="scientist">Scientist</option>
              <option value="faculty">Faculty</option>
              <option value="industry">Industry Expert</option>
            </select>
            {errors.designation && (
              <span className={styles.error}>{errors.designation}</span>
            )}
          </div>

          {["ug", "pg", "phd"].includes(designation) && (
            <div className={styles.field}>
              <input
                className={styles.input}
                type="number"
                name="year"
                placeholder="Current Year"
                min={1}
                max={7}
              />
              {errors.year && (
                <span className={styles.error}>{errors.year}</span>
              )}
            </div>
          )}

          <div className={`${styles.field} ${styles.full}`}>
            <input
              className={styles.input}
              name="institute"
              placeholder="Institute / Industry Name"
            />
            {errors.institute && (
              <span className={styles.error}>{errors.institute}</span>
            )}
          </div>

          <div className={styles.field}>
            <select
              className={styles.select}
              name="isOpticaMember"
              value={isOpticaMember}
              onChange={(e) => setIsOpticaMember(e.target.value)}
            >
              <option value="">Are you an OPTICA member?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.isOpticaMember && (
              <span className={styles.error}>{errors.isOpticaMember}</span>
            )}
          </div>

          {isOpticaMember === "yes" && (
            <div className={styles.field}>
              <input
                className={styles.input}
                name="opticaId"
                placeholder="OPTICA Member ID"
              />
              {errors.opticaId && (
                <span className={styles.error}>{errors.opticaId}</span>
              )}
            </div>
          )}

          <div className={styles.field}>
            <select
              className={styles.select}
              name="accommodation"
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
            >
              <option value="">Accommodation Required?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {accommodation === "yes" && (
              <span className={styles.note}>
                Accommodation is subject to availability; payment will be
                initiated later.
              </span>
            )}
            {errors.accommodation && (
              <span className={styles.error}>{errors.accommodation}</span>
            )}
          </div>

          <div className={styles.field}>
            <select className={styles.select} name="food">
              <option value="">Food Preference</option>
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non Vegetarian</option>
            </select>
            {errors.food && <span className={styles.error}>{errors.food}</span>}
          </div>

          <div className={`${styles.field} ${styles.full}`}>
            <div className={styles.presentRow}>
              <select
                className={styles.select}
                name="isPresenting"
                value={isPresenting}
                onChange={(e) => {
                  setIsPresenting(e.target.value);
                  if (e.target.value === "no") {
                    setPresentation([]);
                  }
                }}
              >
                <option value="">Are you presenting?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              {isPresenting === "yes" && (
                <div className={styles.presentationBoxInline}>
                  <label className={styles.checkboxCard}>
                    <input
                      type="checkbox"
                      checked={presentation.includes("paper")}
                      onChange={() => togglePresentation("paper")}
                    />
                    Paper
                  </label>

                  <label className={styles.checkboxCard}>
                    <input
                      type="checkbox"
                      checked={presentation.includes("oral")}
                      onChange={() => togglePresentation("oral")}
                    />
                    Oral
                  </label>
                </div>
              )}
            </div>

            {errors.presentation && (
              <span className={styles.error}>{errors.presentation}</span>
            )}
          </div>

          {amount && (
            <div className={`${styles.field} ${styles.full}`}>
              <div className={styles.paymentBox}>
                <h3>
                  Registration Fee: ₹{amount}
                  {isEarlyBird && (
                    <span className={styles.earlyBirdTag}>Early Bird</span>
                  )}
                </h3>
                <img src={qrImage} alt="QR" className={styles.qrImage} />
                <div className={styles.bankDetails}>
                  <h4>Bank Account Details</h4>
                  <div className={styles.bankInfo}>
                    <p>
                      <strong>Merchant Name:</strong> DIRECTOR NIT CALICUT
                    </p>
                    <p>
                      <strong>UPI ID Prefix:</strong> OPTIX26
                    </p>
                    <p>
                      <strong>Account No:</strong> 43189409019
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> SBIN0002207
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={styles.field}>
            <select className={styles.select} name="transactionType">
              <option value="">Transaction Type</option>
              <option value="upi">UPI</option>
              <option value="netbanking">NetBanking</option>
              <option value="card">Card</option>
            </select>
            {errors.transactionType && (
              <span className={styles.error}>{errors.transactionType}</span>
            )}
          </div>

          <div className={styles.field}>
            <input
              className={styles.input}
              name="transactionId"
              placeholder="Enter Transaction ID"
            />
            {errors.transactionId && (
              <span className={styles.error}>{errors.transactionId}</span>
            )}
          </div>

          <button className={styles.submit} disabled={loading}>
            {loading ? "Submitting…" : "Register"}
          </button>
        </form>
      </div>
      <Footer />

      {/* Success Modal */}
      {showSuccess && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowSuccess(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Registration Submitted</h2>

            <p className={styles.modalText}>
              Your registration has been successfully submitted. Our team will
              verify your payment and contact you shortly.
            </p>

            <button
              className={styles.modalButton}
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowErrorModal(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Submission Failed</h2>

            <p className={styles.modalText}>
              Something went wrong while submitting your registration. Please
              try again.
            </p>

            <button
              className={styles.modalButton}
              onClick={() => setShowErrorModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
