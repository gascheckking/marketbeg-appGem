// // app/auctions/page.tsx
"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";

export default function Auctions() {
  const auctions = [
    { id: 1, name: "Rolex Submariner", bids: 24, time: "14:02", price: 82000, img: "⌚", hot: true },
    { id: 2, name: "Off-White Nike Dunk", bids: 12, time: "02:15", price: 4200, img: "👟", hot: false },
    { id: 3, name: "Hasselblad 500CM", bids: 18, time: "00:45", price: 22500, img: "📷", hot: true }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>LIVE MATCH</h1>
          <p className="muted" style={{ fontSize: '10px', fontWeight: 700 }}>REALTIDS-BUDGIVNING</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '12px', background: 'rgba(255, 68, 68, 0.1)', border: '1px solid rgba(255, 68, 68, 0.2)' }}>
          <div className="pulse-dot"></div>
          <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '10px', letterSpacing: '1px' }}>LIVE</span>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {auctions.map(a => (
          <div key={a.id} className="glass-card" style={{ 
            display: 'flex', gap: '15px', padding: '12px', 
            borderColor: a.hot ? 'rgba(255, 68, 68, 0.4)' : 'rgba(255,255,255,0.05)',
            background: a.hot ? 'linear-gradient(90deg, rgba(255,68,68,0.03), transparent)' : 'var(--glass)'
          }}>
            <div style={{ 
              width: '70px', height: '70px', background: '#000', borderRadius: '14px', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', 
              border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 
            }}>
              {a.img}
            </div>

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '10px' }}>⏳ {a.time} KVAR</span>
                <span style={{ fontSize: '10px', fontWeight: 800, opacity: 0.4 }}>{a.bids} BUD</span>
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: 900, margin: '0 0 8px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name.toUpperCase()}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <PriceTag price={a.price} size="sm" />
                <button className="primary-btn" style={{ 
                  width: 'auto', padding: '8px 16px', fontSize: '10px', 
                  background: a.hot ? '#ff4444' : 'var(--neon-purple)', 
                  boxShadow: a.hot ? '0 0 15px rgba(255,68,68,0.3)' : 'none'
                }}>BUDA</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pulse-dot { width: 6px; height: 6px; background: #ff4444; border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 70% { transform: scale(2.5); opacity: 0; } 100% { transform: scale(1); opacity: 0; } }
      `}</style>
    </div>
  );
}
