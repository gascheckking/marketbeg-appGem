"use client";

export default function DisputePage() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '70px', 
          textShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
          marginBottom: '20px' 
        }}>🛡️</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>AI Resolution</h1>
        <p className="muted">Vår neurala motor analyserar chatthistorik, bilder och fraktdata för att lösa dispyten direkt.</p>
      </div>

      <div className="glow-card" style={{ padding: '30px', background: '#000', borderRadius: '32px' }}>
        <h3 style={{ marginTop: 0 }}>Öppna ett ärende</h3>
        <p className="muted" style={{ fontSize: '14px' }}>Beskriv problemet så fattar AI:n ett beslut inom 60 sekunder.</p>
        
        <label className="muted" style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}>Kategori</label>
        <select style={{ 
          width: '100%', padding: '18px', background: '#111', color: '#fff', 
          borderRadius: '16px', border: '1px solid var(--border)', marginTop: '8px',
          appearance: 'none', outline: 'none'
        }}>
          <option>Varan stämmer inte med beskrivningen</option>
          <option>Varan har inte kommit fram</option>
          <option>Skada under transport</option>
          <option>Annat problem</option>
        </select>

        <textarea 
          placeholder="Vad har hänt?"
          style={{ 
            width: '100%', padding: '18px', background: '#111', color: '#fff', 
            borderRadius: '16px', border: '1px solid var(--border)', marginTop: '15px',
            minHeight: '120px', outline: 'none', fontFamily: 'inherit'
          }}
        ></textarea>

        <button className="primary-btn" style={{ marginTop: '25px', width: '100%' }}>
          STARTA AI-UTREDNING
        </button>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <small className="muted" style={{ fontSize: '10px' }}>
          94% av alla ärenden löses utan mänsklig inblandning.
        </small>
      </div>
    </div>
  );
}
