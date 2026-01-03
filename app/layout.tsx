import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopen | Know • Acquire • Reuse • Match • Again",
  description: "AI-driven cirkulär ekonomi med Karma Shield",
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
            <div style={{ padding: '0 20px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '5px', letterSpacing: '-1px' }}>MARKETBEG.</div>
              <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--neon-purple)', letterSpacing: '2px', marginBottom: '40px' }}>
                K.A.R.M.A. PROTOCOL ACTIVE
              </div>
            </div>
            
            {[
              { name: 'Feed', path: '/feed' },
              { name: 'Auctions', path: '/auctions' },
              { name: 'Leaderboard', path: '/leaderboard' },
              { name: 'My Karma', path: '/dashboard' },
              { name: 'Seller Hub', path: '/dashboard/seller' },
              { name: 'Sell Instant', path: '/sell/instant' },
              { name: 'Security Center', path: '/dispute' }
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
                  fontSize: '14px',
                  transition: '0.2s all'
                }}
              >
                {link.name}
              </a>
            ))}

            {/* Bottom Nav Stats */}
            <div style={{ marginTop: 'auto', padding: '20px', background: 'rgba(157, 78, 221, 0.05)', borderRadius: '20px', border: '1px solid rgba(157, 78, 221, 0.1)' }}>
              <div style={{ fontSize: '10px', color: 'var(--neon-purple)', fontWeight: 900, marginBottom: '5px' }}>DIN STATUS</div>
              <div style={{ fontSize: '14px', fontWeight: 900 }}>Elite Seller</div>
              <div style={{ width: '100%', height: '4px', background: '#222', borderRadius: '2px', marginTop: '10px' }}>
                <div style={{ width: '75%', height: '100%', background: 'var(--neon-purple)', borderRadius: '2px' }}></div>
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <main style={{ marginLeft: '280px', flex: 1, position: 'relative', minHeight: '100vh' }}>
            {children}
          </main>
        </div>

        {/* CSS Globals Injection */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --bg-deep: #02040a;
            --border: rgba(255,255,255,0.08);
            --neon-mint: #00ff88;
            --neon-purple: #9d4edd;
            --glass: rgba(255,255,255,0.03);
          }
          
          body {
            -webkit-font-smoothing: antialiased;
          }

          .glass-card {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 24px;
            backdrop-filter: blur(10px);
            padding: 25px;
            transition: transform 0.3s ease, border 0.3s ease;
          }
          
          .glass-card:hover {
            border: 1px solid rgba(255,255,255,0.15);
          }

          .primary-btn {
            background: var(--neon-mint);
            color: #000;
            border: none;
            padding: 18px 30px;
            border-radius: 16px;
            font-weight: 900;
            cursor: pointer;
            transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
          }

          .primary-btn:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 10px 25px rgba(0,255,136,0.3); 
            filter: brightness(1.1);
          }

          .primary-btn:active {
            transform: translateY(-1px);
          }

          .muted { color: #666; }
          
          .page-wrapper { 
            padding: 60px 80px; 
            max-width: 1400px;
            margin: 0 auto;
          }

          .nav-link:hover { 
            background: var(--glass); 
            color: #fff; 
            padding-left: 25px;
          }

          /* Stat Pill for KARMA indicators */
          .stat-pill {
            padding: 6px 14px;
            border-radius: 20px;
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--border);
            font-size: 12px;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          /* Pulse for Live Auctions */
          .pulse {
            width: 8px;
            height: 8px;
            background: #ff4444;
            border-radius: 50%;
            box-shadow: 0 0 10px #ff4444;
            animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          }

          @keyframes pulse-ring {
            0% { transform: scale(.33); }
            80%, 100% { opacity: 0; }
          }

          /* Webkit Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: var(--bg-deep); }
          ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #252525; }
        `}} />
      </body>
    </html>
  );
}
