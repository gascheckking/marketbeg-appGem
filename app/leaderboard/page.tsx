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
    <div className="page-wrapper" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>Leaderboard</h1>
        <p className="muted" style={{ fontSize: '12px', marginTop: '8px' }}>De mest betrodda handlarna i ekosystemet.</p>
      </header>

      <div style={{ display: 'grid', gap: '12px' }}>
        {users.map((u, i) => (
          <div key={i} className="glass-card" style={{ 
            padding: '20px', 
            border: i === 0 ? '1px solid var(--neon-mint)' : '1px solid rgba(255,255,255,0.05)', 
            display: 'flex', alignItems: 'center', gap: '20px', borderRadius: '24px'
          }}>
            <div style={{ fontWeight: 900, fontSize: '24px', color: i === 0 ? 'var(--neon-mint)' : '#333', width: '40px' }}>{i+1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900, fontSize: '15px' }}>{u.name}</div>
              <div style={{ fontSize: '8px', color: u.color, fontWeight: 900, letterSpacing: '1px', marginTop: '4px' }}>{u.rank}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 900, fontSize: '13px' }}>{u.sales} lopps</div>
              <div style={{ fontSize: '10px', color: 'var(--neon-mint)', fontWeight: 800 }}>{u.trust}% TRUST</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
