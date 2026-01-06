// // app/settings/page.tsx
"use client";
import React from 'react';

export default function Settings() {
  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>INSTÄLLNINGAR</h1>
      </header>

      <section style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '8px', fontWeight: 900, color: '#444', letterSpacing: '1.5px', marginBottom: '10px' }}>SÄKERHET & TRUST</div>
        <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '18px' }}>🆔</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '11px' }}>BankID Verifiering</div>
              <div style={{ fontSize: '9px', opacity: 0.4 }}>Global Trust Score: 98.2%</div>
            </div>
          </div>
          <span style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '9px' }}>AKTIV ✅</span>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <div style={{ fontSize: '8px', fontWeight: 900, color: '#444', letterSpacing: '1.5px', marginBottom: '10px' }}>REGION & SPRÅK</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ flex: 1, background: 'var(--neon-purple)', color: '#fff', border: 'none', padding: '10px', borderRadius: '10px', fontWeight: 900, fontSize: '10px' }}>SVENSKA</button>
          <button style={{ flex: 1, background: 'rgba(255,255,255,0.05)', color: '#555', border: '1px solid var(--border)', padding: '10px', borderRadius: '10px', fontWeight: 900, fontSize: '10px' }}>ENGLISH</button>
        </div>
      </section>

      <button className="primary-btn" style={{ background: 'transparent', border: '1px solid #ff4444', color: '#ff4444', padding: '12px', fontSize: '10px' }}>
        LOGGA UT UR LOOPEN
      </button>
    </div>
  );
}
