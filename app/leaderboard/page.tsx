"use client";

export default function Leaderboard() {
  const users = [
    { name: "Satoshi_SE", sales: 142, trust: 99.9, rank: "GOD MODE", color: "var(--accent)" },
    { name: "Viking_Trader", sales: 89, trust: 98.5, rank: "ELITE", color: "#fff" },
    { name: "Nordic_Lux", sales: 76, trust: 99.2, rank: "PRO", color: "#888" },
  ];

  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <header style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Top Merchants</h1>
        <p className="muted">De mest betrodda säljarna i det nordiska nätverket.</p>
      </header>

      <div className="leaderboard-list" style={{ display: 'grid', gap: '15px' }}>
        {users.map((u, i) => (
          <div key={i} className="pay-card" style={{ 
            padding: '25px', 
            background: i === 0 ? 'rgba(0, 255, 136, 0.03)' : 'var(--glass)', 
            border: i === 0 ? '1px solid var(--accent)' : '1px solid var(--border)',
            borderRadius: '28px',
            margin: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
              <span style={{ 
                fontWeight: 900, fontSize: '24px', color: i === 0 ? 'var(--accent)' : '#444',
                minWidth: '30px'
              }}>#{i+1}</span>
              
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: '1.1rem' }}>{u.name}</strong>
                <div style={{ fontSize: '10px', color: u.color, fontWeight: 900, letterSpacing: '1px' }}>{u.rank}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 900 }}>{u.sales} sälj</div>
                <div style={{ fontSize: '11px', color: 'var(--accent)' }}>{u.trust}% Trust</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glow-card" style={{ 
        background: 'var(--accent)', 
        color: '#000', 
        padding: '35px', 
        borderRadius: '32px', 
        marginTop: '40px', 
        textAlign: 'center',
        border: 'none'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>Tjäna 500 BegCredits!</h2>
        <p style={{ fontWeight: 600, opacity: 0.8, marginBottom: '25px' }}>Bli verifierad säljare idag.</p>
        <button style={{ 
          background: '#000', color: '#fff', border: 'none', 
          padding: '18px 40px', borderRadius: '18px', fontWeight: 900,
          cursor: 'pointer'
        }}>GÅ MED NU</button>
      </div>
    </div>
  );
}
