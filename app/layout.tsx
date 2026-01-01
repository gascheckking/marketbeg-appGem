"use client";
import "../styles/globals.css";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="sv">
      <head>
        <title>MarketBeg | AI-Driven Marketplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> 
      </head>
      <body>
        <div className="bg-glow"></div>
        <main className="app-shell">
          <header className="main-nav">
            <div className="logo" onClick={() => window.location.href='/'} style={{cursor: 'pointer'}}>
              BEG<span className="ai-text">.AI</span>
            </div>
            <div className="nav-stats" onClick={() => window.location.href='/wallet'} style={{cursor: 'pointer'}}>
              <div className="stat-pill">🪙 2,450 <small>Credits</small></div>
            </div>
          </header>

          <div className="content-area">
            {children}
          </div>

          <nav className="bottom-dock">
            <button onClick={() => window.location.href='/'} style={{opacity: pathname === '/' ? 1 : 0.4, fontSize: '22px'}}>🏠</button>
            <button onClick={() => window.location.href='/feed'} style={{opacity: pathname === '/feed' ? 1 : 0.4, fontSize: '22px'}}>🔍</button>
            <button className="scan-btn" onClick={() => window.location.href='/sell'}>+</button>
            <button onClick={() => window.location.href='/leaderboard'} style={{opacity: pathname === '/leaderboard' ? 1 : 0.4, fontSize: '22px'}}>🏆</button>
            <button onClick={() => window.location.href='/wallet'} style={{opacity: pathname === '/wallet' ? 1 : 0.4, fontSize: '22px'}}>💳</button>
          </nav>
        </main>
      </body>
    </html>
  );
}

// Dolt för framtida bruk
const ExperimentalFeatures = () => (
  <div style={{ display: 'none' }}>
    {/* BegLoan, Crypto Engine, etc. */}
  </div>
);
