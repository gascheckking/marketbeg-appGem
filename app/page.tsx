"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-2026">
        <div className="ai-orb"></div>
        <h1 className="hero-title">SELL AT THE <br/> SPEED OF LIGHT.</h1>
        <p style={{fontSize: '24px', color: '#888', marginBottom: '30px'}}>
          Ingen textinmatning. Vår AI skapar din annons på 5 sekunder.
        </p>
        <button className="btn-ai" onClick={() => router.push('/sell')}>
          Start Intelligent Scan
        </button>
      </section>

      {/* Bento Grid */}
      <div className="bento-grid-2026">
        <div className="bento-card wide">
          <div>
            <span style={{color: '#00ff88', fontWeight: 800}}>AI INSIGHT</span>
            <h2 style={{fontSize: '40px', marginTop: '10px'}}>Market Pulse</h2>
            <p style={{color: '#888'}}>iPhone 15 Pro ökar i efterfrågan.</p>
          </div>
        </div>

        <div className="bento-card">
          <h3>99.9% Trust</h3>
          <p style={{color: '#888'}}>Varje transaktion BankID-verifierad.</p>
          <div style={{fontSize: '40px'}}>🛡️</div>
        </div>

        <div className="bento-card tall">
          <h3>Trending Now</h3>
          <div style={{marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <TrendItem name="Rolex" growth="+12%" />
            <TrendItem name="Herman Miller" growth="+8%" />
            <TrendItem name="PS5 Pro" growth="+24%" />
            <TrendItem name="Leica Q3" growth="+5%" />
          </div>
        </div>

        <div className="bento-card wide">
          <h3>Live Feed</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px'}}>
            <div style={{height: '100px', background: '#111', borderRadius: '12px'}}></div>
            <div style={{height: '100px', background: '#111', borderRadius: '12px'}}></div>
            <div style={{height: '100px', background: '#111', borderRadius: '12px'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendItem({ name, growth }: { name: string, growth: string }) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '8px'}}>
      <span>{name}</span>
      <span style={{color: '#00ff88', fontWeight: 800}}>{growth}</span>
    </div>
  );
}
