// // app/rewards/page.tsx
"use client";
import React from 'react';

export default function RewardsPage() {
  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>BELÖNINGAR</h1>
        <p style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)' }}>KNOW YOUR VALUE</p>
      </header>

      <div className="glass-card" style={{ padding: '25px 15px', marginBottom: '15px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1), #000)', borderRadius: '20px' }}>
        <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4, letterSpacing: '1px' }}>INKÖRT TOTALT</div>
        <div style={{ fontSize: '2.2rem', fontWeight: 900, margin: '5px 0' }}>14 250<span style={{ fontSize: '0.8rem', opacity: 0.3 }}> SEK</span></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-mint)' }}></div>
          <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-mint)' }}>REDO FÖR SWISH</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
        <div className="glass-card" style={{ padding: '15px', borderRadius: '16px' }}>
          <div style={{ fontSize: '7px', fontWeight: 900, opacity: 0.4 }}>KARMA</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900 }}>850</div>
        </div>
        <div className="glass-card" style={{ padding: '15px', borderRadius: '16px' }}>
          <div style={{ fontSize: '7px', fontWeight: 900, opacity: 0.4 }}>TOKENS</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900 }}>2,450</div>
        </div>
      </div>

      <button className="primary-btn" style={{ padding: '14px', fontSize: '11px', fontWeight: 900 }}>VÄXLA TOKENS</button>

      <div style={{ marginTop: '20px', padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border)' }}>
        <p style={{ fontSize: '9px', lineHeight: '1.4', margin: 0, opacity: 0.5 }}>
          <span style={{ color: 'var(--neon-mint)', fontWeight: 900 }}>AI TIP:</span> Matcha mot "Eftersökta" objekt i Stockholm-noden för 2x Karma.
        </p>
      </div>
    </div>
  );
}
