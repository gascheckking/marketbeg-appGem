// // app/feed/page.tsx
"use client";
import React from 'react';

export default function GlobalFeed() {
  const items = [
    { id: 1, name: "VINTAGE NIKE", price: 450, trust: 99 },
    { id: 2, name: "JACKA STL 92", price: 80, trust: 100 },
    { id: 3, name: "IPHONE 13", price: 4200, trust: 94 },
    { id: 4, name: "SKALBYXOR", price: 120, trust: 98 }
  ];

  return (
    <div style={{ padding: '12px', paddingBottom: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 900 }}>UPPTÄCK</h1>
        <div style={{ fontSize: '20px' }}>🔍</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {items.map(item => (
          <div key={item.id} className="karma-card" style={{ padding: '8px' }}>
            <div style={{ width: '100%', aspectRatio: '1', background: '#222', borderRadius: '2px', marginBottom: '8px' }} />
            <div style={{ fontSize: '11px', fontWeight: 900, whiteSpace: 'nowrap', overflow: 'hidden' }}>{item.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <div style={{ fontSize: '13px', fontWeight: 900 }}>{item.price}:-</div>
              <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--karma-green)' }}>{item.trust}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
