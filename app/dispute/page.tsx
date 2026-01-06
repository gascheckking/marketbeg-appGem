// // app/dispute/page.tsx
"use client";
import React from 'react';

export default function SecurityCenter() {
  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>SÄKERHET</h1>
        <p style={{ fontSize: '9px', opacity: 0.5, fontWeight: 800 }}>KARMA SHIELD MONITOR</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className="glass-card" style={{ padding: '15px', border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--neon-mint)', borderRadius: '50%', boxShadow: '0 0 8px var(--neon-mint)' }}></div>
            <h2 style={{ fontSize: '11px', margin: 0, fontWeight: 900 }}>AKTIVT SKYDD AKTIVERAT</h2>
          </div>
          <p style={{ fontSize: '10px', lineHeight: '1.5', margin: 0, opacity: 0.7 }}>
            Escrow-valvet håller dina pengar tills leveransen är godkänd. BankID krävs för alla parter.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.03)' }}>
          <div style={{ fontSize: '24px', marginBottom: '5px' }}>✨</div>
          <p style={{ fontSize: '10px', fontWeight: 800, margin: 0 }}>Inga aktiva ärenden.</p>
        </div>

        <div className="glass-card" style={{ padding: '15px' }}>
          <h3 style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '1px', color: 'var(--neon-purple)', marginBottom: '12px' }}>PROCESSTRÄD</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { t: '1. BANKID', d: 'Full spårbarhet på säljare/köpare.' },
              { t: '2. ESCROW', d: 'Betalningen låses i Karma-valvet.' },
              { t: '3. VERIFY', d: 'Utbetalning vid godkänd Scan.' }
            ].map((step, i) => (
              <div key={i}>
                <strong style={{ display: 'block', fontSize: '10px', color: '#fff' }}>{step.t}</strong>
                <span style={{ fontSize: '9px', opacity: 0.4 }}>{step.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
