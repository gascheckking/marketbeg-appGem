// // app/wallet/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import BegLoan from "@/components/BegLoan";

export default function WalletPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: "40px" }}>
        <div className="text-small" style={{ opacity: 0.4 }}>TILLGÄNGLIGT SALDO</div>
        <div style={{ 
          fontSize: "3.5rem", fontWeight: 900, margin: "10px 0", letterSpacing: "-3px",
          display: "flex", alignItems: "baseline", gap: "10px"
        }}>
          14 250 <span style={{ fontSize: "1.2rem", opacity: 0.3 }}>SEK</span>
        </div>
        
        <button className="primary-btn" style={{ background: '#fff', color: '#000' }}>
          TA UT PENGAR DIREKT
        </button>
      </header>

      <div style={{ marginBottom: "40px" }}>
        <BegLoan price={5000} />
      </div>

      <section>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "12px", fontWeight: 900, opacity: 0.5, letterSpacing: '1px' }}>HISTORIK</h3>
          <span style={{ fontSize: "10px", fontWeight: 900, color: 'var(--karma-green)' }}>VISA ALLA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { label: "Såld iPhone 15 Pro", amount: "+9 800 kr", date: "Idag 12:45", type: "IN" },
            { label: "Utbetalning Bank", amount: "-5 000 kr", date: "Igår", type: "OUT" },
          ].map((t, i) => (
            <div key={i} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: "14px" }}>{t.label}</div>
                <div style={{ fontSize: "10px", opacity: 0.4, fontWeight: 700 }}>{t.date}</div>
              </div>
              <div style={{ fontWeight: 900, fontSize: "14px", color: t.type === "IN" ? "var(--karma-green)" : "#fff" }}>
                {t.amount}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
