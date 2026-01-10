// // app/my-karma/page.tsx
"use client";
import React from "react";

export default function MyKarmaPage() {
  const steps = ["KNOW", "ACQUIRE", "REUSE", "MATCH", "AGAIN"];
  return (
    <div className="page-wrapper">
      <div style={{ 
        background: "linear-gradient(135deg, #1DB954 0%, #000 100%)", 
        borderRadius: "24px", padding: "40px 20px", textAlign: "center", marginBottom: "30px", border: "1px solid #1DB95422"
      }}>
        <div style={{ fontSize: "9px", fontWeight: 900, color: "#000", letterSpacing: "2px" }}>VERIFIERAD STATUS</div>
        <h1 style={{ fontSize: "4rem", fontWeight: 900, color: "#000", letterSpacing: "-4px" }}>98.2</h1>
        <div style={{ fontSize: "12px", fontWeight: 900, color: "#000", opacity: 0.8 }}>EXCEPTIONAL TRUST</div>
      </div>

      <div style={{ display: "flex", gap: "4px", marginBottom: "40px" }}>
        {steps.map((s, i) => (
          <div key={s} style={{ flex: 1 }}>
            <div style={{ height: "3px", borderRadius: "2px", background: i <= 2 ? "#1DB954" : "#222" }} />
            <div style={{ fontSize: "7px", fontWeight: 900, marginTop: "8px", textAlign: "center", opacity: i <= 2 ? 1 : 0.2 }}>{s}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div style={{ background: "#111", padding: "20px", borderRadius: "20px" }}>
          <div style={{ fontSize: "8px", opacity: 0.3, fontWeight: 900 }}>VÄRDE SKAPAT</div>
          <div style={{ fontSize: "18px", fontWeight: 900 }}>42 500:-</div>
        </div>
        <div style={{ background: "#111", padding: "20px", borderRadius: "20px" }}>
          <div style={{ fontSize: "8px", opacity: 0.3, fontWeight: 900 }}>CO2 SPARAT</div>
          <div style={{ fontSize: "18px", fontWeight: 900, color: "#1DB954" }}>124 KG</div>
        </div>
      </div>
    </div>
  );
}
