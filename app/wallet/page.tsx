// app/wallet/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import BegLoan from "@/components/BegLoan";

export default function WalletPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skyddar mot hydration mismatch
  if (!mounted) return null;

  return (
    <div className="page-wrapper" style={{ padding: "20px" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "1.8rem",
            fontWeight: 900,
          }}
        >
          Ditt saldo
        </h1>
        <div
          style={{
            fontSize: "10px",
            opacity: 0.5,
            fontWeight: 700,
          }}
        >
          Tillgängligt för utbetalning
        </div>
      </header>

      {/* SALDO */}
      <div
        className="glass-card"
        style={{
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          14 250 kr
        </div>

        <button
          className="primary-btn"
          style={{
            marginTop: "16px",
            width: "100%",
            background: "#fff",
            color: "#000",
            padding: "14px",
            borderRadius: "14px",
            fontWeight: 900,
            fontSize: "12px",
          }}
        >
          Gör utbetalning
        </button>
      </div>

      {/* BELÅNING */}
      <BegLoan price={5000} />

      {/* TRANSAKTIONER */}
      <section style={{ marginTop: "30px" }}>
        <h3
          style={{
            fontSize: "12px",
            fontWeight: 900,
            marginBottom: "10px",
          }}
        >
          Senaste transaktioner
        </h3>

        <div
          className="glass-card"
          style={{
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {[
            {
              label: "Såld iPhone 15 Pro",
              amount: "+9 800 kr",
              date: "Idag",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
                borderBottom:
                  i === 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "11px",
                  }}
                >
                  {t.label}
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    opacity: 0.4,
                  }}
                >
                  {t.date}
                </div>
              </div>

              <div
                style={{
                  fontWeight: 900,
                  color: "var(--neon-mint)",
                  fontSize: "11px",
                }}
              >
                {t.amount}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
