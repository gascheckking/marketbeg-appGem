"use client";

export default function Wallet() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <header style={{ marginTop: '40px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Vault & Rewards</h1>
        <p className="muted">Hantera din likviditet och dina tokens.</p>
      </header>

      {/* Main Balance Card */}
      <div className="glow-card" style={{ padding: '40px 30px', borderRadius: '40px', marginBottom: '20px' }}>
        <small className="muted" style={{ letterSpacing: '2px' }}>TOTAL BALANCE (SEK)</small>
        <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '10px 0' }}>14 250,00</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className="stat-pill" style={{ background: 'var(--accent)', color: '#000' }}>+450 BegTokens</div>
          <div className="stat-pill">3.5% Cashback Active</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="pay-card" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '20px' }}>₿</span>
          <strong style={{ marginTop: '10px' }}>Crypto Payout</strong>
          <small className="muted">BTC / ETH / SOL</small>
        </div>
        <div className="pay-card" style={{ flexDirection: 'column', alignItems: 'flex-start', border: '1px solid var(--accent)' }}>
          <span style={{ fontSize: '20px' }}>📈</span>
          <strong style={{ marginTop: '10px' }}>BegLoan</strong>
          <small style={{ color: 'var(--accent)' }}>Limit: 5 000 kr</small>
        </div>
      </div>

      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Cashback Logg</h3>
      <div style={{ display: 'grid', gap: '10px' }}>
        {[
          { label: "Sälj-bonus: iPhone 15", amount: "+142 BegTokens", date: "Idag" },
          { label: "Cashback: MacBook Köp", amount: "+450 BegTokens", date: "Igår" }
        ].map((item, i) => (
          <div key={i} className="pay-card" style={{ background: 'transparent' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700 }}>{item.label}</div>
              <small className="muted">{item.date}</small>
            </div>
            <strong style={{ color: 'var(--accent)' }}>{item.amount}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
