// // app/sell/page.tsx
"use client";
import React, { useState } from 'react';
import CameraBatch from '@/components/CameraBatch';

export default function StandardSell() {
  const [isRecording, setIsRecording] = useState(false);
  const [aiStatus, setAiStatus] = useState("Väntar på data...");

  const startVoiceScan = () => {
    setIsRecording(true);
    setAiStatus("Lyssnar...");
    setTimeout(() => {
      setIsRecording(false);
      setAiStatus("iPhone 15 Pro funnen - 9 800 KR");
    }, 2000);
  };

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease' }}>
      
      {/* LÅST SYSTEM-NAV (Toppen) */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '10px 20px' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
             <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)' }}>SÄLJ-NOD</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '5px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
             <span style={{ fontSize: '10px', fontWeight: 900 }}>14 250 💰</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <header style={{ marginBottom: '25px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>SÄLJ PÅ <span style={{ color: 'var(--neon-mint)' }}>SEKUNDER</span></h1>
          <p style={{ fontSize: '9px', opacity: 0.5, fontWeight: 800, marginTop: '5px' }}>
            {isRecording ? "AI ANALYSERAR DIN RÖST..." : "ANVÄND KAMERA ELLER RÖST FÖR ATT STARTA"}
          </p>
        </header>

        {/* RÖST-AKTIVERING (Centrerad och dominant) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <button 
            onClick={startVoiceScan}
            style={{ 
              width: '80px', height: '80px', borderRadius: '50%', 
              background: isRecording ? 'var(--neon-purple)' : 'rgba(255,255,255,0.03)',
              border: '2px solid var(--neon-purple)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '30px', transition: '0.3s',
              boxShadow: isRecording ? '0 0 25px var(--neon-purple)' : 'none'
            }}>
            {isRecording ? '🎙️' : '🎤'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
          {/* DIN BEFINTLIGA KAMERA-KOMPONENT */}
          <CameraBatch />

          {/* AI ANALYTICS BOX */}
          <div className="glass-card" style={{ 
            display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px',
            border: aiStatus.includes("funnen") ? '1px solid var(--neon-mint)' : '1px solid #222'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>🤖</span>
              <h3 style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px', margin: 0 }}>KARMA VISION ANALYTICS</h3>
            </div>
            
            <div style={{ 
              padding: '25px 15px', background: 'rgba(255,255,255,0.01)', 
              borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' 
            }}>
              <p style={{ fontSize: '8px', fontWeight: 900, marginBottom: '8px', opacity: 0.4 }}>ESTIMERAT MARKNADSVÄRDE</p>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, color: aiStatus.includes("funnen") ? 'var(--neon-mint)' : '#fff' }}>
                {aiStatus}
              </div>
            </div>
            
            <button 
              className="primary-btn" 
              style={{ 
                padding: '16px', fontSize: '12px', fontWeight: 900,
                background: aiStatus.includes("funnen") ? 'var(--neon-purple)' : 'rgba(255,255,255,0.05)',
                color: aiStatus.includes("funnen") ? '#fff' : '#444'
              }}
              disabled={!aiStatus.includes("funnen")}
            >
              STARTA INSTANT MATCH
            </button>
          </div>

          {/* SMALA AVLÅNGA KATEGORIER (För snabbval) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '10px' }}>
            {['TECH', 'MODE', 'HEM', 'BIL'].map((cat, i) => (
              <div key={i} style={{ 
                background: 'rgba(255,255,255,0.02)', borderRadius: '10px', padding: '12px 0',
                textAlign: 'center', border: '1px solid #222'
              }}>
                <span style={{ fontSize: '8px', fontWeight: 900, opacity: 0.5 }}>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
