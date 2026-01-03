"use client";

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '80px', padding: '60px 25px', background: '#000', 
      borderTop: '1px solid var(--border)', width: '100%' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '15px' }}>KARMA<span style={{color: 'var(--neon-purple)'}}>.</span></h3>
          <p className="muted" style={{ fontSize: '13px', lineHeight: '1.6' }}>
            Nordic Protocol for Circular Value. AI-driven likviditet för nästa generations handel.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', color: '#555' }}>System</h4>
          <div style={{ display: 'grid', gap: '8px', fontSize: '13px' }} className="muted">
            <span style={{ cursor: 'pointer' }}>Marknadsplats</span>
            <span style={{ cursor: 'pointer' }}>Live Matchningar</span>
            <span style={{ cursor: 'pointer' }}>Karma Score</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', color: '#555' }}>Säkerhet</h4>
          <div style={{ display: 'grid', gap: '8px', fontSize: '13px' }} className="muted">
            <span style={{ cursor: 'pointer' }}>BankID Verifiering</span>
            <span style={{ cursor: 'pointer' }}>Karma Shield 🛡️</span>
            <span style={{ cursor: 'pointer' }}>Tvister & Support</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '40px auto 0 auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.03)', textAlign: 'center' }}>
        <p className="muted" style={{ fontSize: '10px' }}>© 2026 KARMA PROTOCOL. All rights reserved.</p>
      </div>
    </footer>
  );
}
