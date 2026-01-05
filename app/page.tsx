// // app/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from '@/components/FeedCardSell';
import LoadingAI from '@/components/LoadingAI'; // Se till att denna är importerad!

export default function Marketplace() {
  const [itemCount, setItemCount] = useState(100);
  const [cartCount, setCartCount] = useState(0);
  const [isAnalysing, setIsAnalysing] = useState(false); // Ny state för triggern

  const calculateShipping = () => {
    if (cartCount === 0) return 49;
    if (cartCount < 3) return 39;
    if (cartCount < 5) return 29;
    return 19;
  };

  const categories = ["FYND 5-500:-", "KLÄDER 500-2000:-", "ELEKTRONIK 2K+", "VINTAGE"];
  
  const items = [
    { id: "1", title: "Vintage Tee", price: 48, trust: 90 },
    { id: "2", title: "USB-C Hub", price: 45, trust: 95 },
    { id: "3", title: "AirPods Max", price: 90, trust: 80 },
    { id: "4", title: "iPhone 15 Pro", price: 12, trust: 98 },
    { id: "5", title: "E-Leksak", price: 59, trust: 85 },
    { id: "6", title: "Stone Island", price: 850, trust: 92 },
  ];

  return (
    <div className="page-wrapper" style={{ padding: '20px' }}>
      
      {/* 1. AI-KALIBRERING (Högst upp så den inte döljs) */}
      {isAnalysing && (
        <div style={{ 
          marginBottom: '20px', 
          background: 'rgba(157, 78, 221, 0.1)', 
          borderRadius: '24px', 
          border: '1px solid var(--neon-purple)',
          overflow: 'hidden',
          animation: 'slideIn 0.4s ease-out'
        }}>
          <LoadingAI />
        </div>
      )}

      {/* 2. SNABBSÄLJ KONTROLL */}
      <div className="glass-card" style={{ padding: '20px', borderRadius: '24px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0 }}>SNABBSÄLJ OBJEKT</h2>
            <div style={{ marginTop: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 900, opacity: 0.6 }}>
                <span>Antal Föremål</span>
                <span>{itemCount}</span>
              </div>
              <input 
                type="range" min="1" max="100" value={itemCount} 
                onChange={(e) => setItemCount(parseInt(e.target.value))}
                className="karma-slider"
              />
            </div>
          </div>
          <button 
            onClick={() => setIsAnalysing(!isAnalysing)} // Trigga AI-rutan
            className="primary-btn" 
            style={{ 
              width: 'auto', padding: '15px 20px', background: 'var(--neon-purple)', 
              color: '#fff', borderRadius: '12px' 
            }}>
            {isAnalysing ? 'AVBRYT' : 'STARTA AI'}
          </button>
        </div>
      </div>

      {/* 3. HORISONTELLA TABS */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '15px', scrollbarWidth: 'none' }}>
        {categories.map((cat, i) => (
          <button key={i} style={{
            whiteSpace: 'nowrap', padding: '10px 18px', borderRadius: '30px',
            border: '1px solid #333', background: i === 0 ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.03)',
            color: i === 0 ? 'var(--neon-mint)' : '#888', fontSize: '10px', fontWeight: 900
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* ... resten av din grid-kod (BUNDLE-MÄTARE etc) är kvar oförändrad ... */}
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '8px' 
      }}>
        {[...items, ...items].map((item, i) => (
          <FeedCardSell key={i} {...item} />
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .karma-slider { width: 100%; margin-top: 10px; accent-color: var(--neon-purple); height: 4px; border-radius: 2px; }
      `}</style>
    </div>
  );
}
