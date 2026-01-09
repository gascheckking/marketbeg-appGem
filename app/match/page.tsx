// // app/match/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import TopTabs from "@/components/TopTabs";

export default function MatchPage() {
  const [isScanning, setIsScanning] = useState(true);

  // Simulerar AI som hittar köpare
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const activeMatches = [
    { id: 1, user: "Erik L.", item: "AirPods Max", offer: "4 200 kr", trust: 99, time: "2m sedan" },
    { id: 2, user: "Sara W.", item: "Vintage Levi's", offer: "850 kr", trust: 97, time: "5m sedan" },
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <TopTabs />

      <div style={{ padding: "30px 20px" }}>
        
        {/* AI RADAR SECTION */}
        <div style={{ 
          height: "300px", 
          background: "radial-gradient(circle, rgba(29, 185, 84, 0.1) 0%, rgba(0,0,0,1) 70%)",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
          marginBottom: "30px"
        }}>
          {isScanning ? (
            <>
              <div className="radar-circle" />
              <div style={{ fontSize: "40px", zIndex: 2 }}>🤖</div>
              <div style={{ marginTop: "20px", fontSize: "12px", fontWeight: 900, letterSpacing: "2px", zIndex: 2 }}>
                AI SKANNAR MARKNADEN...
              </div>
            </>
          ) : (
            <>
              <div style={{ fontSize: "40px" }}>✨</div>
              <div style={{ marginTop: "10px", fontSize: "18px", fontWeight: 900 }}>2 nya köpare hittade</div>
              <div style={{ fontSize: "12px", opacity: 0.5 }}>Baserat på din höga Karma</div>
            </>
          )}
        </div>

        {/* ACTIVE MATCHES LIST */}
        <h2 style={{ fontSize: "14px", fontWeight: 900, marginBottom: "15px", opacity: 0.5 }}>AKTIVA MATCHNINGAR</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {activeMatches.map((match) => (
            <div key={match.id} style={{ 
              background: "#121212", 
              padding: "20px", 
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 900, color: "#1DB954", marginBottom: "4px" }}>
                  {match.trust}% TILLIT • {match.time}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 900 }}>{match.user} vill köpa</div>
                <div style={{ fontSize: "13px", opacity: 0.6 }}>{match.item}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "18px", fontWeight: 900 }}>{match.offer}</div>
                <button style={{ 
                  marginTop: "8px", 
                  background: "#fff", 
                  color: "#000", 
                  border: "none", 
                  padding: "6px 12px", 
                  borderRadius: "10px", 
                  fontSize: "11px", 
                  fontWeight: 900 
                }}>
                  VISA BUD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .radar-circle {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 2px solid #1DB954;
          border-radius: 50%;
          animation: radar 2s infinite linear;
          opacity: 0;
        }
        @keyframes radar {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
