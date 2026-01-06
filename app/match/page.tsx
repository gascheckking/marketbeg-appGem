// // app/match/page.tsx
"use client";
import React from 'react';

export default function MatchPage() {
  return (
    <div className="page-wrapper" style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px' }}>DINA MATCHER</h2>
      <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: '5px 0 25px 0' }}>REDO FÖR AFFÄR</h1>
      
      <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px dashed #222' }}>
        <span style={{ fontSize: '30px' }}>🤝</span>
        <p style={{ fontSize: '12px', fontWeight: 800, marginTop: '15px', opacity: 0.5 }}>Inga aktiva matcher just nu.</p>
        <button style={{ marginTop: '20px', background: '#fff', color: '#000', border: 'none', padding: '12px 25px', borderRadius: '15px', fontWeight: 900, fontSize: '11px' }}>
          STARTA SNABBSÄLJ
        </button>
      </div>
    </div>
  );
}
