// // app/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from '@/components/FeedCardSell';
import LoadingAI from '@/components/LoadingAI';

export default function Marketplace() {
  const [itemCount, setItemCount] = useState(100);
  const [cartCount, setCartCount] = useState(0);
  const [isAnalysing, setIsAnalysing] = useState(false);

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
    <div className="page-wrapper">
      
      {/* HEADER-BLOCK (Sticky för app-känsla) */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 10, 
        background: 'rgba(2, 4, 10, 0.95)', 
        backdropFilter: 'blur(10px)',
        padding: '20px 20px 10px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* SNABBSÄLJ KONTROLL */}
        <div className="glass-card" style={{ padding: '15px', borderRadius: '20px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 900, margin: 0 }}>SNABBSÄLJ</h2>
              <input 
                type="range" min="1" max="100" value={itemCount} 
                onChange={(e) => setItemCount(parseInt(e.target.value))}
                className="karma-slider"
              />
            </div>
            <button 
              onClick={() => setIsAnalysing(!isAnalysing)}
              className="primary-btn" 
              style={{ 
                width: 'auto', padding: '10px 15px', background: 'var(--neon-purple)', 
                color: '#fff', borderRadius: '10px', fontSize: '9px' 
              }}>
              {isAnalysing ? 'AVBRYT' : 'STARTA AI'}
            </button>
          </div>
        </div>

        {/* AI-KALIBRERING */}
        {isAnalysing && (
          <div style={{ marginBottom: '15px', background: 'rgba(157, 78, 221, 0.05)', borderRadius: '15px', border: '1px solid var(--neon-purple)', overflow: 'hidden' }}>
            <LoadingAI />
          </div>
        )}

        {/* TABS */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
          {categories.map((cat, i) => (
            <button key={i} style={{
              whiteSpace: 'nowrap', padding: '8px 14px', borderRadius: '20px',
              border: '1px solid #333', background: i === 0 ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.03)',
              color: i === 0 ? 'var(--neon-mint)' : '#888', fontSize: '9px', fontWeight: 900
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '15px' }}>
        {/* BUNDLE-MÄTARE */}
        <div style={{ 
          background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.1)', 
          borderRadius: '12px', padding: '12px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{ fontSize: '10px', fontWeight: 900 }}>
            📦 BUNDLE: <span style={{ color: 'var(--neon-mint)' }}>{calculateShipping()} KR FRAKT</span>
          </div>
          <div style={{ fontSize: '9px', opacity: 0.5, fontWeight: 700 }}>
            {cartCount < 5 ? `LÄGG TILL ${5 - cartCount} TILL` : 'MÄSTARE!'}
          </div>
        </div>

        {/* GRID KONTROLLER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
             <select className="mini-select">
                <option>KATEGORI: ALLA</option>
                <option>ELEKTRONIK</option>
             </select>
             <select className="mini-select">
                <option>UNISEX</option>
             </select>
          </div>
          <div 
            onClick={() => setCartCount(prev => prev + 1)}
            style={{ position: 'relative', fontSize: '20px', cursor: 'pointer' }}
          >
            🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>

        {/* RUTNÄT 3-I-BREDD */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {[...items, ...items, ...items].map((item, i) => (
            <FeedCardSell key={i} {...item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .karma-slider { width: 100%; margin-top: 10px; accent-color: var(--neon-purple); height: 4px; border-radius: 2px; }
        .mini-select { background: #111; border: 1px solid #222; color: #888; font-size: 9px; padding: 6px 10px; border-radius: 8px; font-weight: 800; }
        .cart-badge { position: absolute; top: -5px; right: -5px; background: var(--neon-mint); color: #000; font-size: 8px; padding: 2px 5px; border-radius: 50%; font-weight: 900; }
      `}</style>
    </div>
  );
}
