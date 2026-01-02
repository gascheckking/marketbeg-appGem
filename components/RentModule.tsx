"use client";

export default function RentModule() {
  return (
    <div className="glow-card" style={{
      background: '#050505',
      position: 'relative',
      overflow: 'hidden',
      padding: '30px',
      borderRadius: '32px',
      border: '1px solid rgba(157, 78, 221, 0.2)',
      marginTop: '20px'
    }}>
      {/* Overlay för ej släppt funktion */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 10, textAlign: 'center', padding: '20px'
      }}>
        <div className="stat-pill" style={{
          background: 'var(--neon-purple)', 
          color: '#fff', 
          fontSize: '10px', 
          fontWeight: 900,
          marginBottom: '12px'
        }}>COMING Q4 2026</div>
        <h3 style={{margin: 0, fontSize: '1.5rem', fontWeight: 900, color: '#fff'}}>BegAI Rent</h3>
        <p className="muted" style={{fontSize: '12px', marginTop: '5px'}}>Hyr ut dina prylar med AI-försäkring och BankID-skydd.</p>
      </div>

      {/* Bakgrundsinnehåll (syns svagt genom blur) */}
      <div style={{opacity: 0.15, pointerEvents: 'none'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
          <span>Verktygspaket</span>
          <strong style={{color: 'var(--neon-mint)'}}>249 kr/dag</strong>
        </div>
        <div style={{height: '100px', background: '#111', borderRadius: '12px'}}></div>
      </div>
    </div>
  );
}
