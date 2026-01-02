"use client";

export default function Auctions() {
  const auctions = [
    { id: 1, name: "Vintage Rolex Submariner", bids: 24, time: "14:02", price: "82 000 kr", img: "⌚" },
    { id: 2, name: "Off-White x Nike Dunk", bids: 12, time: "02:15", price: "4 200 kr", img: "👟" }
  ];

  return (
    <div style={{ marginLeft: '280px', padding: '60px', width: 'calc(100vw - 280px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Live Auktioner</h1>
        <div className="stat-pill" style={{ color: '#ff4444', borderColor: '#ff4444' }}>● LIVE MATCHING ACTIVE</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '30px' }}>
        {auctions.map(a => (
          <div key={a.id} className="glass-card" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <div style={{ width: '120px', height: '120px', background: '#000', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' }}>{a.img}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#ff4444', fontWeight: 800, fontSize: '12px' }}>{a.time} KVAR</span>
                <span className="muted">{a.bids} BUD</span>
              </div>
              <h3 style={{ margin: '10px 0' }}>{a.name}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>{a.price}</div>
              <button style={{ width: '100%', marginTop: '15px', padding: '10px', borderRadius: '8px', background: 'var(--neon-purple)', border: 'none', color: '#fff', fontWeight: 800 }}>LÄGG BUD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
