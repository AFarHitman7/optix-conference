import { useEffect, useState } from "react";

export default function Success() {
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const pending = sessionStorage.getItem("pendingPayment");

    if (!pending) {
      setStatus("missing");
      return;
    }

    const { transactionId } = JSON.parse(pending);

    console.log("Verifying transaction:", transactionId);

    const verify = async () => {
      const res = await fetch(
        "https://bnjxlenjjcouhxxnzmtq.supabase.co/functions/v1/phonepe-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ transactionId }),
        },
      );

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const data = await res.json();

      if (data.success) {
        sessionStorage.removeItem("pendingPayment");
        setStatus("success");
      } else {
        setStatus("failed");
      }
    };

    verify();
  }, []);

  if (status === "verifying") return <p>Verifying payment…</p>;
  if (status === "success")
    return <p>Payment successful. Registration confirmed.</p>;
  if (status === "failed") return <p>Payment not completed.</p>;
  if (status === "missing") return <p>Invalid session.</p>;
  return <p>Something went wrong.</p>;
}
