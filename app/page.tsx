"use client";

export default function Home() {
  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <header style={{marginTop: '60px', marginBottom: '50px'}}>
        <h1 style={{fontSize: '4rem', fontWeight: 900, letterSpacing: '-4px', margin: 0}}>
          MARKET<span className="ai-text">BEG</span>
        </h1>
        <p className="muted" style={{fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase'}}>
          Nordic AI Liquidity Engine
        </p>
      </header>

      <div className="glow-card" onClick={() => window.location.href='/sell'} style={{
        padding: '50px 30px', borderRadius: '40px', cursor: 'pointer', marginBottom: '30px'
      }}>
        <div style={{fontSize: '60px', marginBottom: '20px'}}>📸</div>
        <h2 style={{fontSize: '1.8rem', fontWeight: 900}}>AI Quick Sell</h2>
        <p className="muted">Låt AI skapa din annons på sekunder.</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <div className="pay-card" style={{flexDirection: 'column', textAlign: 'center', padding: '25px'}}>
          <strong style={{color: 'var(--accent)', fontSize: '1.2rem'}}>98% Match</strong>
          <p style={{fontSize: '11px', margin: '5px 0 0 0'}} className="muted">Live efterfrågan</p>
        </div>
        <div className="pay-card" style={{flexDirection: 'column', textAlign: 'center', padding: '25px'}}>
          <strong style={{fontSize: '1.2rem'}}>Trust 🛡️</strong>
          <p style={{fontSize: '11px', margin: '5px 0 0 0'}} className="muted">BankID Secured</p>
        </div>
      </div>
      
      <div style={{marginTop: '40px'}} onClick={() => window.location.href='/feed'}>
        <p className="muted" style={{fontSize: '12px', cursor: 'pointer', textDecoration: 'underline'}}>Bläddra i matchade annonser →</p>
      </div>
    </div>
  );
}
