// // app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import FeedCardSell from '@/components/FeedCardSell';
import LoadingAI from '@/components/LoadingAI';

export default function Marketplace() {
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const categories = [
    { n: "FYND", i: "🏷️" }, { n: "KLÄDER", i: "👕" }, 
    { n: "TECH", i: "💻" }, { n: "NÄRA", i: "📍" }, 
    { n: "TREND", i: "🔥" }, { n: "VINTAGE", i: "💎" }
  ];

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease' }}>
      
      {/* LÅST SYSTEM-NAV (Under huvudmenyn) */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '10px 15px' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
             <button style={{ background: 'none', border: 'none', color: 'var(--neon-mint)', fontWeight: 900, fontSize: '10px' }}>HEM</button>
             <button style={{ background: 'none', border: 'none', color: '#555', fontWeight: 900, fontSize: '10px' }}>MATCH</button>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '5px 12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
             <span style={{ fontSize: '10px', fontWeight: 900, color: '#fff' }}>SALDO: 14 250 💰</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <header style={{ marginBottom: '20px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-1.5px' }}>
            UTFORSKA <span style={{ color: 'var(--neon-purple)' }}>VALVET</span>
          </h1>
          <p style={{ fontSize: '10px', opacity: 0.5, fontWeight: 800, textTransform: 'uppercase' }}>
            AI-sorterat efter likviditet och efterfrågan
          </p>
        </header>

        {/* SÖK MED RÖSTSTYRNING */}
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', borderRadius: '15px', 
          padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px',
          border: '1px solid rgba(255,255,255,0.05)', marginBottom: '25px'
        }}>
          <span>🔍</span>
          <input 
            type="text" placeholder="Sök objekt..." 
            style={{ background: 'transparent', border: 'none', color: '#fff', flex: 1, outline: 'none', fontSize: '14px' }} 
          />
          <button 
            onClick={() => setIsListening(!isListening)}
            style={{ background: isListening ? 'var(--neon-purple)' : 'transparent', border: 'none', borderRadius: '50%', width: '30px', height: '30px', transition: '0.3s' }}>
            {isListening ? '🎙️' : '🎤'}
          </button>
        </div>

        {/* SMALA, AVLANGA KATEGORIER (SLIPP SCROLL) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '8px', 
          marginBottom: '30px' 
        }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '12px 5px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span style={{ fontSize: '16px' }}>{cat.i}</span>
              <span style={{ fontSize: '8px', fontWeight: 900, opacity: 0.6 }}>{cat.n}</span>
            </div>
          ))}
        </div>

        {/* SNABBSÄLJ / AI AKTÖR */}
        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px', border: '1px solid rgba(157, 78, 221, 0.3)', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 900, margin: '0 0 5px 0' }}>SNABBSÄLJ</h2>
          <p style={{ fontSize: '9px', opacity: 0.5, marginBottom: '15px' }}>AI matchar dig direkt mot redo köpare</p>
          <button 
            onClick={() => setIsAnalysing(!isAnalysing)}
            className="primary-btn" 
            style={{ width: '100%', background: 'var(--neon-purple)', padding: '15px' }}>
            {isAnalysing ? 'ANALYSERAR...' : 'STARTA AI-MATCH'}
          </button>
        </div>

        {isAnalysing && <LoadingAI />}

        {/* FEED */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <FeedCardSell title="Vintage Tee" price={480} trust={92} />
          <FeedCardSell title="USB-C Hub" price={245} trust={95} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
