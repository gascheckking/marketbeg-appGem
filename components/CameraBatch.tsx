"use client";
import { useState } from "react";
import { LoadingAI } from "./LoadingAI";

/**
 * Denna komponent är hjärtat i snabb-annonseringen.
 * Optimerad för att se proffsig ut på mobilen.
 */
export default function CameraBatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUpload = () => {
    setIsAnalyzing(true);
    // Simulera AI-analys
    setTimeout(() => setIsAnalyzing(false), 4000);
  };

  return (
    <div className="glass-card" style={{ 
      padding: '35px 20px', 
      textAlign: 'center', 
      border: '2px dashed rgba(255,255,255,0.08)',
      background: 'rgba(255,255,255,0.01)'
    }}>
      {!isAnalyzing ? (
        <>
          <div style={{ fontSize: '42px', marginBottom: '15px' }}>📸</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>AI Snabb-scan</h3>
          <p className="muted" style={{ fontSize: '13px', marginBottom: '25px', maxWidth: '260px', margin: '0 auto 25px auto', lineHeight: '1.4' }}>
            Ta 3-5 bilder. Vår AI sköter titlar, beskrivningar och prissättning.
          </p>
          
          <button 
            className="primary-btn" 
            onClick={handleUpload}
            style={{ padding: '16px 30px', fontSize: '14px', background: '#fff', color: '#000' }}
          >
            LADDA UPP BILDER
          </button>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '25px', opacity: 0.5 }}>
            <span style={{ fontSize: '18px' }}>📱</span>
            <span style={{ fontSize: '18px' }}>💻</span>
            <span style={{ fontSize: '18px' }}>👟</span>
            <span style={{ fontSize: '18px' }}>🔧</span>
          </div>
        </>
      ) : (
        <div style={{ padding: '10px 0' }}>
          <LoadingAI />
          <div style={{ marginTop: '25px' }}>
            <div style={{ fontSize: '10px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Analyserar objekt... 87%
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ width: '87%', height: '100%', background: 'var(--neon-purple)', boxShadow: '0 0 15px var(--neon-purple)' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
