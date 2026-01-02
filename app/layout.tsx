"use client";
import './globals.css';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <html lang="sv">
      <head>
        <title>KARMA LOOP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> 
      </head>
      <body>
        <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
          
          {/* SIDEBAR (PC) */}
          <aside style={{ 
            width: '280px', borderRight: '1px solid rgba(255,255,255,0.08)', 
            background: '#0a0a0a', padding: '30px', position: 'sticky', top: 0, height: '100vh'
          }}>
            <div onClick={() => router.push('/')} style={{ fontWeight: 900, fontSize: '24px', marginBottom: '10px', cursor: 'pointer' }}>
              KARMA<span style={{color: '#9d4edd'}}>/LOOP</span>
            </div>
            
            <div style={{ padding: '15px', background: 'rgba(0,255,136,0.05)', borderRadius: '16px', marginBottom: '30px' }}>
              <button style={{ width: '100%', background: '#00ff88', color: '#000', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 900 }}>🆔 BANKID LOGIN</button>
            </div>

            <nav>
              <div onClick={() => router.push('/')} className="nav-item">🌐 Utforska</div>
              <div onClick={() => router.push('/search')} className="nav-item">🛍️ Köp</div>
              <div onClick={() => router.push('/sell')} className="nav-item">⚡ Sälj</div>
              <div onClick={() => router.push('/my-karma')} className="nav-item">💳 Ekonomi</div>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main style={{ flex: 1, position: 'relative' }}>
            {children}
          </main>

          {/* BOTTOM DOCK (MOBIL) */}
          <nav className="bottom-dock">
            <button onClick={() => router.push('/')} style={{ background: 'none', border: 'none', fontSize: '24px' }}>🏠</button>
            <button onClick={() => router.push('/search')} style={{ background: 'none', border: 'none', fontSize: '24px' }}>🔍</button>
            <button onClick={() => router.push('/sell')} style={{ background: '#fff', border: 'none', borderRadius: '50%', width: '45px', height: '45px', fontWeight: 'bold' }}>+</button>
            <button onClick={() => router.push('/my-karma')} style={{ background: 'none', border: 'none', fontSize: '24px' }}>💳</button>
          </nav>
        </div>
      </body>
    </html>
  );
}
