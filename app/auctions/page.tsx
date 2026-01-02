"use client";
import React from 'react';

export default function Auctions() {
  const auctions = [
    { id: 1, name: "Vintage Rolex Submariner", bids: 24, time: "14:02", price: "82 000 kr", img: "⌚", hot: true },
    { id: 2, name: "Off-White x Nike Dunk", bids: 12, time: "02:15", price: "4 200 kr", img: "👟", hot: false },
    { id: 3, name: "Hasselblad 500CM", bids: 18, time: "00:45", price: "22 500 kr", img: "📷", hot: true }
  ];

  return (
    <div className="page-wrapper">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px', margin: 0 }}>Live Auktioner</h1>
          <p className="muted" style={{ fontSize: '1.1rem' }}>Budgivning i realtid med verifierade säljare.</p>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          padding: '12px 20px', 
          borderRadius: '12px', 
          border: '1px solid rgba(255, 68, 68, 0.3)',
          background: 'rgba(255, 68, 68, 0.05)'
        }}>
          <span className="pulse-dot"></span>
          <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '12px', letterSpacing: '1px' }}>LIVE MATCHING ACTIVE</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '30px' }}>
        {auctions.map(a => (
          <div key={a.id} className="glass-card" style={{ 
            display: 'flex', 
            gap: '25px', 
            padding: '25px',
            position: 'relative',
            borderColor: a.hot ? 'rgba(255, 68, 68, 0.2)' : 'var(--border)'
          }}>
            {a.hot && (
              <div style={{ 
                position: 'absolute', top: '-12px', right: '20px', 
                background: '#ff4444', color: '#fff', padding: '4px 12px', 
                borderRadius: '8px', fontSize: '10px', fontWeight: 900 
              }}>HET JUST NU</div>
            )}

            <div style={{ 
              width: '140px', height: '140px', background: '#050505', 
              borderRadius: '20px', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', fontSize: '60px', border: '1px solid var(--border)'
            }}>
              {a.img}
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '13px' }}>⏳ {a.time}</span>
                <span className="muted" style={{ fontSize: '12px', fontWeight: 700 }}>{a.bids} BUD</span>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.4rem', fontWeight: 800 }}>{a.name}</h3>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff' }}>{a.price}</div>
              
              <button className="primary-btn" style={{ 
                marginTop: '15px', 
                padding: '12px', 
                fontSize: '12px', 
                background: a.hot ? '#ff4444' : 'var(--neon-purple)' 
              }}>
                LÄGG BUD DIREKT
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: #ff4444;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0); }
        }
      `}</style>
    </div>
  );
}
