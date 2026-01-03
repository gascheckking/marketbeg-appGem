"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";

export default function Auctions() {
  const auctions = [
    { id: 1, name: "Vintage Rolex Submariner", bids: 24, time: "14:02", price: 82000, img: "⌚", hot: true },
    { id: 2, name: "Off-White x Nike Dunk", bids: 12, time: "02:15", price: 4200, img: "👟", hot: false },
    { id: 3, name: "Hasselblad 500CM", bids: 18, time: "00:45", price: 22500, img: "📷", hot: true }
  ];

  return (
    <div className="page-wrapper">
      <div className="auction-header" style={{ 
        display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' 
      }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', fontWeight: 900, letterSpacing: '-3px', margin: 0 }}>Live Match</h1>
          <p className="muted" style={{ fontSize: '1.1rem', marginTop: '5px' }}>Budgivning i realtid med verifierat kapital.</p>
        </div>
        <div style={{ 
          alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '12px', 
          padding: '10px 16px', borderRadius: '14px', 
          border: '1px solid rgba(255, 68, 68, 0.2)', background: 'rgba(255, 68, 68, 0.03)'
        }}>
          <span className="pulse-dot"></span>
          <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '11px', letterSpacing: '1px' }}>PROTOCOL LIVE</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))', gap: '20px' }}>
        {auctions.map(a => (
          <div key={a.id} className="glass-card auction-card" style={{ 
            display: 'flex', gap: '20px', padding: '20px', position: 'relative',
            borderColor: a.hot ? 'rgba(255, 68, 68, 0.3)' : 'var(--border)',
            flexDirection: 'row'
          }}>
            <div style={{ 
              width: '100px', height: '100px', background: '#000', 
              borderRadius: '16px', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', fontSize: '40px', border: '1px solid var(--border)',
              flexShrink: 0
            }}>
              {a.img}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '12px' }}>⏳ {a.time}</span>
                <span className="muted" style={{ fontSize: '10px', fontWeight: 800 }}>{a.bids} BUD</span>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {a.name}
              </h3>
              <div style={{ marginBottom: '15px' }}>
                <PriceTag price={a.price} size="sm" />
              </div>
              <button className="primary-btn" style={{ 
                width: '100%', padding: '12px', fontSize: '11px', 
                background: a.hot ? '#ff4444' : 'var(--neon-purple)',
                boxShadow: a.hot ? '0 4px 15px rgba(255, 68, 68, 0.2)' : 'none'
              }}>
                LÄGG BUD
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pulse-dot { width: 8px; height: 8px; background-color: #ff4444; border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0); }
        }
        @media (min-width: 768px) {
          .auction-card { padding: 30px; gap: 30px; }
          .auction-card div:first-child { width: 140px; height: 140px; fontSize: 60px; }
        }
      `}</style>
    </div>
  );
}
