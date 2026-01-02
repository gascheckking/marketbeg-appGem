"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="app-shell">
      <div className="bg-glow"></div>
      
      {/* Uppdaterad Nav för Web */}
      <nav className="main-nav" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className="logo" onClick={() => router.push('/')} style={{ fontSize: '24px' }}>
          BEG<span className="ai-text">.AI</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span className="muted" style={{ fontSize: '14px' }}>Market is Open</span>
          <div className="stat-pill">2,450 Credits</div>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
          
          {/* Vänster sida: Hero Section */}
          <section className="glow-card" style={{ padding: '80px 40px', textAlign: 'left', position: 'relative' }}>
            <div className="scan-line"></div>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, marginBottom: '20px' }}>
              SELL AT THE <br/> <span className="ai-text">SPEED OF LIGHT</span>
            </h1>
            <p className="muted" style={{ fontSize: '20px', marginBottom: '40px', maxWidth: '500px' }}>
              Vår AI skapar din annons på 5 sekunder. Ingen text. Inget krångel. Bara resultat.
            </p>
            <button className="primary-btn" onClick={() => router.push('/sell')} style={{ width: '300px', height: '60px', fontSize: '18px' }}>
              STARTA AI-SCAN
            </button>
          </section>

          {/* Höger sida: Stats & Trends */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="pay-card" style={{ padding: '30px' }}>
              <div>
                <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '12px' }}>AI INSIGHT</span>
                <h3 style={{ margin: '10px 0' }}>iPhone 15 Pro Pulse</h3>
                <p className="muted">Efterfrågan har ökat med 12% i Stockholm idag.</p>
              </div>
            </div>

            <div className="glow-card" style={{ padding: '30px' }}>
              <h3 style={{ marginBottom: '20px' }}>Trending Assets</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Rolex Submariner</span>
                  <span style={{ color: 'var(--accent)' }}>+12%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>PS5 Pro</span>
                  <span style={{ color: 'var(--accent)' }}>+24%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Leica Q3</span>
                  <span style={{ color: 'var(--accent)' }}>+5%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Dölj bottom-dock på stora skärmar via CSS (läggs i globals.css senare) */}
      <div className="bottom-dock">
        <button onClick={() => router.push('/')}>🏠</button>
        <button className="scan-btn" onClick={() => router.push('/sell')}>+</button>
        <button onClick={() => router.push('/admin')}>⚙️</button>
      </div>
    </div>
  );
}
