"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KarmaLoopWide() {
  const router = useRouter();
  const [lang, setLang] = useState('SV');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Utforska', icon: '🔍', path: '/feed' },
    { name: 'Sälj prylar', icon: '📤', path: '/sell' },
    { name: 'Trendande', icon: '🔥', path: '/trending' },
    { name: 'Min Ekonomi', icon: '💳', path: '/my-karma' },
    { name: 'Säkerhet', icon: '🛡️', path: '/dispute' },
  ];

  return (
    <div className="main-layout" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#050505', color: '#fff' }}>
      
      {/* --- VÄNSTER SIDEBAR (Liknande Gemini/Web-apps) --- */}
      <aside className="sidebar" style={{ 
        width: isSidebarOpen ? '260px' : '80px', 
        borderRight: '1px solid #1a1a1a', 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        background: '#0a0a0a'
      }}>
        <div className="logo" style={{ marginBottom: '40px', fontWeight: 900, fontSize: '20px' }}>
          {isSidebarOpen ? 'KARMA/LOOP' : 'K/L'}
        </div>

        <nav style={{ flex: 1 }}>
          {menuItems.map((item) => (
            <div 
              key={item.name}
              onClick={() => router.push(item.path)}
              style={{ 
                padding: '12px 15px', 
                borderRadius: '12px', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                marginBottom: '8px',
                transition: '0.2s',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span>{item.icon}</span>
              {isSidebarOpen && <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</span>}
            </div>
          ))}
        </nav>

        {/* Inställningar & BankID */}
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>⚙️</span>
            {isSidebarOpen && <span style={{ fontSize: '14px' }}>Inställningar</span>}
          </div>
          <button style={{ 
            width: '100%', 
            background: '#fff', 
            color: '#000', 
            border: 'none', 
            padding: '10px', 
            borderRadius: '8px', 
            fontWeight: 700, 
            fontSize: '12px',
            marginTop: '10px',
            cursor: 'pointer'
          }}>
            {isSidebarOpen ? 'Logga in med BankID' : '🆔'}
          </button>
        </div>
      </aside>

      {/* --- HUVUDINNEHÅLL (Utdraget över hela sidan) --- */}
      <main style={{ flex: 1, padding: '40px', position: 'relative' }}>
        
        {/* Top Header i Main Content */}
        <header style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '20px', 
          alignItems: 'center',
          marginBottom: '60px' 
        }}>
          {/* Språkval */}
          <div className="stat-pill" style={{ cursor: 'pointer' }} onClick={() => setLang(lang === 'SV' ? 'EN' : 'SV')}>
            🌐 {lang}
          </div>
          
          <div className="stat-pill" style={{ color: '#00ff88', borderColor: 'rgba(0,255,136,0.2)' }}>
            ● 2,450 Loyalty Points
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1 }}>
            Give your things <br/>
            <span style={{ color: '#9d4edd' }}>a second life.</span>
          </h1>
          <p className="muted" style={{ margin: '30px auto', maxWidth: '600px', fontSize: '1.1rem' }}>
            Tryggt, enkelt och cirkulärt. Med Karma Shield handlar du alltid verifierat med BankID.
          </p>
          <button className="primary-btn" onClick={() => router.push('/sell')}>
            Starta din Loop
          </button>
        </section>

        {/* Grid Area - Täcker ytan */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '25px', 
          marginTop: '80px' 
        }}>
          <div className="glow-card" style={{ border: '1px solid #9d4edd' }}>
            <h3>Karma Shield</h3>
            <p className="muted">BankID-verifierad trygghet för 100% säkra köp.</p>
          </div>
          <div className="glow-card">
            <h3>Karma Recycle</h3>
            <p className="muted">Använd poäng för frakt eller spara till rewards.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
