// // app/dispute/page.tsx
"use client";
import React from 'react';

export default function SecurityCenter() {
  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-1.5px' }}>SÄKERHET</h1>
        <p className="text-small" style={{ color: 'var(--karma-green)', fontWeight: 900 }}>KARMA SHIELD MONITOR</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div className="card" style={{ border: '1px solid rgba(29, 185, 84, 0.3)', background: 'rgba(29, 185, 84, 0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--karma-green)', borderRadius: '50%', boxShadow: '0 0 10px var(--karma-green)' }}></div>
            <h2 style={{ fontSize: '12px', margin: 0, fontWeight: 900 }}>AKTIVT SKYDD AKTIVERAT</h2>
          </div>
          <p style={{ fontSize: '12px', lineHeight: '1.6', margin: 0, opacity: 0.7, fontWeight: 500 }}>
            Karma Escrow-valvet håller dina pengar säkra tills leveransen är godkänd via AI-scan. BankID krävs för alla parter i loopen.
          </p>
        </div>

        <div className="card" style={{ padding: '30px', textAlign: 'center', opacity: 0.5 }}>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>✨</div>
          <p style={{ fontSize: '11px', fontWeight: 800, margin: 0 }}>INGA AKTIVA ÄRENDEN</p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px', color: 'var(--karma-green)', marginBottom: '20px' }}>KARMA PROCESSTRÄD</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { t: '1. BANKID VERIFY', d: 'Full spårbarhet på alla noder i nätverket.' },
              { t: '2. ESCROW LOCK', d: 'Likviditeten låses i Karma-valvet vid matchning.' },
              { t: '3. AI RELEASE', d: 'Utbetalning sker direkt vid godkänd verifiering.' }
            ].map((step, i) => (
              <div key={i} style={{ borderLeft: '2px solid #111', paddingLeft: '15px' }}>
                <strong style={{ display: 'block', fontSize: '11px', color: '#fff', marginBottom: '2px' }}>{step.t}</strong>
                <span style={{ fontSize: '10px', opacity: 0.4, fontWeight: 600 }}>{step.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
