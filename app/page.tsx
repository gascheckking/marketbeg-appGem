// --- app/page.tsx ---
"use client";
import React, { useState } from 'react';
import FeedCardSell from '@/components/FeedCardSell';

export default function Marketplace() {
  const [itemCount, setItemCount] = useState(100);
  const categories = ["FYND 5-500:-", "KLÄDER 500-2000:-", "ELEKTRONIK 2K+", "VINTAGE"];
  
  const items = Array(12).fill({
    id: "1", title: "Vintage Tee", price: 48, trust: 90
  });

  return (
    <div className="page-wrapper" style={{ padding: '10px' }}>
      {/* SNABBSÄJJ KONTROLL */}
      <div className="glass-card" style={{ padding: '20px', borderRadius: '24px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          <button className="primary-btn" style={{ width: 'auto', padding: '15px 20px', marginLeft: '20px', background: 'var(--neon-purple)' }}>
            STARTA AI-KAMERA
          </button>
        </div>
      </div>

      {/* HORISONTELLA TABS */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '15px', scrollbarWidth: 'none' }}>
        {categories.map((cat, i) => (
          <button key={i} style={{
            whiteSpace: 'nowrap', padding: '8px 16px', borderRadius: '20px',
            border: '1px solid #333', background: i === 0 ? 'rgba(0,255,136,0.1)' : 'transparent',
            color: i === 0 ? 'var(--neon-mint)' : '#888', fontSize: '9px', fontWeight: 900
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* GRID KONTROLLER (Rullgardin/Filter) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <div style={{ display: 'flex', gap: '5px' }}>
           <select style={{ background: 'transparent', border: '1px solid #222', color: '#888', fontSize: '8px', padding: '5px', borderRadius: '5px' }}>
              <option>ALLA KATEGORIER</option>
              <option>BARN</option>
              <option>UNISEX</option>
           </select>
        </div>
        <div style={{ fontSize: '18px', cursor: 'pointer' }}>🛒</div>
      </div>

      {/* DET KOMPAKTA RUTNÄTET */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '8px' 
      }}>
        {items.map((item, i) => (
          <FeedCardSell key={i} {...item} />
        ))}
      </div>

      <style jsx>{`
        .karma-slider {
          width: 100%; margin-top: 10px; accent-color: var(--neon-purple);
          height: 4px; border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
