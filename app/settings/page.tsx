"use client";

export default function Settings() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px' }}>Settings</h1>

      <section style={{ marginBottom: '40px' }}>
        <h3 className="muted" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '15px' }}>Identity & Trust</h3>
        <div className="pay-card" style={{ justifyContent: 'space-between', padding: '25px' }}>
          <span>BankID Verification</span>
          <span style={{ color: 'var(--accent)', fontWeight: 800 }}>VERIFIED ✅</span>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h3 className="muted" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '15px' }}>Localization</h3>
        <div className="pay-card" style={{ justifyContent: 'space-between', padding: '25px' }}>
          <span>Primary Language</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ background: 'var(--accent)', color: '#000', border: 'none', padding: '5px 12px', borderRadius: '6px', fontWeight: 800 }}>SV</button>
            <button style={{ background: '#111', color: '#fff', border: '1px solid #222', padding: '5px 12px', borderRadius: '6px' }}>EN</button>
          </div>
        </div>
      </section>

      <button className="primary-btn" style={{ width: '100%', background: 'transparent', border: '1px solid #ff4444', color: '#ff4444', marginTop: '40px' }}>
        LOG OUT OF SESSION
      </button>
    </div>
  );
}
