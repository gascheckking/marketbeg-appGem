// // app/my-karma/page.tsx
"use client";
import React from 'react';

export default function MyKarmaPage() {
  const steps = ['KNOW', 'ACQUIRE', 'REUSE', 'MATCH', 'AGAIN'];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px' }}>
        <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px' }}>VERIFIERAD IDENTITET</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>Din Karma</h1>
      </header>

      <section className="glass-card" style={{ padding: '20px 15px', marginBottom: '20px', borderRadius: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
          {steps.map((step, i) => (
            <div key={step} style={{ flex: 1 }}>
              <div style={{ 
                fontSize: '6px', fontWeight: 900, textAlign: 'center', marginBottom: '8px',
                color: i === 2 ? 'var(--neon-purple)' : '#444'
              }}>{step}</div>
              <div style={{ 
                height: '4px', borderRadius: '10px',
                background: i <= 2 ? 'var(--neon-purple)' : '#222',
                boxShadow: i === 2 ? '0 0 10px var(--neon-purple)' : 'none'
              }}></div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gap: '15px' }}>
        <div className="glass-card" style={{ padding: '30px', textAlign: 'center', borderRadius: '24px' }}>
          <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', opacity: 0.5 }}>TRUST SCORE</div>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '5px 0', color: 'var(--neon-mint)', letterSpacing: '-3px' }}>98.2<span style={{fontSize: '1.5rem'}}>%</span></div>
          <div style={{ fontSize: '9px', fontWeight: 800, background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)', padding: '4px 12px', borderRadius: '20px', display: 'inline-block' }}>TOPP 1% GLOBALTLT</div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div className="glass-card" style={{ padding: '15px', borderRadius: '18px' }}>
             <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4 }}>VÄRDE SKAPAT</div>
             <div style={{ fontSize: '1.2rem', fontWeight: 900, marginTop: '5px' }}>42 500 kr</div>
          </div>
          <div className="glass-card" style={{ padding: '15px', borderRadius: '18px' }}>
             <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4 }}>CO2 SPARAT</div>
             <div style={{ fontSize: '1.2rem', fontWeight: 900, marginTop: '5px', color: 'var(--neon-mint)' }}>124 kg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
