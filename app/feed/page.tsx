// // app/feed/page.tsx
"use client";
import React from 'react';

export default function GlobalFeed() {
  const items = [
    { name: "SNEAKER_AIR", price: 450, trust: 99 },
    { name: "HOODIE_PACK", price: 150, trust: 100 },
    { name: "TECH_DEAL_1", price: 1200, trust: 94 }
  ];

  return (
    <div style={{ padding: '12px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px' }}>UPPTÄCK</h1>
        <div style={{ fontSize: '10px', color: 'var(--karma-green)', fontWeight: 900 }}>SYSTEM_READY // 104 NEW LOOPS</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ background: '#121212', padding: '10px' }}>
            <div style={{ width: '100%', aspectRatio: '1', background: '#1f1f1f', marginBottom: '8px' }} />
            <div className="card-title">{item.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '14px', fontWeight: 900 }}>{item.price}:-</div>
              <div className="card-meta" style={{ color: 'var(--karma-green)' }}>{item.trust}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
