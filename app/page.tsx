"use client";
export default function Home() {
  return (
    <div className="main-container" style={{textAlign: 'center'}}>
      <div className="reward-card">
        <div className="badge">🏆</div>
        <div style={{textAlign: 'left'}}>
          <h4 style={{margin: 0, color: 'var(--gold)'}}>WEEKLY TOP MERCHANT</h4>
          <p style={{margin: 0, fontSize: '14px', color: '#888'}}>Du är 4 försäljningar ifrån +500 BegCredits</p>
        </div>
      </div>

      <h1 style={{fontSize: '5rem', letterSpacing: '-4px', margin: '20px 0'}}>BEG<span style={{color: 'var(--accent)'}}>.AI</span></h1>
      
      <div className="ai-engine"></div>

      <div style={{margin: '40px 0'}}>
        <h2 style={{fontSize: '2rem'}}>Smartare. Snabbare. Verifierat.</h2>
        <p style={{color: '#888'}}>Nordens första AI-drivna marknadsplats med inbyggda rewards.</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
        <button className="btn-ai" style={{background: '#fff', color: '#000', padding: '20px', borderRadius: '20px', fontWeight: 900, border: 'none'}}>
          SÄLJ MED AI 📷
        </button>
        <button className="btn-ai" style={{background: '#111', color: '#fff', padding: '20px', borderRadius: '20px', fontWeight: 900, border: '1px solid #333'}}>
          UTFORSKA MARKET
        </button>
      </div>

      {/* Leaderboard Sneak Peek */}
      <div style={{marginTop: '60px', textAlign: 'left'}}>
        <h3>Merchant Leaderboard 🇸🇪</h3>
        {[1, 2, 3].map(i => (
          <div key={i} style={{padding: '15px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between'}}>
            <span>{i}. @merchant_king_{i}</span>
            <span style={{color: 'var(--accent)'}}>99.8 Trust</span>
          </div>
        ))}
      </div>

      <nav className="nav-dock">
         <span>🏠</span>
         <span>🔍</span>
         <span style={{color: 'var(--accent)'}}>➕</span>
         <span>🏆</span>
         <span>👤</span>
      </nav>
    </div>
  );
}
