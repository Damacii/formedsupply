"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import styles from "./AdminLoginPrompt.module.css";

export default function AdminLoginPrompt({
  title = "Admin access",
  description = "Please sign in to continue."
}: {
  title?: string;
  description?: string;
}) {
  const [mode, setMode] = useState<"magic" | "password">("magic");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setLoading(true);

    const { error } =
      mode === "magic"
        ? await supabase.auth.signInWithOtp({
            email,
            options: {
              emailRedirectTo: `${window.location.origin}/admin`
            }
          })
        : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setStatus(error.message);
    } else {
      setStatus(
        mode === "magic"
          ? "Check your email for a sign-in link."
          : "Signed in successfully."
      );
    }

    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <div className={`container ${styles.card}`}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.modeToggle}>
          <button
            type="button"
            className={mode === "magic" ? styles.modeActive : styles.modeButton}
            onClick={() => setMode("magic")}
          >
            Magic link
          </button>
          <button
            type="button"
            className={mode === "password" ? styles.modeActive : styles.modeButton}
            onClick={() => setMode("password")}
          >
            Password
          </button>
        </div>
        <form className={styles.form} onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@damacii.com"
              required
            />
          </label>
          {mode === "password" && (
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
          )}
          {status && <p className={styles.status}>{status}</p>}
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading
              ? "Sending..."
              : mode === "magic"
              ? "Send sign-in link"
              : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
