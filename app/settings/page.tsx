"use client";

export default function Settings() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <h1 style={{ marginTop: '40px', fontWeight: 900 }}>Inställningar</h1>
      
      <div style={{ marginTop: '30px' }}>
        <h3 className="muted" style={{ fontSize: '12px', textTransform: 'uppercase' }}>Säkerhet</h3>
        <div className="pay-card">
          <span>BankID Verifiering</span>
          <span style={{ color: 'var(--accent)' }}>AKTIV ✅</span>
        </div>
        
        <h3 className="muted" style={{ fontSize: '12px', textTransform: 'uppercase', marginTop: '30px' }}>AI Notifikationer</h3>
        <div className="pay-card">
          <span>Pris-drops på bevakningar</span>
          <div style={{ width: '40px', height: '20px', background: 'var(--accent)', borderRadius: '10px' }}></div>
        </div>
        <div className="pay-card">
          <span>Nya High-Match objekt</span>
          <div style={{ width: '40px', height: '20px', background: 'var(--accent)', borderRadius: '10px' }}></div>
        </div>

        <h3 className="muted" style={{ fontSize: '12px', textTransform: 'uppercase', marginTop: '30px' }}>Betalpreferenser</h3>
        <select style={{ width: '100%', padding: '20px', background: '#111', border: '1px solid #222', borderRadius: '16px', color: '#fff' }}>
          <option>Primär: Swish / Vipps</option>
          <option>BegTokens (Använd för frakt)</option>
          <option>Krypto-Wallet (Solana)</option>
        </select>
      </div>

      <button className="primary-btn" style={{ marginTop: '50px', width: '100%', background: 'transparent', color: '#ff4444', border: '1px solid #200' }}>
        LOGGA UT
      </button>
    </div>
  );
}
