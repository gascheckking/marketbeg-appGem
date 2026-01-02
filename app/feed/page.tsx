"use client";

export default function GlobalMarket() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      
      {/* Search & Tabs */}
      <section style={{ padding: '40px 60px', background: 'linear-gradient(to bottom, rgba(157,78,221,0.05), transparent)' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', letterSpacing: '-2px' }}>Utforska Loopen.</h1>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '30px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Sök efter 'iPhone 15 Pro'..." 
              style={{ 
                width: '100%', padding: '20px 60px', borderRadius: '18px', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', 
                color: '#fff', fontSize: '18px', outline: 'none' 
              }} />
            <span style={{ position: 'absolute', left: '25px', top: '22px', fontSize: '20px' }}>🔍</span>
          </div>
          <div className="glass-card" style={{ padding: '18px 25px', borderRadius: '18px', cursor: 'pointer', fontWeight: 700 }}>
            📍 Hela Sverige
          </div>
        </div>

        <div style={{ display: 'flex', gap: '40px' }}>
          {['Senaste', 'Mest Matchning', 'Billigast', 'Auktioner'].map((t, i) => (
            <div key={t} style={{ 
              paddingBottom: '10px', 
              borderBottom: i === 0 ? '3px solid #00ff88' : 'none', 
              cursor: 'pointer', 
              fontWeight: 800,
              color: i === 0 ? '#fff' : '#444'
            }}>{t}</div>
          ))}
        </div>
      </section>

      {/* Grid Content */}
      <section style={{ padding: '0 60px 100px 60px' }}>
        <div className="main-grid">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="glass-card">
              <div style={{ height: '220px', background: '#050505', borderRadius: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>📱</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: '#00ff88', fontSize: '11px', fontWeight: 900, letterSpacing: '1px' }}>AI MATCH 99%</span>
                <span className="muted">2m sen</span>
              </div>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>iPhone 15 Pro Max</h3>
              <div style={{ fontSize: '22px', fontWeight: 900, color: '#fff' }}>11 450 kr</div>
              <button style={{ 
                width: '100%', marginTop: '20px', padding: '12px', borderRadius: '10px', 
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
                color: '#fff', fontWeight: 700, cursor: 'pointer' 
              }}>VISA DETALJER</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
