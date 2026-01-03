"use client";

export default function RentModule() {
  return (
    <div className="rent-module-container" style={{
      position: 'relative', overflow: 'hidden', borderRadius: '28px',
      border: '1px solid rgba(157, 78, 221, 0.2)', background: '#030303',
      marginTop: '20px', minHeight: '160px'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%)',
        backdropFilter: 'blur(8px)', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{
          background: 'linear-gradient(90deg, var(--neon-purple), #6231af)', 
          color: '#fff', fontSize: '9px', padding: '4px 10px',
          borderRadius: '20px', fontWeight: 900, marginBottom: '10px', letterSpacing: '1px'
        }}>PHASE TWO • Q4</div>
        
        <h3 style={{margin: 0, fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-1px'}}>KARMA Rent</h3>
        <p className="muted" style={{fontSize: '12px', marginTop: '6px', textAlign: 'center', maxWidth: '240px'}}>
          Aktivera passiv avkastning på dina ägda objekt. Fullt försäkrat via KARMA Protocol.
        </p>
      </div>

      <div style={{ padding: '30px', opacity: 0.05, display: 'flex', justifyContent: 'space-around', fontSize: '40px' }}>
        <span>📷</span><span>🎸</span><span>🚲</span>
      </div>

      <style jsx>{`
        .rent-module-container { transition: all 0.4s ease; cursor: pointer; }
        .rent-module-container:hover { border-color: var(--neon-purple); transform: scale(1.01); }
      `}</style>
    </div>
  );
}
