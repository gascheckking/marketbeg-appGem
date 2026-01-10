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
        height: "180px", background: "radial-gradient(circle, #1DB95415 0%, #000 80%)",
        borderRadius: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        border: "1px solid #111", marginBottom: "25px", position: "relative", overflow: "hidden"
      }}>
        {isScanning ? (
          <div className="radar-pulse" />
        ) : <div style={{ fontSize: "12px", fontWeight: 900, color: "#1DB954" }}>2 MATCHNINGAR FUNNA</div>}
        <div style={{ fontSize: "30px", zIndex: 2 }}>{isScanning ? "🤖" : "✨"}</div>
      </div>

      <h2 style={{ fontSize: "11px", fontWeight: 900, opacity: 0.3, marginBottom: "15px", letterSpacing: "1px" }}>AKTIVA BUD</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {activeMatches.map((match) => (
          <div key={match.id} style={{ 
            background: "#111", padding: "16px", borderRadius: "18px",
            display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #111"
          }}>
            <div>
              <div style={{ fontSize: "9px", fontWeight: 900, color: "#1DB954" }}>{match.trust}% TRUST</div>
              <div style={{ fontSize: "14px", fontWeight: 900 }}>{match.user}</div>
              <div style={{ fontSize: "12px", opacity: 0.4 }}>{match.item}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "16px", fontWeight: 900 }}>{match.offer}</div>
              <button style={{ marginTop: "5px", background: "#fff", color: "#000", border: "none", padding: "5px 10px", borderRadius: "8px", fontSize: "10px", fontWeight: 900 }}>VISA</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .radar-pulse { width: 100px; height: 100px; border: 2px solid #1DB954; border-radius: 50%; animation: pulse 2s infinite; position: absolute; }
        @keyframes pulse { 0% { transform: scale(0.5); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }
      `}</style>
    </div>
  );
}
