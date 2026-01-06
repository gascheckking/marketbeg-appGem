// // components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ onOpenMenu, lang = "SV" }: any) {
  const [showLangDrop, setShowLangDrop] = useState(false);

  return (
    <nav style={{ 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      padding: '12px 20px', background: 'rgba(2, 4, 10, 0.98)', 
      backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'sticky', top: 0, zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={onOpenMenu} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px', cursor: 'pointer' }}>☰</button>
        <div onClick={() => setShowLangDrop(!showLangDrop)} style={{ cursor: 'pointer', fontSize: '10px', fontWeight: 900, opacity: 0.4 }}>{lang}</div>
      </div>

      <Link href="/" style={{ textDecoration: 'none', textAlign: 'center' }}>
        <div style={{ fontWeight: 900, fontSize: '14px', color: '#fff', letterSpacing: '2px' }}>KARMA∞</div>
        <div style={{ fontSize: '7px', color: 'var(--neon-mint)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Prylar ut. Pengar in.</div>
      </Link>

      <div style={{ display: 'flex', gap: '8px' }}>
        {/* KARMA-KNAPP */}
        <Link href="/my-karma" style={{ textDecoration: 'none', background: 'rgba(157, 78, 221, 0.05)', padding: '6px 10px', borderRadius: '12px', border: '1px solid rgba(157, 78, 221, 0.1)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)' }}>2450</span>
          <span style={{ fontSize: '10px' }}>🛡️</span>
        </Link>
        {/* SALDO-KNAPP */}
        <Link href="/dashboard" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)', padding: '6px 10px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: '#fff' }}>14 250</span>
          <span style={{ fontSize: '10px' }}>💰</span>
        </Link>
      </div>
    </nav>
  );
}
