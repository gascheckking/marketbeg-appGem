"use client";
import './globals.css';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <html lang="sv">
      <head>
        <title>KARMA LOOP | Give your things a second life</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> 
      </head>
      <body>
        <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', background: '#02040a' }}>
          
          {/* SIDEBAR - Täcker hela vänstersidan på PC */}
          <aside style={{ 
            width: '280px', 
            borderRight: '1px solid rgba(255,255,255,0.08)', 
            background: '#0a0a0a', 
            padding: '30px', 
            position: 'sticky', 
            top: 0, 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            zIndex: 1000
          }}>
            <div 
              onClick={() => router.push('/')}
              style={{ fontWeight: 900, fontSize: '24px', marginBottom: '10px', cursor: 'pointer', letterSpacing: '-1px' }}
            >
              KARMA<span style={{color: '#9d4edd'}}>/LOOP</span>
            </div>
            
            {/* BankID direkt under loggan */}
            <div style={{ padding: '15px', background: 'rgba(0,255,136,0.05)', borderRadius: '16px', border: '1px solid rgba(0,255,136,0.1)', marginBottom: '30px' }}>
              <button style={{ 
                width: '100%', background: '#00ff88', color: '#000', border: 'none', padding: '12px', 
                borderRadius: '10px', fontWeight: 900, cursor: 'pointer', fontSize: '13px' 
              }}>🆔 BANKID LOGIN</button>
            </div>

            <nav style={{ flex: 1 }}>
              <div style={{ marginBottom: '30px' }}>
                <small style={{ color: '#444', letterSpacing: '1px', fontWeight: 800, fontSize: '10px' }}>MARKETS</small>
                <div onClick={() => router.push('/')} className={`nav-item ${pathname === '/' ? 'active' : ''}`}>🌐 Utforska</div>
                <div onClick={() => router.push('/search')} className="nav-item">🛍️ Köp prylar</div>
                <div className="nav-item">🔥 Trendande</div>
              </div>
              
              <div style={{ marginBottom: '30px' }}>
                <small style={{ color: '#444', letterSpacing: '1px', fontWeight: 800, fontSize: '10px' }}>ACCOUNT</small>
                <div onClick={() => router.push('/my-karma')} className="nav-item">💳 Min Ekonomi</div>
                <div className="nav-item">🛡️ Karma Shield</div>
              </div>
            </nav>

            <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '20px' }}>
              <div className="nav-item" style={{ color: '#888' }}>⚙️ Inställningar</div>
              <div style={{ fontSize: '10px', color: '#333', marginTop: '10px' }}>v2.0.4 Premium</div>
            </div>
          </aside>

          {/* MAIN CONTENT - Expanderar för att fylla resten av skärmen */}
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
