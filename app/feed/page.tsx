// // app/feed/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  const [filter, setFilter] = useState('Senaste');

  return (
    <div className="page-wrapper" style={{ padding: '0 0 100px 0' }}>
      <section style={{ padding: '25px 20px', background: 'linear-gradient(to bottom, rgba(157,78,221,0.08), transparent)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-1.5px' }}>Marketplace</h1>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Sök i loopen..." 
              style={{ width: '100%', padding: '16px 45px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '14px' }} />
            <span style={{ position: 'absolute', left: '18px', top: '16px', opacity: 0.5 }}>🔍</span>
          </div>
          <button className="glass-card" style={{ padding: '0 18px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>📍</button>
        </div>

        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '10px' }}>
          {['Senaste', 'Matching', 'Electronics', 'Fashion'].map((t) => (
            <div key={t} 
              onClick={() => setFilter(t)}
              style={{ 
                paddingBottom: '8px', 
                borderBottom: filter === t ? '2px solid var(--neon-mint)' : '2px solid transparent', 
                cursor: 'pointer', fontWeight: 900, fontSize: '11px', 
                color: filter === t ? '#fff' : '#444', whiteSpace: 'nowrap',
                transition: '0.3s'
              }}>{t.toUpperCase()}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro M3" price={21900} trust={96} />
          <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={94} />
          <FeedCardSell id="4" title="AirPods Max" price={4200} trust={98} />
        </div>
      </section>
    </div>
  );
}
