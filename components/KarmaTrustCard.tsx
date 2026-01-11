// // components/KarmaTrustCard.tsx
"use client";
import React from "react";

export default function KarmaTrustCard({ score = 98, level = "Master" }) {
  return (
    <div style={{ 
      background: "linear-gradient(135deg, #111 0%, #000 100%)", 
      padding: "25px", borderRadius: "30px", border: "1px solid #222",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)" 
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 900, color: "var(--karma-green)", letterSpacing: "2px" }}>DIN STATUS</div>
          <div style={{ fontSize: "24px", fontWeight: 900 }}>{level.toUpperCase()}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "32px", fontWeight: 900, color: "var(--karma-green)" }}>{score}%</div>
          <div style={{ fontSize: "8px", fontWeight: 900, opacity: 0.5 }}>TRUST SCORE</div>
        </div>
      </div>

      <div style={{ background: "rgba(255,255,255,0.05)", height: "6px", borderRadius: "3px", overflow: "hidden", marginBottom: "15px" }}>
        <div style={{ width: `${score}%`, height: "100%", background: "var(--karma-green)", boxShadow: "0 0 10px var(--karma-green)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div style={{ background: "#000", padding: "12px", borderRadius: "15px", textAlign: "center" }}>
          <div style={{ fontSize: "14px", fontWeight: 900 }}>12</div>
          <div style={{ fontSize: "8px", opacity: 0.4 }}>GIVNA</div>
        </div>
        <div style={{ background: "#000", padding: "12px", borderRadius: "15px", textAlign: "center" }}>
          <div style={{ fontSize: "14px", fontWeight: 900 }}>4</div>
          <div style={{ fontSize: "8px", opacity: 0.4 }}>SWAPS</div>
        </div>
      </div>
    </div>
  );
}
