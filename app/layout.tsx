// --- app/layout.tsx ---
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

// Instant Match Popup Component
const InstantMatchPopup = ({ item, buyer }: { item: string, buyer: string }) => (
  <div style={{ 
    position: 'fixed', top: '20px', left: '10px', right: '10px', 
    background: '#000', border: '2px solid var(--neon-mint)', 
    borderRadius: '16px', padding: '15px', zIndex: 10000,
    boxShadow: '0 10px 40px rgba(0,255,136,0.2)', animation: 'slideDown 0.5s ease-out'
  }}>
    <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '1px' }}>AI MATCH FUNNEN! ✨</div>
    <h3 style={{ fontSize: '0.9rem', fontWeight: 900, margin: '4px 0' }}>{buyer} vill köpa din {item}</h3>
    <p style={{ fontSize: '9px', opacity: 0.6, margin: '0 0 12px 0' }}>Pengar redo på kontot. Sälj direkt?</p>
    <div style={{ display: 'flex', gap: '8px' }}>
      <button className="primary-btn" style={{ background: 'var(--neon-mint)', color: '#000', flex: 2, padding: '8px', fontSize: '10px' }}>ACCEPTERA & SÄLJ</button>
      <button style={{ background: 'none', border: '1px solid #222', color: '#fff', flex: 1, borderRadius: '8px', fontSize: '10px' }}>NEKA</button>
    </div>
  </div>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0 }}>
        <SplashScreen />
        <CookieConsent />
        
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          
          <main className="main-content" style={{ 
            flex: 1, 
            paddingBottom: '100px', 
            width: '100%', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            {children}
          </main>
          
          {/* QUICK SELL MENU OVERLAY */}
          <div className="sell-menu-container">
            <div className="sell-menu-options">
               <a href="/sell/burst" className="sell-opt-item purple-glow">⚡ MASS-SKANNA (1-100)</a>
               <a href="/sell" className="sell-opt-item">📸 ENSTAKA OBJEKT</a>
            </div>

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
          @keyframes slideDown { 
            from { transform: translateY(-100%); opacity: 0; } 
            to { transform: translateY(0); opacity: 1; } 
          }

          .sell-menu-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }

          .sell-menu-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Visar menyn när man hovrar eller fokuserar på knappen */
          .center-btn-wrapper:hover .sell-menu-options,
          .center-btn-wrapper:focus-within .sell-menu-options {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .sell-opt-item {
            background: #0a0a0a;
            border: 1px solid #222;
            color: #fff;
            padding: 12px 24px;
            border-radius: 14px;
            font-size: 10px;
            font-weight: 900;
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            white-space: nowrap;
          }

          .purple-glow {
            border: 1px solid var(--neon-purple);
            box-shadow: 0 0 15px rgba(157, 78, 221, 0.2);
          }

          .mobile-nav {
            display: flex; 
            height: calc(70px + env(safe-area-inset-bottom)); 
            background: rgba(2, 4, 10, 0.98); 
            backdrop-filter: blur(20px);
            border-top: 1px solid rgba(255,255,255,0.05); 
            padding: 0 10px;
            padding-bottom: env(safe-area-inset-bottom);
            align-items: center; 
            justify-content: space-around;
          }

          .mobile-tab { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            text-decoration: none; 
            color: #555; 
            gap: 4px;
            flex: 1;
          }

          .mobile-tab span { font-size: 20px; transition: transform 0.2s ease; }
          .mobile-tab:active span { transform: scale(1.2); }
          .mobile-tab small { font-size: 7px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; }

          .center-btn-wrapper {
            position: relative;
            margin-top: -35px;
          }

          .mobile-tab-center { 
            width: 58px; 
            height: 58px; 
            background: var(--neon-purple); 
            border-radius: 20px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            color: #fff; 
            font-size: 32px; 
            border: 4px solid var(--bg-deep);
            box-shadow: 0 10px 25px rgba(157, 78, 221, 0.4);
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .mobile-tab-center:active { transform: scale(0.9); }
        `}} />
      </body>
    </html>
  );
}