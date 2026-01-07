// app/wallet/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import BegLoan from "@/components/BegLoan";

export default function Wallet() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="page-wrapper" style={{ padding: 20 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 900 }}>
          Ditt saldo
        </h1>
        <div style={{ fontSize: 10, opacity: 0.5 }}>
          Tillgängligt för utbetalning
        </div>
      </header>

      <div className="glass-card" style={{ padding: 20, marginBottom: 20 }}>
        <div style={{ fontSize: 28, fontWeight: 900 }}>
          14 250 kr
        </div>
        <button style={{
          marginTop: 16,
          width: "100%",
          background: "#fff",
          color: "#000",
          border: "none",
          padding: "14px",
          borderRadius: 14,
          fontWeight: 900
        }}>
          Gör utbetalning
        </button>
      </div>

      <BegLoan price={5000} />

      <section style={{ marginTop: 30 }}>
        <h3 style={{ fontSize: 12, fontWeight: 900, marginBottom: 10 }}>
          Senaste transaktioner
        </h3>

        <div className="glass-card">
          {[
            { label: "Såld iPhone 15 Pro", amount: "+9 800 kr", date: "Idag" }
          ].map((t, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 16,
              borderBottom: "1px solid rgba(255,255,255,0.04)"
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 11 }}>{t.label}</div>
                <div style={{ fontSize: 9, opacity: 0.4 }}>{t.date}</div>
              </div>
              <div style={{ fontWeight: 900, color: "var(--neon-mint)" }}>
                {t.amount}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
