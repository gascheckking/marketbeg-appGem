"use client";

/**
 * RentModule - Visar kommande funktioner.
 * Designad för att skapa nyfikenhet (FOMO).
 */
export default function RentModule() {
  return (
    <div className="rent-card" style={{
      position: 'relative', overflow: 'hidden', borderRadius: '20px',
      border: '1px solid rgba(157, 78, 221, 0.15)', background: '#02040a',
      marginTop: '20px', height: '140px', cursor: 'pointer'
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(4px)'
      }}>
        <div style={{
          background: 'var(--neon-purple)', color: '#fff', fontSize: '8px', 
          padding: '3px 8px', borderRadius: '10px', fontWeight: 900, marginBottom: '8px'
        }}>Q4 RELEASE</div>
        
        <h3 style={{margin: 0, fontSize: '1.2rem', fontWeight: 900}}>Karma Rent</h3>
        <p className="muted" style={{fontSize: '11px', marginTop: '4px', textAlign: 'center', maxWidth: '200px'}}>
          Tjäna pengar på att hyra ut dina prylar. Fullt försäkrat.
        </p>
      </div>

      {/* Bakgrunds-ikoner för textur */}
      <div style={{ padding: '20px', opacity: 0.1, display: 'flex', justifyContent: 'space-around', fontSize: '30px' }}>
        <span>🎸</span><span>📷</span><span>🚲</span>
      </div>
    </div>
  );
}
