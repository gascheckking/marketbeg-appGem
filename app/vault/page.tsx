// // app/vault/page.tsx
"use client";
import React from 'react';
import KarmaTrustCard from '@/components/KarmaTrustCard';

export default function VaultPage() {
  const transactions = [
    { id: 1, title: "SÅLD: Vintage Tröja", price: 150, type: 'CASH', date: 'Idag' },
    { id: 2, title: "BYTE: AirPods Pro", price: 0, type: 'SWAP', date: 'Igår' },
    { id: 3, title: "GIVEAWAY: Barnskor", price: 0, type: 'KARMA', date: '2 jan' }
  ];

  return (
    <div style={{ padding: '20px', paddingBottom: '100px', background: '#000', minHeight: '100vh' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1.5px' }}>Valvet</h1>
      </header>

      {/* SALDO-SEKTION */}
      <div style={{ background: 'linear-gradient(135deg, #181818 0%, #000 100%)', padding: '24px', borderRadius: '12px', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ fontSize: '11px', fontWeight: 900, opacity: 0.5, letterSpacing: '1px' }}>DITT KARMA SALDO</div>
        <div style={{ fontSize: '42px', fontWeight: 900, margin: '10px 0', color: 'var(--karma-green)' }}>14 250:-</div>
        <button className="pill-btn" style={{ width: '100%', background: '#fff', color: '#000' }}>TA UT PENGAR</button>
      </div>

      <KarmaTrustCard score={98} />

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '20px' }}>Historik</h2>
        {transactions.map(t => (
          <div key={t.id} className="compact-row" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #121212' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700 }}>{t.title}</div>
              <div style={{ fontSize: '11px', color: '#b3b3b3' }}>{t.date} • {t.type}</div>
            </div>
            <div style={{ fontWeight: 900, color: t.price > 0 ? '#fff' : 'var(--karma-green)' }}>
              {t.price > 0 ? `+${t.price}:-` : 'KLART'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
