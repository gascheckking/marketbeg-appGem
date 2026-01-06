// // app/dashboard/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>MIN KARMA</h1>
          <p style={{ fontSize: '9px', fontWeight: 800, opacity: 0.4 }}>CIRKULÄRA TILLGÅNGAR</p>
        </div>
        <div style={{ background: 'rgba(157, 78, 221, 0.1)', color: 'var(--neon-purple)', padding: '6px 12px', borderRadius: '10px', fontWeight: 900, fontSize: '9px' }}>
          ✨ 2,450
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
        <div className="glass-card" onClick={() => router.push('/sell')} style={{ padding: '25px 15px', cursor: 'pointer', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '28px', marginBottom: '10px' }}>📤</div>
          <h3 style={{ margin: 0, fontSize: '11px', fontWeight: 900 }}>SÄLJ</h3>
          <p style={{ fontSize: '8px', opacity: 0.5, marginTop: '4px' }}>Starta Loop</p>
        </div>

        <div className="glass-card" style={{ padding: '25px 15px', opacity: 0.4, textAlign: 'center', borderStyle: 'dashed' }}>
          <div style={{ fontSize: '28px', marginBottom: '10px', filter: 'grayscale(1)' }}>🔄</div>
          <h3 style={{ margin: 0, fontSize: '11px', fontWeight: 900 }}>HYR UT</h3>
          <p style={{ color: 'var(--neon-purple)', fontWeight: 900, fontSize: '7px' }}>Q4 2026</p>
        </div>
      </div>

      <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: 'rgba(0,255,136,0.02)', border: '1px solid rgba(0,255,136,0.1)' }}>
        <div>
          <strong style={{ fontSize: '11px', display: 'block' }}>FRAKT-REWARDS</strong>
          <p style={{ margin: '2px 0 0 0', fontSize: '9px', opacity: 0.6 }}>Du har <span style={{color:'var(--neon-mint)'}}>5 fria frakter</span> kvar.</p>
        </div>
        <button className="primary-btn" style={{ width: 'auto', padding: '8px 14px', background: 'var(--neon-mint)', color: '#000', fontSize: '9px', fontWeight: 900 }}>AKTIVERA</button>
      </div>
    </div>
  );
}
