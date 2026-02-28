import { useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "./Admin.module.css";

const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const SUPABASE_ADMIN_EMAIL = import.meta.env.VITE_SUPABASE_ADMIN_EMAIL;
const SUPABASE_ADMIN_PASSWORD = import.meta.env.VITE_SUPABASE_ADMIN_PASSWORD;

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [rowCount, setRowCount] = useState(0);

  const columns = useMemo(() => {
    if (!registrations.length) return [];
    return Object.keys(registrations[0]);
  }, [registrations]);

  const fetchRegistrations = async () => {
    setLoading(true);
    setFetchError("");

    let query = supabase.from("registrations").select("*", { count: "exact" });

    // If created_at exists we keep newest-first ordering. If not, retry below.
    query = query.order("created_at", { ascending: false });

    let { data, error, count } = await query;

    if (error?.message?.includes('column "created_at" does not exist')) {
      const retry = await supabase
        .from("registrations")
        .select("*", { count: "exact" });
      data = retry.data;
      error = retry.error;
      count = retry.count;
    }

    if (error) {
      setFetchError(error.message || "Failed to fetch registrations.");
      setRegistrations([]);
      setRowCount(0);
      setLoading(false);
      return;
    }

    const rows = data || [];
    setRegistrations(rows);
    setRowCount(count ?? rows.length);
    setLoading(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
      setAuthError(
        "Admin credentials are not configured. Add VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD in env.",
      );
      return;
    }

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      setAuthError("Invalid username or password.");
      return;
    }

    // Optional: sign into Supabase Auth for tables protected by RLS.
    if (SUPABASE_ADMIN_EMAIL && SUPABASE_ADMIN_PASSWORD) {
      const { error } = await supabase.auth.signInWithPassword({
        email: SUPABASE_ADMIN_EMAIL,
        password: SUPABASE_ADMIN_PASSWORD,
      });

      if (error) {
        setAuthError(`Supabase auth failed: ${error.message}`);
        return;
      }
    }

    setAuthError("");
    setIsAuthenticated(true);
    await fetchRegistrations();
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setRegistrations([]);
    setFetchError("");
    setRowCount(0);
    await supabase.auth.signOut();
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Admin Dashboard</h1>
        <p className={styles.subtitle}>Registrations from Supabase table.</p>

        {!isAuthenticated ? (
          <form className={styles.form} onSubmit={handleLogin}>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </label>

            {authError ? <p className={styles.error}>{authError}</p> : null}

            <button type="submit">Login</button>
          </form>
        ) : (
          <>
            <div className={styles.actions}>
              <button type="button" onClick={fetchRegistrations} disabled={loading}>
                {loading ? "Refreshing..." : "Refresh"}
              </button>
              <button type="button" className={styles.secondary} onClick={handleLogout}>
                Logout
              </button>
            </div>

            {!loading && !fetchError ? (
              <p className={styles.meta}>Rows fetched: {rowCount}</p>
            ) : null}

            {fetchError ? <p className={styles.error}>{fetchError}</p> : null}

            {!loading && !fetchError && registrations.length === 0 ? (
              <p className={styles.empty}>
                No registrations found. If your table uses RLS, set
                VITE_SUPABASE_ADMIN_EMAIL and VITE_SUPABASE_ADMIN_PASSWORD in
                env so this page can authenticate before reading rows.
              </p>
            ) : null}

            {registrations.length > 0 ? (
              <div className={styles.tableWrap}>
                <table>
                  <thead>
                    <tr>
                      {columns.map((column) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((entry, index) => (
                      <tr key={entry.id || `${index}-${JSON.stringify(entry)}`}>
                        {columns.map((column) => (
                          <td key={column}>{String(entry[column] ?? "")}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </>
        )}
      </section>
    </main>
  );
}
