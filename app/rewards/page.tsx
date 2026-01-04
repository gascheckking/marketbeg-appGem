// // app/rewards/page.tsx
"use client";
import React from 'react';

export default function RewardsPage() {
  return (
    <div className="page-wrapper" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>BELÖNINGAR</h1>
        <p style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1px' }}>KNOW YOUR VALUE • ACQUIRE TOKENS</p>
      </header>

      <div className="glass-card" style={{ 
        padding: '35px 25px', marginBottom: '20px', textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1), #000)',
        border: '1px solid rgba(157, 78, 221, 0.3)'
      }}>
        <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.4, letterSpacing: '2px' }}>TOTALT INKÖRT</div>
        <div style={{ fontSize: '2.8rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-2px' }}>
          14 250,00 <span style={{ fontSize: '1rem', opacity: 0.3 }}>SEK</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-mint)', boxShadow: '0 0 12px var(--neon-mint)' }}></div>
          <span style={{ fontSize: '11px', fontWeight: 900, color: 'var(--neon-mint)' }}>REDO FÖR UTTAG</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.4, marginBottom: '8px' }}>KARMA SCORE</div>
          <div style={{ fontSize: '2rem', fontWeight: 900 }}>850</div>
          <p style={{ fontSize: '9px', fontWeight: 800, color: 'var(--neon-purple)', margin: '8px 0 0' }}>TOPP 2% GLOBAL LOG</p>
        </div>
        <div className="glass-card" style={{ padding: '20px' }}>
          <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.4, marginBottom: '8px' }}>TOKENS</div>
          <div style={{ fontSize: '2rem', fontWeight: 900 }}>2,450</div>
          <p style={{ fontSize: '9px', fontWeight: 800, color: 'var(--neon-mint)', margin: '8px 0 0' }}>READY TO SPEND</p>
        </div>
      </div>

      <button className="primary-btn" style={{ padding: '18px', fontSize: '12px', fontWeight: 900, letterSpacing: '2px' }}>
        VÄXLA DINA TOKENS
      </button>

      <div style={{ marginTop: '25px', padding: '15px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ fontSize: '10px', lineHeight: '1.6', margin: 0, color: '#666' }}>
          <span style={{ color: 'var(--neon-mint)', fontWeight: 900 }}>AI INSIGHT:</span> Du får 2x Karma Tokens om du matchar dina listade objekt mot "Eftersökta" objekt i Stockholm-noden.
        </p>
      </div>
    </div>
  );
}
