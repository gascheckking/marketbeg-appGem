// // app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import FeedCardSell from '@/components/FeedCardSell';
import LoadingAI from '@/components/LoadingAI';

export default function Marketplace() {
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activePulse, setActivePulse] = useState("Marknaden är aktiv • 124 matcher just nu");

  useEffect(() => {
    const pulses = [
      "Marknaden är aktiv • 124 matcher just nu",
      "Såldes nyss: iPhone 13 Pro (12s sedan) ⚡",
      "42 personer letar efter 'Vintage' just nu",
      "Hög efterfrågan på Tech i Stockholm +12%"
    ];
    const timer = setInterval(() => {
      setActivePulse(pulses[0]); // Startar med första för stabilitet
      setActivePulse(pulses[Math.floor(Math.random() * pulses.length)]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { n: "MATCH", i: "🎯" }, { n: "NÄRA", i: "📍" }, 
    { n: "REDO", i: "⚡" }, { n: "FYND", i: "🏷️" }, 
    { n: "VINTAGE", i: "💎" }, { n: "TECH", i: "💻" }
  ];
  
  const items = [
    { id: "1", title: "Vintage Tee", price: 480, trust: 92, loop: 3, aiNote: "Hög efterfrågan" },
    { id: "2", title: "USB-C Hub", price: 245, trust: 95, loop: 1, aiNote: "Snabb affär" },
    { id: "3", title: "AirPods Max", price: 3900, trust: 88, loop: 2, aiNote: "Populär just nu" },
    { id: "4", title: "iPhone 15 Pro", price: 9200, trust: 98, loop: 1, aiNote: "Garanterat skick" },
  ];

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease', padding: '0 20px 100px 20px' }}>
      
      {/* 1. IDENTITY & PULSE - Mer luft ovanför rubriken för "proffs-känsla" */}
      <header style={{ marginBottom: '30px', marginTop: '30px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 900, margin: 0, letterSpacing: '-1.5px' }}>
          UTFORSKA <span style={{ color: 'var(--neon-purple)' }}>VALVET</span>
        </h1>
        <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--neon-mint)', marginTop: '8px', letterSpacing: '1px' }}>
          {activePulse.toUpperCase()}
        </div>
      </header>

      {/* 2. SÖK - Renare kanter, mer likt Traderas enkla sökfält */}
      <div style={{ 
        background: 'rgba(255,255,255,0.04)', borderRadius: '16px', 
        padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px',
        border: '1px solid rgba(255,255,255,0.06)', marginBottom: '30px'
      }}>
        <span style={{ opacity: 0.3 }}>🔍</span>
        <input 
          type="text" placeholder="Sök i loopen..." 
          style={{ background: 'transparent', border: 'none', color: '#fff', flex: 1, outline: 'none', fontSize: '15px' }} 
        />
        <button 
          onClick={() => setIsListening(!isListening)}
          style={{ 
            background: isListening ? 'var(--neon-purple)' : 'transparent', 
            border: 'none', borderRadius: '10px', width: '32px', height: '32px', transition: '0.3s',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
          {isListening ? '🎙️' : '🎤'}
        </button>
      </div>

      {/* 3. SNABBSÄLJ - "Bannern" som känns som en premium-feature */}
      <div style={{ 
        padding: '24px', borderRadius: '24px', marginBottom: '35px', 
        border: '1px solid rgba(157, 78, 221, 0.2)', 
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1), rgba(2, 4, 10, 0))' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 900, margin: 0 }}>SNABBSÄLJ</h2>
            <p style={{ fontSize: '11px', opacity: 0.5, margin: '6px 0 0' }}>Hitta köpare direkt via AI</p>
          </div>
          <button 
            onClick={() => setIsAnalysing(!isAnalysing)}
            style={{ 
              background: '#fff', color: '#000', border: 'none', 
              padding: '10px 20px', fontSize: '11px', fontWeight: 900, 
              borderRadius: '12px', cursor: 'pointer' 
            }}>
            {isAnalysing ? 'AVBRYT' : 'STARTA'}
          </button>
        </div>
      </div>

      {isAnalysing && <LoadingAI />}

      {/* 4. KATEGORIER - Runda ikoner (Traderas stil) istället för fyrkantiga boxar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {categories.map((cat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '60px', height: '60px', background: 'rgba(255,255,255,0.03)', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', margin: '0 auto 10px', fontSize: '22px',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              {cat.i}
            </div>
            <span style={{ fontSize: '10px', fontWeight: 800, opacity: 0.5, letterSpacing: '0.5px' }}>{cat.n}</span>
          </div>
        ))}
      </div>

      {/* 5. FEED - Mer fokus på bilderna i FeedCardSell */}
      <h3 style={{ fontSize: '16px', fontWeight: 900, marginBottom: '20px', opacity: 0.9 }}>Rekommenderat</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <FeedCardSell {...item} />
            <div style={{ 
              marginTop: '10px', fontSize: '9px', color: 'var(--neon-purple)', 
              fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.8
            }}>
              <span>✨</span> {item.aiNote.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* 6. TRYGGHET */}
      <div style={{ 
        padding: '80px 20px', textAlign: 'center', opacity: 0.2,
        borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '40px' 
      }}>
        <p style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '2px' }}>
          GARANTERAD TRYGGHET VIA KARMA SHIELD • ESCROW AKTIVERAT
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
