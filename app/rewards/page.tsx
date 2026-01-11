// // app/rewards/page.tsx
"use client";
import React from 'react';

export default function RewardsPage() {
  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-2px' }}>Belöningar</h1>
        <p style={{ fontSize: '10px', fontWeight: 900, color: 'var(--karma-green)', letterSpacing: '1px' }}>DITT ACKUMULERADE VÄRDE</p>
      </header>

      {/* WALLET CARD */}
      <div className="card" style={{ 
        padding: '45px 20px', marginBottom: '25px', textAlign: 'center', 
        background: '#fff', border: 'none' 
      }}>
        <div style={{ fontSize: '11px', fontWeight: 900, color: '#000', opacity: 0.4, letterSpacing: '1px' }}>TOTALT INKÖRT</div>
        <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '8px 0', color: '#000', letterSpacing: '-3px' }}>14 250:-</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--karma-green)', boxShadow: '0 0 10px var(--karma-green)' }}></div>
          <span style={{ fontSize: '12px', fontWeight: 900, color: '#000' }}>REDO FÖR SWISH</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
        <div className="card" style={{ padding: '25px 20px' }}>
          <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.3, marginBottom: '6px' }}>KARMA POÄNG</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>850</div>
        </div>
        <div className="card" style={{ padding: '25px 20px' }}>
          <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.3, marginBottom: '6px' }}>TOKENS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>2,450</div>
        </div>
      </div>

      <button className="primary-btn" style={{ background: '#fff', color: '#000' }}>
        VÄXLA TOKENS
      </button>

      <div style={{ marginTop: '30px', padding: '20px', borderRadius: '24px', background: 'rgba(29,185,84,0.05)', border: '1px solid rgba(29,185,84,0.15)' }}>
        <p style={{ fontSize: '13px', lineHeight: '1.6', margin: 0, opacity: 0.8, fontWeight: 500 }}>
          <span style={{ color: 'var(--karma-green)', fontWeight: 900 }}>AI TIP:</span> Sälj objekt i kategorin <span style={{fontWeight: 900}}>"Tech"</span> just nu för att tjäna 2x Karma poäng per slutförd loop.
        </p>
      </div>
    </div>
  );
}
