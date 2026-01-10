// // app/settings/page.tsx
"use client";
import React from 'react';

export default function Settings() {
  const menuItems = [
    { label: "Personuppgifter", icon: "👤" },
    { label: "Betalningsmetoder", icon: "💳" },
    { label: "Notiser", icon: "🔔" },
    { label: "Karma Shield & Skydd", icon: "🛡️" },
    { label: "Hjälp & Support", icon: "🎧" },
  ];

  return (
    <div style={{ padding: '30px 20px', background: '#000', minHeight: '100vh' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>
          Inställningar
        </h1>
      </header>

      {/* TRUST CARD - SLIM VERSION */}
      <section style={{ marginBottom: '32px' }}>
        <div style={{ fontSize: '9px', fontWeight: 900, color: '#1DB954', letterSpacing: '2px', marginBottom: '12px' }}>
          VERIFIERAD STATUS
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px', 
          background: '#121212',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ fontSize: '24px' }}>🆔</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '14px', color: '#fff' }}>BankID Verifierad</div>
              <div style={{ fontSize: '11px', opacity: 0.4, fontWeight: 700 }}>Global Trust: 98.2%</div>
            </div>
          </div>
          <div style={{ 
            background: 'rgba(29, 185, 84, 0.1)', 
            color: '#1DB954', 
            padding: '6px 12px', 
            borderRadius: '12px', 
            fontSize: '10px', 
            fontWeight: 900 
          }}>
            AKTIV
          </div>
        </div>
      </section>

      {/* MENU LIST - SPOTIFY STYLE */}
      <section style={{ marginBottom: '40px' }}>
        {menuItems.map((item, i) => (
          <div 
            key={i}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '20px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '18px', opacity: 0.7 }}>{item.icon}</span>
              <span style={{ fontWeight: 700, fontSize: '15px' }}>{item.label}</span>
            </div>
            <span style={{ opacity: 0.2, fontSize: '12px' }}>❯</span>
          </div>
        ))}
      </section>

      {/* LANGUAGE SELECTOR */}
      <section style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '9px', fontWeight: 900, color: '#444', letterSpacing: '2px', marginBottom: '16px' }}>
          SPRÅK
        </div>
        <div style={{ display: 'flex', gap: '10px', background: '#121212', padding: '6px', borderRadius: '16px' }}>
          <button style={{ 
            flex: 1, background: '#fff', color: '#000', border: 'none', 
            padding: '12px', borderRadius: '12px', fontWeight: 900, fontSize: '11px' 
          }}>SVENSKA</button>
          <button style={{ 
            flex: 1, background: 'transparent', color: '#fff', border: 'none', 
            padding: '12px', borderRadius: '12px', fontWeight: 900, fontSize: '11px', opacity: 0.4 
          }}>ENGLISH</button>
        </div>
      </section>

      <button style={{ 
        width: '100%',
        background: 'transparent', 
        border: '1px solid #ff4444', 
        color: '#ff4444', 
        padding: '18px', 
        borderRadius: '16px', 
        fontSize: '12px',
        fontWeight: 900,
        letterSpacing: '1px',
        cursor: 'pointer'
      }}>
        LOGGA UT UR LOOPEN
      </button>

      <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '10px', opacity: 0.2, fontWeight: 800 }}>
        KARMA v2.0.6 (BUILD 2026)
      </div>
    </div>
  );
}
