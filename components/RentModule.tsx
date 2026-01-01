"use client";

export default function RentModule() {
  return (
    <div className="glow-card" style={{
      background: '#050505',
      position: 'relative',
      overflow: 'hidden',
      padding: '30px',
      borderRadius: '32px',
      border: '1px solid #1a1a1a'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 10
      }}>
        <div className="stat-pill" style={{background: 'var(--accent)', color: '#000', fontSize: '10px', marginBottom: '10px'}}>Q4 2026</div>
        <h3 style={{margin: 0, fontSize: '1.5rem', fontWeight: 900}}>BegAI Rent</h3>
        <p className="muted" style={{fontSize: '12px'}}>Hyr ut dina prylar med AI-försäkring.</p>
      </div>

      <div style={{opacity: 0.1, pointerEvents: 'none'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>Verktyg</span>
          <strong>200kr/dag</strong>
        </div>
      </div>
    </div>
  );
}
