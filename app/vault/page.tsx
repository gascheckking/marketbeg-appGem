// // app/vault/page.tsx
"use client";
import React from "react";
import TopTabs from "@/components/TopTabs";

export default function VaultPage() {
  const assets = [
    { id: 1, name: "Rolex Datejust", value: 85000, trend: "+2.4%", status: "VÄRDERAD" },
    { id: 2, name: "Off-White Hoodie", value: 3200, trend: "-1.2%", status: "HÖG EFTERFRÅGAN" },
    { id: 3, name: "PlayStation 5", value: 4500, trend: "Stabil", status: "MATCHAD" },
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <TopTabs />

      <div style={{ padding: "30px 20px" }}>
        {/* TOTAL VALUE HEADER */}
        <header style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.4, letterSpacing: "2px" }}>TOTALT VÄRDE I VALVET</div>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, margin: "10px 0", letterSpacing: "-2px" }}>
            92 700 <span style={{ fontSize: "1.2rem", opacity: 0.5 }}>SEK</span>
          </h1>
          <div style={{ display: "inline-block", background: "rgba(29, 185, 84, 0.1)", color: "#1DB954", padding: "4px 12px", borderRadius: "12px", fontSize: "11px", fontWeight: 800 }}>
            +4.2% DENNA MÅNAD
          </div>
        </header>

        {/* ASSET LIST (Spotify Style) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: 900, marginBottom: "8px", opacity: 0.8 }}>DINA TILLGÅNGAR</h2>
          
          {assets.map((item) => (
            <div key={item.id} style={{ 
              background: "#121212", 
              borderRadius: "16px", 
              padding: "16px", 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              border: "1px solid rgba(255,255,255,0.03)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "48px", height: "48px", background: "#282828", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                  📦
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800 }}>{item.name}</div>
                  <div style={{ fontSize: "10px", opacity: 0.4, fontWeight: 700, marginTop: "2px" }}>{item.status}</div>
                </div>
              </div>
              
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "14px", fontWeight: 900 }}>{item.value.toLocaleString()} kr</div>
                <div style={{ fontSize: "10px", color: item.trend.startsWith("+") ? "#1DB954" : "#ff4b4b", fontWeight: 800 }}>
                  {item.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI ACTION BUTTON */}
        <button style={{
          width: "100%",
          background: "#fff",
          color: "#000",
          borderRadius: "16px",
          padding: "20px",
          fontWeight: 900,
          fontSize: "14px",
          marginTop: "40px",
          border: "none",
          boxShadow: "0 10px 30px rgba(255,255,255,0.1)"
        }}>
          SÄLJ ALLT DIREKT (AI MATCH)
        </button>
      </div>
    </div>
  );
}
