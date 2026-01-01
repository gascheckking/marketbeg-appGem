"use client";

export default function Home() {
  return (
    <div className="app-shell">
      <div className="bg-glow"></div>
      <div style={{padding: '20px', textAlign: 'center'}}>
        <header style={{marginTop: '40px', marginBottom: '40px'}}>
          <h1 style={{fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px'}}>
            MARKET<span className="ai-text">BEG</span>
          </h1>
          <p className="muted">AI-driven likviditetsmotor för second-hand.</p>
        </header>

        <div className="glow-card" onClick={() => window.location.href='/sell'} style={{
          background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '32px', cursor: 'pointer', marginBottom: '20px'
        }}>
          <span style={{fontSize: '50px'}}>📸</span>
          <h2>AI Quick Sell</h2>
          <p className="muted">Ta 3 bilder. AI skapar annonsen. Sälj på 60 sekunder.</p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
          <div className="pay-card" style={{flexDirection: 'column', textAlign: 'left'}}>
            <strong>98% Match</strong>
            <p style={{fontSize: '12px'}} className="muted">En köpare söker din pryl.</p>
          </div>
          <div className="pay-card" style={{flexDirection: 'column', textAlign: 'left'}}>
            <strong>Trust Score</strong>
            <p style={{fontSize: '12px'}} className="muted">BankID Verifierad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
