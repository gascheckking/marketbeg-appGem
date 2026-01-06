// // app/my-karma/page.tsx
"use client";
import React from 'react';

export default function MyKarmaPage() {
  const steps = ['KNOW', 'ACQUIRE', 'REUSE', 'MATCH', 'AGAIN'];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1.5px' }}>VERIFIERAD IDENTITET</div>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>DIN KARMA</h1>
      </header>

      <section className="glass-card" style={{ padding: '15px 10px', marginBottom: '15px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4px' }}>
          {steps.map((step, i) => (
            <div key={step} style={{ flex: 1 }}>
              <div style={{ fontSize: '5px', fontWeight: 900, textAlign: 'center', marginBottom: '6px', color: i === 2 ? 'var(--neon-purple)' : '#333' }}>{step}</div>
              <div style={{ height: '3px', borderRadius: '10px', background: i <= 2 ? 'var(--neon-purple)' : '#1a1a1a', boxShadow: i === 2 ? '0 0 8px var(--neon-purple)' : 'none' }}></div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gap: '10px' }}>
        <div className="glass-card" style={{ padding: '25px', textAlign: 'center', borderRadius: '20px' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4, letterSpacing: '1px' }}>TRUST SCORE</div>
          <div style={{ fontSize: '2.8rem', fontWeight: 900, margin: '2px 0', color: 'var(--neon-mint)', letterSpacing: '-2px' }}>98.2<span style={{fontSize: '1rem'}}>%</span></div>
          <div style={{ fontSize: '8px', fontWeight: 800, background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)', padding: '3px 10px', borderRadius: '15px', display: 'inline-block' }}>TOPP 1% GLOBALT</div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div className="glass-card" style={{ padding: '15px', borderRadius: '16px' }}>
             <div style={{ fontSize: '7px', fontWeight: 900, opacity: 0.4 }}>VÄRDE SKAPAT</div>
             <div style={{ fontSize: '1rem', fontWeight: 900, marginTop: '4px' }}>42 500 kr</div>
          </div>
          <div className="glass-card" style={{ padding: '15px', borderRadius: '16px' }}>
             <div style={{ fontSize: '7px', fontWeight: 900, opacity: 0.4 }}>CO2 SPARAT</div>
             <div style={{ fontSize: '1rem', fontWeight: 900, marginTop: '4px', color: 'var(--neon-mint)' }}>124 kg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
