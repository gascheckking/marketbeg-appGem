// // app/feed/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  const [activeCategory, setActiveCategory] = useState('Alla');

  const categories = [
    { id: 'all', name: 'Alla' },
    { id: 'swap', name: 'Byten 🔄' },
    { id: 'fash', name: 'Mode' },
    { id: 'elec', name: 'Tech' },
    { id: 'kids', name: 'Barn' }
  ];

  return (
    <div style={{ background: "#121212", minHeight: "100vh", padding: "10px 15px 120px" }}>
      {/* STICKY HEADER SOM SPOTIFY SEARCH */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: '#121212', padding: '10px 0' }}>
        <h1 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "15px", letterSpacing: "-1px" }}>Utforska</h1>
        
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input type="text" placeholder="Vad letar du efter?" style={{ width: '100%', padding: '12px 40px', borderRadius: '4px', background: '#fff', border: 'none', color: '#000', fontSize: '14px', fontWeight: 700 }} />
          <span style={{ position: 'absolute', left: '12px', top: '10px', fontSize: "18px" }}>🔍</span>
        </div>

        <nav style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: "5px" }} className="no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => setActiveCategory(cat.name)} 
              style={{ 
                padding: '8px 16px', borderRadius: '4px', border: 'none',
                background: activeCategory === cat.name ? 'var(--karma-green)' : '#282828', 
                color: activeCategory === cat.name ? '#000' : '#fff', 
                fontWeight: 900, fontSize: '11px', whiteSpace: 'nowrap'
              }}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </nav>
      </div>

      {/* GRID MED HÖG DENSITET */}
      <section style={{ marginTop: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FeedCardSell id="1" title="iPhone 15 Pro" price={10500} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro" price={18900} trust={96} />
          <FeedCardSell id="3" title="AirPods Max" price={4200} trust={98} />
          <FeedCardSell id="4" title="Polarn O. Pyret 92" price={450} trust={100} isSwap={true} />
        </div>
      </section>
    </div>
  );
}
