// // app/dashboard/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, margin: 0, letterSpacing: '-2px' }}>MIN KARMA</h1>
          <p className="muted" style={{ fontSize: '12px', fontWeight: 700 }}>HANTERA DINA CIRKULÄRA TILLGÅNGAR</p>
        </div>
        <div style={{ background: 'rgba(157, 78, 221, 0.1)', border: '1px solid rgba(157, 78, 221, 0.2)', color: 'var(--neon-purple)', padding: '10px 20px', borderRadius: '14px', fontWeight: 900, fontSize: '12px' }}>
          ✨ 2,450 TOKENS
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div className="glass-card" onClick={() => router.push('/sell')} style={{ padding: '40px 25px', cursor: 'pointer', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>📤</div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: 900 }}>SÄLJ PRYLAR</h3>
          <p className="muted" style={{ fontSize: '12px', lineHeight: '1.4' }}>Starta en ny Loop och frigör likviditet direkt.</p>
        </div>

        <div className="glass-card" style={{ padding: '40px 25px', opacity: 0.5, textAlign: 'center', borderStyle: 'dashed', borderColor: '#222' }}>
          <div style={{ fontSize: '40px', marginBottom: '15px', filter: 'grayscale(1)' }}>🔄</div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: 900 }}>HYR UT</h3>
          <p style={{ color: 'var(--neon-purple)', fontWeight: 900, fontSize: '9px', letterSpacing: '1px' }}>KOMMER Q4 2026</p>
        </div>
      </div>

      <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px', background: 'linear-gradient(90deg, rgba(0,255,136,0.03), transparent)', border: '1px solid rgba(0,255,136,0.1)' }}>
        <div>
          <strong style={{ fontSize: '14px', display: 'block', marginBottom: '4px' }}>ANVÄND POÄNG TILL FRAKT</strong>
          <p className="muted" style={{ margin: 0, fontSize: '11px' }}>Du har Karma för att låsa upp <span style={{color:'var(--neon-mint)'}}>5 fria frakter</span>.</p>
        </div>
        <button className="primary-btn" style={{ width: 'auto', padding: '10px 20px', background: 'var(--neon-mint)', color: '#000', fontSize: '11px' }}>AKTIVERA</button>
      </div>
    </div>
  );
}
