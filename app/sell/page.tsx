// // app/sell/page.tsx
"use client";
import React, { useState } from 'react';
import CameraBatch from '@/components/CameraBatch';

export default function StandardSell() {
  const [isRecording, setIsRecording] = useState(false);
  const [aiStatus, setAiStatus] = useState("Väntar på data...");
  const [isAnalysing, setIsAnalysing] = useState(false);

  const startVoiceScan = () => {
    setIsRecording(true);
    setAiStatus("Analyserar objekt...");
    setTimeout(() => {
      setIsRecording(false);
      setIsAnalysing(true);
      // Sekvensen från din vision
      setTimeout(() => setAiStatus("Matchar mot köpare..."), 1000);
      setTimeout(() => {
        setIsAnalysing(false);
        setAiStatus("Förslag klart: 9 800 KR");
      }, 2500);
    }, 1500);
  };

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease', background: '#02040a', minHeight: '100vh' }}>
      
      {/* SYSTEM-NAV (Toppen - Rensad för att matcha din vision) */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1px' }}>SÄLJ SNABBT</span>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '5px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
             <span style={{ fontSize: '10px', fontWeight: 900 }}>14 250 💰</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <header style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>Sälj snabbt</h1>
          <p style={{ fontSize: '11px', opacity: 0.6, fontWeight: 700, marginTop: '8px' }}>
            Vi matchar dig direkt mot köpare. Ingen annonsering krävs.
          </p>
        </header>

        {/* RÖST-AKTIVERING */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '35px' }}>
          <button 
            onClick={startVoiceScan}
            style={{ 
              width: '75px', height: '75px', borderRadius: '26px', 
              background: isRecording || isAnalysing ? 'var(--neon-purple)' : 'rgba(255,255,255,0.02)',
              border: isRecording || isAnalysing ? '2px solid var(--neon-purple)' : '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isRecording || isAnalysing ? '0 0 30px rgba(157, 78, 221, 0.3)' : 'none'
            }}>
            {isRecording ? '🎙️' : '🎤'}
          </button>
          <div style={{ marginTop: '12px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 900, display: 'block' }}>Starta snabbsälj</span>
            <span style={{ fontSize: '9px', opacity: 0.5, fontWeight: 700 }}>Fota → vi sköter resten.</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
          <CameraBatch />

          {/* ESTIMERINGSKORT (Lugn copy och resultat) */}
          <div className="glass-card" style={{ 
            display: 'flex', flexDirection: 'column', gap: '20px', padding: '25px',
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.02)',
            border: aiStatus.includes("klart") ? '1px solid rgba(0, 255, 136, 0.3)' : '1px solid rgba(255,255,255,0.05)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '10px', fontWeight: 900, letterSpacing: '1px', opacity: 0.4, marginBottom: '10px'
              }}>
                {isAnalysing ? "SÖKER MATCHNING..." : "STATUS"}
              </div>
              
              <div style={{ 
                fontSize: '1.4rem', 
                fontWeight: 900, 
                color: aiStatus.includes("klart") ? '#fff' : 'rgba(255,255,255,0.4)',
                transition: '0.3s'
              }}>
                {aiStatus}
              </div>
              
              {aiStatus.includes("klart") && (
                <p style={{ fontSize: '10px', color: 'var(--neon-mint)', fontWeight: 800, marginTop: '8px' }}>
                  VI HAR HITTAT KÖPARE MED HÖG TILLIT
                </p>
              )}
            </div>
            
            <button 
              className="primary-btn" 
              style={{ 
                padding: '18px', borderRadius: '16px', fontSize: '12px', fontWeight: 900,
                background: aiStatus.includes("klart") ? '#fff' : 'rgba(255,255,255,0.05)',
                color: aiStatus.includes("klart") ? '#000' : '#444',
                border: 'none', transition: '0.3s'
              }}
              disabled={!aiStatus.includes("klart")}
            >
              ACCEPTERA AFFÄR
            </button>
          </div>

          {/* TRYGGHETSRADER */}
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <p style={{ fontSize: '11px', fontWeight: 800, opacity: 0.7, margin: '0 0 5px' }}>
              Säker affär. Pengar hålls tills köparen godkänt.
            </p>
            <p style={{ fontSize: '9px', fontWeight: 700, opacity: 0.4 }}>
              Bättre villkor när du säljer smidigt via din KARMA.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
