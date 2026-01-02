"use client";
import React from 'react';

export default function Profile() {
  return (
    <div className="page-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '60px', marginTop: '20px' }}>
        <div style={{ 
          width: '140px', height: '140px', borderRadius: '50%', 
          border: '4px solid var(--neon-mint)', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '60px', 
          background: '#0a0a0a', boxShadow: '0 0 50px rgba(0, 255, 136, 0.15)' 
        }}>
          🛡️
        </div>
        <div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, margin: 0, letterSpacing: '-2px' }}>Alex Lindgren</h1>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <span className="stat-pill" style={{ background: 'var(--neon-purple)', color: '#fff', fontSize: '10px' }}>LEVEL 14 MERCHANT</span>
            <span className="stat-pill" style={{ background: 'rgba(255,255,255,0.05)', color: '#888', fontSize: '10px' }}>MEDLEM SEDAN 2023</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '50px' }}>
        <div className="glass-card" style={{ textAlign: 'center', padding: '30px' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--neon-mint)' }}>98.2%</div>
          <small className="muted" style={{ fontWeight: 800, letterSpacing: '1px' }}>TRUST SCORE</small>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '30px' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>2,450</div>
          <small className="muted" style={{ fontWeight: 800, letterSpacing: '1px' }}>BEGTOKENS</small>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '30px' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>42</div>
          <small className="muted" style={{ fontWeight: 800, letterSpacing: '1px' }}>TOTAL SALES</small>
        </div>
      </div>

      <div className="glass-card" style={{ 
        padding: '40px', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1) 0%, transparent 100%)',
        border: '1px solid rgba(157, 78, 221, 0.2)'
      }}>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <div style={{ fontSize: '50px', filter: 'drop-shadow(0 0 10px var(--neon-purple))' }}>🤖</div>
          <div>
            <strong style={{ fontSize: '1.4rem', color: '#fff', display: 'block', marginBottom: '5px' }}>AI Handels-DNA: "The Quick Flipper"</strong>
            <p className="muted" style={{ margin: 0, lineHeight: '1.6' }}>
              Vår algoritm analyserar dina transaktioner. Du säljer objekt **42% snabbare** än marknadssnittet. 
              Din högsta likviditet finns inom **Apple-produkter** och **High-end Audio**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
