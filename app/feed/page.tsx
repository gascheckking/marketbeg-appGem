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
      
      {/* 1. TOP SEKTION: Sök & AI-Trigger */}
      <section style={{ padding: '20px 20px 10px 20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Sök i loopen..." 
              style={{ 
                width: '100%', padding: '16px 45px', borderRadius: '14px', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', 
                color: '#fff', fontSize: '15px', outline: 'none' 
              }} 
            />
            <span style={{ position: 'absolute', left: '16px', top: '16px', opacity: 0.6 }}>🔍</span>
          </div>
          <button 
            onClick={() => setIsAnalysing(!isAnalysing)}
            style={{ 
              width: '54px', borderRadius: '14px', border: '1px solid var(--neon-purple)',
              background: isAnalysing ? 'var(--neon-purple)' : 'transparent',
              cursor: 'pointer', fontSize: '20px', transition: '0.3s'
            }}>
            🧠
          </button>
        </div>

        {/* 2. AI-KALIBRERING (Flyttad HIT - ovanför tabs) */}
        {isAnalysing && (
          <div style={{ 
            marginBottom: '20px', padding: '2px', borderRadius: '16px',
            background: 'linear-gradient(90deg, transparent, var(--neon-purple), transparent)',
            animation: 'shimmer 2s infinite'
          }}>
            <div style={{ background: '#02040a', borderRadius: '15px', overflow: 'hidden' }}>
              <LoadingAI />
            </div>
          </div>
        )}

        {/* 3. TRENDANDE (Inspiration från bilderna) */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: '#333', whiteSpace: 'nowrap', alignSelf: 'center' }}>TRENDING:</span>
          {['iPhone 15', 'Vintage', 'Gorpcore'].map(tag => (
            <span key={tag} style={{ 
              fontSize: '10px', color: 'var(--neon-mint)', background: 'rgba(0,255,136,0.05)', 
              padding: '4px 10px', borderRadius: '8px', border: '1px solid rgba(0,255,136,0.1)', whiteSpace: 'nowrap'
            }}>#{tag}</span>
          ))}
        </div>
      </section>

      {/* 4. TABS & FILTER */}
      <nav style={{ 
        position: 'sticky', top: 0, zIndex: 10, background: 'rgba(2,4,10,0.8)', 
        backdropFilter: 'blur(10px)', padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', scrollbarWidth: 'none' }}>
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
        </div>
      </nav>

      {/* 5. GRID */}
      <section style={{ padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <FeedCardSell id="1" title="iPhone 15 Pro" price={10500} trust={99} />
          <FeedCardSell id="2" title="Arc'teryx Beta LT" price={3200} trust={94} />
          <FeedCardSell id="3" title="AirPods Max" price={4500} trust={98} />
          <FeedCardSell id="4" title="Stone Island Knit" price={2800} trust={92} />
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
