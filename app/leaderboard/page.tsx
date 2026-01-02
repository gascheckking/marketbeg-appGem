"use client";

export default function Leaderboard() {
  const users = [
    { name: "Satoshi_SE", sales: 142, trust: 99.9, rank: "GOD MODE", color: "var(--accent)" },
    { name: "Viking_Trader", sales: 89, trust: 98.5, rank: "ELITE", color: "#fff" },
    { name: "Nordic_Lux", sales: 76, trust: 99.2, rank: "PRO", color: "#888" },
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '10px' }}>Top Merchants</h1>
      <p className="muted" style={{ marginBottom: '40px' }}>Verifierade säljare som driver den cirkulära ekonomin framåt.</p>

      <div style={{ display: 'grid', gap: '15px' }}>
        {users.map((u, i) => (
          <div key={i} className="pay-card" style={{ padding: '20px 30px', background: 'var(--glass)', borderRadius: '20px', border: i === 0 ? '1px solid var(--accent)' : '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: '25px' }}>
            <span style={{ fontWeight: 900, fontSize: '24px', color: i === 0 ? 'var(--accent)' : '#444' }}>#{i+1}</span>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: '1.2rem' }}>{u.name}</strong>
              <div style={{ fontSize: '10px', color: u.color, fontWeight: 900, letterSpacing: '2px' }}>{u.rank}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 900 }}>{u.sales} avslutade</div>
              <div style={{ fontSize: '12px', color: 'var(--accent)' }}>{u.trust}% Trust Score</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
