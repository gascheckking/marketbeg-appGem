// // app/feed/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  const [activeCategory, setActiveCategory] = useState('Alla');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'Alla', icon: '🌐' },
    { id: 'elec', name: 'Elektronik', icon: '⚡' },
    { id: 'fash', name: 'Mode', icon: '👕' },
    { id: 'coll', name: 'Samlarobjekt', icon: '💎' },
    { id: 'home', name: 'Hem & Inredning', icon: '🏠' }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '0 0 100px 0', background: '#02040a' }}>
      {/* Header-sektion med Tradera-inspirerad sök & filter */}
      <section style={{ 
        padding: '20px', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.8)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Vad letar du efter?" 
              style={{ 
                width: '100%', 
                padding: '14px 45px', 
                borderRadius: '12px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                color: '#fff',
                fontSize: '14px'
              }} 
            />
            <span style={{ position: 'absolute', left: '15px', top: '14px', opacity: 0.5 }}>🔍</span>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            style={{ 
              padding: '12px 15px', 
              borderRadius: '12px', 
              background: showFilters ? 'var(--neon-purple)' : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              transition: '0.3s'
            }}>
            {showFilters ? 'Stäng' : 'Filter'}
          </button>
        </div>

        {/* Horisontell kategori-scroll (Liknar Traderas snabbval) */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          overflowX: 'auto', 
          scrollbarWidth: 'none', 
          marginTop: '15px',
          paddingBottom: '5px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                whiteSpace: 'nowrap',
                background: activeCategory === cat.name ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
                border: activeCategory === cat.name ? '1px solid var(--neon-mint)' : '1px solid rgba(255,255,255,0.1)',
                color: activeCategory === cat.name ? 'var(--neon-mint)' : '#888',
                fontSize: '12px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Grid-system för annonser */}
      <section style={{ padding: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <span style={{ fontSize: '12px', color: '#555', fontWeight: 700 }}>VISAR {activeCategory.toUpperCase()}</span>
          <span style={{ fontSize: '12px', color: 'var(--neon-mint)', fontWeight: 700 }}>1 240 TRÄFFAR</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
          {/* Här loopar vi dina FeedCardSell-komponenter */}
          <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro M3" price={21900} trust={96} />
          <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={94} />
          <FeedCardSell id="4" title="AirPods Max" price={4200} trust={98} />
        </div>
      </section>

      <style jsx>{`
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
