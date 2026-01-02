"use client";
import "../styles/globals.css";
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
        <div className="web-container">
          <div className="bg-glow"></div>
          
          <div className="content-wrapper">
            {/* HEADER - Nu med KARMA/LOOP och Loyalty Points */}
            <header className="main-nav">
              <div className="logo" onClick={() => router.push('/')}>
                KARMA<span>/LOOP</span>
              </div>
              
              <div className="nav-stats" onClick={() => router.push('/points')} style={{cursor: 'pointer'}}>
                <div className="stat-pill">
                  <span style={{ color: '#00ff88' }}>●</span> 2,450 <small style={{ marginLeft: '4px', opacity: 0.6 }}>Loyalty Points</small>
                </div>
              </div>
            </header>

            {/* CONTENT AREA */}
            <main className="content-area">
              {children}
            </main>

            {/* BOTTOM DOCK - Proffsigare navigering */}
            <nav className="bottom-dock">
              <button onClick={() => router.push('/')} style={{opacity: pathname === '/' ? 1 : 0.4}}>🏠</button>
              <button onClick={() => router.push('/search')} style={{opacity: pathname === '/search' ? 1 : 0.4}}>🔍</button>
              <button className="plus-btn" onClick={() => router.push('/sell')}>+</button>
              <button onClick={() => router.push('/status')} style={{opacity: pathname === '/status' ? 1 : 0.4}}>🏆</button>
              <button onClick={() => router.push('/my-karma')} style={{opacity: pathname === '/my-karma' ? 1 : 0.4}}>💳</button>
            </nav>
          </div>
        </div>
      </body>
    </html>
  );
}
