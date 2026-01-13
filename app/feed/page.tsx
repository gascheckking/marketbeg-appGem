// // app/feed/page.tsx
"use client";
import React from 'react';
import FeedCardSell from '@/components/FeedCardSell';

export default function GlobalFeed() {
  const items = [
    { id: '1', title: "Vintage Tröja", price: 80, trust: 99 },
    { id: '2', title: "Nike Air", price: 450, trust: 94 },
    { id: '3', title: "Skaljacka", price: 150, trust: 100, isSwap: true },
    { id: '4', title: "iPhone 13", price: 4200, trust: 98 }
  ];

  return (
    <div style={{ padding: '12px', paddingBottom: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingTop: '10px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 900 }}>Upptäck</h1>
        <div style={{ background: '#282828', borderRadius: '50%', width: '32px', height: '32px' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {items.map(item => (
          <FeedCardSell key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
