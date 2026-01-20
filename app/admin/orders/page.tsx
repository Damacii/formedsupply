"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabaseClient";
import AdminLoginPrompt from "../../../components/AdminLoginPrompt";
import styles from "./OrdersPage.module.css";

type Role = "admin" | "user" | "guest";

type RequestRow = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  product_interest: string | null;
  quantity: string | null;
  message: string | null;
  created_at: string;
  status: string | null;
};

export default function AdminOrdersPage() {
  const [loading, setLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);
  const [role, setRole] = useState<Role>("guest");
  const [requests, setRequests] = useState<RequestRow[]>([]);
  const [requestsLoading, setRequestsLoading] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (!user) {
        setHasUser(false);
        setRole("guest");
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      setHasUser(true);
      setRole((profile?.role as Role) || "user");
      setLoading(false);
    };

    loadUser();
  }, []);

  useEffect(() => {
    const loadRequests = async () => {
      setRequestsLoading(true);
      const { data, error } = await supabase
        .from("requests")
        .select(
          "id, name, email, company, product_interest, quantity, message, created_at, status"
        )
        .order("created_at", { ascending: false })
        .limit(20);

      if (!error && data) {
        setRequests(data as RequestRow[]);
      }
      setRequestsLoading(false);
    };

    if (role === "admin") {
      loadRequests();
    }
  }, [role]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin";
  };

  if (loading) {
    return (
      <div className={styles.page}>
        <div className="container">Loading...</div>
      </div>
    );
  }

  if (!hasUser) {
    return <AdminLoginPrompt title="Admin login" description="Sign in to view orders." />;
  }

  if (role !== "admin") {
    return (
      <div className={styles.page}>
        <div className="container">
          <h1>Access denied</h1>
          <p>You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Admin Hub</p>
            <h1>Orders & Requests</h1>
            <p className={styles.subhead}>
              Track inbound quote requests and purchase orders.
            </p>
          </div>
          <div className={styles.headerActions}>
            <Link className="btn btn-secondary" href="/admin">
              Back to Hub
            </Link>
            <button className="btn btn-secondary" type="button" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2>New Requests</h2>
            <span className={styles.countBadge}>
              {requestsLoading ? "…" : requests.length}
            </span>
          </div>
          {requests.length === 0 && !requestsLoading ? (
            <p className={styles.empty}>
              No new requests yet. Incoming submissions will appear here.
            </p>
          ) : (
            <div className={styles.orderList}>
              {requests.map((request) => (
                <article key={request.id} className={styles.orderCard}>
                  <div className={styles.orderHeader}>
                    <div>
                      <p className={styles.orderTitle}>{request.name}</p>
                      <p className={styles.orderMeta}>
                        {request.company ?? "Independent operator"} · {request.email}
                      </p>
                    </div>
                    <span className={styles.orderStatus}>
                      {request.status ?? "New"}
                    </span>
                  </div>
                  <p className={styles.orderDetails}>
                    {request.product_interest ?? "General inquiry"}
                    {request.quantity ? ` · ${request.quantity}` : ""}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
