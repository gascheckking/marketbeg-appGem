"use client";
import React from 'react';

export default function MyKarmaPage() {
  const steps = ['Know', 'Acquire', 'Reuse', 'Match', 'Again'];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>Din Karma</h1>
        <p className="muted" style={{ fontSize: '1rem', marginTop: '5px' }}>Värde som rör sig vidare.</p>
      </header>

      {/* KARMA CYCLE - Fixad layout */}
      <section className="glass-card" style={{ padding: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
          {steps.map((step, i) => (
            <div key={step} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '8px', color: i === 2 ? 'var(--neon-purple)' : '#666', letterSpacing: '0.5px' }}>
                {step.toUpperCase()}
              </div>
              <div style={{ 
                height: '3px', borderRadius: '2px', marginTop: '8px',
                background: i <= 2 ? 'var(--neon-purple)' : '#222',
                boxShadow: i === 2 ? '0 0 10px var(--neon-purple)' : 'none'
              }}></div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
        <div className="glass-card" style={{ padding: '25px' }}>
          <div className="muted" style={{ fontSize: '10px', fontWeight: 800 }}>VÄRDE I RÖRELSE</div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, margin: '5px 0' }}>24 800 kr</div>
          <div style={{ fontSize: '12px', color: 'var(--neon-mint)' }}>↑ 12% denna månad</div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div className="glass-card" style={{ padding: '20px' }}>
             <div className="muted" style={{ fontSize: '9px', fontWeight: 800 }}>RELAY SCORE</div>
             <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>98%</div>
          </div>
          <div className="glass-card" style={{ padding: '20px' }}>
             <div className="muted" style={{ fontSize: '9px', fontWeight: 800 }}>SHIELD</div>
             <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--neon-mint)' }}>AKTIV</div>
          </div>
        </div>
      </div>
    </div>
  );
}
