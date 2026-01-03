"use client";
import React from 'react';
import CameraBatch from '@/components/CameraBatch';

export default function StandardSell() {
  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-1.5px' }}>Sälj på sekunder.</h1>
        <p className="muted" style={{ fontSize: '14px' }}>AI-analys sätter pris och skick automatiskt.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        {/* Vänster: Kamera/Uppladdning */}
        <CameraBatch />

        {/* Höger: AI Analys Panel */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
              <span style={{ color: 'var(--neon-mint)' }}>🤖</span>
              <h3 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>AI Marknadskoll</h3>
            </div>
            
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
              <p className="muted" style={{ fontSize: '10px', fontWeight: 800, marginBottom: '8px' }}>ESTIMERAT VÄRDE</p>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#333' }}>Väntar på pixlar...</div>
            </div>
            
            <p style={{ fontSize: '12px', marginTop: '15px', lineHeight: '1.5' }} className="muted">
              Vår AI jämför realtidsdata från globala marknadsplatser för att maximera din vinst.
            </p>
          </div>
          
          <button className="primary-btn" style={{ width: '100%', opacity: 0.2, cursor: 'not-allowed', filter: 'grayscale(1)' }} disabled>
            STARTA ANALYS
          </button>
        </div>
      </div>
    </div>
  );
}
