"use client";

export default function Wallet() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Vault</h1>
        <p className="muted">Din digitala plånbok för en cirkulär framtid.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px' }}>
        <div className="glow-card" style={{ padding: '50px', borderRadius: '32px' }}>
          <small className="muted" style={{ letterSpacing: '2px', fontWeight: 800 }}>TILLGÄNGLIGT SALDO</small>
          <div style={{ fontSize: '4rem', fontWeight: 900, margin: '15px 0' }}>14 250,00 <span style={{fontSize: '1.5rem', color: '#444'}}>SEK</span></div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className="stat-pill" style={{ background: 'var(--accent)', color: '#000', fontWeight: 900 }}>+450 BEGTOKENS</div>
            <div className="stat-pill">3.5% CASHBACK AKTIV</div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '15px' }}>
          <div className="pay-card" style={{ flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <span style={{ fontSize: '24px' }}>₿</span>
            <strong style={{ marginTop: '10px' }}>Crypto Payout</strong>
            <small className="muted">BTC / ETH / SOL</small>
          </div>
          <div className="pay-card" style={{ flexDirection: 'column', justifyContent: 'center', height: '100%', border: '1px solid var(--accent)' }}>
            <span style={{ fontSize: '24px' }}>🛡️</span>
            <strong style={{ marginTop: '10px' }}>BegLoan</strong>
            <small style={{ color: 'var(--accent)' }}>Limit: 5 000 kr</small>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: '50px', marginBottom: '20px', fontWeight: 900 }}>Transaktionshistorik</h3>
      <div className="glow-card" style={{ padding: '10px', background: 'transparent' }}>
        {[{ label: "Sälj-bonus: iPhone 15", amount: "+142 BegTokens", date: "Idag" }, { label: "Cashback: MacBook Köp", amount: "+450 BegTokens", date: "Igår" }].map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #111' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{item.label}</div>
              <small className="muted">{item.date}</small>
            </div>
            <strong style={{ color: 'var(--accent)' }}>{item.amount}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
