// // app/feed/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from "@/components/FeedCardSell";
import LoadingAI from "@/components/LoadingAI";

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
    <div className="page-wrapper" style={{ paddingBottom: '100px', background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(2,4,10,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ padding: '15px 15px 10px 15px', display: 'flex', gap: '8px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Sök..." style={{ width: '100%', padding: '10px 35px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', fontSize: '13px' }} />
            <span style={{ position: 'absolute', left: '12px', top: '10px', fontSize: '12px', opacity: 0.4 }}>🔍</span>
          </div>
          <button onClick={() => setIsAnalysing(!isAnalysing)} style={{ width: '40px', borderRadius: '10px', border: '1px solid var(--neon-purple)', background: isAnalysing ? 'var(--neon-purple)' : 'transparent', fontSize: '16px' }}>🧠</button>
        </div>

        {isAnalysing && (
          <div style={{ padding: '0 15px 10px 15px' }}>
            <div style={{ background: 'rgba(157, 78, 221, 0.05)', borderRadius: '12px', border: '1px solid rgba(157, 78, 221, 0.2)', overflow: 'hidden' }}>
              <LoadingAI />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '6px', padding: '0 15px 12px 15px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {['iPhone', 'Dunk Low', 'Vintage'].map(tag => (
            <span key={tag} style={{ fontSize: '9px', color: 'var(--neon-mint)', background: 'rgba(0,255,136,0.05)', padding: '2px 8px', borderRadius: '5px', border: '1px solid rgba(0,255,136,0.1)', whiteSpace: 'nowrap' }}>#{tag}</span>
          ))}
        </div>

        <nav style={{ display: 'flex', gap: '15px', padding: '0 15px 8px 15px', overflowX: 'auto' }}>
          {categories.map((cat) => (
            <div key={cat.id} onClick={() => setActiveCategory(cat.name)} style={{ paddingBottom: '6px', borderBottom: activeCategory === cat.name ? '2px solid var(--neon-mint)' : '2px solid transparent', color: activeCategory === cat.name ? '#fff' : '#444', fontWeight: 900, fontSize: '10px', whiteSpace: 'nowrap' }}>
              {cat.icon} {cat.name.toUpperCase()}
            </div>
          ))}
        </nav>
      </div>

      <section style={{ padding: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <FeedCardSell id="1" title="iPhone 15 Pro" price={10500} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro" price={18900} trust={96} />
          <FeedCardSell id="3" title="AirPods Max" price={4200} trust={98} />
          <FeedCardSell id="4" title="Sony WH-1000" price={2800} trust={94} />
        </div>
      </section>
    </div>
  );
}
