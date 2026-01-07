"use client";
import { useEffect, useState } from "react";

export default function BegLoan({ price = 5000 }: { price?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "25px",
        borderRadius: "24px",
        background: "linear-gradient(145deg, #050505 0%, #0a1510 100%)",
        border: "1px solid rgba(0,255,136,0.2)",
        boxShadow: "0 10px 40px rgba(0,255,136,0.05)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div
            style={{
              fontSize: "8px",
              fontWeight: 900,
              color: "var(--neon-mint)",
              letterSpacing: "1.5px",
            }}
          >
            LIQUIDITY ENGINE
          </div>
          <strong>KARMA-AI Instant Loan</strong>
          <p style={{ fontSize: "10px", opacity: 0.5 }}>
            Baserat på din 98.2% Trust Score.
          </p>
        </div>
        <div style={{ fontSize: "24px" }}>🏦</div>
      </div>

      <div style={{ margin: "15px 0" }}>
        <div style={{ fontSize: "2.2rem", fontWeight: 900 }}>
          {price.toLocaleString("sv-SE")}{" "}
          <span style={{ fontSize: "12px", opacity: 0.4 }}>SEK</span>
        </div>
        <div
          style={{
            display: "inline-block",
            padding: "3px 8px",
            background: "rgba(0,255,136,0.1)",
            borderRadius: "6px",
            fontSize: "8px",
            color: "var(--neon-mint)",
            fontWeight: 900,
          }}
        >
          0% RÄNTA • UTBETALNING DIREKT
        </div>
      </div>

      <button
        className="primary-btn"
        style={{
          background: "var(--neon-mint)",
          color: "#000",
          fontSize: "10px",
        }}
      >
        ANSÖK PÅ 1 SEKUND
      </button>
    </div>
  );
}