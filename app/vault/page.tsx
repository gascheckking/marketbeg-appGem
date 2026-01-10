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
      <header style={{ marginBottom: "30px" }}>
        <div style={{ fontSize: "9px", fontWeight: 900, opacity: 0.3, letterSpacing: "2px" }}>TOTALT VÄRDE</div>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-2px" }}>92 700:-</h1>
        <span style={{ color: "#1DB954", fontSize: "11px", fontWeight: 800 }}>+4.2% DENNA MÅNAD</span>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {assets.map((item) => (
          <div key={item.id} style={{ 
            background: "#111", padding: "16px", borderRadius: "16px", 
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", background: "#1a1a1a", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>📦</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 800 }}>{item.name}</div>
                <div style={{ fontSize: "10px", opacity: 0.3, fontWeight: 700 }}>VÄRDERAD</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "14px", fontWeight: 900 }}>{item.value.toLocaleString()} kr</div>
              <div style={{ fontSize: "9px", color: item.trend.includes("+") ? "#1DB954" : "#ff4b4b", fontWeight: 900 }}>{item.trend}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="primary-btn" style={{ marginTop: "30px" }}>SÄLJ ALLT DIREKT (AI MATCH)</button>
    </div>
  );
}
