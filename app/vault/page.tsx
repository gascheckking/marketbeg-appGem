// // app/vault/page.tsx
"use client";
import React from "react";
import PriceTag from "@/components/PriceTag";
import BegLoan from "@/components/BegLoan";

export default function VaultPage() {
  const assets = [
    { id: 1, name: "Rolex Datejust", value: 85000, status: "I VALVET", trend: "+2.4%" },
    { id: 2, name: "Off-White Hoodie", value: 3200, status: "SKICKAD", trend: "-1.2%" },
  ];

  return (
    <div className="page-wrapper" style={{ padding: "15px", background: "#121212" }}>
      <header style={{ marginBottom: "25px", paddingTop: "20px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 900, letterSpacing: "-1.5px" }}>Valvet</h1>
      </header>

      {/* SALDO-KORT (Spotify Premium Style) */}
      <div style={{ background: "linear-gradient(135deg, #222, #000)", borderRadius: "12px", padding: "20px", border: "1px solid #333", marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.6, letterSpacing: "1px" }}>TILLGÄNGLIGT SALDO</div>
        <div style={{ fontSize: "38px", fontWeight: 900, margin: "5px 0" }}>14 250:-</div>
        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button style={{ flex: 1, background: "#fff", color: "#000", border: "none", borderRadius: "50px", padding: "10px", fontWeight: 900, fontSize: "12px" }}>TA UT</button>
          <button style={{ flex: 1, background: "transparent", color: "#fff", border: "1px solid #555", borderRadius: "50px", padding: "10px", fontWeight: 900, fontSize: "12px" }}>HISTORIK</button>
        </div>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <BegLoan price={5000} />
      </div>

      <section>
        <h2 style={{ fontSize: "16px", fontWeight: 900, marginBottom: "15px" }}>Dina Tillgångar</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {assets.map((item) => (
            <div key={item.id} style={{ background: "#282828", borderRadius: "8px", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 900, lineHeight: "1.2" }}>{item.name}</div>
                <div style={{ fontSize: "9px", color: "var(--karma-green)", fontWeight: 900, marginTop: "4px" }}>{item.status}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ fontSize: "14px", fontWeight: 900 }}>{item.value.toLocaleString()} kr</div>
                <div style={{ fontSize: "9px", color: item.trend.includes("+") ? "var(--karma-green)" : "#ff4b4b" }}>{item.trend}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
