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
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1px' }}>Live Matches</h1>
          <p style={{ fontSize: '11px', fontWeight: 800, color: '#1DB954' }}>DIREKTA BUD JUST NU</p>
        </div>
        <div style={{ padding: '5px 12px', background: '#ff444415', borderRadius: '20px', border: '1px solid #ff444433' }}>
          <span style={{ color: '#ff4444', fontSize: '9px', fontWeight: 900 }}>LIVE</span>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {auctions.map(a => (
          <div key={a.id} style={{ 
            background: '#111', borderRadius: '24px', padding: '15px',
            display: 'flex', gap: '15px', alignItems: 'center',
            border: a.hot ? '1px solid #1DB95433' : '1px solid #111'
          }}>
            <div style={{ width: '70px', height: '70px', background: '#000', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>
              {a.img}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '9px', fontWeight: 900, color: '#1DB954' }}>{a.buyers} KÖPARE REDO</span>
                <span style={{ fontSize: '9px', opacity: 0.3 }}>ID: 0{a.id}</span>
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: 900, margin: '0 0 10px 0' }}>{a.name.toUpperCase()}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: 900 }}>{a.price.toLocaleString()}:-</span>
                <button style={{ background: '#fff', color: '#000', border: 'none', padding: '8px 16px', borderRadius: '12px', fontSize: '11px', fontWeight: 900 }}>BUDA</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
