// // components/Navbar.tsx
"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar({ onOpenMenu }: any) {
  return (
    <nav style={{ 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      padding: '12px 20px', background: 'rgba(10, 12, 16, 0.95)', 
      backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.03)',
      position: 'sticky', top: 0, zIndex: 1000
    }}>
      <button onClick={onOpenMenu} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px', opacity: 0.6 }}>☰</button>

      <Link href="/" style={{ textDecoration: 'none', textAlign: 'center' }}>
        <div style={{ fontWeight: 900, fontSize: '14px', color: '#fff', letterSpacing: '2px' }}>KARMA∞</div>
        <div style={{ fontSize: '7px', color: 'var(--neon-mint)', fontWeight: 800, opacity: 0.6 }}>PRYLAR UT • PENGAR IN</div>
      </Link>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        {/* Passiv status - Inga siffror som stressar */}
        <Link href="/my-karma" style={{ textDecoration: 'none', opacity: 0.4 }}>🛡️</Link>
        <Link href="/dashboard" style={{ textDecoration: 'none', opacity: 0.4 }}>💰</Link>
      </div>
    </nav>
  );
}
