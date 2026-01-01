export default function ListingPage({ params }: { params: { id: string } }) {
  return (
    <main className="container">
      {/* Layout uppdelad i två kolumner (Bild + Info) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        
        {/* Vänster: Bild */}
        <div className="card" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', fontSize: '60px' }}>
          📷
        </div>

        {/* Höger: Info */}
        <div>
          <span className="muted">Annons #{params.id}</span>
          <h1 style={{ marginTop: '10px' }}>Objektets Titel</h1>
          <p className="price-tag" style={{ fontSize: '32px', color: '#0066ff' }}>4 500 kr</p>
          
          <div style={{ margin: '20px 0' }}>
             {/* Hårdkodad trust för demo */}
             <div className="trust-badge">🛡️ Säljare: Trust 94%</div>
          </div>

          <p className="muted">
            Här står AI-genererad beskrivning om produkten. Den är i nyskick och har använts varsamt.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', gap: '10px' }}>
            <button className="primary" style={{ flex: 1 }}>Köp med garanti</button>
            <button className="secondary">Lägg bud</button>
          </div>
        </div>

      </div>
    </main>
  );
}
