// // components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ onOpenMenu, lang, setLang }: any) {
  const [showLangDrop, setShowLangDrop] = useState(false);

  return (
    <nav style={{ 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      padding: '12px 20px', background: 'rgba(2, 4, 10, 0.98)', 
      backdropFilter: 'blur(20px)', borderBottom: '1px solid #111',
      position: 'sticky', top: 0, zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={onOpenMenu} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }}>☰</button>
        <div onClick={() => setShowLangDrop(!showLangDrop)} style={{ cursor: 'pointer' }}>{lang}</div>
      </div>

      <Link href="/" style={{ textDecoration: 'none', textAlign: 'center' }}>
        <div style={{ fontWeight: 900, fontSize: '13px', color: '#fff', letterSpacing: '1px' }}>KARMA∞</div>
        <div style={{ fontSize: '7px', color: 'var(--neon-mint)', fontWeight: 800 }}>Prylar ut. Pengar in.</div>
      </Link>

      <div style={{ display: 'flex', gap: '8px' }}>
        <Link href="/my-karma" style={{ textDecoration: 'none', background: 'rgba(157, 78, 221, 0.1)', padding: '5px 10px', borderRadius: '10px', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)' }}>2450 🛡️</span>
        </Link>
        <Link href="/profile" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)', padding: '5px 10px', borderRadius: '10px', border: '1px solid #222' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: '#fff' }}>14 250 💰</span>
        </Link>
      </div>
    </nav>
  );
}
