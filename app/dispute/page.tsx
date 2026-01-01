export default function DisputePage() {
  return (
    <div className="main-container">
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <span style={{fontSize: '60px'}}>🛡️</span>
        <h1>AI Resolution Center</h1>
        <p className="muted">Vår AI analyserar din dispyt baserat på bilder, chatthistorik och fraktdata.</p>
      </div>

      <div className="bento-grid" style={{marginTop: '40px'}}>
        <div className="bento-item" style={{gridColumn: 'span 3'}}>
          <h3>Öppna ett ärende</h3>
          <p>Beskriv problemet så fattar AI:n ett beslut inom 60 sekunder.</p>
          <select style={{width: '100%', padding: '15px', background: '#111', color: '#fff', borderRadius: '12px', border: '1px solid #333'}}>
            <option>Varan stämmer inte med beskrivningen</option>
            <option>Varan har inte kommit fram</option>
            <option>Annat problem</option>
          </select>
          <button className="primary-btn" style={{marginTop: '20px', width: '100%'}}>STARTA UTREDNING</button>
        </div>
      </div>
    </div>
  );
}
