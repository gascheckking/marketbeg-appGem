// // app/layout.tsx
"use client";
import React, { useState } from 'react';
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState('🇸🇪');
  const [showLangDrop, setShowLangDrop] = useState(false);

  const menuItems = [
    { icon: '🛍️', label: 'KÖP', href: '/buy' },
    { icon: '🏷️', label: 'SÄLJ', href: '/sell' },
    { icon: '🎯', label: 'MINA MATCHER', href: '/match' },
    { icon: '👤', label: 'MIN PROFIL', href: '/profile' },
    { icon: '🛡️', label: 'KARMA SHIELD', href: '/verify' },
  ];

  return (
    <html lang="sv">
      <body style={{ background: '#02040a', color: '#fff', margin: 0, paddingTop: 'env(safe-area-inset-top)' }}>
        <SplashScreen />
        
        {/* SIDEMENU (Städad utan stora flaggor) */}
        <div className={`sidebar-drawer ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <span style={{ fontWeight: 900, letterSpacing: '2px', color: 'var(--neon-purple)' }}>KARMA∞</span>
              <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px' }}>✕</button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {menuItems.map((item) => (
                <a key={item.label} href={item.href} className="sidebar-link" onClick={() => setSidebarOpen(false)}>
                  <span>{item.icon}</span> {item.label}
                </a>
              ))}
            </nav>
            <div style={{ marginTop: 'auto', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px' }}>
              <p style={{ fontSize: '9px', fontWeight: 900, opacity: 0.4, margin: '0 0 10px 0' }}>DINA VILLKOR</p>
              <p style={{ fontSize: '11px', fontWeight: 800, margin: 0 }}>Baserat på hur du handlar.</p>
            </div>
          </div>
        </div>

        <div className={`app-container ${isSidebarOpen ? 'pushed' : ''}`}>
          {/* TOP NAV (Flaggan uppe till vänster) */}
          <header style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
            padding: '10px 20px', position: 'sticky', top: 0, zIndex: 100, background: '#02040a' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button onClick={() => setSidebarOpen(true)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '22px' }}>☰</button>
              <div onClick={() => setShowLangDrop(!showLangDrop)} style={{ cursor: 'pointer', fontSize: '18px' }}>{lang}</div>
            </div>
            <Header /> {/* Din existerande Header-komponent */}
          </header>

          {showLangDrop && (
            <div className="lang-modal">
               {['🇸🇪', '🇬🇧', '🇳🇴', '🇩🇰'].map(f => (
                 <button key={f} onClick={() => { setLang(f); setShowLangDrop(false); }}>{f}</button>
               ))}
            </div>
          )}

          <main style={{ paddingBottom: '120px' }}>{children}</main>

          {/* DYNAMISK BOTTOM NAV */}
          <nav className="mobile-nav">
             <a href="/" className="tab"><span>🧭</span><small>Hem</small></a>
             <a href="/match" className="tab"><span>🤝</span><small>Match</small></a>
             <div className="center-fab">
                <button onClick={() => window.location.href='/sell'}>+</button>
             </div>
             <a href="/profile" className="tab"><span>🛡️</span><small>Karma</small></a>
             <a href="/dashboard" className="tab"><span>💰</span><small>Saldo</small></a>
          </nav>
        </div>

        <style jsx global>{`
          .sidebar-drawer { position: fixed; left: -280px; top: 0; width: 280px; height: 100%; background: #05070a; z-index: 1000; transition: 0.4s; border-right: 1px solid #111; }
          .sidebar-drawer.open { left: 0; }
          .sidebar-inner { display: flex; flex-direction: column; height: 100%; padding: 40px 20px; }
          .sidebar-link { display: flex; align-items: center; gap: 15px; padding: 15px; text-decoration: none; color: #fff; font-size: 11px; font-weight: 900; background: rgba(255,255,255,0.02); border-radius: 12px; margin-bottom: 8px; }
          .lang-modal { position: absolute; top: 60px; left: 50px; background: #111; border: 1px solid #222; border-radius: 12px; display: flex; gap: 15px; padding: 10px; z-index: 101; }
          .lang-modal button { background: none; border: none; font-size: 20px; }
          .mobile-nav { position: fixed; bottom: 0; width: 100%; height: 80px; background: rgba(2,4,10,0.95); backdrop-filter: blur(15px); display: flex; border-top: 1px solid #111; z-index: 100; padding-bottom: env(safe-area-inset-bottom); }
          .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; color: #555; }
          .tab small { font-size: 8px; font-weight: 900; text-transform: uppercase; margin-top: 4px; }
          .center-fab { position: relative; width: 70px; }
          .center-fab button { position: absolute; top: -25px; left: 5px; width: 60px; height: 60px; background: var(--neon-purple); border-radius: 20px; border: 5px solid #02040a; color: #fff; font-size: 30px; font-weight: 300; }
        `}</style>
      </body>
    </html>
  );
}
