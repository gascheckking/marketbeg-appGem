// // app/impact/page.tsx
"use client";
import React from 'react';

export default function ImpactPage() {
  const stats = [
    { label: "CO2 SPARAT", value: "142 KG", color: "#1DB954" },
    { label: "PENGAR", value: "12 400:-", color: "#fff" },
    { label: "LOOPS", value: "8 ST", color: "#1DB954" },
    { label: "RANK", value: "TOP 5%", color: "#fff" }
  ];

  return (
    <div className="page-wrapper" style={{ paddingBottom: "60px" }}>
      <header style={{ marginBottom: "25px" }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-1px" }}>Din Impact</h1>
        <p style={{ fontSize: "12px", opacity: 0.4, fontWeight: 700 }}>Ditt bidrag till loopen.</p>
      </header>

      {/* COMPACT GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ 
            background: "#111", padding: "20px 15px", borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.03)"
          }}>
            <div style={{ fontSize: "8px", fontWeight: 900, letterSpacing: "1px", opacity: 0.3, marginBottom: "5px" }}>{stat.label}</div>
            <div style={{ fontSize: "20px", fontWeight: 900, color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ 
        background: "linear-gradient(135deg, #1DB954 0%, #000 100%)", 
        borderRadius: "20px", padding: "20px", border: "1px solid #1DB95433"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <span style={{ fontSize: "18px" }}>🌳</span>
          <span style={{ fontWeight: 900, fontSize: "12px" }}>KARMA CHAMPION</span>
        </div>
        <p style={{ fontSize: "11px", fontWeight: 700, lineHeight: "1.4", color: "#fff" }}>
          Du har minskat ditt avtryck mer än 95% av Stockholm den här månaden.
        </p>
      </div>

      <button className="primary-btn" style={{ marginTop: "20px", background: "transparent", border: "1px solid #222", color: "#fff", fontSize: "11px" }}>
        FULLSTÄNDIG HISTORIK
      </button>
    </div>
  );
}
