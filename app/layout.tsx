import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARMA | Nordic System",
  description: "Things deserve more than one life.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "KARMA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0, fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>
        <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
          
          {/* Sidebar Nav - Desktop */}
          <nav className="desktop-nav">
            <div style={{ padding: '0 20px', marginBottom: '40px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '6px', color: '#fff' }}>KARMA</div>
              <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--neon-purple)', letterSpacing: '2px', marginTop: '5px' }}>
                NORDIC SYSTEM
              </div>
            </div>
            
            <div className="nav-section">
              <span className="section-label">MARKET</span>
              <a href="/" className="nav-link">HEM</a>
              <a href="/feed" className="nav-link">UTFORSKA</a>
              <a href="/auctions" className="nav-link">MINA MATCHNINGAR</a>
            </div>

            <div className="nav-section">
              <span className="section-label">VAULT & SÄLJ</span>
              <a href="/dashboard/seller" className="nav-link">MIN EKONOMI (VAULT)</a>
              <a href="/sell/instant" className="nav-link" style={{ color: 'var(--neon-mint)' }}>SNABBSÄLJ +</a>
            </div>

            <div style={{ marginTop: 'auto', padding: '0 10px' }}>
              <a href="/my-karma" className="nav-link">DIN KARMA 💎</a>
              <div style={{ 
                marginTop: '15px', padding: '15px', background: 'rgba(157, 78, 221, 0.03)', 
                borderRadius: '15px', border: '1px solid rgba(157, 78, 221, 0.1)' 
              }}>
                <div style={{ fontSize: '12px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="pulse" style={{ background: 'var(--neon-mint)', boxShadow: '0 0 10px var(--neon-mint)' }}></span>
                  PROTOCOL ACTIVE
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="main-content" style={{ width: '100%', minWidth: 0 }}>
            {children}
          </main>

          {/* Mobile Tab Bar */}
          <div className="mobile-nav">
            <a href="/" className="mobile-tab"><span>🧭</span><small>Hem</small></a>
            <a href="/auctions" className="mobile-tab"><span>🤝</span><small>Match</small></a>
            <a href="/sell/instant" className="mobile-tab-center"><span>+</span></a>
            <a href="/my-karma" className="mobile-tab"><span>💎</span><small>Karma</small></a>
            <a href="/dashboard/seller" className="mobile-tab"><span>💰</span><small>Vault</small></a>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .desktop-nav {
            width: 280px; border-right: 1px solid var(--border); padding: 40px 15px;
            position: fixed; height: 100vh; display: flex; flex-direction: column;
            background: var(--bg-deep); z-index: 100;
          }
          .main-content { margin-left: 280px; flex: 1; }
          .nav-link { padding: 10px 20px; border-radius: 10px; text-decoration: none; color: #888; font-weight: 700; font-size: 13px; transition: 0.2s all; display: block; }
          .nav-link:hover { background: var(--glass); color: #fff; }

          @media (max-width: 1024px) {
            .desktop-nav { display: none; }
            .main-content { margin-left: 0 !important; width: 100vw; }
            .mobile-nav {
              display: flex; position: fixed; bottom: 0; left: 0; right: 0;
              height: calc(75px + env(safe-area-inset-bottom));
              background: rgba(2, 4, 10, 0.95); backdrop-filter: blur(20px);
              border-top: 1px solid var(--border); justify-content: space-around;
              align-items: center; padding-bottom: env(safe-area-inset-bottom); z-index: 1000;
            }
            .mobile-tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #666; gap: 4px; }
            .mobile-tab small { font-size: 9px; font-weight: 800; text-transform: uppercase; }
            .mobile-tab-center { 
              width: 54px; height: 54px; background: var(--neon-purple); border-radius: 50%; 
              display: flex; align-items: center; justify-content: center; color: #fff; 
              font-size: 30px; text-decoration: none; margin-top: -35px; border: 5px solid var(--bg-deep); 
            }
          }
          .pulse { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        `}} />
      </body>
    </html>
  );
}
