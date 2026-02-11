import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import styles from "./Register.module.css";
import qrImage from "./assets/logo.svg";
import bg from "./assets/register/bg.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Footer from "./components/Footer";

export default function Register() {
  const [designation, setDesignation] = useState("");
  const [isPresenting, setIsPresenting] = useState("");
  const [presentation, setPresentation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [amount, setAmount] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const formRef = useRef(null);

  /* ---------------- Pricing ---------------- */

  const deriveAmount = (designation) => {
    if (["ug", "pg", "phd"].includes(designation)) return 3500;
    if (["faculty", "postdoc"].includes(designation)) return 6500;
    if (designation === "industry") return 8500;
    return null;
  };

  useEffect(() => {
    setAmount(deriveAmount(designation));
  }, [designation]);

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
    if (!form.get("accommodation"))
      errs.accommodation = "Select accommodation option";
    if (!form.get("food")) errs.food = "Select food preference";

    if (form.get("isPresenting") === "yes") {
      if (presentation.length === 0)
        errs.presentation = "Select presentation type";
      if (!form.get("abstractLink"))
        errs.abstractLink = "Provide public Drive link";
    }

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
          }),
        },
      );

      if (!res.ok) throw new Error();

      setShowSuccess(true);
      e.target.reset();
      setPresentation([]);
      setDesignation("");
      setIsPresenting("");
    } catch {
      setShowErrorModal(true);
    }

    setLoading(false);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className={styles.page}>
      <Navbar />
      <div id="home" className={styles.heroSection}>
        <div className={styles.background}>
          <img src={bg} alt="Background" />
        </div>
        <div className={styles.leftColumn}>
          <div className={styles.date}>April 1 - 2 2026, NIT Calicut</div>
          <h1 className={styles.title}>Optix International Conference 2026</h1>
          <p className={styles.description}>
            <HiOutlineLocationMarker />
            NIT Calicut
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Register for Optix</h1>

        <form
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.grid}>
            <div className={styles.field}>
              <input
                className={styles.input}
                name="name"
                placeholder="Full Name"
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>

            <div className={styles.field}>
              <input
                className={styles.input}
                type="email"
                name="email"
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
                <option value="postdoc">Post Doctorate Fellow</option>
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
                />
                {errors.year && (
                  <span className={styles.error}>{errors.year}</span>
                )}
              </div>
            )}

            <div className={`${styles.field} ${styles.fullWidth}`}>
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
              <select className={styles.select} name="accommodation">
                <option value="">Accommodation Required?</option>
                <option value="yes">Yes (amount later)</option>
                <option value="no">No</option>
              </select>
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
              {errors.food && (
                <span className={styles.error}>{errors.food}</span>
              )}
            </div>

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.presentRow}>
                <select
                  className={styles.select}
                  name="isPresenting"
                  value={isPresenting}
                  onChange={(e) => {
                    setIsPresenting(e.target.value);
                    if (e.target.value === "no") setPresentation([]);
                  }}
                >
                  <option value="">Are you presenting?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                <div className={styles.presentationBoxInline}>
                  {isPresenting === "yes" && (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </div>

            {amount && (
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <div className={styles.paymentBox}>
                  <h3>Registration Fee: ₹{amount}</h3>
                  <img src={qrImage} alt="QR" className={styles.qrImage} />
                </div>
              </div>
            )}

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <input
                className={styles.input}
                name="transactionId"
                placeholder="Enter UPI Transaction ID"
              />
              {errors.transactionId && (
                <span className={styles.error}>{errors.transactionId}</span>
              )}
            </div>
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
