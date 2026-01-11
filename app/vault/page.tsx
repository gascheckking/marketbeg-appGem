// // app/vault/page.tsx
"use client";
import React from "react";

export default function VaultPage() {
  const assets = [
    { id: 1, name: "Rolex Datejust", value: 85000, trend: "+2.4%" },
    { id: 2, name: "Off-White Hoodie", value: 3200, trend: "-1.2%" },
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: "35px" }}>
        <div className="text-small" style={{ opacity: 0.4 }}>TOTALT VÄRDE I VALVET</div>
        <h1 style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-2px", margin: '5px 0' }}>92 700:-</h1>
        <span style={{ color: "var(--karma-green)", fontSize: "11px", fontWeight: 900, background: 'rgba(29,185,84,0.1)', padding: '4px 10px', borderRadius: '8px' }}>
          +4.2% DENNA MÅNAD
        </span>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {assets.map((item) => (
          <div key={item.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ width: "45px", height: "45px", background: "#000", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: '20px' }}>📦</div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 900 }}>{item.name}</div>
                <div style={{ fontSize: "10px", opacity: 0.3, fontWeight: 800 }}>VÄRDERAD IDAG</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "15px", fontWeight: 900 }}>{item.value.toLocaleString()} kr</div>
              <div style={{ fontSize: "10px", color: item.trend.includes("+") ? "var(--karma-green)" : "#ff4b4b", fontWeight: 900 }}>{item.trend}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="primary-btn" style={{ marginTop: "30px" }}>SÄLJ ALLT DIREKT (AI MATCH)</button>
    </div>
  );
}
