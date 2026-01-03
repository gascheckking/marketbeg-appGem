"use client";
import React, { useState } from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  const [filter, setFilter] = useState('Senaste');

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '100px' }}>
      <section style={{ padding: '30px 20px', background: 'linear-gradient(to bottom, rgba(157,78,221,0.05), transparent)' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-1.5px' }}>Utforska Loopen.</h1>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Sök..." 
              style={{ width: '100%', padding: '15px 45px', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', outline: 'none' }} />
            <span style={{ position: 'absolute', left: '15px', top: '15px' }}>🔍</span>
          </div>
          <button className="glass-card" style={{ padding: '0 15px', borderRadius: '14px' }}>📍</button>
        </div>

        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {['Senaste', 'Matching', 'Billigast', 'Auktioner'].map((t) => (
            <div key={t} 
              onClick={() => setFilter(t)}
              style={{ 
                paddingBottom: '10px', borderBottom: filter === t ? '2px solid var(--neon-mint)' : 'none', 
                cursor: 'pointer', fontWeight: 900, fontSize: '11px', color: filter === t ? '#fff' : '#444', whiteSpace: 'nowrap'
              }}>{t.toUpperCase()}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '15px' }}>
          <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro M3" price={21900} trust={96} />
          <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={94} />
          {/* Fler kort... */}
        </div>
      </section>
    </div>
  );
}
