"use client";
import React from 'react';

export default function RewardsPage() {
  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      {/* Header - Kompakt branding */}
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>BELÖNINGAR</h1>
        <p style={{ fontSize: '9px', fontWeight: 800, color: 'var(--neon-purple)', letterSpacing: '0.5px', marginTop: '4px' }}>
          KNOW YOUR VALUE • ACQUIRE YOUR TOKENS
        </p>
      </header>

      {/* Saldo-kortet (Totalt Inkört) */}
      <div className="glass-card" style={{ 
        padding: '25px 20px', 
        marginBottom: '15px', 
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.05), #000)',
        border: '1px solid rgba(157, 78, 221, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.4, letterSpacing: '1px' }}>TOTALT INKÖRT</div>
        <div style={{ fontSize: '2.4rem', fontWeight: 900, margin: '5px 0', letterSpacing: '-1.5px' }}>
          14 250,00 <span style={{ fontSize: '0.9rem', opacity: 0.3 }}>SEK</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '5px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-mint)', boxShadow: '0 0 10px var(--neon-mint)' }}></span>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-mint)' }}>REDO FÖR UTTAG</span>
        </div>
      </div>

      {/* Karma Score & Tokens Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
        {/* Karma Score */}
        <div className="glass-card" style={{ padding: '15px' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4, marginBottom: '5px' }}>KARMA SCORE</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>850</div>
          <p style={{ fontSize: '8px', fontWeight: 700, color: 'var(--neon-purple)', margin: '4px 0 0' }}>Topp 2% i loopen.</p>
        </div>

        {/* Tokens */}
        <div className="glass-card" style={{ padding: '15px' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4, marginBottom: '5px' }}>TOKENS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>2,450</div>
          <p style={{ fontSize: '8px', fontWeight: 700, color: 'var(--neon-mint)', margin: '4px 0 0' }}>+450 READY</p>
        </div>
      </div>

      {/* Action Button */}
      <button className="primary-btn" style={{ 
        width: '100%', 
        padding: '15px', 
        fontSize: '11px', 
        fontWeight: 900, 
        letterSpacing: '1px' 
      }}>
        VÄXLA DINA TOKENS
      </button>

      {/* Info-box - AI Insight */}
      <div style={{ marginTop: '20px', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
        <p style={{ fontSize: '9px', lineHeight: '1.5', margin: 0, color: '#666' }}>
          <span style={{ color: 'var(--neon-mint)', fontWeight: 800 }}>AI INSIGHT:</span> Din Karma ökar snabbare när du matchar "Eftersökta" objekt. Just nu ger vinterjackor 2x Tokens.
        </p>
      </div>
    </div>
  );
}
