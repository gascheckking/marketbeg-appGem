// // components/RentModule.tsx
"use client";

export default function RentModule() {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', borderRadius: '24px',
      border: '1px solid rgba(157, 78, 221, 0.3)', background: '#02040a',
      marginTop: '20px', height: '140px', cursor: 'pointer',
      boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(2,4,10,0.9))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(4px)', padding: '20px'
      }}>
        <div style={{
          background: 'var(--neon-purple)', color: '#fff', fontSize: '8px', 
          padding: '3px 10px', borderRadius: '10px', fontWeight: 900, marginBottom: '8px',
          boxShadow: '0 0 15px rgba(157, 78, 221, 0.4)', letterSpacing: '1.5px'
        }}>COMING SOON</div>
        
        <h3 style={{margin: 0, fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.5px'}}>KARMA RENT</h3>
        <p style={{
          fontSize: '9px', marginTop: '6px', textAlign: 'center', 
          maxWidth: '200px', lineHeight: '1.4', opacity: 0.5, fontWeight: 700
        }}>
          Hyr ut dina prylar istället för att sälja. Säkrat via Karma Shield.
        </p>
      </div>

      {/* Dekorativa ikoner */}
      <div style={{ 
        display: 'flex', gap: '30px', opacity: 0.15, fontSize: '30px', 
        filter: 'blur(1px)', position: 'absolute', zIndex: 1 
      }}>
        <span>🎸</span><span>📸</span><span>🚲</span><span>🎮</span>
      </div>
    </div>
  );
}
