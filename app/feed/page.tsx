"use client";

const MOCK_ITEMS = [
  { id: 1, name: "MacBook Pro M2", price: "14.500 kr", match: 98, location: "Stockholm", img: "💻", trend: "+5%" },
  { id: 2, name: "iPhone 15 Pro", price: "9.200 kr", match: 85, location: "Oslo", img: "📱", trend: "Hot" },
  { id: 3, name: "Dyson V15", price: "4.100 kr", match: 72, location: "Köpenhamn", img: "🧹", trend: "Stable" },
];

export default function Feed() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: 0 }}>AI Feed</h2>
          <div className="stat-pill" style={{ fontSize: '10px' }}>LIVE MATCHING</div>
        </div>
        <div className="pulse-banner" style={{ 
          marginTop: '15px', 
          background: 'rgba(0, 255, 136, 0.05)', 
          border: '1px solid rgba(0, 255, 136, 0.2)',
          padding: '12px',
          borderRadius: '16px',
          fontSize: '13px'
        }}>
          🤖 <span className="ai-text" style={{ fontWeight: 800 }}>MARKET PULSE:</span> Elektronik säljs 15% snabbare i Stockholm just nu.
        </div>
      </header>

      <div style={{ display: 'grid', gap: '20px' }}>
        {MOCK_ITEMS.map(item => (
          <div key={item.id} className="glow-card" style={{ 
            padding: '25px', 
            borderRadius: '32px',
            background: '#000',
            border: item.match > 90 ? '1px solid var(--accent)' : '1px solid #222',
            position: 'relative',
            cursor: 'pointer'
          }} onClick={() => window.location.href='/checkout'}>
            
            {item.match > 90 && (
              <div style={{ 
                position: 'absolute', top: '-10px', right: '20px', 
                background: 'var(--accent)', color: '#000', 
                padding: '4px 12px', borderRadius: '99px', fontSize: '10px', fontWeight: 900 
              }}>TOP MATCH</div>
            )}
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ 
                width: '60px', height: '60px', background: '#111', 
                borderRadius: '18px', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', fontSize: '30px' 
              }}>
                {item.img}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{item.name}</h3>
                <p className="muted" style={{ margin: 0, fontSize: '12px' }}>{item.location} • {item.match}% AI-match</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 900, fontSize: '1.2rem' }}>{item.price}</div>
                <div style={{ fontSize: '10px', color: 'var(--accent)', fontWeight: 800 }}>{item.trend}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
