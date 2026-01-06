// // app/layout.tsx
"use client";
import React, { useState } from 'react';
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState('🇸🇪');

  const menuItems = [
    { icon: '🛍️', label: 'KÖP', href: '/buy' },
    { icon: '🏷️', label: 'SÄLJ', href: '/sell' },
    { icon: '🎯', label: 'MINA MATCHER', href: '/match' },
    { icon: '👤', label: 'MIN PROFIL', href: '/profile' },
    { icon: '🛡️', label: 'KARMA SHIELD', href: '/verify' },
  ];

  return (
    <html lang="sv">
      <body style={{ 
        background: '#02040a', 
        color: '#fff', 
        margin: 0, 
        paddingTop: 'env(safe-area-inset-top)',
        overflowX: 'hidden'
      }}>
        <SplashScreen />
        
        {/* SIDEMENU */}
        <div className={`sidebar-drawer ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <span style={{ fontWeight: 900, letterSpacing: '2px', color: 'var(--neon-purple)' }}>KARMA∞</span>
              <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }}>✕</button>
            </div>
            
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {menuItems.map((item) => (
                <a key={item.label} href={item.href} className="sidebar-link" onClick={() => setSidebarOpen(false)}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span> 
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div style={{ marginTop: 'auto', padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px' }}>
              <p style={{ fontSize: '9px', fontWeight: 900, opacity: 0.4, margin: '0 0 10px 0', letterSpacing: '1px' }}>DINA VILLKOR</p>
              <p style={{ fontSize: '11px', fontWeight: 800, margin: 0, lineHeight: '1.4' }}>Baserat på hur du handlar i loopen.</p>
            </div>
          </div>
        </div>

        {/* MAIN APP CONTAINER */}
        <div className={`app-container ${isSidebarOpen ? 'pushed' : ''}`}>
          
          <Navbar 
            onOpenMenu={() => setSidebarOpen(true)} 
            lang={lang} 
            setLang={setLang} 
          />

          <main style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            paddingBottom: 'calc(120px + env(safe-area-inset-bottom))',
            minHeight: '100vh'
          }}>
            {children}
          </main>

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
          .sidebar-drawer { 
            position: fixed; 
            left: -280px; 
            top: 0; 
            width: 280px; 
            height: 100%; 
            background: #05070a; 
            z-index: 2000; 
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
            border-right: 1px solid #111; 
            padding-top: env(safe-area-inset-top);
          }
          .sidebar-drawer.open { transform: translateX(280px); }
          
          .sidebar-inner { display: flex; flex-direction: column; height: 100%; padding: 40px 20px; }
          
          .sidebar-link { 
            display: flex; 
            align-items: center; 
            gap: 15px; 
            padding: 15px; 
            text-decoration: none; 
            color: #fff; 
            font-size: 11px; 
            font-weight: 900; 
            background: rgba(255,255,255,0.02); 
            border-radius: 12px;
            transition: 0.2s;
          }
          .sidebar-link:active { background: rgba(255,255,255,0.08); }

          .app-container { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); min-height: 100vh; }
          .app-container.pushed { transform: translateX(280px); pointer-events: none; }

          .mobile-nav { 
            position: fixed; 
            bottom: 0; 
            width: 100%; 
            height: calc(80px + env(safe-area-inset-bottom)); 
            background: rgba(2,4,10,0.98); 
            backdrop-filter: blur(20px); 
            display: flex; 
            border-top: 1px solid rgba(255,255,255,0.05); 
            z-index: 1000; 
            padding-bottom: env(safe-area-inset-bottom); 
          }
          
          .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; color: #555; transition: 0.2s; }
          .tab span { font-size: 20px; }
          .tab small { font-size: 8px; font-weight: 900; text-transform: uppercase; margin-top: 4px; letter-spacing: 0.5px; }
          .tab:active { color: #fff; }

          .center-fab { position: relative; width: 70px; }
          .center-fab button { 
            position: absolute; 
            top: -25px; 
            left: 50%; 
            transform: translateX(-50%); 
            width: 60px; 
            height: 60px; 
            background: var(--neon-purple); 
            border-radius: 22px; 
            border: 5px solid #02040a; 
            color: #fff; 
            font-size: 30px; 
            box-shadow: 0 10px 20px rgba(157, 78, 221, 0.3);
          }
        `}</style>
      </body>
    </html>
  );
}
