// // app/sell/page.tsx
"use client";
import React from 'react';
import CameraBatch from '@/components/CameraBatch';

export default function StandardSell() {
  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>SÄLJ PÅ SEKUNDER</h1>
        <p style={{ fontSize: '9px', opacity: 0.5, fontWeight: 800 }}>AI ANALYSERAR SKICK OCH PRIS AUTOMATISKT</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
        <CameraBatch />

        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px' }}>🤖</span>
            <h3 style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '1px', margin: 0 }}>KARMA VISION ANALYTICS</h3>
          </div>
          
          <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <p style={{ fontSize: '8px', fontWeight: 900, marginBottom: '5px', opacity: 0.4 }}>ESTIMERAT VÄRDE</p>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#222' }}>Väntar på data...</div>
          </div>
          
          <button className="primary-btn" style={{ opacity: 0.2, cursor: 'not-allowed', padding: '12px', fontSize: '10px' }} disabled>
            STARTA ANALYS
          </button>
        </div>
      </div>
    </div>
  );
}
