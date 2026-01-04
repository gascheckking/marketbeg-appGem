// --- app/page.tsx ---
"use client";
import React from 'react';
import FeedCardSell from '@/components/FeedCardSell';

export default function Marketplace() {
  const trendingItems = [
    { id: "1", title: "iPhone 15 Pro, 256GB", price: 9200, trust: 98, matchScore: 99, instant: true },
    { id: "2", title: "AirPods Max (Silver)", price: 4100, trust: 92, matchScore: 94, instant: true },
    { id: "3", title: "Stone Island Beanie", price: 850, trust: 85, matchScore: 88, instant: false },
    { id: "4", title: "iPad Pro M4 11\"", price: 10500, trust: 99, matchScore: 97, instant: true }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '2px' }}>LIVE MARKETPLACE</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1px', margin: '5px 0' }}>Utforska Loopen</h1>
        <p style={{ fontSize: '10px', opacity: 0.5 }}>AI-matchade objekt baserat på din profil och Karma Score.</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '12px' 
      }}>
        {trendingItems.map(item => (
          <FeedCardSell 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            trust={item.trust}
            matchScore={item.matchScore}
            instant={item.instant}
          />
        ))}
      </div>
    </div>
  );
}
