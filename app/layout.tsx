import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <div className="app-shell">
          {/* Denna panel "sticker ut" och håller AI-logiken visuellt */}
          <aside className="ai-side-panel">
            <div className="ai-core-visual"></div>
            <div style={{ zIndex: 1, textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>BegAI Core</h2>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Väntar på bildanalys...</p>
            </div>
          </aside>
          
          <main className="container">
            <Header />
            {children}
          </main>
          
          <button className="sell-fab" onClick={() => window.location.href='/sell'}>
            Sälj direkt +
          </button>
        </div>
      </body>
    </html>
  );
}
