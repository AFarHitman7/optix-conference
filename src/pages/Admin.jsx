import { useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "./Admin.module.css";

const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const columns = useMemo(() => {
    if (!registrations.length) return [];
    return Object.keys(registrations[0]);
  }, [registrations]);

  const fetchRegistrations = async () => {
    setLoading(true);
    setFetchError("");

    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setFetchError(error.message || "Failed to fetch registrations.");
      setRegistrations([]);
      setLoading(false);
      return;
    }

    setRegistrations(data || []);
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

    setAuthError("");
    setIsAuthenticated(true);
    await fetchRegistrations();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setRegistrations([]);
    setFetchError("");
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

            {fetchError ? <p className={styles.error}>{fetchError}</p> : null}

            {!loading && !fetchError && registrations.length === 0 ? (
              <p className={styles.empty}>No registrations found.</p>
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
                    {registrations.map((entry) => (
                      <tr key={entry.id || JSON.stringify(entry)}>
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
