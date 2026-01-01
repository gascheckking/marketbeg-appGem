"use client";

export default function Dashboard() {
  return (
    <div className="app-shell" style={{padding: '20px'}}>
      <div className="stat-pill" style={{marginBottom: '20px', display: 'inline-block'}}>
        🪙 Balance: 2,450 BegCredits
      </div>
      
      <h1 style={{fontSize: '2.5rem', fontWeight: 900}}>Min Ekonomi</h1>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px'}}>
        <div className="glow-card" onClick={() => window.location.href='/sell'} style={{gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', borderRadius: '24px'}}>
          <span style={{fontSize: '30px'}}>💰</span>
          <h3>Sälj nu</h3>
          <p className="muted" style={{fontSize: '12px'}}>Omedelbar likviditet.</p>
        </div>

        <div style={{background: '#111', padding: '20px', borderRadius: '24px', position: 'relative', overflow: 'hidden'}}>
           <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
             <span style={{fontSize: '10px', fontWeight: 800, color: 'var(--accent)'}}>COMING SOON</span>
           </div>
           <h3>Hyr ut</h3>
        </div>

        <div className="pay-card" style={{margin: 0}}>
          <strong>2,450 BC</strong>
        </div>
      </div>

      <div className="pay-card" style={{marginTop: '20px'}}>
        <div>
          <strong>Smart Logistik</strong>
          <p className="muted" style={{fontSize: '12px', margin: 0}}>BegRunner hämtar vid dörren.</p>
        </div>
        <button className="small-pay" style={{background: '#fff', color: '#000', border: 'none', padding: '10px 15px', borderRadius: '10px', fontWeight: 800}}>BOKA</button>
      </div>
    </div>
  );
}
