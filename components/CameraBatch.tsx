"use client";
import { useState } from "react";
import { LoadingAI } from "./LoadingAI";

export default function CameraBatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUpload = () => {
    setIsAnalyzing(true);
    // Simulera AI-analys
    setTimeout(() => setIsAnalyzing(false), 4000);
  };

  return (
    <div className="glass-card" style={{ padding: '40px', textAlign: 'center', border: '2px dashed rgba(255,255,255,0.1)' }}>
      {!isAnalyzing ? (
        <>
          <div style={{ fontSize: '50px', marginBottom: '20px' }}>📸</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>AI Quick Sell</h3>
          <p className="muted" style={{ fontSize: '15px', marginBottom: '30px', maxWidth: '300px', margin: '0 auto 30px auto' }}>
            Ta 3-10 bilder. Vår AI identifierar objektet, skicket och sätter rätt pris direkt.
          </p>
          <button 
            className="primary-btn" 
            onClick={handleUpload}
            style={{ padding: '15px 40px', fontSize: '16px' }}
          >
            LADDA UPP BILDER
          </button>
          <p style={{ fontSize: '11px', color: '#555', marginTop: '20px', fontWeight: 700 }}>
            STÖDER: IPHONE, MACBOOK, SNEAKERS, VERKTYG
          </p>
        </>
      ) : (
        <div style={{ padding: '20px 0' }}>
          <LoadingAI />
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '12px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1px' }}>
              IDENTIFIERAR OBJEKT... 87%
            </div>
            <div style={{ width: '100%', height: '4px', background: '#111', borderRadius: '10px', marginTop: '10px', overflow: 'hidden' }}>
              <div style={{ width: '87%', height: '100%', background: 'var(--neon-purple)', boxShadow: '0 0 10px var(--neon-purple)' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
