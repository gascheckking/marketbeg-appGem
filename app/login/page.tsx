// // app/login/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function EntryChoice() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '85vh', gap: '10px', padding: '15px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>Välkommen</h1>
        <p style={{ fontSize: '11px', opacity: 0.5 }}>Välj din väg in i loopen.</p>
      </header>

      <div onClick={() => router.push('/feed')} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '25px', cursor: 'pointer', borderRadius: '20px' }}>
        <div style={{ fontSize: '32px' }}>🛍️</div>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 900, margin: 0 }}>JAG VILL KÖPA</h2>
          <p style={{ fontSize: '9px', opacity: 0.5, margin: 0 }}>Utforska verifierade deals</p>
        </div>
      </div>

      <div onClick={() => router.push('/sell/instant')} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '25px', cursor: 'pointer', borderRadius: '20px', border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
        <div style={{ fontSize: '32px' }}>⚡</div>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 900, margin: 0 }}>JAG VILL SÄLJA</h2>
          <p style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '8px', margin: 0 }}>FOTA & SÄLJ DIREKT</p>
        </div>
      </div>
    </div>
  );
}
