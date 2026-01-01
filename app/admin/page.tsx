"use client";

export default function Admin() {
  return (
    <div className="app-shell" style={{padding: '20px'}}>
      <h1 className="logo">Admin <span className="ai-text">Control</span></h1>
      
      <div style={{display: 'grid', gap: '15px', marginTop: '30px'}}>
        <div className="pay-card">
          <span>Total Volym (24h)</span>
          <strong>1.2M SEK</strong>
        </div>
        
        <div style={{background: '#111', padding: '20px', borderRadius: '24px', fontFamily: 'monospace', fontSize: '12px'}}>
          <h3 style={{marginTop: 0}}>Live Logg</h3>
          {/* Här är fixen för pilen som kraschade bygget */}
          <p>[20:54] SE: iPhone 15 {"->"} SÅLD (Swish)</p>
          <p>[20:52] NO: Rolex {"->"} Verifierad (BankID)</p>
          <p>[20:50] FI: Dyson {"->"} Matchscore 94%</p>
        </div>
      </div>
    </div>
  );
}
