"use client";
import React from 'react';

export default function StandardSell() {
  return (
    <div className="sell-container">
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '10px' }}>Skapa Annons</h1>
      <p className="muted">Ladda upp bilder för en djupare AI-analys.</p>

      <div className="sell-grid">
        <div className="glass-card" style={{ height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px dashed rgba(157, 78, 221, 0.3)' }}>
          <div style={{ fontSize: '50px' }}>📁</div>
          <p style={{ marginTop: '20px', fontWeight: 700 }}>Välj bilder</p>
          <button className="primary-btn" style={{ marginTop: '20px', padding: '12px 30px' }}>BLÄDDRA</button>
        </div>

        <div className="glass-card">
          <h3 style={{ color: 'var(--neon-mint)' }}>🤖 AI Marknadskoll</h3>
          <div style={{ marginTop: '30px' }}>
            <p className="muted">ESTIMERAT VÄRDE</p>
            <div style={{ fontSize: '2rem', fontWeight: 900 }}>Väntar på bild...</div>
          </div>
          <button className="primary-btn" style={{ width: '100%', marginTop: '60px', opacity: 0.5 }} disabled>PUBLICERA</button>
        </div>
      </div>

      <style jsx>{`
        .sell-container { padding: 60px; margin-left: 280px; }
        .sell-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 40px; }
        @media (max-width: 900px) {
          .sell-container { margin-left: 0; padding: 20px; }
          .sell-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
