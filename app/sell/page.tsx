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
  const [buyerTrust, setBuyerTrust] = useState<number | null>(null);
  const [demand, setDemand] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const triggerMatch = () => {
    setIsRecording(false);
    setIsAnalysing(true);
    setAiStatus("Matchar mot verifierade köpare...");

    setTimeout(() => {
      setIsAnalysing(false);
      setPriceSuggestion(9800);
      setBuyerTrust(98);
      setDemand("Hög efterfrågan");
      setAiStatus("Affär matchad");
      setShowOverlay(true);
    }, 1800);
  };

  const startVoiceScan = () => {
    setIsRecording(true);
    setAiStatus("Lyssnar på beskrivning...");
    setPriceSuggestion(null);
    setShowOverlay(false);
    setTimeout(triggerMatch, 1500);
  };

  const isReady = priceSuggestion !== null;

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <TopTabs />

      <div style={{ padding: "30px 20px" }}>
        {/* SPOTIFY-STYLE HEADER */}
        <header style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: "-2px", margin: 0 }}>
            Starta Sälj
          </h1>
          <p style={{ fontSize: "14px", opacity: 0.5, marginTop: "8px", fontWeight: 600 }}>
            Låt AI hitta din köpare på sekunder.
          </p>
        </header>

        {/* AI SCANNER HUB */}
        <div style={{ 
          background: "linear-gradient(180deg, #121212 0%, #000 100%)",
          borderRadius: "32px",
          padding: "40px 20px",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.05)",
          marginBottom: "24px"
        }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              onClick={startVoiceScan}
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "40px",
                background: isRecording || isAnalysing ? "#1DB954" : "#282828",
                border: "none",
                fontSize: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                transform: isRecording || isAnalysing ? "scale(1.1)" : "scale(1)",
                boxShadow: isRecording || isAnalysing ? "0 0 50px rgba(29, 185, 84, 0.3)" : "none"
              }}
            >
              {isAnalysing ? "⏳" : isRecording ? "🌈" : "📸"}
            </button>
            {(isRecording || isAnalysing) && <div className="sonar-wave" />}
          </div>
          
          <div style={{ marginTop: "24px" }}>
            <div style={{ fontSize: "16px", fontWeight: 900 }}>{aiStatus}</div>
            <div style={{ fontSize: "11px", opacity: 0.4, marginTop: "6px", letterSpacing: "1px" }}>
              TA BILDER ELLER PRATA DIREKT
            </div>
          </div>
        </div>

        <CameraBatch 
          onScanStart={() => {
            setIsAnalysing(true);
            setAiStatus("Analyserar dina bilder...");
          }}
          onScanComplete={triggerMatch}
        />

        {/* AI RESULT CARD */}
        {isReady && (
          <div style={{
            marginTop: "24px",
            padding: "24px",
            borderRadius: "24px",
            background: "#1DB954", // Spotify-grön när det är klart!
            color: "#000",
            animation: "popIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "1px", opacity: 0.7 }}>DIREKTMATCHNING</div>
                <div style={{ fontSize: "2.2rem", fontWeight: 900, marginTop: "5px" }}>{priceSuggestion?.toLocaleString()} kr</div>
              </div>
              <div style={{ fontSize: "24px" }}>🔥</div>
            </div>
            
            <button
              onClick={() => setShowOverlay(true)}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                background: "#000",
                color: "#fff",
                border: "none",
                fontWeight: 900,
                fontSize: "14px"
              }}
            >
              ACCEPTERA & SÄLJ
            </button>
          </div>
        )}
      </div>

      {showOverlay && isReady && (
        <MatchFoundOverlay
          price={priceSuggestion!}
          trust={buyerTrust!}
          demand={demand!}
          onAccept={() => {
            setShowOverlay(false);
            router.push(`/checkout?price=${priceSuggestion}`);
          }}
          onClose={() => setShowOverlay(false)}
        />
      )}

      <style jsx>{`
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .sonar-wave {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          border-radius: 40px;
          border: 2px solid #1DB954;
          animation: sonar 2s infinite;
          z-index: -1;
        }
        @keyframes sonar {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
