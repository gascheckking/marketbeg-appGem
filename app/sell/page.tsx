// // app/sell/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CameraBatch from "@/components/CameraBatch";
import MatchFoundOverlay from "@/components/MatchFoundOverlay";
import TopTabs from "@/components/TopTabs";

export default function StandardSell() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [aiStatus, setAiStatus] = useState("AI redo att skanna...");
  const [priceSuggestion, setPriceSuggestion] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const startScan = () => {
    setIsRecording(true);
    setAiStatus("Analyserar objekt...");
    setTimeout(() => {
      setIsRecording(false);
      setIsAnalysing(true);
      setTimeout(() => {
        setIsAnalysing(false);
        setPriceSuggestion(9800);
        setAiStatus("Affär matchad!");
        setShowOverlay(true);
      }, 1500);
    }, 1200);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <TopTabs />

      <div style={{ padding: "40px 24px" }}>
        <header style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-2px" }}>Sälj direkt</h1>
          <p style={{ fontSize: "14px", opacity: 0.4, fontWeight: 600 }}>Skippa annonsen. AI sköter allt.</p>
        </header>

        <div style={{ 
          background: "#121212", borderRadius: "32px", padding: "60px 20px", 
          textAlign: "center", border: "1px solid rgba(255,255,255,0.05)" 
        }}>
          <button
            onClick={startScan}
            style={{
              width: "120px", height: "120px", borderRadius: "50%",
              background: isRecording || isAnalysing ? "#1DB954" : "#fff",
              border: "none", fontSize: "40px", cursor: "pointer",
              transition: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              boxShadow: isRecording || isAnalysing ? "0 0 40px rgba(29, 185, 84, 0.4)" : "none"
            }}
          >
            {isAnalysing ? "⌛" : isRecording ? "🌈" : "📸"}
          </button>
          
          <div style={{ marginTop: "30px" }}>
            <div style={{ fontSize: "18px", fontWeight: 900 }}>{aiStatus}</div>
            <div style={{ fontSize: "10px", opacity: 0.3, marginTop: "8px", letterSpacing: "2px" }}>PRATA ELLER FILMA</div>
          </div>
        </div>

        {priceSuggestion && (
          <div style={{
            marginTop: "24px", padding: "30px", borderRadius: "24px",
            background: "#1DB954", color: "#000", animation: "pop 0.4s ease-out"
          }}>
            <div style={{ fontSize: "10px", fontWeight: 900, opacity: 0.6 }}>BERÄKNAT VÄRDE</div>
            <div style={{ fontSize: "2.5rem", fontWeight: 900 }}>{priceSuggestion.toLocaleString()} kr</div>
            <button
              onClick={() => router.push('/checkout')}
              style={{
                marginTop: "20px", width: "100%", padding: "18px",
                borderRadius: "15px", background: "#000", color: "#fff",
                border: "none", fontWeight: 900, fontSize: "14px"
              }}
            >
              TA EMOT PENGAR
            </button>
          </div>
        )}
      </div>

      <style jsx>{` @keyframes pop { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } } `}</style>
    </div>
  );
}
