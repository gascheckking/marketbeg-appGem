"use client";

function Achievement({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={{
      minWidth: '110px', 
      background: 'rgba(255,255,255,0.03)', 
      padding: '20px', 
      borderRadius: '28px', 
      textAlign: 'center', 
      border: '1px solid rgba(255,255,255,0.05)',
      flexShrink: 0
    }}>
      <div style={{fontSize: '32px', marginBottom: '8px'}}>{icon}</div>
      <div style={{fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8}}>{title}</div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '40px'}}>
        <div style={{
          width: '110px', height: '110px', 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #050505 100%)', 
          borderRadius: '50%', margin: '0 auto',
          border: '2px solid var(--accent)',
          boxShadow: '0 0 30px rgba(0, 255, 136, 0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '45px'
        }}>
          🛡️
        </div>
        <h2 style={{marginTop: '20px', fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px'}}>Alex Lindgren</h2>
        <div style={{color: 'var(--accent)', fontWeight: 800, letterSpacing: '2px', fontSize: '12px', marginTop: '5px'}}>LEVEL 14 MERCHANT</div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px'}}>
        <div className="pay-card" style={{flexDirection: 'column', textAlign: 'center', margin: 0, padding: '25px', background: '#0a0a0a'}}>
          <div style={{fontSize: '32px', fontWeight: 900}}>2 450</div>
          <div style={{fontSize: '10px', color: '#666', fontWeight: 800, letterSpacing: '1px'}}>BEGCREDITS</div>
        </div>
        <div className="pay-card" style={{flexDirection: 'column', textAlign: 'center', margin: 0, padding: '25px', background: '#0a0a0a', border: '1px solid var(--accent)'}}>
          <div style={{fontSize: '32px', fontWeight: 900, color: 'var(--accent)'}}>98.2%</div>
          <div style={{fontSize: '10px', color: '#666', fontWeight: 800, letterSpacing: '1px'}}>TRUST SCORE</div>
        </div>
      </div>

      <h3 style={{fontSize: '1.1rem', fontWeight: 800, marginBottom: '20px', paddingLeft: '5px'}}>Din On-chain Vault</h3>
      <div style={{
        display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '20px',
        scrollbarWidth: 'none', msOverflowStyle: 'none'
      }}>
        <Achievement icon="⚡" title="Quick Seller" />
        <Achievement icon="🍎" title="Apple Expert" />
        <Achievement icon="💎" title="Early Adopter" />
        <Achievement icon="🤝" title="Fair Trader" />
      </div>

      <div className="pay-card" style={{marginTop: '20px', background: 'rgba(0,255,136,0.03)', border: '1px dashed rgba(0,255,136,0.3)', padding: '20px'}}>
        <div style={{fontSize: '24px'}}>🤖</div>
        <div style={{marginLeft: '15px'}}>
          <strong style={{fontSize: '14px', display: 'block'}}>AI Handels-DNA</strong>
          <p className="muted" style={{fontSize: '11px', margin: '2px 0 0 0'}}>Din säljhastighet är 40% högre än genomsnittet.</p>
        </div>
      </div>

      <button className="primary-btn" style={{marginTop: '40px', width: '100%', background: 'transparent', border: '1px solid #222', color: '#555', fontSize: '14px'}}>
        INSTÄLLNINGAR & SEKRETESS
      </button>
    </div>
  );
}
