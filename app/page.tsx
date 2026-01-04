// --- app/page.tsx ---
"use client";
import React, { useState } from 'react';
import FeedCardSell from '@/components/FeedCardSell';

export default function Marketplace() {
  const [itemCount, setItemCount] = useState(100);
  const [cartCount, setCartCount] = useState(0);

  // Bundle-logik för frakt
  const calculateShipping = () => {
    if (cartCount === 0) return 49;
    if (cartCount < 3) return 39;
    if (cartCount < 5) return 29;
    return 19;
  };

  const categories = ["FYND 5-500:-", "KLÄDER 500-2000:-", "ELEKTRONIK 2K+", "VINTAGE"];
  
  // Demo-data anpassad för bilden
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
      {/* SNABBSÄJJ KONTROLL - Slider 1-100 */}
      <div className="glass-card" style={{ padding: '20px', borderRadius: '24px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0 }}>SNABBSÄJJ OBJEKT</h2>
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
          <button className="primary-btn" style={{ 
            width: 'auto', padding: '15px 20px', background: 'var(--neon-purple)', 
            color: '#fff', borderRadius: '12px' 
          }}>
            STARTA AI-KAMERA
          </button>
        </div>
      </div>

      {/* HORISONTELLA TABS */}
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

      {/* BUNDLE-MÄTARE */}
      <div style={{ 
        background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.1)', 
        borderRadius: '12px', padding: '12px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ fontSize: '10px', fontWeight: 900 }}>
          📦 BUNDLE: <span style={{ color: 'var(--neon-mint)' }}>{calculateShipping()} KR FRAKT</span>
        </div>
        <div style={{ fontSize: '9px', opacity: 0.5, fontWeight: 700 }}>
          {cartCount < 5 ? `LÄGG TILL ${5 - cartCount} TILL FÖR 19:-` : 'LÄGSTA FRAKT UPPNÅDD!'}
        </div>
      </div>

      {/* GRID KONTROLLER (Rullgardiner/Filter) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
           <select className="mini-select">
              <option>KATEGORI: ALLA</option>
              <option>ELEKTRONIK</option>
              <option>SAMLAROBJEKT</option>
           </select>
           <select className="mini-select">
              <option>UNISEX</option>
              <option>BARN</option>
              <option>KVINNA</option>
              <option>MAN</option>
           </select>
        </div>
        <div 
          onClick={() => setCartCount(prev => prev + 1)}
          style={{ position: 'relative', fontSize: '20px', cursor: 'pointer' }}
        >
          🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>

      {/* DET KOMPAKTA RUTNÄTET (3 i bredd) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '8px' 
      }}>
        {[...items, ...items, ...items].map((item, i) => (
          <FeedCardSell key={i} {...item} />
        ))}
      </div>

      <style jsx>{`
        .karma-slider {
          width: 100%; margin-top: 10px; accent-color: var(--neon-purple);
          height: 4px; border-radius: 2px;
        }
        .mini-select {
          background: #111; border: 1px solid #222; color: #888; 
          font-size: 9px; padding: 6px 12px; border-radius: 8px; font-weight: 800;
        }
        .cart-badge {
          position: absolute; top: -5px; right: -5px; background: var(--neon-mint);
          color: #000; font-size: 8px; padding: 2px 5px; border-radius: 50%; font-weight: 900;
        }
      `}</style>
    </div>
  );
}
