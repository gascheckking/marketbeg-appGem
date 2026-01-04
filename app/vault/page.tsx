// // app/vault/page.tsx
"use client";
import React from 'react';

export default function VaultPage() {
  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>Vault</h1>
        <p className="muted" style={{ fontSize: '11px' }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </header>

      <div className="glass-card" style={{ 
        padding: '25px', marginBottom: '15px', borderRadius: '24px',
        background: 'linear-gradient(135deg, rgba(0,255,136,0.1), transparent)',
        border: '1px solid rgba(0,255,136,0.2)'
      }}>
        <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '1px' }}>TOTAL LIKVIDITET</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, margin: '5px 0' }}>14 250<span style={{fontSize: '1rem', opacity: 0.5, marginLeft: '5px'}}>SEK</span></div>
        <div style={{ fontSize: '9px', fontWeight: 800, opacity: 0.6 }}>REDO FÖR UTTAG VIA SWISH</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)' }}>KARMA SCORE</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '5px 0' }}>850</div>
          <div style={{ height: '2px', width: '100%', background: '#222', marginTop: '10px' }}>
            <div style={{ width: '85%', height: '100%', background: 'var(--neon-purple)' }}></div>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)' }}>TOKENS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '5px 0' }}>2 450</div>
          <button className="primary-btn" style={{ fontSize: '8px', padding: '4px', background: 'var(--neon-mint)', color: '#000' }}>VÄXLA</button>
        </div>
      </div>
    </div>
  );
}
