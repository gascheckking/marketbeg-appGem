"use client";
import React from 'react';

export default function MyKarmaPage() {
  const steps = ['Know', 'Acquire', 'Reuse', 'Match', 'Again'];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ margin: 0 }}>Din Karma</h1>
        <p className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>Verifierad handels-identitet.</p>
      </header>

      {/* KARMA STEPPER - Fixad med snygga avstånd */}
      <section className="glass-card" style={{ padding: '24px 16px', marginBottom: '20px' }}>
        <div className="karma-stepper">
          {steps.map((step, i) => (
            <div key={step} style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
              <div className={`step-item ${i === 2 ? 'active' : ''}`}>
                {step}
              </div>
              <div style={{ 
                height: '4px', borderRadius: '10px', marginTop: '10px',
                background: i <= 2 ? 'var(--neon-purple)' : '#222',
                boxShadow: i === 2 ? '0 0 15px var(--neon-purple)' : 'none'
              }}></div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
        <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
          <div className="muted" style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>DIN TRUST SCORE</div>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '5px 0', color: 'var(--neon-mint)' }}>98.2%</div>
          <p style={{ fontSize: '12px', opacity: 0.7 }}>Du tillhör topp 1% av cirkulära handlare.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div className="glass-card" style={{ padding: '20px' }}>
             <div className="muted" style={{ fontSize: '9px', fontWeight: 900 }}>VÄRDE GENERERAT</div>
             <div style={{ fontSize: '1.4rem', fontWeight: 900 }}>42 500 kr</div>
          </div>
          <div className="glass-card" style={{ padding: '20px' }}>
             <div className="muted" style={{ fontSize: '9px', fontWeight: 900 }}>CO2 SPARAT</div>
             <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--neon-mint)' }}>124 kg</div>
          </div>
        </div>
      </div>
    </div>
  );
}
