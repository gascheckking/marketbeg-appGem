import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARMA | Nordic System",
  description: "Things deserve more than one life.",
  manifest: "/manifest.json",
  // PWA-inställningar för iPhone
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
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          
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
              <a href="/feed" className="nav-link">UTFORSKA</a>
              <details className="nav-dropdown">
                <summary className="nav-link">KATEGORIER</summary>
                <div className="dropdown-items">
                  <a href="/category/electronics">Elektronik</a>
                  <a href="/category/fashion">Mode & Vinted</a>
                  <a href="/category/home">Hem & Design</a>
                  <a href="/category/vehicles">Fordon (Blocket)</a>
                </div>
              </details>
              <a href="/auctions" className="nav-link">MINA MATCHNINGAR</a>
            </div>

            <div className="nav-section">
              <span className="section-label">VAULT & SÄLJ</span>
              <a href="/dashboard/seller" className="nav-link">MIN EKONOMI (VAULT)</a>
              <a href="/sell/instant" className="nav-link" style={{ color: 'var(--neon-mint)' }}>SNABBSÄLJ +</a>
              <details className="nav-dropdown">
                <summary className="nav-link">SÄLJVERKTYG</summary>
                <div className="dropdown-items">
                  <a href="/sell/burst">Burst Mode (Lager)</a>
                  <a href="/profile/active-sales">Aktiva Annonser</a>
                  <a href="/shipping">Frakt & Logistik</a>
                </div>
              </details>
            </div>

            <div style={{ marginTop: 'auto', padding: '0 10px' }}>
              <a href="/my-karma" className="nav-link">DIN KARMA 💎</a>
              <a href="/dispute" className="nav-link">SHIELD SUPPORT</a>
              <div style={{ 
                marginTop: '15px', 
                padding: '15px', 
                background: 'rgba(157, 78, 221, 0.03)', 
                borderRadius: '15px', 
                border: '1px solid rgba(157, 78, 221, 0.1)' 
              }}>
                <div style={{ fontSize: '9px', color: 'var(--neon-purple)', fontWeight: 900, marginBottom: '5px', letterSpacing: '1px' }}>SHIELD STATUS</div>
                <div style={{ fontSize: '12px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="pulse" style={{ background: 'var(--neon-mint)', boxShadow: '0 0 10px var(--neon-mint)' }}></span>
                  PROTOCOL ACTIVE
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="main-content">
            {children}
          </main>

          {/* Mobile Tab Bar */}
          <div className="mobile-nav">
            <a href="/feed" className="mobile-tab"><span>🧭</span><small>Hem</small></a>
            <a href="/auctions" className="mobile-tab"><span>🤝</span><small>Match</small></a>
            <a href="/sell/instant" className="mobile-tab-center"><span>+</span></a>
            <a href="/my-karma" className="mobile-tab"><span>💎</span><small>Karma</small></a>
            <a href="/dashboard/seller" className="mobile-tab"><span>💰</span><small>Vault</small></a>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg-deep: #02040a;
            --border: rgba(255,255,255,0.08);
            --neon-mint: #00ff88;
            --neon-purple: #9d4edd;
            --glass: rgba(255,255,255,0.03);
          }

          .desktop-nav {
            width: 280px;
            border-right: 1px solid var(--border);
            padding: 40px 15px;
            position: fixed;
            height: 100vh;
            display: flex;
            flex-direction: column;
            background: var(--bg-deep);
            z-index: 100;
          }

          .nav-section { margin-bottom: 25px; }
          .section-label { font-size: 10px; font-weight: 900; color: #444; letter-spacing: 1.5px; padding: 0 20px 10px; display: block; }

          .main-content { margin-left: 280px; flex: 1; min-height: 100vh; }

          .nav-link {
            padding: 10px 20px;
            border-radius: 10px;
            text-decoration: none;
            color: #888;
            font-weight: 700;
            font-size: 13px;
            transition: 0.2s all;
            display: block;
            cursor: pointer;
          }

          .nav-link:hover { background: var(--glass); color: #fff; }

          /* Dropdown Styling */
          .nav-dropdown summary { list-style: none; outline: none; }
          .nav-dropdown summary::-webkit-details-marker { display: none; }
          .nav-dropdown summary::after { content: '→'; float: right; font-size: 10px; opacity: 0.3; transition: 0.3s; }
          .nav-dropdown[open] summary::after { transform: rotate(90deg); }

          .dropdown-items {
            margin-left: 20px;
            padding-left: 15px;
            border-left: 1px solid var(--border);
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .dropdown-items a {
            text-decoration: none;
            color: #555;
            font-size: 12px;
            font-weight: 600;
            padding: 5px 10px;
            transition: 0.2s;
          }

          .dropdown-items a:hover { color: var(--neon-purple); }

          .mobile-nav { display: none; }

          @media (max-width: 1024px) {
            .desktop-nav { display: none; }
            .main-content { margin-left: 0 !important; }
            .mobile-nav {
              display: flex;
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              height: 75px;
              background: rgba(2, 4, 10, 0.95);
              backdrop-filter: blur(20px);
              border-top: 1px solid var(--border);
              justify-content: space-around;
              align-items: center;
              padding-bottom: env(safe-area-inset-bottom);
              z-index: 1000;
            }
            .mobile-tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #666; gap: 4px; }
            .mobile-tab span { font-size: 20px; }
            .mobile-tab small { font-size: 9px; font-weight: 800; text-transform: uppercase; }
            .mobile-tab-center { width: 54px; height: 54px; background: var(--neon-purple); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 30px; text-decoration: none; margin-top: -35px; border: 5px solid var(--bg-deep); box-shadow: 0 4px 15px rgba(157, 78, 221, 0.3); }
          }

          .pulse { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
          ::-webkit-scrollbar { display: none; }
        `}} />
      </body>
    </html>
  );
}
