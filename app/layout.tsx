"use client";
import './globals.css';
import { usePathname, useRouter } from 'next/navigation';
import { CookieConsent } from '@/components/CookieConsent';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <html lang="sv">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-deep)' }}>
          
          {/* SIDEBAR - Likviditetskontroll */}
          <aside style={{ 
            width: '300px', 
            borderRight: '1px solid var(--border)', 
            background: 'rgba(2, 4, 10, 0.8)', 
            padding: '40px 25px', 
            position: 'sticky', 
            top: 0, 
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000
          }}>
            <div 
              onClick={() => router.push('/')}
              style={{ fontWeight: 900, fontSize: '24px', marginBottom: '50px', cursor: 'pointer', letterSpacing: '-1.5px' }}
            >
              MARKET<span style={{color: 'var(--neon-purple)'}}>BEG</span>
            </div>

            <nav style={{ flex: 1 }}>
              <div onClick={() => router.push('/')} className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                <span>🌐</span> Utforska Flödet
              </div>
              <div onClick={() => router.push('/feed')} className={`nav-item ${pathname === '/feed' ? 'active' : ''}`}>
                <span>🛍️</span> Köp (Matchningar)
              </div>
              <div onClick={() => router.push('/sell')} className={`nav-item ${pathname === '/sell' ? 'active' : ''}`}>
                <span>⚡</span> AI Quick Sell
              </div>
              <div onClick={() => router.push('/wallet')} className={`nav-item ${pathname === '/wallet' ? 'active' : ''}`}>
                <span>💳</span> Vault (Ekonomi)
              </div>
              <div onClick={() => router.push('/admin')} className={`nav-item ${pathname === '/admin' ? 'active' : ''}`}>
                <span>🛡️</span> System Status
              </div>
            </nav>

            {/* Bottom Section: User Profile/BankID */}
            <div style={{ marginTop: 'auto' }}>
              <div style={{ 
                padding: '20px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '20px', 
                marginBottom: '20px',
                border: '1px solid var(--border)' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))' }}></div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 900 }}>Alex L.</div>
                    <div style={{ fontSize: '10px', color: 'var(--neon-mint)' }}>98.2% Trust Score</div>
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/auth')}
                  style={{ 
                    width: '100%', 
                    background: '#fff', 
                    color: '#000', 
                    border: 'none', 
                    padding: '12px', 
                    borderRadius: '12px', 
                    fontWeight: 900, 
                    fontSize: '11px',
                    cursor: 'pointer' 
                  }}>
                  RE-VERIFY BANKID
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main style={{ flex: 1, position: 'relative' }}>
            {children}
            <CookieConsent />
          </main>
        </div>
      </body>
    </html>
  );
}
