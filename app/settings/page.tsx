// // app/settings/page.tsx
"use client";
import React from 'react';

export default function Settings() {
  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0 }}>Inställningar</h1>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <div style={{ fontSize: '9px', fontWeight: 900, color: '#555', letterSpacing: '2px', marginBottom: '12px' }}>SÄKERHET</div>
        <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderRadius: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ fontSize: '20px' }}>🆔</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '14px' }}>BankID Verifiering</div>
              <div style={{ fontSize: '10px', opacity: 0.5 }}>Trust Score: 98.2%</div>
            </div>
          </div>
          <span style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '10px' }}>AKTIV ✅</span>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '9px', fontWeight: 900, color: '#555', letterSpacing: '2px', marginBottom: '12px' }}>SPRÅK</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ flex: 1, background: 'var(--neon-purple)', color: '#fff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: 900, fontSize: '12px' }}>SVENSKA</button>
          <button style={{ flex: 1, background: 'rgba(255,255,255,0.05)', color: '#555', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', fontWeight: 900, fontSize: '12px' }}>ENGLISH</button>
        </div>
      </section>

      <button className="primary-btn" style={{ background: 'transparent', border: '1px solid #ff4444', color: '#ff4444', padding: '15px' }}>
        LOGGA UT
      </button>
    </div>
  );
}
