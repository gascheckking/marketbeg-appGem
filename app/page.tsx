"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="app-container">
      {/* Header */}
      <nav className="header-nav">
        <div className="logo-ai">BEG.AI</div>
        <div style={{display: 'flex', gap: '40px', color: '#888', fontWeight: 600}}>
          <span>MARKET</span>
          <span>INTELLIGENCE</span>
          <span>TRUST</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-2026">
        <div className="ai-orb"></div>
        <h1 className="hero-title">
          SELL AT THE <br/> SPEED OF LIGHT.
        </h1>
        <p style={{fontSize: '24px', color: '#888', maxWidth: '700px'}}>
          Ingen textinmatning. Ingen friktion. <br/>
          Vår AI skapar din framtid på 0.4 sekunder.
        </p>
        <button className="btn-ai" onClick={() => router.push('/sell')}>
          Start Intelligent Scan
        </button>
      </section>

      {/* Bento Grid - Här skapar vi rymd och dynamik */}
      <div className="bento-grid-2026">
        
        {/* Stor Box - AI Insikt */}
        <div className="bento-card wide" style={{background: 'linear-gradient(45deg, #111, #000)'}}>
          <div>
            <span style={{color: '#00ff88', fontWeight: 800}}>LIVE INTELLIGENCE</span>
            <h2 style={{fontSize: '40px', margin: '20px 0'}}>Apple Demand is Peaking.</h2>
            <p style={{color: '#888', fontSize: '18px'}}>Just nu betalar köpare i Oslo 12% mer för begagnad tech än i Stockholm. AI har optimerat din räckvidd.</p>
          </div>
          <div style={{fontSize: '14px', color: '#555'}}>DATA UPDATED: JUST NU</div>
        </div>

        {/* Liten Box - Trust */}
        <div className="bento-card">
          <h3>99.9% Trust.</h3>
          <p style={{color: '#888'}}>Varje transaktion är BankID-låst. Varje bild är AI-verifierad för äkthet.</p>
          <div style={{fontSize: '40px'}}>🛡️</div>
        </div>

        {/* Tall Box - Trendande */}
        <div className="bento-card tall" style={{border: '1px solid #333'}}>
          <div>
            <h3>Trending Now</h3>
            <div style={{marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <TrendItem name="Rolex" growth="+14%" />
              <TrendItem name="Herman Miller" growth="+8%" />
              <TrendItem name="PS5 Pro" growth="+22%" />
              <TrendItem name="Leica Q3" growth="+5%" />
            </div>
          </div>
        </div>

        {/* Market Sneak Peek */}
        <div className="bento-card wide">
           <h3>Live Feed</h3>
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px'}}>
              <div style={{height: '100px', background: '#222', borderRadius: '20px'}}></div>
              <div style={{height: '100px', background: '#222', borderRadius: '20px'}}></div>
              <div style={{height: '100px', background: '#222', borderRadius: '20px'}}></div>
           </div>
        </div>

      </div>

      <footer style={{padding: '100px 0', textAlign: 'center', color: '#333'}}>
        BEG.AI — NORTHERN EUROPE'S MOST ADVANCED EXCHANGE
      </footer>
    </div>
  );
}

function TrendItem({ name, growth }) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '10px'}}>
      <span>{name}</span>
      <span style={{color: '#00ff88'}}>{growth}</span>
    </div>
  );
}
