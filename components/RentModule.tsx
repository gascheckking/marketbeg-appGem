// // components/RentModule.tsx
"use client";

export default function RentModule() {
  return (
    <div className="rent-card" style={{
      position: 'relative', overflow: 'hidden', borderRadius: '24px',
      border: '1px solid rgba(157, 78, 221, 0.2)', background: '#02040a',
      marginTop: '25px', height: '150px', cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(2,4,10,0.95))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(6px)'
      }}>
        <div style={{
          background: 'var(--neon-purple)', color: '#fff', fontSize: '9px', 
          padding: '4px 10px', borderRadius: '12px', fontWeight: 900, marginBottom: '10px',
          boxShadow: '0 0 15px rgba(157, 78, 221, 0.4)', letterSpacing: '1px'
        }}>Q4 RELEASE</div>
        
        <h3 style={{margin: 0, fontSize: '1.3rem', fontWeight: 900, letterSpacing: '-0.5px'}}>Karma Rent</h3>
        <p className="muted" style={{fontSize: '11px', marginTop: '6px', textAlign: 'center', maxWidth: '220px', lineHeight: '1.4'}}>
          Aktivera passiv inkomst på dina prylar. Fullt försäkrat via Karma Shield.
        </p>
      </div>

      {/* Bakgrunds-ikoner för textur */}
      <div style={{ padding: '25px', opacity: 0.1, display: 'flex', justifyContent: 'space-around', fontSize: '35px', filter: 'grayscale(1)' }}>
        <span>🎸</span><span>📷</span><span>🚲</span>
      </div>
    </div>
  );
}
