// // app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = { 
  title: "KARMA", 
  description: "Nordic Loop System - Know, Acquire, Reuse, Match, Again" 
};

export const viewport: Viewport = { 
  width: "device-width", 
  initialScale: 1, 
  maximumScale: 1, 
  userScalable: false, 
  viewportFit: "cover" 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0, overflowX: 'hidden' }}>
        <SplashScreen />
        <CookieConsent />
        
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          
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
          
          {/* NAVIGATION & SELL MENU */}
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
          .sell-menu-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
          }

          .sell-menu-options {
            position: absolute;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .center-btn-wrapper:hover .sell-menu-options {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
          }

          .sell-opt-item {
            background: #0a0a0a;
            border: 1px solid var(--border);
            color: #fff;
            padding: 12px 20px;
            border-radius: 14px;
            font-size: 10px;
            font-weight: 900;
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            white-space: nowrap;
          }

          .purple-glow { border-color: var(--neon-purple); }

          .mobile-nav {
            display: flex; 
            height: calc(70px + env(safe-area-inset-bottom)); 
            background: rgba(2, 4, 10, 0.95); 
            backdrop-filter: blur(20px);
            border-top: 1px solid var(--border);
            padding-bottom: env(safe-area-inset-bottom);
            align-items: center; 
          }

          .mobile-tab { 
            display: flex; flex-direction: column; align-items: center; 
            text-decoration: none; color: #555; flex: 1;
          }

          .mobile-tab small { font-size: 7px; font-weight: 900; text-transform: uppercase; margin-top: 4px; }

          .center-btn-wrapper { position: relative; margin-top: -40px; }

          .mobile-tab-center { 
            width: 60px; height: 60px; background: var(--neon-purple); 
            border-radius: 22px; display: flex; align-items: center; 
            justify-content: center; color: #fff; font-size: 30px; 
            border: 5px solid var(--bg-deep);
            box-shadow: 0 8px 20px rgba(157, 78, 221, 0.4);
          }
        `}} />
      </body>
    </html>
  );
}
