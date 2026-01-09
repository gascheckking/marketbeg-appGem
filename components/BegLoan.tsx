// // components/BegLoan.tsx
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
        borderRadius: "28px", // Något rundare för modernare look
        background: "linear-gradient(145deg, #050505 0%, #0a1510 100%)",
        border: "1px solid rgba(0,255,136,0.15)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div
            style={{
              fontSize: "9px",
              fontWeight: 900,
              color: "var(--neon-mint)",
              letterSpacing: "1.5px",
              marginBottom: "4px"
            }}
          >
            LIQUIDITY ENGINE
          </div>
          <div style={{ fontSize: "16px", fontWeight: 900 }}>KARMA-AI Instant Loan</div>
          <p style={{ fontSize: "11px", opacity: 0.5, marginTop: "4px" }}>
            Baserat på din 98.2% Trust Score.
          </p>
        </div>
        <div style={{ fontSize: "28px" }}>🏦</div>
      </div>

      <div style={{ margin: "20px 0" }}>
        <div style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: "-2px" }}>
          {price.toLocaleString("sv-SE")}{" "}
          <span style={{ fontSize: "14px", opacity: 0.3 }}>SEK</span>
        </div>
        <div
          style={{
            marginTop: "8px",
            display: "inline-block",
            padding: "4px 10px",
            background: "rgba(0,255,136,0.08)",
            borderRadius: "8px",
            fontSize: "9px",
            color: "var(--neon-mint)",
            fontWeight: 900,
            letterSpacing: "0.5px"
          }}
        >
          0% RÄNTA • UTBETALNING DIREKT
        </div>
      </div>

      <button
        style={{
          width: "100%",
          background: "var(--neon-mint)",
          color: "#000",
          fontSize: "13px",
          fontWeight: 900,
          padding: "16px",
          borderRadius: "14px",
          border: "none",
          cursor: "pointer",
          transition: "0.2s ease",
          boxShadow: "0 10px 20px rgba(0,255,136,0.1)"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        ANSÖK PÅ 1 SEKUND
      </button>
    </div>
  );
}
