"use client";
import "../styles/globals.css";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="sv">
      <body>
        <div className="bg-glow"></div>
        <main className="app-shell">
          <header className="main-nav">
            <div className="logo" onClick={() => window.location.href='/'} style={{cursor: 'pointer'}}>
              BEG<span className="ai-text">.AI</span>
            </div>
            <div className="nav-stats">
              <div className="stat-pill">🪙 2,450 <small>Credits</small></div>
            </div>
          </header>

          <div className="content-area">
            {children}
          </div>

          <nav className="bottom-dock">
            <button onClick={() => window.location.href='/'} style={{opacity: pathname === '/' ? 1 : 0.4, fontSize: '20px'}}>🏠</button>
            <button onClick={() => window.location.href='/feed'} style={{opacity: pathname === '/feed' ? 1 : 0.4, fontSize: '20px'}}>🔍</button>
            <button className="scan-btn" onClick={() => window.location.href='/sell'}>+</button>
            <button onClick={() => window.location.href='/leaderboard'} style={{opacity: pathname === '/leaderboard' ? 1 : 0.4, fontSize: '20px'}}>🏆</button>
            <button onClick={() => window.location.href='/profile'} style={{opacity: pathname === '/profile' ? 1 : 0.4, fontSize: '20px'}}>👤</button>
          </nav>
        </main>
      </body>
    </html>
  );
}
