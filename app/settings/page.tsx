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
      <h1 style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "30px", letterSpacing: "-1.5px" }}>Inställningar</h1>

      <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid rgba(29, 185, 84, 0.2)", marginBottom: "30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ fontSize: "24px" }}>🆔</div>
          <div>
            <div style={{ fontWeight: 900, fontSize: "14px" }}>BankID Verifierad</div>
            <div style={{ fontSize: "10px", opacity: 0.4, fontWeight: 700 }}>Global Trust: 98.2%</div>
          </div>
        </div>
        <div style={{ background: "rgba(29,185,84,0.1)", color: "var(--karma-green)", padding: "6px 12px", borderRadius: "10px", fontSize: "10px", fontWeight: 900 }}>AKTIV</div>
      </div>

      <div>
        {menuItems.map((item, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "20px 5px", borderBottom: "1px solid var(--border)", cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <span style={{ fontSize: "18px", opacity: 0.5 }}>{item.icon}</span>
              <span style={{ fontWeight: 800, fontSize: "14px" }}>{item.label}</span>
            </div>
            <span style={{ opacity: 0.2 }}>❯</span>
          </div>
        ))}
      </div>

      <button className="primary-btn" style={{ marginTop: "50px", background: "transparent", border: "1px solid #ff444433", color: "#ff4444" }}>
        LOGGA UT
      </button>
      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "9px", opacity: 0.2, fontWeight: 900, letterSpacing: '1px' }}>
        KARMA v2.0.6 • STOCKHOLM
      </div>
    </div>
  );
}
