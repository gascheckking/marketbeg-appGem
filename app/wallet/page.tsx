// // app/wallet/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import TopTabs from "@/components/TopTabs";
import BegLoan from "@/components/BegLoan";

export default function WalletPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <TopTabs />

      <div style={{ padding: "30px 20px" }}>
        {/* 1. BIG BALANCE HEADER (Fredde-touch) */}
        <header style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.4, letterSpacing: "2px" }}>
            TILLGÄNGLIGT SALDO
          </div>
          <div style={{ 
            fontSize: "3.5rem", 
            fontWeight: 900, 
            margin: "8px 0", 
            letterSpacing: "-3px",
            display: "flex",
            alignItems: "baseline",
            gap: "8px"
          }}>
            14 250 <span style={{ fontSize: "1.2rem", opacity: 0.4 }}>kr</span>
          </div>
          
          <button style={{
            width: "100%",
            background: "#fff",
            color: "#000",
            border: "none",
            padding: "18px",
            borderRadius: "16px",
            fontWeight: 900,
            fontSize: "14px",
            marginTop: "16px",
            boxShadow: "0 10px 20px rgba(255,255,255,0.05)"
          }}>
            TA UT PENGAR DIREKT
          </button>
        </header>

        {/* 2. BEG LOAN - Din special-modul */}
        <div style={{ marginBottom: "32px" }}>
          <BegLoan price={5000} />
        </div>

        {/* 3. TRANSACTION HISTORY (Spotify Look) */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: 900, opacity: 0.5 }}>HISTORIK</h3>
            <span style={{ fontSize: "11px", fontWeight: 700, opacity: 0.3 }}>VISA ALLA</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Såld iPhone 15 Pro", amount: "+9 800 kr", date: "Idag 12:45", type: "IN" },
              { label: "Utbetalning Bank", amount: "-5 000 kr", date: "Igår", type: "OUT" },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 20px",
                  background: "#121212",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.03)"
                }}
              >
                <div>
                  <div style={{ fontWeight: 900, fontSize: "14px", marginBottom: "2px" }}>{t.label}</div>
                  <div style={{ fontSize: "10px", opacity: 0.4, fontWeight: 700 }}>{t.date}</div>
                </div>

                <div style={{
                  fontWeight: 900,
                  fontSize: "14px",
                  color: t.type === "IN" ? "#1DB954" : "#fff"
                }}>
                  {t.amount}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
