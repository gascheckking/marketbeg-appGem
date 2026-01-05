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
    <div className="page-wrapper" style={{ padding: '0 0 100px 0', background: '#02040a', minHeight: '100vh' }}>
      
      {/* HEADER-BLOCK: Allt som ska ligga "överst" */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2,4,10,0.95)', backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        
        {/* 1. SÖK & AI-TRIGGER */}
        <div style={{ padding: '20px 20px 10px 20px', display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Sök i loopen..." 
              style={{ 
                width: '100%', padding: '14px 45px', borderRadius: '12px', 
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', 
                color: '#fff', fontSize: '15px' 
              }} 
            />
            <span style={{ position: 'absolute', left: '16px', top: '14px', opacity: 0.5 }}>🔍</span>
          </div>
          <button 
            onClick={() => setIsAnalysing(!isAnalysing)}
            style={{ 
              width: '50px', borderRadius: '12px', border: '1px solid var(--neon-purple)',
              background: isAnalysing ? 'var(--neon-purple)' : 'transparent',
              fontSize: '20px', cursor: 'pointer'
            }}>
            🧠
          </button>
        </div>

        {/* 2. AI-KALIBRERING (Direkt under sök, innan nav) */}
        {isAnalysing && (
          <div style={{ padding: '0 20px 15px 20px', animation: 'slideDown 0.3s ease-out' }}>
            <div style={{ 
              background: 'rgba(157, 78, 221, 0.05)', borderRadius: '14px', 
              border: '1px solid rgba(157, 78, 221, 0.2)', overflow: 'hidden'
            }}>
              <LoadingAI />
            </div>
          </div>
        )}

        {/* 3. TRENDING TAGS */}
        <div style={{ display: 'flex', gap: '8px', padding: '0 20px 15px 20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: '#444', alignSelf: 'center' }}>TRENDING:</span>
          {['iPhone', 'Dunk Low', 'Vintage', 'Gorpcore'].map(tag => (
            <span key={tag} style={{ 
              fontSize: '10px', color: 'var(--neon-mint)', background: 'rgba(0,255,136,0.05)', 
              padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(0,255,136,0.1)', whiteSpace: 'nowrap'
            }}>#{tag}</span>
          ))}
        </div>

        {/* 4. TABS */}
        <nav style={{ display: 'flex', gap: '20px', padding: '0 20px 10px 20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {categories.map((cat) => (
            <div key={cat.id} 
              onClick={() => setActiveCategory(cat.name)}
              style={{ 
                paddingBottom: '8px', borderBottom: activeCategory === cat.name ? '2px solid var(--neon-mint)' : '2px solid transparent',
                color: activeCategory === cat.name ? '#fff' : '#444', fontWeight: 900, fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap'
              }}>
              {cat.icon} {cat.name.toUpperCase()}
            </div>
          ))}
        </nav>
      </div>

      {/* 5. GRID (Här visas BARA produkterna nu) */}
      <section style={{ padding: '15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <FeedCardSell id="1" title="iPhone 15 Pro" price={10500} trust={99} />
          <FeedCardSell id="2" title="MacBook Pro" price={18900} trust={96} />
          <FeedCardSell id="3" title="AirPods Max" price={4200} trust={98} />
          <FeedCardSell id="4" title="Sony WH-1000" price={2800} trust={94} />
        </div>
      </section>

      <style jsx>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
