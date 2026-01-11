// // app/my-karma/page.tsx
"use client";
import React from "react";

export default function MyKarmaPage() {
  const steps = ["KNOW", "ACQUIRE", "REUSE", "MATCH", "AGAIN"];
  return (
    <div className="page-wrapper">
      <div style={{ 
        background: "linear-gradient(135deg, var(--karma-green) 0%, #000 100%)", 
        borderRadius: "32px", padding: "50px 20px", textAlign: "center", marginBottom: "30px", border: "1px solid rgba(29, 185, 84, 0.3)"
      }}>
        <div style={{ fontSize: "10px", fontWeight: 900, color: "#000", letterSpacing: "2px" }}>VERIFIERAD STATUS</div>
        <h1 style={{ fontSize: "5rem", fontWeight: 900, color: "#000", letterSpacing: "-5px", margin: "10px 0" }}>98.2</h1>
        <div style={{ fontSize: "13px", fontWeight: 900, color: "#000", opacity: 0.8 }}>EXCEPTIONAL TRUST</div>
      </div>

      <div style={{ display: "flex", gap: "6px", marginBottom: "40px", padding: "0 10px" }}>
        {steps.map((s, i) => (
          <div key={s} style={{ flex: 1 }}>
            <div style={{ height: "4px", borderRadius: "2px", background: i <= 2 ? "var(--karma-green)" : "#222" }} />
            <div style={{ fontSize: "8px", fontWeight: 900, marginTop: "10px", textAlign: "center", opacity: i <= 2 ? 1 : 0.2 }}>{s}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div className="card" style={{ padding: "25px 20px" }}>
          <div style={{ fontSize: "9px", opacity: 0.3, fontWeight: 900, letterSpacing: "1px" }}>VÄRDE SKAPAT</div>
          <div style={{ fontSize: "20px", fontWeight: 900, marginTop: "5px" }}>42 500:-</div>
        </div>
        <div className="card" style={{ padding: "25px 20px" }}>
          <div style={{ fontSize: "9px", opacity: 0.3, fontWeight: 900, letterSpacing: "1px" }}>CO2 SPARAT</div>
          <div style={{ fontSize: "20px", fontWeight: 900, color: "var(--karma-green)", marginTop: "5px" }}>124 KG</div>
        </div>
      </div>
    </div>
  );
}
