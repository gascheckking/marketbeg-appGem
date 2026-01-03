import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopen | Framtidens Marknadsplats",
  description: "AI-driven cirkulär ekonomi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0, fontFamily: 'system-ui, sans-serif' }}>
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
            gap: '10px'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '40px', letterSpacing: '-1px' }}>MARKETBEG.</div>
            
            {['Feed', 'Auctions', 'Leaderboard', 'My-Karma', 'Dashboard'].map((item) => (
              <a 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className="nav-link"
                style={{ 
                  padding: '15px 20px', 
                  borderRadius: '12px', 
                  textDecoration: 'none', 
                  color: '#888',
                  fontWeight: 700,
                  fontSize: '14px'
                }}
              >
                {item.replace('-', ' ')}
              </a>
            ))}
          </nav>

          {/* Main Content Area */}
          <main style={{ marginLeft: '280px', flex: 1, position: 'relative' }}>
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
          .glass-card {
            background: var(--glass);
            border: 1px solid var(--border);
            border-radius: 24px;
            backdrop-filter: blur(10px);
            padding: 25px;
          }
          .primary-btn {
            background: var(--neon-mint);
            color: #000;
            border: none;
            padding: 18px 30px;
            border-radius: 16px;
            font-weight: 900;
            cursor: pointer;
            transition: 0.2s;
          }
          .primary-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,255,136,0.2); }
          .muted { color: #666; }
          .page-wrapper { padding: 60px 40px; }
          .nav-link:hover { background: var(--glass); color: #fff; }
        `}} />
      </body>
    </html>
  );
}
