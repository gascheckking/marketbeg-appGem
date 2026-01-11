// // app/match/page.tsx
"use client";
import React, { useState, useEffect } from "react";

export default function MatchPage() {
  const [isScanning, setIsScanning] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const activeMatches = [
    { id: 1, user: "Erik L.", item: "AirPods Max", offer: "4 200 kr", trust: 99 },
    { id: 2, user: "Sara W.", item: "Vintage Levi's", offer: "850 kr", trust: 97 },
  ];

  return (
    <div className="page-wrapper">
      <div style={{ 
        height: "220px", background: "radial-gradient(circle, rgba(29, 185, 84, 0.1) 0%, #000 80%)",
        borderRadius: "32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        border: "1px solid var(--border)", marginBottom: "30px", position: "relative", overflow: "hidden"
      }}>
        {isScanning && <div className="radar-pulse" />}
        <div style={{ fontSize: "40px", zIndex: 2, marginBottom: "10px" }}>{isScanning ? "🤖" : "✨"}</div>
        {!isScanning && <div style={{ fontSize: "12px", fontWeight: 900, color: "var(--karma-green)", letterSpacing: "1px" }}>2 MATCHNINGAR FUNNA</div>}
      </div>

      <h2 style={{ fontSize: "11px", fontWeight: 900, opacity: 0.3, marginBottom: "20px", letterSpacing: "1px" }}>AKTIVA BUD I DIN LOOP</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {activeMatches.map((match) => (
          <div key={match.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "9px", fontWeight: 900, color: "var(--karma-green)" }}>{match.trust}% TRUST</div>
              <div style={{ fontSize: "15px", fontWeight: 900, margin: "2px 0" }}>{match.user}</div>
              <div style={{ fontSize: "12px", opacity: 0.4, fontWeight: 600 }}>{match.item}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "16px", fontWeight: 900, marginBottom: "8px" }}>{match.offer}</div>
              <button style={{ background: "#fff", color: "#000", border: "none", padding: "8px 16px", borderRadius: "10px", fontSize: "10px", fontWeight: 900 }}>VISA</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .radar-pulse { 
          width: 120px; height: 120px; border: 2px solid var(--karma-green); 
          border-radius: 50%; animation: pulse 2s infinite; position: absolute; 
        }
        @keyframes pulse { 
          0% { transform: scale(0.5); opacity: 1; } 
          100% { transform: scale(2.5); opacity: 0; } 
        }
      `}</style>
    </div>
  );
}
