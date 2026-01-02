"use client";

export default function VaultPage() {
  return (
    <div style={{ marginLeft: '280px', padding: '60px', width: 'calc(100vw - 280px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '3rem', margin: 0 }}>Vault & Rewards</h1>
          <p className="muted">Hantera din likviditet och dina tokens.</p>
        </div>
        <div className="glass-card" style={{ padding: '20px 40px', textAlign: 'right' }}>
          <p className="muted" style={{ margin: 0 }}>TOTAL BALANCE (SEK)</p>
          <h2 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--neon-mint)' }}>14 250,00</h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
        <div className="glass-card" style={{ padding: '30px' }}>
          <h3>Karma Score</h3>
          <div style={{ fontSize: '48px', fontWeight: 900, color: 'var(--neon-purple)' }}>850</div>
          <p className="muted">Topp 2% av globala användare.</p>
          <div style={{ width: '100%', height: '8px', background: '#222', borderRadius: '4px', marginTop: '20px' }}>
            <div style={{ width: '85%', height: '100%', background: 'var(--neon-purple)', borderRadius: '4px' }}></div>
          </div>
        </div>
        
        <div className="glass-card" style={{ padding: '30px' }}>
          <h3>BegTokens</h3>
          <div style={{ fontSize: '48px', fontWeight: 900 }}>2,450</div>
          <p style={{ color: 'var(--neon-mint)' }}>+450 BegTokens aktiva.</p>
        </div>

        <div className="glass-card" style={{ padding: '30px' }}>
          <h3>Cashback Logg</h3>
          <div style={{ fontSize: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #222' }}>
              <span>Sälj-bonus: iPhone 15</span>
              <span style={{ color: 'var(--neon-mint)' }}>+142</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
              <span>MacBook Köp</span>
              <span style={{ color: 'var(--neon-mint)' }}>+450</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
