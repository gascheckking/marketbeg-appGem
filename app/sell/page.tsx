// // app/sell/page.tsx
"use client";
import React from 'react';
import CameraBatch from '@/components/CameraBatch';

export default function StandardSell() {
  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1.5px' }}>Sälj på sekunder.</h1>
        <p className="muted" style={{ fontSize: '12px', fontWeight: 700 }}>AI-ANALYS SÄTTER PRIS OCH SKICK AUTOMATISKT</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
        {/* Kamera/Uppladdning */}
        <CameraBatch />

        {/* AI Analys Panel */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--neon-mint)', fontSize: '14px' }}>🤖</span>
            <h3 style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>KARMA VISION ANALYTICS</h3>
          </div>
          
          <div style={{ 
            padding: '30px 20px', 
            background: 'rgba(255,255,255,0.01)', 
            borderRadius: '16px', 
            border: '1px solid var(--border)', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <p className="muted" style={{ fontSize: '9px', fontWeight: 900, marginBottom: '8px', letterSpacing: '1px' }}>ESTIMERAT VÄRDE</p>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#333' }}>Väntar på pixlar...</div>
          </div>
          
          <p style={{ fontSize: '11px', lineHeight: '1.5', margin: 0 }} className="muted">
            Vår AI jämför data från 40+ nordiska plattformar för att säkra din likviditet.
          </p>
          
          <button className="primary-btn" style={{ opacity: 0.3, cursor: 'not-allowed', filter: 'grayscale(1)' }} disabled>
            STARTA ANALYS
          </button>
        </div>
      </div>
    </div>
  );
}
