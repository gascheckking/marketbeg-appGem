import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARMA",
  description: "Nordic Loop System",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0, overflowX: 'hidden' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          
          {/* Desktop Sidebar - Uppdaterat namn */}
          <nav className="desktop-nav">
             <div style={{ padding: '0 20px', marginBottom: '40px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '4px' }}>KARMA<span style={{color:'var(--neon-purple)'}}>.</span></div>
             </div>
             <div className="nav-section">
                <a href="/" className="nav-link">MARKNAD</a>
                <a href="/auctions" className="nav-link">MATCHNINGAR</a>
                <a href="/dashboard/seller" className="nav-link">MITT SALDO</a>
                <a href="/my-karma" className="nav-link">KARMA DNA</a>
             </div>
          </nav>

          <main className="main-content" style={{ flex: 1, paddingBottom: '100px' }}>
            {children}
          </main>

          {/* Mobile App Bar - Tydligare Branding */}
          <div className="mobile-nav">
            <a href="/" className="mobile-tab"><span>🧭</span><small>Hem</small></a>
            <a href="/auctions" className="mobile-tab"><span>🤝</span><small>Match</small></a>
            <a href="/sell" className="mobile-tab-center"><span>+</span></a>
            <a href="/my-karma" className="mobile-tab"><span>💎</span><small>Karma</small></a>
            <a href="/dashboard/seller" className="mobile-tab"><span>💰</span><small>Saldo</small></a>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .desktop-nav { width: 260px; border-right: 1px solid var(--border); padding: 40px 10px; display: none; background: rgba(0,0,0,0.2); }
          @media (min-width: 1025px) { .desktop-nav { display: block; position: fixed; height: 100vh; } .main-content { margin-left: 260px; } }
          
          .nav-link { padding: 14px 20px; border-radius: 12px; text-decoration: none; color: #666; font-weight: 800; font-size: 12px; display: block; transition: 0.2s; letter-spacing: 1px; }
          .nav-link:hover { background: rgba(157, 78, 221, 0.05); color: #fff; }

          .mobile-nav {
            display: flex; position: fixed; bottom: 0; left: 0; right: 0;
            height: calc(65px + env(safe-area-inset-bottom));
            background: rgba(2, 4, 10, 0.95); backdrop-filter: blur(25px);
            border-top: 1px solid var(--border); justify-content: space-around;
            padding-bottom: env(safe-area-inset-bottom); z-index: 1000;
          }
          .mobile-tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #555; padding-top: 10px; flex: 1; }
          .mobile-tab span { font-size: 20px; }
          .mobile-tab small { font-size: 9px; font-weight: 900; text-transform: uppercase; margin-top: 4px; letter-spacing: 0.5px; }
          .mobile-tab-center { 
            width: 54px; height: 54px; background: var(--neon-purple); border-radius: 18px; 
            display: flex; align-items: center; justify-content: center; color: #fff; 
            font-size: 28px; text-decoration: none; margin-top: -20px; border: 4px solid var(--bg-deep);
            box-shadow: 0 10px 20px rgba(157, 78, 221, 0.3);
          }
        `}} />
      </body>
    </html>
  );
}
