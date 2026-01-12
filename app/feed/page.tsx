// // app/feed/page.tsx
"use client";
import React from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  return (
    <div style={{ background: "var(--bg-black)", minHeight: "100vh", padding: "12px" }}>
      {/* Search Bar - Spotify Style */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', padding: '10px 0' }}>
        <div style={{ background: '#fff', borderRadius: '4px', padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#000' }}>🔍</span>
          <input placeholder="Sök i Karma..." style={{ border: 'none', width: '100%', fontWeight: 700, fontSize: '14px' }} />
        </div>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 900, margin: '20px 0 15px' }}>Hett i Loopen</h2>

      {/* Grid med hög densitet */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '12px' 
      }}>
        <FeedCardSell id="1" title="T-shirt Vintage" price={150} trust={99} />
        <FeedCardSell id="2" title="Tjocktröja" price={80} trust={96} />
        <FeedCardSell id="3" title="Skaljacka 92" price={450} trust={100} isSwap={true} />
        <FeedCardSell id="4" title="Nike skor" price={290} trust={94} />
      </div>
    </div>
  );
}
