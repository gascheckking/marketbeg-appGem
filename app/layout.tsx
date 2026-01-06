// // app/layout.tsx
"use client";
import React, { useState } from 'react';
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState('🇸🇪');
  const pathname = usePathname();

  const menuItems = [
    { icon: '🛍️', label: 'KÖP', href: '/buy' },
    { icon: '🏷️', label: 'SÄLJ', href: '/sell' },
    { icon: '🎯', label: 'MINA MATCHER', href: '/match' },
    { icon: '👤', label: 'MIN PROFIL', href: '/profile' },
    { icon: '🛡️', label: 'KARMA SHIELD', href: '/my-karma' },
  ];

  return (
    <html lang="sv">
      <body style={{ background: '#02040a', color: '#fff', margin: 0, overflowX: 'hidden' }}>
        <SplashScreen />
        
        {/* SIDEMENU */}
        <div className={`sidebar-drawer ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <span style={{ fontWeight: 900, letterSpacing: '2px' }}>KARMA∞</span>
              <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px' }}>✕</button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {menuItems.map((item) => (
                <Link key={item.label} href={item.href} className="sidebar-link" onClick={() => setSidebarOpen(false)}>
                  <span>{item.icon}</span> <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div className={`app-container ${isSidebarOpen ? 'pushed' : ''}`}>
          <Navbar onOpenMenu={() => setSidebarOpen(true)} lang={lang} setLang={setLang} />
          <main style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '120px' }}>
            {children}
          </main>

          {/* DYNAMISK BOTTOM NAV (Ingen glitch med Link) */}
          <nav className="mobile-nav">
             <Link href="/" className={`tab ${pathname === '/' ? 'active' : ''}`}><span>🧭</span><small>Hem</small></Link>
             <Link href="/match" className={`tab ${pathname === '/match' ? 'active' : ''}`}><span>🤝</span><small>Match</small></Link>
             <div className="center-fab">
                <Link href="/sell"><button>+</button></Link>
             </div>
             <Link href="/my-karma" className={`tab ${pathname === '/my-karma' ? 'active' : ''}`}><span>🛡️</span><small>Karma</small></Link>
             <Link href="/profile" className={`tab ${pathname === '/profile' ? 'active' : ''}`}><span>💰</span><small>Saldo</small></Link>
          </nav>
        </div>

        <style jsx global>{`
          .sidebar-drawer { position: fixed; left: -280px; top: 0; width: 280px; height: 100%; background: #05070a; z-index: 2000; transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); border-right: 1px solid #111; }
          .sidebar-drawer.open { transform: translateX(280px); }
          .sidebar-link { display: flex; align-items: center; gap: 15px; padding: 15px; text-decoration: none; color: #fff; font-size: 11px; font-weight: 900; background: rgba(255,255,255,0.02); border-radius: 12px; }
          .app-container { transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
          .app-container.pushed { transform: translateX(280px); pointer-events: none; }
          .mobile-nav { position: fixed; bottom: 0; width: 100%; height: 85px; background: rgba(2,4,10,0.95); backdrop-filter: blur(20px); display: flex; border-top: 1px solid #111; z-index: 1000; }
          .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; color: #444; }
          .tab.active { color: #fff; }
          .tab span { font-size: 20px; }
          .tab small { font-size: 8px; font-weight: 900; margin-top: 4px; }
          .center-fab { position: relative; width: 70px; }
          .center-fab button { position: absolute; top: -25px; left: 50%; transform: translateX(-50%); width: 60px; height: 60px; background: var(--neon-purple); border-radius: 20px; border: 5px solid #02040a; color: #fff; font-size: 30px; }
        `}</style>
      </body>
    </html>
  );
}
