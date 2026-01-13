// // app/leaderboard/page.tsx
"use client";
import React from 'react';

export default function LeaderboardPage() {
  const leaders = [
    { rank: 1, name: "Marcus", score: 4500 },
    { rank: 2, name: "Linda", score: 4210 },
    { rank: 3, name: "Du", score: 3900, isMe: true }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '20px' }}>Global Karma</h1>
      {leaders.map(l => (
        <div key={l.rank} style={{ 
          display: 'flex', alignItems: 'center', gap: '15px', padding: '15px',
          background: l.isMe ? 'rgba(29, 185, 84, 0.1)' : 'transparent',
          borderRadius: '8px'
        }}>
          <span style={{ fontSize: '18px', fontWeight: 900, color: l.isMe ? 'var(--karma-green)' : '#fff' }}>#{l.rank}</span>
          <div style={{ flex: 1, fontWeight: 700 }}>{l.name}</div>
          <div style={{ fontWeight: 900 }}>{l.score}p</div>
        </div>
      ))}
    </div>
  );
}
