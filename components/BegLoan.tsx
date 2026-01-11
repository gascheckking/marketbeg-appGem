// // components/BegLoan.tsx
"use client";
import { useEffect, useState } from "react";

export default function BegLoan({ price = 5000 }: { price?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div style={{
      padding: "30px",
      borderRadius: "32px",
      background: "linear-gradient(145deg, #050505 0%, #0a1510 100%)",
      border: "1px solid rgba(29, 185, 84, 0.15)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: "9px", fontWeight: 900, color: "var(--karma-green)", letterSpacing: "2px", marginBottom: "6px" }}>
            LIQUIDITY ENGINE v2
          </div>
          <div style={{ fontSize: "18px", fontWeight: 900 }}>KARMA-AI Instant Loan</div>
          <p style={{ fontSize: "11px", opacity: 0.5, marginTop: "6px", fontWeight: 600 }}>
            Baserat på din 98.2% Trust Score.
          </p>
        </div>
        <div style={{ fontSize: "32px", filter: "drop-shadow(0 0 10px var(--karma-green))" }}>🏦</div>
      </div>

      <div style={{ margin: "25px 0" }}>
        <div style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-3px" }}>
          {price.toLocaleString("sv-SE")} <span style={{ fontSize: "16px", opacity: 0.3, letterSpacing: "0" }}>SEK</span>
        </div>
        <div style={{
          marginTop: "12px",
          display: "inline-block",
          padding: "6px 12px",
          background: "rgba(29, 185, 84, 0.1)",
          borderRadius: "10px",
          fontSize: "10px",
          color: "var(--karma-green)",
          fontWeight: 900
        }}>
          0% RÄNTA • RELEASE Q1 2027
        </div>
      </div>

      <button className="primary-btn" style={{ background: 'var(--karma-green)', color: '#000' }}>
        RESERVERA DIN PLATS
      </button>
    </div>
  );
}
