// // app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import FeedCardSell from '@/components/FeedCardSell';
import LoadingAI from '@/components/LoadingAI';

export default function Marketplace() {
  const [itemCount, setItemCount] = useState(100);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [activePulse, setActivePulse] = useState("Marknaden är het 🔥 124 aktiva matcher");

  // A. Användarorientering & B. Social Proof (Pulse-effekt)
  useEffect(() => {
    const pulses = [
      "Marknaden är het 🔥 124 aktiva matcher",
      "Såldes nyss: iPhone 13 Pro (12 sek sedan) ⚡",
      "42 köpare letar efter 'Vintage Tee' just nu",
      "Trendar i din nod: Elektronik +12%"
    ];
    const timer = setInterval(() => {
      setActivePulse(pulses[Math.floor(Math.random() * pulses.length)]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = ["BÄSTA MATCH", "NÄRA MIG", "REDO ATT SÄLJAS", "FYND 5-500:-", "VINTAGE"];
  
  // Utökad data för att stödja "Loop-tänket" och AI-beslut
  const items = [
    { id: "1", title: "Vintage Tee", price: 480, trust: 92, loop: 3, aiNote: "Hög likviditet" },
    { id: "2", title: "USB-C Hub", price: 245, trust: 95, loop: 1, aiNote: "Prisvärd match" },
    { id: "3", title: "AirPods Max", price: 3900, trust: 88, loop: 2, aiNote: "AI rekommenderar" },
    { id: "4", title: "iPhone 15 Pro", price: 9200, trust: 98, loop: 1, aiNote: "Garanterat skick" },
    { id: "5", title: "Stone Island", price: 2850, trust: 85, loop: 4, aiNote: "Populär i Sthlm" },
    { id: "6", title: "Nike Dunks", price: 1100, trust: 94, loop: 2, aiNote: "Snabb affär" },
  ];

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease' }}>
      
      {/* 1️⃣ TOP SECTION - IDENTITET & SOCIAL PROOF */}
      <div style={{ padding: '20px 20px 10px 20px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>
          UPPTÄCK <span style={{ color: 'var(--neon-purple)' }}>DEALS</span>
        </h1>
        <div style={{ 
          fontSize: '10px', 
          fontWeight: 800, 
          color: 'var(--neon-mint)', 
          marginTop: '5px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {activePulse}
        </div>
      </div>

      <div style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 10, 
        background: 'rgba(2, 4, 10, 0.95)', 
        backdropFilter: 'blur(15px)',
        padding: '10px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* 2️⃣ PRIMÄR HANDLING - AI SOM AKTÖR */}
        <div className="glass-card" style={{ 
          padding: '15px', 
          borderRadius: '20px', 
          marginBottom: '10px', 
          border: '1px solid rgba(157, 78, 221, 0.3)' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '0.9rem', fontWeight: 900, margin: 0 }}>OPTIMERA LIKVIDITET</h2>
              <p style={{ fontSize: '8px', opacity: 0.5, margin: '2px 0 8px' }}>AI matchar dig direkt mot redo köpare</p>
              <input 
                type="range" min="1" max="100" value={itemCount} 
                onChange={(e) => setItemCount(parseInt(e.target.value))}
                className="karma-slider"
              />
            </div>
            <button 
              onClick={() => setIsAnalysing(!isAnalysing)}
              className="primary-btn" 
              style={{ background: 'var(--neon-purple)', color: '#fff', padding: '10px 15px' }}>
              {isAnalysing ? 'STOPPA' : 'STARTA AI'}
            </button>
          </div>
        </div>

        {isAnalysing && <LoadingAI />}

        {/* 3️⃣ KATEGORIER (Förstärkta chips) */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '5px 0', scrollbarWidth: 'none' }}>
          {categories.map((cat, i) => (
            <button key={i} style={{
              whiteSpace: 'nowrap', padding: '8px 14px', borderRadius: '20px',
              border: '1px solid #222', background: i === 0 ? 'rgba(0,255,136,0.1)' : '#0a0a0a',
              color: i === 0 ? 'var(--neon-mint)' : '#555', fontSize: '9px', fontWeight: 900
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4️⃣ FEED - LOOP-TÄNK & HANDLING */}
      <div style={{ padding: '15px' }}>
        <p style={{ fontSize: '11px', fontWeight: 800, opacity: 0.4, marginBottom: '15px', textTransform: 'uppercase' }}>
          AI-matchade objekt nära dig
        </p>

        {/* Rutnät optimerat för visuell data (2-i-bredd för tydlighet, eller behåll 3) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {items.map((item, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <FeedCardSell {...item} />
              
              {/* Loop History Tag */}
              <div style={{ 
                position: 'absolute', top: '8px', left: '8px', 
                background: 'rgba(0,0,0,0.7)', padding: '2px 6px', 
                borderRadius: '6px', fontSize: '7px', fontWeight: 900,
                border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)'
              }}>
                LOOP #{item.loop}
              </div>

              {/* AI Insight (Vägledning) */}
              <div style={{ 
                marginTop: '6px', fontSize: '8px', color: 'var(--neon-purple)', 
                fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' 
              }}>
                <span style={{ fontSize: '10px' }}>✨</span> {item.aiNote}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5️⃣ BOTTEN: TRYGGHET (Karma Shield) */}
      <div style={{ 
        padding: '40px 20px', textAlign: 'center', opacity: 0.3,
        borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '20px' 
      }}>
        <p style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px' }}>
          🛡️ SKYDDAD VIA KARMA SHIELD • ESCROW AKTIVERAT
        </p>
      </div>

      <style jsx>{`
        .karma-slider { width: 100%; accent-color: var(--neon-purple); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
