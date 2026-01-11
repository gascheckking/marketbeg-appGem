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

      <div className="card" style={{ padding: "60px 20px", textAlign: "center" }}>
        <button
          onClick={startScan}
          style={{
            width: "120px", height: "120px", borderRadius: "50%",
            background: isAnalysing ? "var(--karma-green)" : "#fff",
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
        <div className="card" style={{ marginTop: "20px", background: "var(--karma-green)", color: "#000", animation: "fadeIn 0.4s ease-out" }}>
          <div className="text-small" style={{ opacity: 0.7 }}>HITTAD MATCHNING</div>
          <div style={{ fontSize: "2.5rem", fontWeight: 900 }}>{priceSuggestion.toLocaleString()} kr</div>
          <button onClick={() => router.push('/checkout')} style={{ marginTop: "20px", width: "100%", padding: "18px", borderRadius: "20px", background: "#000", color: "#fff", border: "none", fontWeight: 900 }}>
            ACCEPTERA & FÅ BETALT
          </button>
        </div>
      )}
      
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button onClick={() => router.push('/sell/burst')} style={{ background: 'none', border: 'none', color: 'var(--karma-green)', fontWeight: 900, fontSize: '11px', letterSpacing: '1px' }}>
          ELLER SKANNA FLERA (BURST MODE) →
        </button>
      </div>
    </div>
  );
}
