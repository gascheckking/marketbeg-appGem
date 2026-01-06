// // app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import FeedCardSell from '@/components/FeedCardSell';
import LoadingAI from '@/components/LoadingAI';

export default function Marketplace() {
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [isListening, setIsListening] = useState(false);
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

  // Smalare, avlånga kategorier för att slippa scroll
  const categories = [
    { n: "MATCH", i: "🎯" }, { n: "NÄRA", i: "📍" }, 
    { n: "REDO", i: "⚡" }, { n: "FYND", i: "🏷️" }, 
    { n: "VINTAGE", i: "💎" }, { n: "TECH", i: "💻" }
  ];
  
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
      
      {/* 1️⃣ LÅST SYSTEM-NAV (Toppen - Saldo & Karma) */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.98)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '12px 15px' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
             <button style={{ background: 'none', border: 'none', color: 'var(--neon-mint)', fontWeight: 900, fontSize: '10px' }}>HEM</button>
             <button style={{ background: 'none', border: 'none', color: '#555', fontWeight: 900, fontSize: '10px' }}>MATCH</button>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
             <div style={{ background: 'rgba(157, 78, 221, 0.1)', padding: '4px 10px', borderRadius: '8px', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
                <span style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)' }}>KARMA: 2 450</span>
             </div>
             <div style={{ background: 'rgba(255,255,255,0.03)', padding: '4px 10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '10px', fontWeight: 900 }}>14 250 KR</span>
             </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* 2️⃣ IDENTITY & PULSE */}
        <header style={{ marginBottom: '25px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-1.5px' }}>
            UTFORSKA <span style={{ color: 'var(--neon-purple)' }}>VALVET</span>
          </h1>
          <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--neon-mint)', marginTop: '6px', letterSpacing: '1px' }}>
            {activePulse.toUpperCase()}
          </div>
        </header>

        {/* 3️⃣ SÖK MED RÖSTSTYRNING */}
        <div style={{ 
          background: 'rgba(255,255,255,0.02)', borderRadius: '16px', 
          padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px',
          border: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px'
        }}>
          <span style={{ fontSize: '14px' }}>🔍</span>
          <input 
            type="text" placeholder="Sök i loopen..." 
            style={{ background: 'transparent', border: 'none', color: '#fff', flex: 1, outline: 'none', fontSize: '13px', fontWeight: 600 }} 
          />
          <button 
            onClick={() => setIsListening(!isListening)}
            style={{ 
              background: isListening ? 'var(--neon-purple)' : 'transparent', 
              border: 'none', borderRadius: '50%', width: '32px', height: '32px', transition: '0.3s',
              boxShadow: isListening ? '0 0 15px var(--neon-purple)' : 'none'
            }}>
            {isListening ? '🎙️' : '🎤'}
          </button>
        </div>

        {/* 4️⃣ SNABBSÄLJ (AI SOM AKTÖR) */}
        <div className="glass-card" style={{ 
          padding: '20px', borderRadius: '24px', marginBottom: '25px', 
          border: '1px solid rgba(157, 78, 221, 0.3)', background: 'rgba(157, 78, 221, 0.02)' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '13px', fontWeight: 900, margin: 0 }}>SNABBSÄLJ</h2>
              <p style={{ fontSize: '9px', opacity: 0.5, margin: '4px 0 0' }}>AI matchar dig direkt mot redo köpare</p>
            </div>
            <button 
              onClick={() => setIsAnalysing(!isAnalysing)}
              className="primary-btn" 
              style={{ background: '#fff', color: '#000', padding: '12px 20px', fontSize: '11px' }}>
              {isAnalysing ? 'STOPPA' : 'STARTA AI'}
            </button>
          </div>
        </div>

        {isAnalysing && <LoadingAI />}

        {/* 5️⃣ SMALA KATEGORIER (3 i bredd för noll scroll) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '30px' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ 
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px', padding: '12px 5px', textAlign: 'center', display: 'flex',
              flexDirection: 'column', alignItems: 'center', gap: '5px'
            }}>
              <span style={{ fontSize: '18px' }}>{cat.i}</span>
              <span style={{ fontSize: '8px', fontWeight: 900, opacity: 0.5 }}>{cat.n}</span>
            </div>
          ))}
        </div>

        {/* 6️⃣ FEED - LOOP-TÄNK */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
          {items.map((item, i) => (
            <div key={i} style={{ position: 'relative', animation: 'fadeIn 0.5s ease' }}>
              <FeedCardSell {...item} />
              
              <div style={{ 
                position: 'absolute', top: '10px', left: '10px', 
                background: 'rgba(0,0,0,0.8)', padding: '3px 7px', 
                borderRadius: '6px', fontSize: '8px', fontWeight: 900,
                border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)'
              }}>
                LOOP #{item.loop}
              </div>

              <div style={{ 
                marginTop: '8px', fontSize: '9px', color: 'var(--neon-purple)', 
                fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' 
              }}>
                <span style={{ fontSize: '11px' }}>✨</span> {item.aiNote}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7️⃣ BOTTEN: TRYGGHET */}
      <div style={{ 
        padding: '60px 20px', textAlign: 'center', opacity: 0.2,
        borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '20px' 
      }}>
        <p style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px' }}>
          🛡️ KARMA SHIELD PROTECTED • ESCROW NOD: ACTIVE
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
