// // app/feed/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  const [activeCategory, setActiveCategory] = useState('Alla');
  const [isAnalysing, setIsAnalysing] = useState(false);

  const categories = [
    { id: 'all', name: 'Alla', icon: '🌐' },
    { id: 'elec', name: 'Elektronik', icon: '⚡' },
    { id: 'fash', name: 'Mode', icon: '👕' },
    { id: 'home', name: 'Hem', icon: '🏠' }
  ];

  return (
    <div className="page-wrapper" style={{ paddingBottom: '120px' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)', margin: '0 -20px 20px -20px', padding: '15px 20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Sök i loopen..." style={{ width: '100%', padding: '12px 40px', borderRadius: '15px', background: 'var(--bg-card)', border: '1px solid var(--border)', color: '#fff', fontSize: '14px', outline: 'none' }} />
            <span style={{ position: 'absolute', left: '15px', top: '12px', opacity: 0.3 }}>🔍</span>
          </div>
          <button 
            onClick={() => setIsAnalysing(!isAnalysing)} 
            style={{ 
              width: '45px', borderRadius: '15px', border: '1px solid var(--karma-green)', 
              background: isAnalysing ? 'var(--karma-green)' : 'transparent', 
              fontSize: '18px', cursor: 'pointer', transition: '0.3s' 
            }}
          >
            {isAnalysing ? '🟢' : '🧠'}
          </button>
        </div>

        <nav style={{ display: 'flex', gap: '20px', overflowX: 'auto' }} className="no-scrollbar">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => setActiveCategory(cat.name)} 
              style={{ 
                paddingBottom: '10px', 
                borderBottom: activeCategory === cat.name ? '2px solid var(--karma-green)' : '2px solid transparent', 
                color: activeCategory === cat.name ? '#fff' : '#444', 
                fontWeight: 900, fontSize: '11px', whiteSpace: 'nowrap', cursor: 'pointer'
              }}
            >
              {cat.icon} {cat.name.toUpperCase()}
            </div>
          ))}
        </nav>
      </div>

      <section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FeedCardSell id="1" title="iPhone 15 Pro" price={10500} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro" price={18900} trust={96} />
          <FeedCardSell id="3" title="AirPods Max" price={4200} trust={98} />
          <FeedCardSell id="4" title="Sony WH-1000" price={2800} trust={94} />
        </div>
      </section>
    </div>
  );
}
