"use client";

export const Footer = () => (
  <footer style={{ 
    marginTop: '100px', padding: '80px 40px', background: 'rgba(2,4,10,0.95)', 
    borderTop: '1px solid var(--border)', width: '100%' 
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px' }}>
      <div>
        <h3 style={{ color: '#fff', letterSpacing: '-1px', marginBottom: '15px' }}>MARKET<span style={{color:'var(--neon-purple)'}}>BEG</span></h3>
        <p className="muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          Framtidens cirkulära handel. AI-driven likviditet, säkrad med BankID.
        </p>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Navigation</h4>
        <div style={{ display: 'grid', gap: '10px' }} className="muted">
          <span style={{ cursor: 'pointer' }}>Marknadsplats</span>
          <span style={{ cursor: 'pointer' }}>Auktioner</span>
          <span style={{ cursor: 'pointer' }}>Handels-DNA (Leaderboard)</span>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Support</h4>
        <div style={{ display: 'grid', gap: '10px' }} className="muted">
          <span style={{ cursor: 'pointer' }}>Hjälpcenter</span>
          <span style={{ cursor: 'pointer' }}>Säkerhet & BankID</span>
          <span style={{ cursor: 'pointer' }}>Tvister</span>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Legal</h4>
        <div style={{ display: 'grid', gap: '10px' }} className="muted">
          <span style={{ cursor: 'pointer' }}>Användarvillkor</span>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span style={{ color: 'var(--neon-purple)', cursor: 'pointer' }}>Cookie Settings ⚙️</span>
        </div>
      </div>
    </div>
    <div style={{ maxWidth: '1200px', margin: '60px auto 0 auto', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
      <p className="muted" style={{ fontSize: '12px' }}>© 2024 Marketbeg. Byggd för snabb likviditet.</p>
    </div>
  </footer>
);
