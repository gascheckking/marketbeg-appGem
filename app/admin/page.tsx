export default function AdminDashboard() {
  return (
    <div className="main-container">
      <h1>BegAI Control Room</h1>
      <div className="bento-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
        <div className="bento-item">
          <small>TOTAL VOLYM (24H)</small>
          <h2>1.2M SEK</h2>
        </div>
        <div className="bento-item">
          <small>AI-VERIFIERADE ANNONSER</small>
          <h2>14,502</h2>
        </div>
        <div className="bento-item">
          <small>AKTIVA DISPYTER</small>
          <h2 style={{color: 'var(--accent)'}}>0</h2>
        </div>
      </div>

      <div style={{marginTop: '40px', background: '#111', padding: '20px', borderRadius: '24px'}}>
        <h3>Live Transaktioner</h3>
        <div style={{fontSize: '14px', fontFamily: 'monospace'}}>
          <p>[17:21] SE: iPhone 15 Pro såld (Swish) -> +45 BegCredits till säljare</p>
          <p>[17:20] NO: Rolex Submariner verifierad (BankID)</p>
          <p>[17:18] FI: MobilePay-betalning initierad för Dyson V15</p>
        </div>
      </div>
    </div>
  );
}
