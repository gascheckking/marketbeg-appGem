// // app/leaderboard/page.tsx
"use client";
import React from 'react';

export default function Leaderboard() {
  const users = [
    { name: "Satoshi_SE", sales: 142, trust: 99.9, rank: "GOD MODE", color: "var(--karma-green)" },
    { name: "Viking_Trader", sales: 89, trust: 98.5, rank: "ELITE", color: "#fff" },
    { name: "Nordic_Lux", sales: 76, trust: 99.2, rank: "PRO", color: "var(--karma-green)" },
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-1.5px' }}>LEADERBOARD</h1>
        <p className="text-small" style={{ opacity: 0.4, fontWeight: 800 }}>TOPP-TRADERS I KARMA EKOSYSTEMET</p>
      </header>

      <div style={{ display: 'grid', gap: '10px' }}>
        {users.map((u, i) => (
          <div key={i} className="card" style={{ 
            padding: '15px 20px', border: i === 0 ? '1px solid var(--karma-green)' : '1px solid var(--border)', 
            display: 'flex', alignItems: 'center', gap: '20px'
          }}>
            <div style={{ fontWeight: 900, fontSize: '22px', color: i === 0 ? 'var(--karma-green)' : '#222', width: '30px' }}>{i+1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900, fontSize: '14px' }}>{u.name}</div>
              <div style={{ fontSize: '8px', color: u.color, fontWeight: 900, letterSpacing: '1px', marginTop: '2px' }}>{u.rank}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 900, fontSize: '13px' }}>{u.sales} LOOPS</div>
              <div style={{ fontSize: '10px', color: 'var(--karma-green)', fontWeight: 900 }}>{u.trust}% TRUST</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
