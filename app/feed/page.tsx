"use client";
import React from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <section style={{ padding: '60px 40px', background: 'linear-gradient(to bottom, rgba(157,78,221,0.05), transparent)' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '30px', letterSpacing: '-3px' }}>Utforska Loopen.</h1>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Sök efter märke, modell eller kategori..." 
              style={{ 
                width: '100%', padding: '22px 65px', borderRadius: '20px', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', 
                color: '#fff', fontSize: '18px', outline: 'none' 
              }} />
            <span style={{ position: 'absolute', left: '25px', top: '24px', fontSize: '20px' }}>🔍</span>
          </div>
          <div className="glass-card" style={{ padding: '20px 30px', borderRadius: '20px', cursor: 'pointer', fontWeight: 800 }}>
            📍 Hela Sverige
          </div>
        </div>

        <div style={{ display: 'flex', gap: '40px' }}>
          {['Senaste', 'Mest Matchning', 'Billigast', 'Auktioner'].map((t, i) => (
            <div key={t} style={{ 
              paddingBottom: '15px', 
              borderBottom: i === 0 ? '3px solid var(--neon-mint)' : 'none', 
              cursor: 'pointer', 
              fontWeight: 900,
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: i === 0 ? '#fff' : '#444'
            }}>{t}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 40px 100px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {/* Här loopar vi riktiga FeedCardSell komponenter */}
          <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro M3" price={21900} trust={96} />
          <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={94} />
          <FeedCardSell id="4" title="PlayStation 5 Pro" price={8500} trust={89} />
          <FeedCardSell id="5" title="DJI Mavic 3" price={14200} trust={97} />
          <FeedCardSell id="6" title="iPad Pro 12.9" price={9500} trust={92} />
        </div>
      </section>
    </div>
  );
}
