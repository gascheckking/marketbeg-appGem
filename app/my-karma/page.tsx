// // app/my-karma/page.tsx
"use client";
import React from "react";
import TopTabs from "@/components/TopTabs";

export default function MyKarmaPage() {
  const steps = ["KNOW", "ACQUIRE", "REUSE", "MATCH", "AGAIN"];
  const currentLevel = 2; // Index för REUSE

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <TopTabs />

      <div style={{ padding: "30px 20px" }}>
        {/* 1. HERO CARD - SPOTIFY WRAPPED LOOK */}
        <div style={{ 
          background: "linear-gradient(135deg, #1DB954 0%, #121212 100%)", 
          borderRadius: "32px", 
          padding: "30px 20px", 
          textAlign: "center",
          marginBottom: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: "10px", fontWeight: 900, color: "#000", letterSpacing: "2px", opacity: 0.7 }}>
            VERIFIERAD STATUS
          </div>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 900, color: "#000", letterSpacing: "-3px", margin: "10px 0" }}>
            98.2
          </h1>
          <div style={{ fontSize: "14px", fontWeight: 900, color: "#000" }}>MYCKET HÖG TILLIT</div>
        </div>

        {/* 2. PROGRESS PIPELINE (Fredde-touch: Clean & Fast) */}
        <section style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
            {steps.map((s, i) => (
              <div key={s} style={{ flex: 1 }}>
                <div style={{
                  height: "4px",
                  borderRadius: "2px",
                  background: i <= currentLevel ? "#1DB954" : "#282828",
                  transition: "0.5s ease"
                }} />
                <div style={{
                  textAlign: "center",
                  fontSize: "8px",
                  fontWeight: 900,
                  marginTop: "8px",
                  opacity: i <= currentLevel ? 1 : 0.3,
                  letterSpacing: "0.5px"
                }}>
                  {s}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. IMPACT GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div style={{ 
            background: "#121212", 
            padding: "20px", 
            borderRadius: "20px", 
            border: "1px solid rgba(255,255,255,0.05)" 
          }}>
            <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.4, marginBottom: "8px" }}>VÄRDE SKAPAT</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 900 }}>42 500 kr</div>
          </div>

          <div style={{ 
            background: "#121212", 
            padding: "20px", 
            borderRadius: "20px", 
            border: "1px solid rgba(255,255,255,0.05)" 
          }}>
            <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.4, marginBottom: "8px" }}>CO₂ SPARAT</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#1DB954" }}>124 kg</div>
          </div>
        </div>

        {/* 4. PASSIVE INCOME / STATS */}
        <div style={{ 
          marginTop: "12px",
          background: "#121212", 
          padding: "24px", 
          borderRadius: "24px", 
          border: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.4 }}>TILLGÅNGAR I VALVET</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 900, marginTop: "4px" }}>12 objekt</div>
          </div>
          <button style={{ 
            background: "#fff", 
            color: "#000", 
            border: "none", 
            padding: "10px 16px", 
            borderRadius: "12px", 
            fontSize: "12px", 
            fontWeight: 900 
          }}>
            VISA ALLA
          </button>
        </div>
      </div>
    </div>
  );
}
