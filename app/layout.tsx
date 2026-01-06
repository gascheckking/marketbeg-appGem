// // app/layout.tsx
"use client";
import React, { useState } from 'react';
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";

// Metadata och Viewport måste flyttas till en separat fil (layout.metadata.ts) 
// eller hanteras i en server-komponent om du använder Next.js 13+ metadata API.
// Eftersom vi använder "use client" här för Sidebar-state, definierar vi dem så här:

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState('🇸🇪');

  const menuItems = [
    { icon: '📂', label: 'KATEGORIER', href: '/categories' },
    { icon: '🛍️', label: 'KÖP', href: '/buy' },
    { icon: '🏷️', label: 'SÄLJ', href: '/sell' },
    { icon: '⚡', label: 'MATCHA DIREKT', href: '/match' },
    { icon: '🔍', label: 'LETAR EFTER', href: '/wishlist' },
    { icon: '👤', label: 'MIN PROFIL', href: '/profile' },
    { icon: '✅', label: 'VERIFIERING', href: '/verify' },
  ];

  const languages = [
    { flag: '🇸🇪', code: 'SV' }, { flag: '🇳🇴', code: 'NO' }, 
    { flag: '🇩🇰', code: 'DK' }, { flag: '🇫🇮', code: 'FI' },
    { flag: '🇬🇧', code: 'EN' }, { flag: '🇷🇺', code: 'RU' },
    { flag: '🇫🇷', code: 'FR' }, { flag: '🇩🇪', code: 'DE' }
{ flag: '🇪🇸', code: 'ES' }, // Spanska
{ flag: '🇮🇹', code: 'IT' }, // Italienska
{ flag: '🇵🇱', code: 'PL' }, // Polska
{ flag: '🇳🇱', code: 'NL' }  // Nederländska
  ];

  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0, overflowX: 'hidden' }}>
        <SplashScreen />
        <CookieConsent />

        {/* --- SIDOMENY (DRAWER) --- */}
        <div className={`sidebar-drawer ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <span className="sidebar-logo">KARMA</span>
              <button className="close-btn" onClick={() => setSidebarOpen(false)}>✕</button>
            </div>
            
            <nav className="sidebar-links">
              {menuItems.map((item) => (
                <a key={item.label} href={item.href} className="sidebar-item" onClick={() => setSidebarOpen(false)}>
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-label">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="sidebar-footer">
              <p className="footer-label">VÄLJ SPRÅK</p>
              <div className="language-grid">
                {languages.map((l) => (
                  <button 
                    key={l.code} 
                    className={`lang-btn ${lang === l.flag ? 'active' : ''}`}
                    onClick={() => setLang(l.flag)}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- HUVUDINNEHÅLL --- */}
        <div className={`app-container ${isSidebarOpen ? 'pushed' : ''}`}>
          {/* Header med meny-knapp */}
          <div className="header-wrapper">
             <button className="hamburger" onClick={() => setSidebarOpen(true)}>☰</button>
             <Header />
             <div className="header-lang">{lang}</div>
          </div>
          
          <main className="main-content" style={{ 
            flex: 1, 
            paddingBottom: '160px', 
            width: '100%', 
            maxWidth: '600px', 
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            {children}
          </main>
          
          {/* DIN BEFINTLIGA NAVIGATION & SELL MENU */}
          <div className="sell-menu-container">
            <nav className="mobile-nav">
              <a href="/" className="mobile-tab">
                <span>🧭</span>
                <small>Hem</small>
              </a>
              <a href="/auctions" className="mobile-tab">
                <span>🤝</span>
                <small>Match</small>
              </a>
              
              <div className="center-btn-wrapper">
                <div className="sell-menu-options">
                   <a href="/sell/burst" className="sell-opt-item purple-glow">⚡ MASS-SKANNA</a>
                   <a href="/sell" className="sell-opt-item">📸 ENSTAKA</a>
                </div>
                <button className="mobile-tab-center">
                  <span>+</span>
                </button>
              </div>
              
              <a href="/rewards" className="mobile-tab">
                <span>💎</span>
                <small>Karma</small>
              </a>
              <a href="/dashboard/seller" className="mobile-tab">
                <span>💰</span>
                <small>Saldo</small>
              </a>
            </nav>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          /* SIDEBAR STYLES */
          .sidebar-drawer {
            position: fixed;
            left: -300px;
            top: 0;
            width: 300px;
            height: 100%;
            background: #05070a;
            z-index: 10001;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            border-right: 1px solid var(--border);
          }
          .sidebar-drawer.open { left: 0; box-shadow: 20px 0 60px rgba(0,0,0,0.8); }
          .sidebar-inner { display: flex; flex-direction: column; height: 100%; padding: 30px 20px; }
          .sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
          .sidebar-logo { font-weight: 900; letter-spacing: 2px; color: var(--neon-purple); }
          .close-btn { background: none; border: none; color: #fff; font-size: 20px; cursor: pointer; }
          
          .sidebar-links { flex: 1; display: flex; flex-direction: column; gap: 10px; }
          .sidebar-item { 
            display: flex; align-items: center; gap: 15px; padding: 14px 15px;
            text-decoration: none; color: #fff; border-radius: 12px;
            background: rgba(255,255,255,0.02); font-size: 11px; font-weight: 900;
            transition: 0.2s;
          }
          .sidebar-item:hover { background: rgba(157, 78, 221, 0.1); color: var(--neon-purple); }
          
          .sidebar-footer { border-top: 1px solid var(--border); padding-top: 20px; }
          .footer-label { font-size: 9px; font-weight: 900; opacity: 0.5; margin-bottom: 12px; }
          .language-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
          .lang-btn { 
            background: #111; border: 1px solid #222; padding: 10px; border-radius: 10px; 
            font-size: 18px; cursor: pointer; transition: 0.2s;
          }
          .lang-btn.active { border-color: var(--neon-mint); background: rgba(0,255,136,0.05); }

          /* APP LAYOUT ADJUSTMENTS */
          .app-container { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
          .app-container.pushed { transform: translateX(300px); pointer-events: none; opacity: 0.6; }
          
          .header-wrapper { 
            display: flex; align-items: center; justify-content: space-between; 
            padding: 0 15px; position: relative; z-index: 10; 
          }
          .hamburger { background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; }
          .header-lang { font-size: 18px; }

          /* DIN BEFINTLIGA CSS */
          .sell-menu-container { position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999; }
          .sell-menu-options {
            position: absolute; bottom: 80px; left: 50%; transform: translateX(-50%) translateY(20px);
            display: flex; flex-direction: column; align-items: center; gap: 10px; opacity: 0;
            pointer-events: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .center-btn-wrapper:hover .sell-menu-options { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: auto; }
          .sell-opt-item {
            background: #0a0a0a; border: 1px solid var(--border); color: #fff; padding: 12px 20px;
            border-radius: 14px; font-size: 10px; font-weight: 900; text-decoration: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8); white-space: nowrap;
          }
          .purple-glow { border-color: var(--neon-purple); }
          .mobile-nav {
            display: flex; height: calc(70px + env(safe-area-inset-bottom)); 
            background: rgba(2, 4, 10, 0.95); backdrop-filter: blur(20px);
            border-top: 1px solid var(--border); padding-bottom: env(safe-area-inset-bottom); align-items: center; 
          }
          .mobile-tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #555; flex: 1; }
          .mobile-tab small { font-size: 7px; font-weight: 900; text-transform: uppercase; margin-top: 4px; }
          .center-btn-wrapper { position: relative; margin-top: -40px; }
          .mobile-tab-center { 
            width: 60px; height: 60px; background: var(--neon-purple); border-radius: 22px;
            display: flex; align-items: center; justify-content: center; color: #fff; font-size: 30px; 
            border: 5px solid var(--bg-deep); box-shadow: 0 8px 20px rgba(157, 78, 221, 0.4);
          }
        `}} />
      </body>
    </html>
  );
}
