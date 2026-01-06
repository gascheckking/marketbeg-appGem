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
      
      setScanStep("IDENTIFIERAR OBJEKT...");
      setTimeout(() => setScanStep("ANALYSESAR MARKNADSVÄRDE..."), 800);
      setTimeout(() => setScanStep("MATCHAr MOT KÖPARE..."), 1600);

      setTimeout(() => {
        router.push(`/sell/instant?count=${count}`);
      }, 2500);
    }
  };

  return (
    <div style={{ margin: '15px 0', width: '100%' }}>
      <input type="file" ref={fileInputRef} onChange={handleFile} accept="image/*" capture="environment" hidden multiple />
      
      {!isAnalyzing ? (
        <div style={{ 
          background: 'rgba(157, 78, 221, 0.05)', border: '1px solid rgba(157, 78, 221, 0.2)', 
          borderRadius: '20px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
        }}>
          <div>
            <span style={{ color: 'var(--neon-mint)', fontSize: '7px', fontWeight: 900, letterSpacing: '1px' }}>AI SCANNER</span>
            <h2 style={{ fontSize: '1rem', fontWeight: 900, margin: '2px 0' }}>Sälj upp till 25 objekt</h2>
            <p style={{ fontSize: '9px', opacity: 0.5, margin: 0 }}>Fota direkt • AI sköter resten</p>
          </div>
          <button onClick={() => fileInputRef.current?.click()} className="primary-btn" style={{ width: 'auto', padding: '10px 20px', fontSize: '10px' }}>STARTA</button>
        </div>
      ) : (
        <div style={{ 
          height: '100px', background: '#050505', borderRadius: '20px', border: '1px solid var(--neon-mint)', 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' 
        }}>
          <div className="scanner-line" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', zIndex: 1 }}>
            <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '1px' }}>{scanStep}</span>
            <span style={{ fontSize: '7px', opacity: 0.4, fontWeight: 800 }}>{fileCount} FILER DETEKTERADE</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .scanner-line {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--neon-mint); box-shadow: 0 0 15px var(--neon-mint);
          animation: scan 1.5s ease-in-out infinite;
        }
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(100px); }
        }
      `}</style>
    </div>
  );
}
