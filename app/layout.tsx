import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARMA | Nordic System",
  description: "Things deserve more than one life.",
  manifest: "/manifest.json",
};

// Här läggs din meta-tagg in på "Next.js-vis"
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
          
          {/* Sidebar Nav - Desktop (Göms på mobil via CSS) */}
          <nav className="desktop-nav">
            <div style={{ padding: '0 20px', marginBottom: '50px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '6px', color: '#fff' }}>KARMA</div>
              <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--neon-purple)', letterSpacing: '2px', marginTop: '5px' }}>
                NORDIC SYSTEM
              </div>
            </div>
            
            {[
              { name: 'Utforska', path: '/feed' },
              { name: 'Mina Matchningar', path: '/auctions' },
              { name: 'Din Karma', path: '/my-karma' },
              { name: 'Vault (Ekonomi)', path: '/dashboard/seller' },
              { name: 'Snabbsälj', path: '/sell/instant' },
              { name: 'Burst Mode (Lager)', path: '/sell/burst' },
              { name: 'Support / Shield', path: '/dispute' }
            ].map((link) => (
              <a key={link.path} href={link.path} className="nav-link">
                {link.name.toUpperCase()}
              </a>
            ))}

            <div style={{ 
              marginTop: 'auto', 
              padding: '20px', 
              background: 'rgba(157, 78, 221, 0.03)', 
              borderRadius: '20px', 
              border: '1px solid rgba(157, 78, 221, 0.1)' 
            }}>
              <div style={{ fontSize: '10px', color: 'var(--neon-purple)', fontWeight: 900, marginBottom: '5px' }}>SHIELD STATUS</div>
              <div style={{ fontSize: '14px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pulse" style={{ background: 'var(--neon-mint)', boxShadow: '0 0 10px var(--neon-mint)' }}></span>
                PROTOCOL ACTIVE
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="main-content">
            {children}
          </main>

          {/* Mobile Tab Bar (Visas bara på mobil) */}
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

          /* Desktop Sidebar Layout */
          .desktop-nav {
            width: 280px;
            border-right: 1px solid var(--border);
            padding: 40px 20px;
            position: fixed;
            height: 100vh;
            display: flex;
            flex-direction: column;
            gap: 8px;
            background: var(--bg-deep);
            z-index: 100;
          }

          .main-content {
            margin-left: 280px;
            flex: 1;
            min-height: 100vh;
          }

          .nav-link {
            padding: 12px 20px;
            border-radius: 12px;
            text-decoration: none;
            color: #888;
            font-weight: 700;
            font-size: 13px;
            transition: 0.2s all;
          }

          .nav-link:hover { background: var(--glass); color: #fff; }

          /* Mobile Nav (Dold som standard) */
          .mobile-nav { display: none; }

          /* Responsive Breakpoint för Mobil */
          @media (max-width: 1024px) {
            .desktop-nav { display: none; }
            .main-content { margin-left: 0 !important; }
            .page-wrapper { padding: 40px 20px !important; }

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

            .mobile-tab {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-decoration: none;
              color: #666;
              gap: 4px;
            }

            .mobile-tab span { font-size: 20px; }
            .mobile-tab small { font-size: 9px; font-weight: 800; text-transform: uppercase; }

            .mobile-tab-center {
              width: 54px;
              height: 54px;
              background: var(--neon-purple);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: 30px;
              text-decoration: none;
              margin-top: -35px;
              border: 5px solid var(--bg-deep);
              box-shadow: 0 4px 15px rgba(157, 78, 221, 0.3);
            }
          }

          .glass-card {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 24px;
            backdrop-filter: blur(10px);
            padding: 25px;
          }

          .primary-btn {
            background: var(--neon-purple);
            color: #fff;
            border: none;
            padding: 18px 30px;
            border-radius: 16px;
            font-weight: 900;
          }

          .page-wrapper { 
            padding: 60px 80px; 
            max-width: 1400px;
          }

          .pulse { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
          ::-webkit-scrollbar { display: none; }
        `}} />
      </body>
    </html>
  );
}
