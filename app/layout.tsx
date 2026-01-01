import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <div className="bg-glow"></div>
        <main className="app-shell">
          <header className="main-nav">
            <div className="logo">BEG<span className="ai-text">.AI</span></div>
            <div className="nav-stats">
              <div className="stat-pill">🪙 2,450 <small>Credits</small></div>
              <div className="profile-trigger">👤</div>
            </div>
          </header>

          <div className="content-area">
            {children}
          </div>

          <nav className="bottom-dock">
            <button onClick={() => window.location.href='/'}>🏠</button>
            <button onClick={() => window.location.href='/feed'}>🔍</button>
            <button className="scan-btn" onClick={() => window.location.href='/sell'}>+</button>
            <button onClick={() => window.location.href='/leaderboard'}>🏆</button>
            <button onClick={() => window.location.href='/profile'}>👤</button>
          </nav>
        </main>
      </body>
    </html>
  );
}
