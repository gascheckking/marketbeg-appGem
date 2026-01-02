"use client";

export default function Profile() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '60px', marginTop: '40px' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '3px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', background: '#0a0a0a', boxShadow: '0 0 40px rgba(0, 255, 136, 0.1)' }}>🛡️</div>
        <div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: 0 }}>Alex Lindgren</h1>
          <div style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '3px', fontSize: '14px' }}>LEVEL 14 MERCHANT</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '50px' }}>
        <div className="glow-card" style={{ textAlign: 'center', padding: '30px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 900 }}>98.2%</div>
          <small className="muted">TRUST SCORE</small>
        </div>
        <div className="glow-card" style={{ textAlign: 'center', padding: '30px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 900 }}>2 450</div>
          <small className="muted">BEGCREDITS</small>
        </div>
        <div className="glow-card" style={{ textAlign: 'center', padding: '30px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 900 }}>42</div>
          <small className="muted">TOTAL SALES</small>
        </div>
      </div>

      <div className="pulse-banner" style={{ padding: '30px', borderRadius: '24px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ fontSize: '40px' }}>🤖</div>
        <div>
          <strong style={{ fontSize: '1.2rem' }}>AI Handels-DNA: "The Quick Flipper"</strong>
          <p className="muted" style={{ margin: '5px 0 0 0' }}>Du säljer objekt 40% snabbare än marknadssnittet. Din nisch är Apple-produkter.</p>
        </div>
      </div>
    </div>
  );
}
