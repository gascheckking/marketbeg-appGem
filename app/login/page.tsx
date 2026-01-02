"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function EntryChoice() {
  const router = useRouter();

  return (
    <div style={{ 
      height: '100vh', width: '100vw', display: 'flex', 
      background: 'var(--bg-deep)',
      alignItems: 'center', justifyContent: 'center', gap: '40px',
      padding: '0 40px'
    }}>
      <div onClick={() => router.push('/feed')} className="glass-card" style={{ 
        width: '450px', height: '550px', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.4s' 
      }}>
        <div style={{ fontSize: '100px', marginBottom: '30px' }}>🛍️</div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px' }}>JAG VILL KÖPA</h2>
        <p className="muted" style={{ fontSize: '1.1rem' }}>Utforska AI-verifierade deals</p>
      </div>

      <div onClick={() => router.push('/sell/instant')} className="glass-card" style={{ 
        width: '450px', height: '550px', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', cursor: 'pointer', 
        border: '1px solid var(--neon-mint)', background: 'rgba(0, 255, 136, 0.03)'
      }}>
        <div style={{ fontSize: '100px', marginBottom: '30px' }}>⚡</div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px' }}>JAG VILL SÄLJA</h2>
        <p style={{ color: 'var(--neon-mint)', fontWeight: 900, letterSpacing: '1px' }}>LIVE PÅ UNDER 60 SEKUNDER</p>
      </div>
    </div>
  );
}
