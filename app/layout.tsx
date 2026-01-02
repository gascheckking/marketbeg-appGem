"use client";
import './globals.css';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <html lang="sv">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', background: '#02040a' }}>
          
          {/* SIDEBAR */}
          <aside style={{ 
            width: '280px', 
            borderRight: '1px solid rgba(255,255,255,0.08)', 
            background: '#0a0a0a', 
            padding: '30px', 
            position: 'sticky', 
            top: 0, 
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div 
              onClick={() => router.push('/')}
              style={{ fontWeight: 900, fontSize: '24px', marginBottom: '40px', cursor: 'pointer', color: 'white' }}
            >
              KARMA<span style={{color: '#9d4edd'}}>/LOOP</span>
            </div>

            <nav style={{ flex: 1 }}>
              <div onClick={() => router.push('/')} className="nav-item">🌐 Utforska</div>
              <div onClick={() => router.push('/search')} className="nav-item">🛍️ Köp prylar</div>
              <div onClick={() => router.push('/sell')} className="nav-item">⚡ Sälj snabbt</div>
              <div onClick={() => router.push('/my-karma')} className="nav-item">💳 Ekonomi</div>
              <div onClick={() => router.push('/dispute')} className="nav-item">🛡️ Säkerhet</div>
            </nav>

            <div style={{ padding: '20px', background: 'rgba(0,255,136,0.05)', borderRadius: '15px' }}>
              <button style={{ width: '100%', background: '#00ff88', color: '#000', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 900, cursor: 'pointer' }}>
                BANKID LOGIN
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
