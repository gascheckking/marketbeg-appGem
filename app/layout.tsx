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
          
          {/* Desktop Sidebar */}
          <nav className="desktop-nav">
             <div style={{ padding: '0 20px', marginBottom: '40px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '4px' }}>KARMA</div>
             </div>
             <div className="nav-section">
                <a href="/" className="nav-link">HEM</a>
                <a href="/auctions" className="nav-link">MATCHNINGAR</a>
                <a href="/dashboard/seller" className="nav-link">SALDO (VAULT)</a>
                <a href="/my-karma" className="nav-link">MIN KARMA</a>
             </div>
          </nav>

          <main className="main-content" style={{ flex: 1 }}>
            {children}
          </main>

          {/* Mobile App Bar - Förenklade namn */}
          <div className="mobile-nav">
            <a href="/" className="mobile-tab"><span>🧭</span><small>Hem</small></a>
            <a href="/auctions" className="mobile-tab"><span>🤝</span><small>Match</small></a>
            <a href="/sell/instant" className="mobile-tab-center"><span>+</span></a>
            <a href="/my-karma" className="mobile-tab"><span>💎</span><small>Karma</small></a>
            <a href="/dashboard/seller" className="mobile-tab"><span>💰</span><small>Saldo</small></a>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .desktop-nav { width: 260px; border-right: 1px solid var(--border); padding: 40px 10px; display: none; }
          @media (min-width: 1025px) { .desktop-nav { display: block; } .main-content { margin-left: 260px; } }
          
          .nav-link { padding: 12px 20px; border-radius: 12px; text-decoration: none; color: #888; font-weight: 700; display: block; transition: 0.2s; }
          .nav-link:hover { background: var(--glass); color: #fff; }

          .mobile-nav {
            display: flex; position: fixed; bottom: 0; left: 0; right: 0;
            height: calc(70px + env(safe-area-inset-bottom));
            background: rgba(2, 4, 10, 0.9); backdrop-filter: blur(20px);
            border-top: 1px solid var(--border); justify-content: space-around;
            padding-bottom: env(safe-area-inset-bottom); z-index: 1000;
          }
          .mobile-tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #666; padding-top: 12px; }
          .mobile-tab small { font-size: 8px; font-weight: 900; text-transform: uppercase; margin-top: 4px; }
          .mobile-tab-center { 
            width: 50px; height: 50px; background: var(--neon-purple); border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; color: #fff; 
            font-size: 24px; text-decoration: none; margin-top: -25px; border: 4px solid var(--bg-deep);
            box-shadow: 0 0 20px rgba(157, 78, 221, 0.4);
          }
        `}} />
      </body>
    </html>
  );
}
