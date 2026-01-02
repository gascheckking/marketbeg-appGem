"use client";
import React from 'react';
import CameraBatch from '@/components/CameraBatch';

export default function StandardSell() {
  return (
    <div className="page-wrapper">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '50px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px' }}>Skapa Annons</h1>
          <p className="muted">Använd batch-uppladdning för djupare analys av skick och äkthet.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
          <CameraBatch />

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ color: 'var(--neon-mint)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '20px' }}>🤖 AI Marknadskoll</h3>
              <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid var(--border)' }}>
                <p className="muted" style={{ fontSize: '11px', marginBottom: '10px' }}>ESTIMERAT LIKVIDITETSVÄRDE</p>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#444' }}>Väntar på pixlar...</div>
              </div>
              <p style={{ fontSize: '13px', marginTop: '20px' }} className="muted">
                Vår AI jämför priser från Blocket, eBay och Tradera för att ge dig bästa säljchans.
              </p>
            </div>
            
            <button className="primary-btn" style={{ width: '100%', opacity: 0.3, cursor: 'not-allowed' }} disabled>
              VÄNTAR PÅ ANALYS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
