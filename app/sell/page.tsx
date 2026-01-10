// // app/sell/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function StandardSell() {
  const router = useRouter();
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [priceSuggestion, setPriceSuggestion] = useState<number | null>(null);

  const startScan = () => {
    setIsAnalysing(true);
    setTimeout(() => {
      setIsAnalysing(false);
      setPriceSuggestion(9800);
    }, 2000);
  };

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-2px" }}>Sälj direkt</h1>
        <p style={{ fontSize: "14px", opacity: 0.4, fontWeight: 600 }}>AI matchar dig direkt mot köpare.</p>
      </header>

      <div style={{ background: "#121212", borderRadius: "32px", padding: "60px 20px", textAlign: "center", border: "1px solid rgba(255,255,255,0.05)" }}>
        <button
          onClick={startScan}
          style={{
            width: "120px", height: "120px", borderRadius: "50%",
            background: isAnalysing ? "#1DB954" : "#fff",
            border: "none", fontSize: "40px", cursor: "pointer",
            transition: "0.4s",
            boxShadow: isAnalysing ? "0 0 40px rgba(29, 185, 84, 0.4)" : "none"
          }}
        >
          {isAnalysing ? "⌛" : "📸"}
        </button>
        <div style={{ marginTop: "30px", fontSize: "18px", fontWeight: 900 }}>
          {isAnalysing ? "Analyserar..." : "Tryck för att skanna"}
        </div>
      </div>

      {priceSuggestion && (
        <div style={{ marginTop: "24px", padding: "30px", borderRadius: "24px", background: "#1DB954", color: "#000" }}>
          <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.6 }}>HITTAD MATCHNING</div>
          <div style={{ fontSize: "2.5rem", fontWeight: 900 }}>{priceSuggestion.toLocaleString()} kr</div>
          <button onClick={() => router.push('/checkout')} style={{ marginTop: "20px", width: "100%", padding: "18px", borderRadius: "15px", background: "#000", color: "#fff", border: "none", fontWeight: 900 }}>
            ACCEPTERA & FÅ BETALT
          </button>
        </div>
      )}
    </div>
  );
}
