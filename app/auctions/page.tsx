// // app/auctions/page.tsx
"use client";
import React from 'react';

export default function Auctions() {
  const auctions = [
    { id: 1, name: "Rolex Submariner", price: 82000, img: "⌚", hot: true, buyers: 14 },
    { id: 2, name: "Off-White Nike", price: 4200, img: "👟", hot: false, buyers: 8 },
    { id: 3, name: "Hasselblad 500C", price: 22500, img: "📷", hot: true, buyers: 12 }
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-2px' }}>Live Matches</h1>
          <p style={{ fontSize: '11px', fontWeight: 900, color: 'var(--karma-green)' }}>DIREKTA BUD I REALTID</p>
        </div>
        <div style={{ padding: '6px 14px', background: 'rgba(255,68,68,0.1)', borderRadius: '20px', border: '1px solid rgba(255,68,68,0.2)' }}>
          <span style={{ color: '#ff4444', fontSize: '10px', fontWeight: 900 }}>LIVE</span>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {auctions.map(a => (
          <div key={a.id} className="card" style={{ 
            display: 'flex', gap: '20px', alignItems: 'center',
            border: a.hot ? '1px solid rgba(29, 185, 84, 0.2)' : '1px solid var(--border)'
          }}>
            <div style={{ width: '80px', height: '80px', background: '#000', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '35px' }}>
              {a.img}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--karma-green)' }}>{a.buyers} KÖPARE REDO</span>
                <span style={{ fontSize: '9px', opacity: 0.3 }}>ID: 0{a.id}</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 900, margin: '0 0 12px 0', letterSpacing: '0.5px' }}>{a.name.toUpperCase()}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: 900 }}>{a.price.toLocaleString()}:-</span>
                <button className="primary-btn" style={{ width: 'auto', padding: '10px 20px', fontSize: '11px' }}>BUDA</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
