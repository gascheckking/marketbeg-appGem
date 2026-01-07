// // app/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from '@/components/FeedCardSell';

export default function Marketplace() {
  const [isAnalysing, setIsAnalysing] = useState(false);

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease' }}>
      
      {/* ZON 1: HANDLING (Above the fold) */}
      <section style={{ padding: '40px 20px 60px' }}>
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, margin: 0, letterSpacing: '-2px', lineHeight: 1 }}>
            Sälj snabbt
          </h1>
          <p style={{ fontSize: '14px', opacity: 0.5, marginTop: '12px', fontWeight: 600 }}>
            AI matchar dig direkt mot redo köpare.<br/>Ingen annonsering krävs.
          </p>
        </header>

        <button 
          onClick={() => setIsAnalysing(!isAnalysing)}
          className="primary-btn"
          style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
        >
          {isAnalysing ? 'ANALYSERAR...' : 'STARTA SNABBSÄLJ'}
        </button>
        
        <div style={{ textAlign: 'center', marginTop: '20px', opacity: 0.3 }}>
          <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>FOTA → VI SKÖTER RESTEN</span>
        </div>
      </section>

      {/* ZON 2: UTFORSKNING (Scroll) */}
      <section style={{ 
        background: 'rgba(255,255,255,0.01)', 
        borderRadius: '40px 40px 0 0', 
        padding: '40px 20px',
        borderTop: '1px solid rgba(255,255,255,0.03)'
      }}>
        {/* Kategorier - Rensat till 3 stycken */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '40px' }}>
          {['TECH', 'MODE', 'VINTAGE'].map((cat) => (
            <div key={cat} style={{ textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', margin: '0 auto 10px', border: '1px solid rgba(255,255,255,0.05)' }} />
              <span style={{ fontSize: '9px', fontWeight: 900, opacity: 0.4 }}>{cat}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '20px' }}>Utforska Valvet</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {/* Här loopar du dina FeedCardSell men utan badges och röriga overlays */}
        </div>

        {/* TRYGGHETSRAD (Längst ner) */}
        <div style={{ marginTop: '60px', textAlign: 'center', opacity: 0.2 }}>
           <p style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px' }}>SKYDDAD VIA KARMA SHIELD • ESCROW</p>
        </div>
      </section>
    </div>
  );
}
