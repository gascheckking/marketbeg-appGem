"use client";

// Vi skapar komponenten direkt här i filen så att importen inte går sönder
function RentModule() {
  return (
    <div className="bento-item rent-locked" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)',
      position: 'relative',
      overflow: 'hidden',
      border: '1px dashed #333',
      borderRadius: '32px',
      minHeight: '160px'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 10
      }}>
        <span style={{fontSize: '10px', fontWeight: 800, letterSpacing: '2px', color: '#00ff88'}}>COMING SOON</span>
        <h3 style={{margin: '5px 0'}}>BegAI Rent</h3>
      </div>
      <div style={{opacity: 0.2, padding: '20px', textAlign: 'center'}}>
        <p>Hyr ut & tjäna passivt</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="main-container">
      <div className="ai-ticker" style={{marginBottom: '20px', color: '#00ff88', fontWeight: 700}}>
        🤖 AI ANALYS: Dina prylar i förrådet är värda 14 500 kr.
      </div>
      
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px'}}>
        <h1 style={{margin: 0, fontSize: '2.5rem', fontWeight: 900}}>Min Ekonomi</h1>
        <div style={{background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '99px', fontSize: '12px'}}>Level 14 Merchant</div>
      </div>

      <div className="bento-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
        
        {/* SÄLJ-KNAPP */}
        <div className="bento-item glow-card" onClick={() => window.location.href='/sell'} style={{
            background: '#000', border: '1px solid #00ff88', padding: '30px', borderRadius: '32px', cursor: 'pointer', gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <span style={{fontSize: '40px', marginBottom: '10px'}}>💰</span>
          <h3>Sälj nu</h3>
          <p style={{color: '#888', margin: 0}}>Omedelbar likviditet via AI-scan.</p>
        </div>

        {/* UTHYRNING (Låst) */}
        <RentModule />

        {/* DIN BALANS */}
        <div className="bento-item" style={{background: '#111', padding: '20px', borderRadius: '32px', border: '1px solid #222'}}>
          <small style={{color: '#00ff88', fontWeight: 800}}>DIN BALANS</small>
          <h3 style={{margin: '5px 0', fontSize: '1.5rem'}}>2 450 BC</h3>
          <p style={{color: '#888', fontSize: '12px', margin: 0}}>BegCredits tillgängliga.</p>
        </div>

        {/* LOGISTIK */}
        <div className="bento-item wide" style={{gridColumn: 'span 2', background: '#111', padding: '30px', borderRadius: '32px', border: '1px solid #222', marginTop: '10px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <h3 style={{margin: 0}}>Smart Logistik</h3>
              <p style={{color: '#888', margin: '5px 0 0 0', fontSize: '14px'}}>BegRunner hämtar vid dörren.</p>
            </div>
            <button style={{background: '#fff', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer'}}>BOKA</button>
          </div>
        </div>
      </div>
    </div>
  );
}
