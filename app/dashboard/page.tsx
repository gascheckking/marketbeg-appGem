"use client";
export default function Dashboard() {
  return (
    <div className="main-container">
      <div className="ai-ticker">🪙 DIN BALANS: 2 450 BegCredits (+12% sedan igår)</div>
      
      <h1 style={{fontSize: '3rem', marginBottom: '40px'}}>Ditt Ekosystem.</h1>

      <div className="bento-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
        
        {/* SÄLJ-TILE */}
        <div className="bento-item tall" style={{background: 'linear-gradient(135deg, #111, #000)', border: '1px solid var(--accent)'}} onClick={() => window.location.href='/sell'}>
          <span style={{fontSize: '40px'}}>🚀</span>
          <h3>Sälj med AI</h3>
          <p className="muted">Analysera & publicera på 0.4s</p>
        </div>

        {/* HYR UT-TILE (Ny idé!) */}
        <div className="bento-item" style={{background: '#111'}} onClick={() => alert('AI skapar hyresavtal...')}>
          <span style={{fontSize: '30px'}}>⏳</span>
          <h3>Hyr ut</h3>
          <p className="muted">Tjäna pengar passivt på dina prylar.</p>
        </div>

        {/* TJÄNSTER (Ny idé!) */}
        <div className="bento-item" style={{background: '#111'}}>
          <span style={{fontSize: '30px'}}>🛠️</span>
          <h3>Hjälp i närheten</h3>
          <p className="muted">Boka bärhjälp eller fixare direkt.</p>
        </div>

        {/* ECO-STATS */}
        <div className="bento-item wide" style={{gridColumn: 'span 2', background: 'rgba(0, 255, 136, 0.05)'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <h3>Din klimatpåverkan</h3>
              <p className="muted">Du har sparat 42kg CO2 denna månad.</p>
            </div>
            <div style={{fontSize: '40px'}}>🌱</div>
          </div>
        </div>

      </div>
    </div>
  );
}
