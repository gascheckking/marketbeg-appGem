"use client";
import { useState, useRef } from "react";
import { LoadingAI } from "./LoadingAI";

/**
 * Hjärtat i säljflödet. 
 * Nu med direkt kamerakoppling och mer kompakt (utzoomad) design.
 */
export default function CameraBatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTriggerUpload = () => {
    // Öppnar filväljaren/kameran
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsAnalyzing(true);
      // Simulera AI-analys
      setTimeout(() => setIsAnalyzing(false), 4500);
    }
  };

  return (
    <div className="glass-card" style={{ 
      padding: '25px 15px', 
      textAlign: 'center', 
      border: '1px dashed rgba(0, 255, 136, 0.2)',
      background: 'rgba(0, 255, 136, 0.01)',
      borderRadius: '20px'
    }}>
      {/* Dolt input-fält som triggar kameran på mobil */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="environment" // Gör att kameran öppnas direkt på mobiler
        multiple 
        style={{ display: 'none' }} 
      />

      {!isAnalyzing ? (
        <>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>📸</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '5px', letterSpacing: '-0.5px' }}>
            AI SNABB-SCAN
          </h3>
          <p className="muted" style={{ fontSize: '11px', marginBottom: '20px', maxWidth: '220px', margin: '0 auto 20px auto', lineHeight: '1.4' }}>
            Ta 3-5 bilder. Vår AI sköter resten.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <button 
              className="primary-btn" 
              onClick={handleTriggerUpload}
              style={{ 
                padding: '12px 25px', 
                fontSize: '12px', 
                background: '#fff', 
                color: '#000',
                width: '100%',
                maxWidth: '200px'
              }}
            >
              TA FOTON / LADDA UPP
            </button>
            
            <div style={{ 
              fontSize: '7px', 
              color: 'var(--neon-mint)', 
              fontWeight: 800, 
              letterSpacing: '2px',
              opacity: 0.6
            }}>
              REUSE • MATCH • AGAIN
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '20px', opacity: 0.3 }}>
            <span style={{ fontSize: '14px' }}>📱</span>
            <span style={{ fontSize: '14px' }}>💻</span>
            <span style={{ fontSize: '14px' }}>👟</span>
          </div>
        </>
      ) : (
        <div style={{ padding: '5px 0' }}>
          <LoadingAI />
          <div style={{ marginTop: '15px' }}>
            <div style={{ 
              fontSize: '9px', 
              color: 'var(--neon-purple)', 
              fontWeight: 900, 
              letterSpacing: '1px', 
              textTransform: 'uppercase' 
            }}>
              IDENTIFIERAR OBJEKT... 87%
            </div>
            <div style={{ 
              width: '100%', 
              height: '3px', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '10px', 
              marginTop: '10px', 
              overflow: 'hidden',
              maxWidth: '200px',
              margin: '10px auto 0 auto'
            }}>
              <div style={{ 
                width: '87%', 
                height: '100%', 
                background: 'var(--neon-purple)', 
                boxShadow: '0 0 10px var(--neon-purple)' 
              }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
