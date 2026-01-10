// // app/impact/page.tsx
"use client";
import React from 'react';

export default function ImpactPage() {
  const stats = [
    { label: "CO2 SPARAT", value: "142 KG", color: "#1DB954" },
    { label: "PENGAR SPARADE", value: "12 400 KR", color: "#fff" },
    { label: "LOOPS GJORDA", value: "8 ST", color: "#1DB954" }
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", padding: "40px 20px" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: "-2px", margin: 0 }}>
          Din Impact
        </h1>
        <p style={{ fontSize: "14px", opacity: 0.5, marginTop: "8px", fontWeight: 600 }}>
          Ditt bidrag till den cirkulära loopen.
        </p>
      </header>

      {/* STORA STATS-KORT */}
      <div style={{ display: "grid", gap: "16px", marginBottom: "40px" }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ 
            background: "#121212", 
            padding: "30px 24px", 
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.05)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "2px", opacity: 0.4, marginBottom: "10px" }}>
              {stat.label}
            </div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: stat.color }}>
              {stat.value}
            </div>
            {/* Dekorativ cirkel i bakgrunden */}
            <div style={{ 
              position: "absolute", right: "-20px", bottom: "-20px", 
              width: "100px", height: "100px", borderRadius: "50%", 
              background: stat.color, opacity: 0.03 
            }} />
          </div>
        ))}
      </div>

      {/* AI ANALYS / BADGE SECTION */}
      <div style={{ 
        background: "linear-gradient(135deg, #1DB954 0%, #15883e 100%)", 
        borderRadius: "24px", padding: "24px", color: "#000" 
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
          <span style={{ fontSize: "24px" }}>🌳</span>
          <span style={{ fontWeight: 900, fontSize: "14px", letterSpacing: "1px" }}>KARMA CHAMPION</span>
        </div>
        <p style={{ fontSize: "13px", fontWeight: 700, lineHeight: "1.5", margin: 0 }}>
          Du tillhör topp 5% av användarna i Stockholm som minskat sitt klimatavtryck mest den här månaden.
        </p>
      </div>

      {/* HISTORIK LÄNK */}
      <button style={{
        width: "100%",
        marginTop: "40px",
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#fff",
        padding: "18px",
        borderRadius: "16px",
        fontSize: "12px",
        fontWeight: 800,
        cursor: "pointer"
      }}>
        SE DIN FULLSTÄNDIGA LOOP-HISTORIK
      </button>
    </div>
  );
}
