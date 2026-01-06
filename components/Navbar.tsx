// // components/Navbar.tsx
"use client";
import React, { useState } from 'react';

type NavbarProps = {
  onOpenMenu: () => void;
  lang: string;
  setLang: (lang: string) => void;
};

export default function Navbar({ onOpenMenu, lang, setLang }: NavbarProps) {
  const [showLangDrop, setShowLangDrop] = useState(false);

  const languages = [
    { flag: '🇸🇪', code: 'SV' }, { flag: '🇬🇧', code: 'EN' }, 
    { flag: '🇳🇴', code: 'NO' }, { flag: '🇩🇰', code: 'DK' }
  ];

  return (
    <nav style={{ 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      padding: '10px 20px', background: 'rgba(2, 4, 10, 0.95)', 
      backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'sticky', top: 0, zIndex: 1000
    }}>
      
      {/* VÄNSTER: MENY & FLAGGA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          onClick={onOpenMenu}
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px', cursor: 'pointer', padding: 0 }}
        >
          ☰
        </button>
        
        <div style={{ position: 'relative' }}>
          <div 
            onClick={() => setShowLangDrop(!showLangDrop)} 
            style={{ cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center' }}
          >
            {lang}
          </div>

          {showLangDrop && (
            <div style={{ 
              position: 'absolute', top: '35px', left: '0', background: '#0a0a0a', 
              border: '1px solid #222', borderRadius: '10px', padding: '8px',
              display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1100,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              {languages.map((l) => (
                <button 
                  key={l.code}
                  onClick={() => { setLang(l.flag); setShowLangDrop(false); }}
                  style={{ background: 'none', border: 'none', color: '#fff', fontSize: '16px', cursor: 'pointer' }}
                >
                  {l.flag}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MITTEN: LOGOTYP */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 900, fontSize: '14px', letterSpacing: '2px', color: '#fff' }}>KARMA∞</div>
        <div style={{ fontSize: '7px', color: 'var(--neon-mint)', fontWeight: 800 }}>Prylar ut. Pengar in.</div>
      </div>

      {/* HÖGER: SALDO (Tradera-smart visning) */}
      <div style={{ 
        background: 'rgba(255,255,255,0.03)', padding: '5px 12px', 
        borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', alignItems: 'center', gap: '6px'
      }}>
        <span style={{ fontSize: '10px', fontWeight: 900 }}>14 250</span>
        <span style={{ fontSize: '10px' }}>💰</span>
      </div>
    </nav>
  );
}
