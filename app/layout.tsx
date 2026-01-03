import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARMA | Nordic System",
  description: "Things deserve more than one life.",
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
          <nav style={{ 
            width: '280px', 
            borderRight: '1px solid var(--border)', 
            padding: '40px 20px', 
            position: 'fixed', 
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            background: 'var(--bg-deep)',
            zIndex: 100
          }}>
            {/* Ny Logo-filosofi: Rent, stort avstånd, ingen symbol */}
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
              <a 
                key={link.path} 
                href={link.path}
                className="nav-link"
                style={{ 
                  padding: '12px 20px', 
                  borderRadius: '12px', 
                  textDecoration: 'none', 
                  color: '#888',
                  fontWeight: 700,
                  fontSize: '13px',
                  transition: '0.2s all'
                }}
              >
                {link.name.toUpperCase()}
              </a>
            ))}

            {/* Shield Indicator Status */}
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
          <main style={{ marginLeft: '280px', flex: 1, position: 'relative', minHeight: '100vh' }}>
            {children}
          </main>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg-deep: #02040a;
            --border: rgba(255,255,255,0.08);
            --neon-mint: #00ff88;
            --neon-purple: #9d4edd;
            --glass: rgba(255,255,255,0.03);
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
            cursor: pointer;
            transition: 0.2s ease;
          }

          .primary-btn:hover { 
            transform: translateY(-2px);
            filter: brightness(1.2);
          }

          .muted { color: #555; }
          
          .page-wrapper { 
            padding: 60px 80px; 
            max-width: 1400px;
          }

          .nav-link:hover { 
            background: var(--glass); 
            color: #fff; 
          }

          .stat-pill {
            padding: 6px 14px;
            border-radius: 20px;
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--border);
            font-size: 12px;
            font-weight: 800;
          }

          .pulse {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
          }

          ::-webkit-scrollbar { display: none; }
        `}} />
      </body>
    </html>
  );
}
