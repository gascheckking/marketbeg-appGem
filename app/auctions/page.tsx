// // app/auctions/page.tsx
"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";

export default function Auctions() {
  const auctions = [
    { id: 1, name: "Rolex Submariner", bids: 24, time: "14:02", price: 82000, img: "⌚", hot: true },
    { id: 2, name: "Off-White Nike", bids: 12, time: "02:15", price: 4200, img: "👟", hot: false },
    { id: 3, name: "Hasselblad 500C", bids: 18, time: "00:45", price: 22500, img: "📷", hot: true }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0 }}>LIVE MATCH</h1>
          <p style={{ fontSize: '9px', fontWeight: 800, opacity: 0.5 }}>REALTIDS-BUDGIVNING</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '20px', background: 'rgba(255, 68, 68, 0.1)', border: '1px solid rgba(255, 68, 68, 0.2)' }}>
          <div className="pulse-dot"></div>
          <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '8px' }}>LIVE</span>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {auctions.map(a => (
          <div key={a.id} className="glass-card" style={{ 
            display: 'flex', gap: '12px', padding: '10px', 
            borderColor: a.hot ? 'rgba(255, 68, 68, 0.3)' : 'rgba(255,255,255,0.05)',
            background: a.hot ? 'linear-gradient(90deg, rgba(255,68,68,0.02), transparent)' : 'rgba(255,255,255,0.01)'
          }}>
            <div style={{ 
              width: '60px', height: '60px', background: '#000', borderRadius: '10px', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', 
              border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 
            }}>
              {a.img}
            </div>

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '8px' }}>⏳ {a.time}</span>
                <span style={{ fontSize: '8px', fontWeight: 800, opacity: 0.3 }}>{a.bids} BUD</span>
              </div>
              <h3 style={{ fontSize: '11px', fontWeight: 900, margin: '2px 0 6px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name.toUpperCase()}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <PriceTag price={a.price} size="xs" />
                <button className="primary-btn" style={{ 
                  width: 'auto', padding: '6px 12px', fontSize: '9px', fontWeight: 900,
                  background: a.hot ? '#ff4444' : 'var(--neon-purple)'
                }}>BUDA</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pulse-dot { width: 5px; height: 5px; background: #ff4444; border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 70% { transform: scale(2.5); opacity: 0; } 100% { transform: scale(1); opacity: 0; } }
      `}</style>
    </div>
  );
}
