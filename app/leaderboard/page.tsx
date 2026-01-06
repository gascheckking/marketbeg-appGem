// // app/leaderboard/page.tsx
"use client";
import React from 'react';

export default function Leaderboard() {
  const users = [
    { name: "Satoshi_SE", sales: 142, trust: 99.9, rank: "GOD MODE", color: "var(--neon-mint)" },
    { name: "Viking_Trader", sales: 89, trust: 98.5, rank: "ELITE", color: "#fff" },
    { name: "Nordic_Lux", sales: 76, trust: 99.2, rank: "PRO", color: "var(--neon-purple)" },
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>LEADERBOARD</h1>
        <p style={{ fontSize: '9px', opacity: 0.5, fontWeight: 800 }}>TOPP-TRADERS I EKOSYSTEMET</p>
      </header>

      <div style={{ display: 'grid', gap: '8px' }}>
        {users.map((u, i) => (
          <div key={i} className="glass-card" style={{ padding: '12px 15px', border: i === 0 ? '1px solid var(--neon-mint)' : '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px', borderRadius: '16px' }}>
            <div style={{ fontWeight: 900, fontSize: '18px', color: i === 0 ? 'var(--neon-mint)' : '#222', width: '25px' }}>{i+1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900, fontSize: '12px' }}>{u.name}</div>
              <div style={{ fontSize: '7px', color: u.color, fontWeight: 900, letterSpacing: '0.5px' }}>{u.rank}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 900, fontSize: '11px' }}>{u.sales} LOPPS</div>
              <div style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 800 }}>{u.trust}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
