"use client";

// Hjälpkomponent för Achievements (behåller din original-logik)
function Achievement({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={{
      minWidth: '110px', 
      background: 'var(--glass)', 
      padding: '15px', 
      borderRadius: '24px', 
      textAlign: 'center', 
      border: '1px solid var(--border)',
      flexShrink: 0
    }}>
      <div style={{fontSize: '30px'}}>{icon}</div>
      <div style={{fontSize: '10px', fontWeight: 700, marginTop: '5px', textTransform: 'uppercase', letterSpacing: '1px'}}>{title}</div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      {/* Header Section */}
      <div style={{textAlign: 'center', marginTop: '40px', marginBottom: '40px'}}>
        <div style={{
          width: '100px', height: '100px', 
          background: 'linear-gradient(135deg, #333 0%, #111 100%)', 
          borderRadius: '50%', margin: '0 auto',
          border: '2px solid var(--accent)',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px'
        }}>
          🛡️
        </div>
        <h2 style={{marginTop: '15px', fontSize: '1.8rem', fontWeight: 900}}>Alex Lindgren</h2>
        <div style={{color: 'var(--accent)', fontWeight: 800, letterSpacing: '1px', fontSize: '14px'}}>LEVEL 14 MERCHANT</div>
      </div>

      {/* Stats Grid */}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px'}}>
        <div className="pay-card" style={{flexDirection: 'column', textAlign: 'center', margin: 0, padding: '25px'}}>
          <div style={{fontSize: '28px', fontWeight: 900}}>2 450</div>
          <div style={{fontSize: '10px', color: '#888', fontWeight: 700}}>BEGCREDITS</div>
        </div>
        <div className="pay-card" style={{flexDirection: 'column', textAlign: 'center', margin: 0, padding: '25px', border: '1px solid var(--accent)'}}>
          <div style={{fontSize: '28px', fontWeight: 900, color: 'var(--accent)'}}>98.2%</div>
          <div style={{fontSize: '10px', color: '#888', fontWeight: 700}}>TRUST SCORE</div>
        </div>
      </div>

      {/* Vault / Achievements */}
      <h3 style={{fontSize: '1.2rem', fontWeight: 800, marginBottom: '15px', paddingLeft: '5px'}}>Din On-chain Vault</h3>
      <div style={{
        display: 'flex', 
        gap: '12px', 
        overflowX: 'auto', 
        paddingBottom: '20px',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}>
        <Achievement icon="⚡" title="Quick Seller" />
        <Achievement icon="🍎" title="Apple Expert" />
        <Achievement icon="💎" title="Early Adopter" />
        <Achievement icon="🤝" title="Fair Trader" />
      </div>

      {/* AI Insights (Nytt tillägg som matchar din vision om AI-driven plattform) */}
      <div className="pay-card" style={{marginTop: '20px', background: 'rgba(0,255,136,0.05)', border: '1px dashed var(--accent)'}}>
        <div style={{fontSize: '20px'}}>🤖</div>
        <div style={{marginLeft: '15px'}}>
          <strong style={{fontSize: '14px'}}>AI Handels-DNA</strong>
          <p className="muted" style={{fontSize: '11px', margin: 0}}>Du säljer 40% snabbare än snittet i Stockholm.</p>
        </div>
      </div>

      <button className="primary-btn" style={{marginTop: '40px', width: '100%', background: 'transparent', border: '1px solid #333', color: '#888'}}>
        LOGGA UT
      </button>
    </div>
  );
}
