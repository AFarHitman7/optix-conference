import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import styles from "./Register.module.css";

export default function Register2() {
  const [designation, setDesignation] = useState("");
  const [isPresenting, setIsPresenting] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState("");
  const [verifying, setVerifying] = useState(false);

  /* ---------------- validation ---------------- */

  const validate = (form) => {
    const errs = {};

    if (!form.get("name")?.trim()) errs.name = "Full name is required";
    if (!form.get("email")?.trim()) errs.email = "Email is required";
    if (!form.get("contact")?.trim())
      errs.contact = "Contact number is required";
    if (!form.get("designation")) errs.designation = "Select a designation";
    if (!form.get("institute")?.trim())
      errs.institute = "Institute is required";
    if (!form.get("presentation"))
      errs.presentation = "Select presentation option";

    if (
      (form.get("designation") === "phd" ||
        form.get("designation") === "postdoc") &&
      !form.get("year")
    ) {
      errs.year = "Current year is required";
    }

    if (form.get("presentation") !== "none" && !form.get("abstractLink")) {
      errs.abstractLink = "Abstract link is required";
    }

    return errs;
  };

  /* ---------------- payment helpers (PhonePe) ---------------- */

  const getPaymentAmount = (designation) => {
    if (designation === "ug" || designation === "pg") return 10;
    return 20;
  };

  const startPayment = async (formData) => {
    const amount = getPaymentAmount(formData.designation);
    const transactionId = `OPTIX_${Date.now()}`;

    // 1. Create pending registration
    const createRes = await fetch(
      "https://bnjxlenjjcouhxxnzmtq.supabase.co/functions/v1/clever-task",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          transactionId,
          formData,
          amount,
        }),
      },
    );

    if (!createRes.ok) {
      setShowError("Failed to create registration");
      setLoading(false);
      return;
    }

    sessionStorage.setItem("pendingPayment", JSON.stringify({ transactionId }));

    // 2. Create PhonePe order
    const orderRes = await fetch(
      "https://bnjxlenjjcouhxxnzmtq.supabase.co/functions/v1/phonepe-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          amount: amount * 100,
          transactionId,
        }),
      },
    );

    if (!orderRes.ok) {
      setShowError("Failed to initiate payment");
      setLoading(false);
      return;
    }

    const { redirectUrl } = await orderRes.json();
    window.location.href = redirectUrl;
  };

  /* ---------------- submit ---------------- */

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    setErrors({});
    const formData = Object.fromEntries(form.entries());
    startPayment(formData);
  };

  /* ---------------- payment verification after redirect ---------------- */

  useEffect(() => {
    const pending = sessionStorage.getItem("pendingPayment");
    if (!pending) return;

    const { transactionId, formData } = JSON.parse(pending);

    const verify = async () => {
      setVerifying(true);

      const res = await fetch(
        "https://bnjxlenjjcouhxxnzmtq.supabase.co/functions/v1/phonepe-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            transactionId,
            formData,
          }),
        },
      );

      setVerifying(false);
      setLoading(false);

      if (!res.ok) {
        setShowError("Payment verification failed");
        return;
      }

      const data = await res.json();

      if (data.success) {
        sessionStorage.removeItem("pendingPayment");
        setShowSuccess(true);
      } else {
        setShowError("Payment not completed");
      }
    };

    verify();
  }, []);

  /* ---------------- ESC close ---------------- */

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSuccess(false);
        setShowError("");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!verifying) return;

    const warn = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [verifying]);

  /* ---------------- UI ---------------- */

  return (
    <div className={styles.page}>
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>Register for Optix</h1>
        <p className={styles.subtitle}>Sign up to join the IIT Conference.</p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input className={styles.input} name="name" placeholder="Full Name" />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <input
            className={styles.input}
            name="contact"
            placeholder="Contact Number"
          />
          {errors.contact && (
            <span className={styles.error}>{errors.contact}</span>
          )}

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
            <option value="faculty">Faculty</option>
            <option value="industry">Industry Expert</option>
          </select>
          {errors.designation && (
            <span className={styles.error}>{errors.designation}</span>
          )}

          {(designation === "phd" || designation === "postdoc") && (
            <>
              <input
                className={styles.input}
                type="number"
                name="year"
                placeholder="Current Year"
                min="1"
              />
              {errors.year && (
                <span className={styles.error}>{errors.year}</span>
              )}
            </>
          )}

          <input
            className={styles.input}
            name="institute"
            placeholder="Institute / Industry Name"
          />
          {errors.institute && (
            <span className={styles.error}>{errors.institute}</span>
          )}

          <select
            className={styles.select}
            name="presentation"
            value={isPresenting}
            onChange={(e) => setIsPresenting(e.target.value)}
          >
            <option value="">Are you presenting a paper or poster?</option>
            <option value="none">No</option>
            <option value="paper">Paper</option>
            <option value="poster">Poster</option>
          </select>
          {errors.presentation && (
            <span className={styles.error}>{errors.presentation}</span>
          )}

          {isPresenting !== "none" && isPresenting !== "" && (
            <>
              <input
                className={styles.input}
                type="url"
                name="abstractLink"
                placeholder="Google Drive link to abstract"
              />
              {errors.abstractLink && (
                <span className={styles.error}>{errors.abstractLink}</span>
              )}
            </>
          )}

          <p className={styles.helper}>
            Payment amount will be determined based on your designation.
          </p>

          <button className={styles.submit} disabled={loading}>
            {loading ? "Processing…" : "Register & Pay"}
          </button>
        </form>
      </div>

      {showSuccess && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowSuccess(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Registration Successful</h2>
            <p className={styles.modalText}>
              Payment completed and registration confirmed.
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

      {showError && (
        <div className={styles.modalOverlay} onClick={() => setShowError("")}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Something went wrong</h2>
            <p className={styles.modalText}>{showError}</p>
            <button
              className={styles.modalButton}
              onClick={() => setShowError("")}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {verifying && (
        <div className={styles.verifyingOverlay}>
          <div className={styles.verifyingBox}>
            <div className={styles.spinner} />
            <p>Verifying your payment…</p>
            <span>Do not refresh or close this page</span>
          </div>
        </div>
      )}
    </div>
  );
}
