// // app/settings/page.tsx
"use client";
import React from 'react';

export default function Settings() {
  const menuItems = [
    { label: "Personuppgifter", icon: "👤" },
    { label: "Betalningsmetoder", icon: "💳" },
    { label: "Karma Shield", icon: "🛡️" },
    { label: "Hjälp & Support", icon: "🎧" },
  ];

  return (
    <div className="page-wrapper">
      <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "30px", letterSpacing: "-1px" }}>Inställningar</h1>

      <div style={{ background: "#111", borderRadius: "20px", padding: "15px", marginBottom: "30px", border: "1px solid #1DB95422", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ fontSize: "20px" }}>🆔</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: "13px" }}>BankID Verifierad</div>
            <div style={{ fontSize: "10px", opacity: 0.4 }}>Global Trust: 98.2%</div>
          </div>
        </div>
        <div style={{ background: "#1DB95422", color: "#1DB954", padding: "4px 8px", borderRadius: "8px", fontSize: "9px", fontWeight: 900 }}>AKTIV</div>
      </div>

      <div style={{ borderTop: "1px solid #111" }}>
        {menuItems.map((item, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "20px 0", borderBottom: "1px solid #111", cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span style={{ fontSize: "16px", opacity: 0.5 }}>{item.icon}</span>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>{item.label}</span>
            </div>
            <span style={{ opacity: 0.2 }}>❯</span>
          </div>
        ))}
      </div>

      <button className="primary-btn" style={{ marginTop: "40px", background: "transparent", border: "1px solid #ff444422", color: "#ff4444" }}>LOGGA UT</button>
      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "8px", opacity: 0.1, fontWeight: 900 }}>KARMA v2.0.6 (2026)</div>
    </div>
  );
}
