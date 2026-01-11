// // app/rewards/page.tsx
"use client";
import React from 'react';

export default function RewardsPage() {
  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1.5px' }}>Belöningar</h1>
        <p style={{ fontSize: '10px', fontWeight: 900, color: '#1DB954' }}>DINACKUMULERADE VÄRDE</p>
      </header>

      {/* WALLET CARD */}
      <div style={{ 
        padding: '40px 20px', marginBottom: '20px', textAlign: 'center', 
        background: '#fff', borderRadius: '32px' 
      }}>
        <div style={{ fontSize: '10px', fontWeight: 900, color: '#000', opacity: 0.4, letterSpacing: '1px' }}>TOTALT INKÖRT</div>
        <div style={{ fontSize: '3rem', fontWeight: 900, margin: '5px 0', color: '#000', letterSpacing: '-2px' }}>14 250:-</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1DB954' }}></div>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#000' }}>REDO FÖR SWISH</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        <div style={{ background: '#111', padding: '20px', borderRadius: '24px', border: '1px solid #222' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.3, marginBottom: '4px' }}>KARMA</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 900 }}>850</div>
        </div>
        <div style={{ background: '#111', padding: '20px', borderRadius: '24px', border: '1px solid #222' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.3, marginBottom: '4px' }}>TOKENS</div>
          <div style={{ fontSize: '1.6rem', fontWeight: 900 }}>2,450</div>
        </div>
      </div>

      <button style={{ 
        width: '100%', padding: '20px', background: '#fff', color: '#000', 
        border: 'none', borderRadius: '20px', fontWeight: 900, fontSize: '13px' 
      }}>
        VÄXLA TOKENS
      </button>

      <div style={{ marginTop: '25px', padding: '20px', borderRadius: '20px', background: '#1DB95408', border: '1px solid #1DB95422' }}>
        <p style={{ fontSize: '11px', lineHeight: '1.5', margin: 0, opacity: 0.7, fontWeight: 600 }}>
          <span style={{ color: '#1DB954', fontWeight: 900 }}>AI TIP:</span> Sälj objekt i kategorin "Tech" just nu för att tjäna 2x Karma poäng per slutförd loop.
        </p>
      </div>
    </div>
  );
}
