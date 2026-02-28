import { createClient } from "@supabase/supabase-js";
import { useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import styles from "./Admin.module.css";

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://bnjxlenjjcouhxxnzmtq.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function createAuthedClient(accessToken) {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
}

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [rowCount, setRowCount] = useState(0);

  const columns = useMemo(() => {
    if (!registrations.length) return [];
    return Object.keys(registrations[0]);
  }, [registrations]);

  const fetchRegistrations = async (token = accessToken) => {
    setLoading(true);
    setFetchError("");

    const client = token ? createAuthedClient(token) : supabase;

    let query = client.from("registrations").select("*", { count: "exact" });
    query = query.order("created_at", { ascending: false });

    let { data, error, count } = await query;

    if (error?.message?.includes('column "created_at" does not exist')) {
      const retry = await client
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
    setAuthError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(`Supabase auth failed: ${error.message}`);
      return;
    }

    const token = data.session?.access_token;

    if (!token) {
      setAuthError("Supabase auth succeeded but no access token was returned.");
      return;
    }

    setAccessToken(token);
    setIsAuthenticated(true);
    await fetchRegistrations(token);
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
    setAccessToken("");
    setRegistrations([]);
    setFetchError("");
    setRowCount(0);
    await supabase.auth.signOut();
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Admin Dashboard</h1>
        <p className={styles.subtitle}>Sign in with Supabase Auth to view registrations.</p>

        {!isAuthenticated ? (
          <form className={styles.form} onSubmit={handleLogin}>
            <label>
              Admin email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
                required
              />
            </label>

            <label>
              Admin password
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
              <button type="button" onClick={() => fetchRegistrations()} disabled={loading}>
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
                No registrations found. If the table has rows, check your RLS
                policy allows the authenticated admin user to `select` rows.
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
