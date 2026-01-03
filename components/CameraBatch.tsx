"use client";
import { useState, useRef } from "react";
import { LoadingAI } from "./LoadingAI";

export default function CameraBatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: any) => {
    if (e.target.files?.length) {
      setIsAnalyzing(true);
      setTimeout(() => setIsAnalyzing(false), 4000);
    }
  };

  return (
    <div style={{ 
      padding: '20px 15px', textAlign: 'center', borderRadius: '16px',
      border: '1px dashed rgba(0, 255, 136, 0.2)', background: 'rgba(0, 255, 136, 0.01)', margin: '10px 0'
    }}>
      <input type="file" ref={fileInputRef} onChange={handleFile} accept="image/*" capture="environment" hidden multiple />
      {!isAnalyzing ? (
        <>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📸</div>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 900, marginBottom: '4px' }}>AI SNABB-SCAN</h3>
          <p style={{ fontSize: '10px', opacity: 0.5, marginBottom: '15px', maxWidth: '200px', margin: '0 auto 15px' }}>
            KNOW your items. MATCH with buyers.
          </p>
          <button onClick={() => fileInputRef.current?.click()} className="primary-btn" style={{ 
            padding: '10px', fontSize: '11px', maxWidth: '180px', margin: '0 auto' 
          }}>TA FOTON / LADDA UPP</button>
        </>
      ) : (
        <div style={{ padding: '10px 0' }}>
          <LoadingAI />
          <div style={{ width: '140px', height: '2px', background: 'rgba(255,255,255,0.1)', margin: '15px auto 0', borderRadius: '2px', overflow: 'hidden' }}>
            <div className="progress-bar"></div>
          </div>
        </div>
      )}
      <style jsx>{`
        .progress-bar { width: 100%; height: 100%; background: var(--neon-purple); animation: load 4s linear; }
        @keyframes load { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </div>
  );
}
