"use client";
import React, { useState } from "react";
import CameraBatch from "@/components/CameraBatch";

export default function StandardSell() {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [aiStatus, setAiStatus] = useState("Väntar på data...");
  const [priceSuggestion, setPriceSuggestion] = useState<number | null>(null);
  const [buyerTrust, setBuyerTrust] = useState<number | null>(null);
  const [demand, setDemand] = useState<string | null>(null);

  const startVoiceScan = () => {
    setIsRecording(true);
    setAiStatus("Analyserar objekt...");
    setPriceSuggestion(null);
    setBuyerTrust(null);
    setDemand(null);

    setTimeout(() => {
      setIsRecording(false);
      setIsAnalysing(true);
      setAiStatus("Matchar mot köpare...");

      setTimeout(() => {
        setIsAnalysing(false);
        setPriceSuggestion(9800);
        setBuyerTrust(98);
        setDemand("Hög efterfrågan");
        setAiStatus("Förslag klart");
      }, 1800);
    }, 1200);
  };

  const isReady = priceSuggestion !== null;

  return (
    <div
      className="page-wrapper"
      style={{
        minHeight: "100vh",
        background: "#02040a",
        animation: "fadeIn 0.4s ease",
      }}
    >
      {/* TOP NAV */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(2,4,10,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "12px 20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 900,
              letterSpacing: "1px",
              color: "var(--neon-purple)",
            }}
          >
            SNABBSÄLJ
          </span>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 900,
              opacity: 0.8,
            }}
          >
            14 250 kr
          </span>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        {/* HEADER */}
        <header style={{ textAlign: "center", marginBottom: "28px" }}>
          <h1
            style={{
              fontSize: "1.9rem",
              fontWeight: 900,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Sälj snabbt
          </h1>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              opacity: 0.6,
              marginTop: "8px",
            }}
          >
            Fota ditt objekt – vi matchar dig direkt mot redo köpare.
          </p>
        </header>

        {/* PRIMARY ACTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <button
            onClick={startVoiceScan}
            style={{
              width: "78px",
              height: "78px",
              borderRadius: "28px",
              background:
                isRecording || isAnalysing
                  ? "var(--neon-purple)"
                  : "rgba(255,255,255,0.02)",
              border:
                isRecording || isAnalysing
                  ? "2px solid var(--neon-purple)"
                  : "1px solid rgba(255,255,255,0.1)",
              fontSize: "28px",
              boxShadow:
                isRecording || isAnalysing
                  ? "0 0 32px rgba(157,78,221,0.35)"
                  : "none",
              transition: "0.25s",
            }}
          >
            {isRecording ? "🎙️" : "📸"}
          </button>

          <div style={{ marginTop: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", fontWeight: 900 }}>
              Starta snabbsälj
            </div>
            <div style={{ fontSize: "9px", opacity: 0.5, fontWeight: 700 }}>
              Fota → vi sköter resten
            </div>
          </div>
        </div>

        {/* CAMERA */}
        <CameraBatch />

        {/* AI RESULT CARD */}
        <div
          className="glass-card"
          style={{
            marginTop: "18px",
            padding: "24px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.02)",
            border: isReady
              ? "1px solid rgba(0,255,136,0.35)"
              : "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 900,
                letterSpacing: "1px",
                opacity: 0.4,
                marginBottom: "10px",
              }}
            >
              {isAnalysing ? "MATCHNING PÅGÅR" : "STATUS"}
            </div>

            {!isReady && (
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  opacity: 0.4,
                }}
              >
                {aiStatus}
              </div>
            )}

            {isReady && (
              <>
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 900,
                    letterSpacing: "-1px",
                  }}
                >
                  {priceSuggestion?.toLocaleString("sv-SE")} kr
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "10px",
                    fontWeight: 800,
                    color: "var(--neon-mint)",
                  }}
                >
                  Köpare hittad • {buyerTrust}% tillit • {demand}
                </div>
              </>
            )}
          </div>

          <button
            disabled={!isReady}
            style={{
              marginTop: "22px",
              width: "100%",
              padding: "18px",
              borderRadius: "16px",
              border: "none",
              fontSize: "12px",
              fontWeight: 900,
              background: isReady ? "#fff" : "rgba(255,255,255,0.05)",
              color: isReady ? "#000" : "#444",
              cursor: isReady ? "pointer" : "default",
              transition: "0.3s",
            }}
          >
            ACCEPTERA AFFÄR
          </button>
        </div>

        {/* SAFETY */}
        <div style={{ textAlign: "center", marginTop: "18px" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, opacity: 0.7 }}>
            Säker affär. Pengar hålls tills köparen godkänt.
          </div>
          <div style={{ fontSize: "9px", fontWeight: 700, opacity: 0.4 }}>
            Smidigare villkor när du säljer via din KARMA.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}