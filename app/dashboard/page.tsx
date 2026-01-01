import RentModule from "@/components/RentModule";

export default function Dashboard() {
  return (
    <div className="main-container">
      <div className="ai-ticker">🤖 AI ANALYS: Dina prylar i förrådet är värda 14 500 kr.</div>
      
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px'}}>
        <h1 style={{margin: 0}}>Min Ekonomi</h1>
        <div className="stat-pill">Level 14 Merchant</div>
      </div>

      <div className="bento-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
        
        {/* AKTIV: SÄLJ */}
        <div className="bento-item tall glow-card" onClick={() => window.location.href='/sell'}>
          <span style={{fontSize: '40px'}}>💰</span>
          <h3>Sälj nu</h3>
          <p className="muted">Omedelbar likviditet via AI-scan.</p>
        </div>

        {/* PAUSAD: HYR UT */}
        <RentModule />

        {/* AKTIV: CREDITS */}
        <div className="bento-item" style={{background: 'var(--surface)'}}>
          <small style={{color: 'var(--accent)'}}>VALUTA</small>
          <h3>2 450 BC</h3>
          <p className="muted">BegCredits tillgängliga.</p>
        </div>

        {/* AKTIV: LOGISTIK */}
        <div className="bento-item wide" style={{gridColumn: 'span 2'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <h3>Smart Logistik</h3>
              <p className="muted">BegRunner hämtar vid dörren.</p>
            </div>
            <button className="small-pay" style={{background: '#fff', color: '#000'}}>BOKA</button>
          </div>
        </div>

      </div>
    </div>
  );
}
