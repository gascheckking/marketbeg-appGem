"use client";

const MOCK_ITEMS = [
  { id: 1, name: "MacBook Pro M2", price: "14.500 kr", match: 98, location: "Stockholm", img: "💻", trend: "+5%" },
  { id: 2, name: "iPhone 15 Pro", price: "9.200 kr", match: 85, location: "Oslo", img: "📱", trend: "Hot" },
  { id: 3, name: "Dyson V15", price: "4.100 kr", match: 72, location: "Köpenhamn", img: "🧹", trend: "Stable" },
];

export default function Feed() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>AI Feed</h2>
          <p className="muted">Matchar dina preferenser med realtidsdata.</p>
        </div>
        <div className="pulse-banner" style={{ background: 'rgba(0, 255, 136, 0.05)', border: '1px solid rgba(0, 255, 136, 0.2)', padding: '15px 25px', borderRadius: '20px' }}>
          🤖 <span style={{ fontWeight: 800 }}>MARKET PULSE:</span> Elektronik säljs 15% snabbare i Stockholm just nu.
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {MOCK_ITEMS.map(item => (
          <div key={item.id} className="glow-card" style={{ padding: '25px', borderRadius: '24px', border: item.match > 90 ? '1px solid var(--accent)' : '1px solid #1a1a1a', cursor: 'pointer', transition: '0.3s' }} onClick={() => window.location.href=`/listing/${item.id}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ width: '50px', height: '50px', background: '#111', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>{item.img}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 900, fontSize: '1.2rem' }}>{item.price}</div>
                <div style={{ fontSize: '10px', color: 'var(--accent)', fontWeight: 800 }}>{item.trend}</div>
              </div>
            </div>
            <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="muted" style={{ fontSize: '12px' }}>{item.location}</span>
              <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '12px' }}>{item.match}% AI-match</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
