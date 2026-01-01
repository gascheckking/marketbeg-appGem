export default function Leaderboard() {
  const users = [
    { name: "Satoshi_SE", sales: 142, trust: 99.9, rank: "GOD MODE" },
    { name: "Viking_Trader", sales: 89, trust: 98.5, rank: "ELITE" },
    { name: "Nordic_Lux", sales: 76, trust: 99.2, rank: "PRO" },
  ];

  return (
    <div style={{padding: '20px'}}>
      <h1>Merchant Leaderboard</h1>
      <p className="muted">De mest betrodda säljarna i Norden.</p>

      <div className="leaderboard-list">
        {users.map((u, i) => (
          <div key={i} className="bento-item" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '20px', background: i === 0 ? 'linear-gradient(90deg, #1a1a1a, #000)' : '#111', borderRadius: '24px', border: i === 0 ? '1px solid var(--accent)' : '1px solid #222'}}>
            <div>
              <span style={{fontWeight: 800, fontSize: '20px', marginRight: '15px'}}>{i+1}</span>
              <strong>{u.name}</strong>
              <div style={{fontSize: '12px', color: 'var(--accent)'}}>{u.rank}</div>
            </div>
            <div style={{textAlign: 'right'}}>
              <div style={{fontWeight: 900}}>{u.sales} sälj</div>
              <div style={{fontSize: '12px', color: '#888'}}>{u.trust}% Trust</div>
            </div>
          </div>
        ))}
      </div>

      <div className="reward-banner" style={{background: 'var(--accent)', color: '#000', padding: '30px', borderRadius: '30px', marginTop: '40px', textAlign: 'center'}}>
        <h2>Tjäna 500 BegCredits!</h2>
        <p>Gör din första försäljning med AI-scan idag och få credits direkt på ditt konto.</p>
        <button style={{background: '#000', color: '#fff', border: 'none', padding: '15px 30px', borderRadius: '100px', fontWeight: 800}}>LÄS MER</button>
      </div>
    </div>
  );
}
