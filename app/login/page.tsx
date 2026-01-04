// // app/login/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function EntryChoice() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '90vh', gap: '15px', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>Välkommen</h1>
        <p className="muted" style={{ fontSize: '14px' }}>Välj din väg in i loopen.</p>
      </header>

      <div onClick={() => router.push('/feed')} className="glass-card entry-box">
        <div style={{ fontSize: '50px' }}>🛍️</div>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>JAG VILL KÖPA</h2>
          <p className="muted" style={{ fontSize: '11px', margin: '4px 0 0' }}>Utforska AI-verifierade deals</p>
        </div>
      </div>

      <div onClick={() => router.push('/sell/instant')} className="glass-card entry-box highlight">
        <div style={{ fontSize: '50px' }}>⚡</div>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>JAG VILL SÄLJA</h2>
          <p style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '10px', letterSpacing: '1px', margin: '4px 0 0' }}>FOTA & SÄLJ PÅ 60 SEKUNDER</p>
        </div>
      </div>

      <style jsx>{`
        .entry-box {
          display: flex; align-items: center; gap: 25px; padding: 35px 25px;
          cursor: pointer; border-radius: 28px; transition: all 0.2s;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .entry-box:active { transform: scale(0.97); }
        .highlight {
          border: 1px solid var(--neon-mint);
          background: rgba(0, 255, 136, 0.03);
        }
      `}</style>
    </div>
  );
}
