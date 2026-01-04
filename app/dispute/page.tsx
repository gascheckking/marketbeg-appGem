// // app/dispute/page.tsx
"use client";
import React from 'react';

export default function SecurityCenter() {
  return (
    <div className="page-wrapper" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>Säkerhetscenter</h1>
        <p className="muted" style={{ fontSize: '12px', marginTop: '5px' }}>Monitorering av ditt köpskydd.</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div className="glass-card" style={{ border: '1px solid var(--neon-mint)', background: 'linear-gradient(135deg, rgba(0,255,136,0.05), transparent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--neon-mint)', borderRadius: '50%', boxShadow: '0 0 10px var(--neon-mint)' }}></div>
            <h2 style={{ fontSize: '14px', margin: 0, fontWeight: 900 }}>Aktivt Skydd: PÅ</h2>
          </div>
          <p className="muted" style={{ fontSize: '12px', lineHeight: '1.6', margin: 0 }}>
            Varje transaktion krypteras och valideras mot BankID. Pengarna betalas ut först när du godkänt leveransen.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>✨</div>
          <p className="muted" style={{ fontSize: '12px', fontWeight: 800 }}>Inga aktiva tvister hittades.</p>
        </div>

        <div className="glass-card" style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', color: 'var(--neon-purple)', marginBottom: '15px' }}>KARMA SHIELD PROCESEN</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
            {[
              { t: '1. BankID', d: 'Full spårbarhet på alla användare.' },
              { t: '2. Escrow', d: 'Pengarna säkrade i en digital valvs-lösning.' },
              { t: '3. Verifiering', d: 'Godkännande krävs vid överlämning.' }
            ].map((step, i) => (
              <div key={i} style={{ fontSize: '12px' }}>
                <strong style={{ display: 'block', color: '#fff', marginBottom: '2px' }}>{step.t}</strong>
                <span className="muted">{step.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
