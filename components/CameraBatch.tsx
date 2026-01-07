"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CameraBatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const [scanStep, setScanStep] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      // säkerställer att inga timers kör efter unmount
    };
  }, []);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const count = e.target.files.length;
    setFileCount(count);
    setIsAnalyzing(true);

    setScanStep("IDENTIFIERAR OBJEKT...");
    setTimeout(() => setScanStep("ANALYSERAR MARKNADSVÄRDE..."), 800);
    setTimeout(() => setScanStep("MATCHAR MOT KÖPARE..."), 1600);

    setTimeout(() => {
      router.push(`/sell/instant?count=${count}`);
    }, 2500);
  };

  return (
    <div style={{ margin: "15px 0" }}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        hidden
        onChange={handleFile}
      />

      {!isAnalyzing ? (
        <div
          style={{
            background: "rgba(157,78,221,0.05)",
            border: "1px solid rgba(157,78,221,0.2)",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                color: "var(--neon-mint)",
                fontSize: "7px",
                fontWeight: 900,
                letterSpacing: "1px",
              }}
            >
              AI SCANNER
            </span>
            <h2 style={{ fontSize: "1rem", fontWeight: 900 }}>
              Sälj upp till 25 objekt
            </h2>
            <p style={{ fontSize: "9px", opacity: 0.5 }}>
              Fota direkt • AI sköter resten
            </p>
          </div>
          <button
            className="primary-btn"
            style={{ width: "auto", padding: "10px 20px", fontSize: "10px" }}
            onClick={() => fileInputRef.current?.click()}
          >
            STARTA
          </button>
        </div>
      ) : (
        <div
          style={{
            height: "100px",
            background: "#050505",
            borderRadius: "20px",
            border: "1px solid var(--neon-mint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div className="scanner-line" />
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 900,
                color: "var(--neon-mint)",
              }}
            >
              {scanStep}
            </div>
            <div style={{ fontSize: "7px", opacity: 0.4 }}>
              {fileCount} FILER DETEKTERADE
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scanner-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--neon-mint);
          box-shadow: 0 0 15px var(--neon-mint);
          animation: scan 1.5s ease-in-out infinite;
        }
        @keyframes scan {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(100px);
          }
        }
      `}</style>
    </div>
  );
}