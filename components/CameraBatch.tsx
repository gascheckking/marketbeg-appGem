// // components/CameraBatch.tsx
"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CameraBatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const [scanStep, setScanStep] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const count = e.target.files.length;
      setFileCount(count);
      setIsAnalyzing(true);
      
      // AI-sekvens som matchar din "AI Scanner"-bild
      setScanStep("IDENTIFIERAR OBJEKT...");
      
      setTimeout(() => setScanStep("ANALYSESAR MARKNADSVÄRDE..."), 800);
      setTimeout(() => setScanStep("MATCHAr MOT KÖPARE..."), 1600);

      setTimeout(() => {
        router.push(`/sell/instant?count=${count}`);
      }, 2500);
    }
  };

  return (
    <div className="camera-batch-container">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFile} 
        accept="image/*" 
        capture="environment" 
        hidden 
        multiple 
      />
      
      {!isAnalyzing ? (
        <div className="scan-card">
          <div className="scan-header">
            <span className="ai-badge">AI SCANNER</span>
            <h2 className="scan-title">Sälj upp till 25 objekt</h2>
            <p className="scan-subtitle">Fota direkt • AI sköter resten</p>
          </div>
          
          <button 
            onClick={() => fileInputRef.current?.click()} 
            className="scan-start-btn"
          >
            STARTA
          </button>
        </div>
      ) : (
        <div className="analyzing-state">
          <div className="scanner-line" />
          <div className="scan-info">
            <div className="pulse-dot" />
            <span className="scan-text">{scanStep}</span>
            <span className="scan-count">{fileCount} FILER</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .camera-batch-container {
          margin: 15px 0;
          width: 100%;
        }
        .scan-card {
          background: rgba(157, 78, 221, 0.05);
          border: 1px solid rgba(157, 78, 221, 0.2);
          border-radius: 24px;
          padding: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }
        .ai-badge {
          color: var(--neon-mint);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.5px;
          display: block;
          margin-bottom: 5px;
        }
        .scan-title {
          font-size: 1.1rem;
          font-weight: 900;
          margin: 0;
          color: #fff;
        }
        .scan-subtitle {
          font-size: 10px;
          opacity: 0.5;
          margin: 5px 0 0 0;
        }
        .scan-start-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 10px 25px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 11px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .scan-start-btn:active { transform: scale(0.95); }

        .analyzing-state {
          height: 120px;
          background: #050505;
          border-radius: 24px;
          border: 1px solid var(--neon-mint);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .scanner-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--neon-mint);
          box-shadow: 0 0 15px var(--neon-mint);
          animation: scan 1.5s ease-in-out infinite;
        }
        .scan-info { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .scan-text { font-size: 10px; font-weight: 900; color: var(--neon-mint); letter-spacing: 1px; }
        .scan-count { font-size: 8px; opacity: 0.4; font-weight: 800; }
        .pulse-dot { width: 6px; height: 6px; background: var(--neon-mint); border-radius: 50%; animation: pulse 1s infinite; }

        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(120px); }
          100% { transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
