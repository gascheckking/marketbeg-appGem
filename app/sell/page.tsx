// // app/sell/page.tsx
"use client";
import React, { useState } from 'react';
import CameraBatch from '@/components/CameraBatch';

export default function StandardSell() {
  const [isRecording, setIsRecording] = useState(false);
  const [aiStatus, setAiStatus] = useState("Väntar på data...");

  const startVoiceScan = () => {
    setIsRecording(true);
    setAiStatus("Lyssnar på beskrivning...");
    setTimeout(() => {
      setIsRecording(false);
      setAiStatus("iPhone 15 Pro funnen • 9 800 KR");
    }, 2000);
  };

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease', background: '#02040a', minHeight: '100vh' }}>
      
      {/* SYSTEM-NAV (Toppen - Enhetlig med resten av appen) */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1px' }}>STARTA FÖRSÄLJNING</span>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '5px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
             <span style={{ fontSize: '10px', fontWeight: 900 }}>14 250 💰</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <header style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>Prylar ut. <span style={{ color: 'var(--neon-mint)' }}>Pengar in.</span></h1>
          <p style={{ fontSize: '10px', opacity: 0.5, fontWeight: 700, marginTop: '8px' }}>
            {isRecording ? "SYSTEMET LYSSNAR..." : "BESKRIV DIN PRYL ELLER ANVÄND KAMERAN"}
          </p>
        </header>

        {/* RÖST-AKTIVERING (Lugnare visuell stil) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '35px' }}>
          <button 
            onClick={startVoiceScan}
            style={{ 
              width: '70px', height: '70px', borderRadius: '24px', 
              background: isRecording ? 'var(--neon-purple)' : 'rgba(255,255,255,0.02)',
              border: isRecording ? '2px solid var(--neon-purple)' : '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '24px', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isRecording ? '0 0 30px rgba(157, 78, 221, 0.3)' : 'none'
            }}>
            {isRecording ? '🎙️' : '🎤'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
          {/* DIN BEFINTLIGA KAMERA-KOMPONENT */}
          <CameraBatch />

          {/* ESTIMERINGSKORT (Lugn copy) */}
          <div className="glass-card" style={{ 
            display: 'flex', flexDirection: 'column', gap: '20px', padding: '25px',
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.02)',
            border: aiStatus.includes("funnen") ? '1px solid rgba(0, 255, 136, 0.3)' : '1px solid rgba(255,255,255,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '14px' }}>✨</span>
              <h3 style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px', margin: 0, opacity: 0.6 }}>MARKNADSVÄRDE</h3>
            </div>
            
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div style={{ 
                fontSize: '1.6rem', 
                fontWeight: 900, 
                color: aiStatus.includes("funnen") ? '#fff' : 'rgba(255,255,255,0.2)',
                transition: '0.3s'
              }}>
                {aiStatus}
              </div>
              {aiStatus.includes("funnen") && (
                <p style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 800, marginTop: '8px' }}>
                  BASERAT PÅ DIN TILLIT OCH TIDIGARE AFFÄRER
                </p>
              )}
            </div>
            
            <button 
              className="primary-btn" 
              style={{ 
                padding: '18px', borderRadius: '16px', fontSize: '12px', fontWeight: 900,
                background: aiStatus.includes("funnen") ? '#fff' : 'rgba(255,255,255,0.05)',
                color: aiStatus.includes("funnen") ? '#000' : '#444',
                border: 'none', transition: '0.3s',
                cursor: aiStatus.includes("funnen") ? 'pointer' : 'not-allowed'
              }}
              disabled={!aiStatus.includes("funnen")}
            >
              STARTA SNABBSÄLJ
            </button>
          </div>

          {/* SNABBVAL (Kategorier) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '10px' }}>
            {['TECH', 'MODE', 'HEM', 'BIL'].map((cat, i) => (
              <div key={i} style={{ 
                background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '12px 0',
                textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4 }}>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
