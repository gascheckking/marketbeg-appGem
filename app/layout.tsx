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
  const pathname = usePathname();

  // Sidebarn innehåller nu bara "Extra" saker, inte huvudnavigationen
  const sidebarItems = [
    { icon: '⚙️', label: 'INSTÄLLNINGAR', href: '/settings' },
    { icon: '📊', label: 'HÅLLBARHETSRAPPORT', href: '/impact' },
    { icon: '💬', label: 'SUPPORT', href: '/support' },
    { icon: '📜', label: 'VILLKOR', href: '/terms' },
  ];

  return (
    <html lang="sv">
      <body style={{ background: '#02040a', color: '#fff', margin: 0, overflowX: 'hidden' }}>
        <SplashScreen />
        
        {/* SIDEMENU */}
        <div className={`sidebar-drawer ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="sidebar-header">
              <span style={{ fontWeight: 900, letterSpacing: '2px', color: 'var(--neon-purple)' }}>MENY</span>
              <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px' }}>✕</button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '20px' }}>
              {sidebarItems.map((item) => (
                <Link key={item.label} href={item.href} className="sidebar-link" onClick={() => setSidebarOpen(false)}>
                  <span style={{ fontSize: '14px' }}>{item.icon}</span> 
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className={`app-container ${isSidebarOpen ? 'pushed' : ''}`}>
          <Navbar onOpenMenu={() => setSidebarOpen(true)} />
          
          <main style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '120px' }}>
            {children}
          </main>

          {/* LÅST BOTTOM NAV - Fokus på navigation */}
          <nav className="mobile-nav">
             <Link href="/" className={`tab ${pathname === '/' ? 'active' : ''}`}>
                <span>🧭</span><small>Hem</small>
             </Link>
             <Link href="/match" className={`tab ${pathname === '/match' ? 'active' : ''}`}>
                <span>🤝</span><small>Match</small>
             </Link>
             <div className="center-fab">
                <Link href="/sell"><button>+</button></Link>
             </div>
             <Link href="/buy" className={`tab ${pathname.includes('/buy') ? 'active' : ''}`}>
                <span>🛍️</span><small>Utforska</small>
             </Link>
             <Link href="/chat" className={`tab ${pathname.includes('/chat') ? 'active' : ''}`}>
                <span>💬</span><small>Chatt</small>
             </Link>
          </nav>
        </div>

        <style jsx global>{`
          .sidebar-drawer { position: fixed; left: -280px; top: 0; width: 280px; height: 100%; background: #05070a; z-index: 2000; transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); border-right: 1px solid #111; }
          .sidebar-drawer.open { transform: translateX(280px); }
          .sidebar-inner { padding: 40px 20px; }
          .sidebar-link { display: flex; align-items: center; gap: 15px; padding: 15px; text-decoration: none; color: #fff; font-size: 10px; font-weight: 900; background: rgba(255,255,255,0.02); border-radius: 12px; }
          .app-container { transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
          .mobile-nav { position: fixed; bottom: 0; width: 100%; height: 85px; background: rgba(2,4,10,0.98); backdrop-filter: blur(20px); display: flex; border-top: 1px solid rgba(255,255,255,0.05); z-index: 1000; }
          .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; color: #444; transition: 0.2s; }
          .tab.active { color: #fff; }
          .tab span { font-size: 20px; }
          .tab small { font-size: 8px; font-weight: 900; margin-top: 4px; text-transform: uppercase; }
          .center-fab { position: relative; width: 60px; }
          .center-fab button { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 55px; height: 55px; background: var(--neon-purple); border-radius: 18px; border: 4px solid #02040a; color: #fff; font-size: 24px; box-shadow: 0 8px 20px rgba(157, 78, 221, 0.3); }
        `}</style>
      </body>
    </html>
  );
}
