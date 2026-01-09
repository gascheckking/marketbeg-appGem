// app/sell/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CameraBatch from "@/components/CameraBatch";
import MatchFoundOverlay from "@/components/MatchFoundOverlay";

export default function StandardSell() {
  const router = useRouter();

  const [isRecording, setIsRecording] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [aiStatus, setAiStatus] = useState("Väntar på data...");
  const [priceSuggestion, setPriceSuggestion] = useState<number | null>(null);
  const [buyerTrust, setBuyerTrust] = useState<number | null>(null);
  const [demand, setDemand] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const triggerMatch = () => {
    setIsRecording(false);
    setIsAnalysing(true);
    setAiStatus("Matchar mot köpare...");

    setTimeout(() => {
      setIsAnalysing(false);
      setPriceSuggestion(9800);
      setBuyerTrust(98);
      setDemand("Hög efterfrågan");
      setAiStatus("Förslag klart");
      setShowOverlay(true);
    }, 1800);
  };

  const startVoiceScan = () => {
    setIsRecording(true);
    setAiStatus("Analyserar objekt...");
    setPriceSuggestion(null);
    setShowOverlay(false);
    setTimeout(triggerMatch, 1200);
  };

  const isReady = priceSuggestion !== null;

  return (
    <div className="page-wrapper" style={{
      minHeight: "100vh",
      background: "#000", // Ren svart för lyxigare känsla
      color: "#fff",
      animation: "fadeIn 0.4s ease"
    }}>
      
      {/* CLEAN NAV */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <span style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "1px", color: "var(--neon-purple)" }}>
          SNABBSÄLJ
        </span>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "8px", opacity: 0.4, fontWeight: 800 }}>DITT SALDO</div>
          <div style={{ fontSize: "14px", fontWeight: 900 }}>14 250 kr</div>
        </div>
      </nav>

      <div style={{ padding: "40px 24px" }}>
        {/* MINIMALIST HEADER */}
        <header style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, letterSpacing: "-1.5px", margin: 0 }}>
            Sälj direkt.
          </h1>
          <p style={{ fontSize: "13px", opacity: 0.5, marginTop: "10px", lineHeight: "1.5" }}>
            Fota ditt objekt – vår AI matchar dig direkt mot verifierade köpare.
          </p>
        </header>

        {/* MAIN ACTION HUB */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          marginBottom: "50px" 
        }}>
          <button
            onClick={startVoiceScan}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "32px",
              background: isRecording || isAnalysing ? "var(--neon-purple)" : "#111",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isRecording || isAnalysing ? "0 0 40px rgba(157,78,221,0.3)" : "0 20px 40px rgba(0,0,0,0.4)",
              transition: "0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
              cursor: "pointer"
            }}
          >
            {isRecording ? "🎙️" : "📸"}
          </button>
          
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "14px", fontWeight: 900 }}>Starta scanning</div>
            <div style={{ fontSize: "10px", opacity: 0.4, marginTop: "4px" }}>Tryck för att identifiera objekt</div>
          </div>
        </div>

        {/* DISKRET CAMERA BATCH */}
        <CameraBatch 
          onScanStart={() => {
            setIsAnalysing(true);
            setAiStatus("Analyserar bilder...");
          }}
          onScanComplete={triggerMatch}
        />

        {/* RESULT AREA - Nu mer integrerad */}
        <div style={{
          marginTop: "30px",
          padding: "24px",
          borderRadius: "24px",
          background: isReady ? "#fff" : "rgba(255,255,255,0.03)",
          color: isReady ? "#000" : "#fff",
          border: isReady ? "none" : "1px solid rgba(255,255,255,0.06)",
          transition: "0.4s"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "9px", fontWeight: 900, letterSpacing: "1px", opacity: 0.5, marginBottom: "8px" }}>
              {isAnalysing ? "ANALYSERAR..." : "STATUS"}
            </div>

            {!isReady ? (
              <div style={{ fontSize: "1.1rem", fontWeight: 900, opacity: 0.4 }}>{aiStatus}</div>
            ) : (
              <>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: "-1.5px" }}>
                  {priceSuggestion?.toLocaleString("sv-SE")} kr
                </div>
                <div style={{ fontSize: "10px", fontWeight: 800, color: "var(--neon-mint)", marginTop: "4px" }}>
                  MATCHAD MED KÖPARE ({buyerTrust}% TILLIT)
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
                    fontSize: "13px"
                  }}
                >
                  SLUTFÖR AFFÄR
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
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
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
