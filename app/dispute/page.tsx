"use client";

export default function DisputePage() {
  return (
    <div className="web-container">
      <div className="content-wrapper" style={{ maxWidth: '800px', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '30px' }}>🛡️</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Karma Resolution</h1>
        <p className="muted" style={{ maxWidth: '500px', margin: '0 auto 50px' }}>
          Något som inte blev rätt? Vårt trygghetssystem går igenom affären och hjälper er hitta en lösning på under 60 sekunder.
        </p>

        <div className="glow-card" style={{ padding: '40px', textAlign: 'left', background: '#0a0a0a', borderRadius: '32px' }}>
          <h3 style={{ marginBottom: '25px' }}>Vad har hänt?</h3>
          
          <label className="muted" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>Anledning</label>
          <select style={{ width: '100%', padding: '20px', background: '#111', color: '#fff', borderRadius: '18px', border: '1px solid #222', marginTop: '10px', marginBottom: '20px', appearance: 'none' }}>
            <option>Varan stämmer inte med beskrivningen</option>
            <option>Jag har inte fått min vara</option>
            <option>Varan skadades i frakten</option>
          </select>

          <textarea 
            placeholder="Berätta kort vad som är fel..."
            style={{ width: '100%', padding: '20px', background: '#111', color: '#fff', borderRadius: '18px', border: '1px solid #222', minHeight: '150px', outline: 'none' }}
          ></textarea>

          <button className="primary-btn" style={{ marginTop: '30px', width: '100%', background: '#9d4edd', color: '#fff' }}>
            ÖPPNA TRYGGHETSÄRENDE
          </button>
        </div>
      </div>
    </div>
  );
}
