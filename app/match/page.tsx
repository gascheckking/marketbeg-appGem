// // app/match/page.tsx
"use client";
import React, { useState, useEffect } from "react";

export default function MatchPage() {
  const [isScanning, setIsScanning] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const activeMatches = [
    { id: 1, user: "Erik L.", item: "AirPods Max", offer: "4 200 kr", trust: 99, type: "SWAP" },
    { id: 2, user: "Sara W.", item: "Vintage Levi's", offer: "850 kr", trust: 97, type: "CASH" },
  ];

  return (
    <div style={{ background: "#121212", minHeight: "100vh", padding: "20px" }}>
      <div style={{ 
        height: "180px", background: "linear-gradient(180deg, #1db95422 0%, #121212 100%)",
        borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        border: "1px solid #282828", marginBottom: "25px", position: "relative", overflow: "hidden"
      }}>
        {isScanning ? (
          <div className="radar" />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: "40px" }}>✨</div>
            <div style={{ fontSize: "14px", fontWeight: 900, color: "var(--karma-green)" }}>2 NYA MATCHNINGAR</div>
          </div>
        )}
      </div>

      <h2 style={{ fontSize: "12px", fontWeight: 900, color: "#b3b3b3", marginBottom: "15px", letterSpacing: "1px" }}>DINA AKTIVA MATCHNINGAR</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {activeMatches.map((match) => (
          <div key={match.id} style={{ background: "#181818", padding: "12px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ width: "48px", height: "48px", background: "#282828", borderRadius: "4px" }} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 900 }}>{match.item}</div>
                <div style={{ fontSize: "11px", color: "var(--karma-green)", fontWeight: 900 }}>{match.trust}% TRUST • {match.type}</div>
              </div>
            </div>
            <button style={{ background: "#fff", color: "#000", border: "none", padding: "8px 16px", borderRadius: "20px", fontSize: "11px", fontWeight: 900 }}>ÖPPNA</button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .radar { width: 60px; height: 60px; border: 3px solid var(--karma-green); border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(3); opacity: 0; } }
      `}</style>
    </div>
  );
}
