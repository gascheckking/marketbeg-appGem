// // app/dashboard/page.tsx
"use client";
import React from 'react';

export default function Dashboard() {
  return (
    <div className="page-wrapper" style={{ padding: '20px', animation: 'fadeIn 0.5s ease' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>DITT SALDO</h1>
        <p style={{ fontSize: '10px', fontWeight: 800, opacity: 0.4, color: 'var(--neon-mint)' }}>TILLGÄNGLIGT FÖR UTBETALNING</p>
      </header>

      <div style={{ background: '#fff', color: '#000', padding: '30px', borderRadius: '24px', marginBottom: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.5, letterSpacing: '1px' }}>SALDO JUST NU</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, margin: '5px 0' }}>14 250 KR</div>
        <button style={{ width: '100%', background: '#000', color: '#fff', border: 'none', padding: '15px', borderRadius: '14px', fontWeight: 900, fontSize: '12px', marginTop: '15px' }}>
          GÖR UTBETALNING
        </button>
      </div>

      <div style={{ display: 'grid', gap: '10px' }}>
        <h3 style={{ fontSize: '10px', fontWeight: 900, opacity: 0.4, marginTop: '10px' }}>SENASTE TRANSAKTIONER</h3>
        <div className="glass-card" style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
             <div style={{ fontSize: '12px', fontWeight: 800 }}>Såld: iPhone 15 Pro</div>
             <div style={{ fontSize: '9px', opacity: 0.4 }}>Igår 14:20</div>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 900, color: 'var(--neon-mint)' }}>+9 800 KR</div>
        </div>
      </div>
    </div>
  );
}
