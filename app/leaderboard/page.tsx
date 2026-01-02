"use client";
import React from 'react';

export default function Leaderboard() {
  const users = [
    { name: "Satoshi_SE", sales: 142, trust: 99.9, rank: "GOD MODE", color: "var(--neon-mint)" },
    { name: "Viking_Trader", sales: 89, trust: 98.5, rank: "ELITE", color: "#fff" },
    { name: "Nordic_Lux", sales: 76, trust: 99.2, rank: "PRO", color: "var(--neon-purple)" },
  ];

  return (
    <div className="page-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '10px', letterSpacing: '-2px' }}>Top Merchants</h1>
      <p className="muted" style={{ fontSize: '1.2rem', marginBottom: '50px' }}>Verifierade säljare som driver den cirkulära ekonomin framåt.</p>

      <div style={{ display: 'grid', gap: '20px' }}>
        {users.map((u, i) => (
          <div key={i} className="glass-card" style={{ 
            padding: '30px', 
            border: i === 0 ? '1px solid var(--neon-mint)' : '1px solid var(--border)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '30px' 
          }}>
            <span style={{ fontWeight: 900, fontSize: '32px', color: i === 0 ? 'var(--neon-mint)' : '#222', width: '50px' }}>#{i+1}</span>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: '1.4rem', color: '#fff' }}>{u.name}</strong>
              <div style={{ fontSize: '11px', color: u.color, fontWeight: 900, letterSpacing: '2px', marginTop: '5px' }}>{u.rank}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>{u.sales} avslutade</div>
              <div style={{ fontSize: '13px', color: 'var(--neon-mint)', fontWeight: 800 }}>{u.trust}% Trust Score</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
