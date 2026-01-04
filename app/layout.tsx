import type { Metadata, Viewport } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";

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

export const metadata: Metadata = { title: "KARMA", description: "Nordic Loop System" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0 }}>
        <SplashScreen />
        <CookieConsent />
        
        {/* Denna visas när AI matchar säljare/köpare */}
        {/* <InstantMatchPopup item="Versace Tofflor" buyer="Alex K." /> */}

        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          <main className="main-content" style={{ flex: 1, paddingBottom: '90px', width: '100%', maxWidth: '450px', margin: '0 auto' }}>
            {children}
          </main>
          
          <nav className="mobile-nav">
            <a href="/" className="mobile-tab"><span>🧭</span><small>Hem</small></a>
            <a href="/auctions" className="mobile-tab"><span>🤝</span><small>Match</small></a>
            <a href="/sell" className="mobile-tab-center"><span>+</span></a>
            <a href="/rewards" className="mobile-tab"><span>💎</span><small>Karma</small></a>
            <a href="/dashboard/seller" className="mobile-tab"><span>💰</span><small>Saldo</small></a>
          </nav>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          .mobile-nav {
            display: flex; position: fixed; bottom: 0; left: 0; right: 0;
            height: calc(60px + env(safe-area-inset-bottom));
            background: rgba(2, 4, 10, 0.95); backdrop-filter: blur(20px);
            border-top: 1px solid var(--border); padding-bottom: env(safe-area-inset-bottom); z-index: 1000;
          }
          .mobile-tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #555; flex: 1; justify-content: center; }
          .mobile-tab span { font-size: 18px; }
          .mobile-tab small { font-size: 8px; font-weight: 800; text-transform: uppercase; margin-top: 2px; }
          .mobile-tab-center { 
            width: 44px; height: 44px; background: var(--neon-purple); border-radius: 12px; 
            display: flex; align-items: center; justify-content: center; color: #fff; 
            font-size: 20px; text-decoration: none; margin-top: -12px; border: 3px solid var(--bg-deep);
            box-shadow: 0 0 15px rgba(157, 78, 221, 0.4);
          }
        `}} />
      </body>
    </html>
  );
}
