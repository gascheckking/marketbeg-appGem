"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, margin: 0, letterSpacing: '-2px' }}>Min Karma</h1>
          <p className="muted">Hantera dina cirkulära tillgångar.</p>
        </div>
        <div style={{ background: 'rgba(157, 78, 221, 0.1)', color: 'var(--neon-purple)', padding: '12px 25px', borderRadius: '15px', fontWeight: 900, fontSize: '14px' }}>
          ✨ 2,450 LOYALTY POINTS
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        <div className="glass-card" onClick={() => router.push('/sell')} style={{ padding: '50px 30px', cursor: 'pointer', textAlign: 'center', transition: '0.3s' }}>
          <div style={{ fontSize: '50px', marginBottom: '20px' }}>📤</div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>Sälj prylar</h3>
          <p className="muted" style={{ fontSize: '14px' }}>Ge dina gamla saker en ny Loop och tjäna pengar.</p>
        </div>

        <div className="glass-card" style={{ padding: '50px 30px', opacity: 0.6, textAlign: 'center', borderStyle: 'dashed' }}>
          <div style={{ fontSize: '50px', marginBottom: '20px', filter: 'grayscale(1)' }}>🔄</div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>Hyr ut (Beta)</h3>
          <p style={{ color: 'var(--neon-purple)', fontWeight: 900, fontSize: '11px', letterSpacing: '1px' }}>KOMMER Q1 2026</p>
        </div>
      </div>

      <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '35px', background: 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)' }}>
        <div>
          <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '5px' }}>Använd poäng till frakt</strong>
          <p className="muted" style={{ margin: 0 }}>Du har tillräckligt med Karma för att låsa upp **5 fria frakter**.</p>
        </div>
        <button className="primary-btn" style={{ background: 'var(--neon-mint)', color: '#000' }}>AKTIVERA NU</button>
      </div>
    </div>
  );
}
