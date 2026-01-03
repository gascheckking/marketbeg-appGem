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
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>LIVE MATCH</h1>
          <p style={{ fontSize: '9px', opacity: 0.5, marginTop: '2px' }}>Verifierade bud i realtid.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(255, 68, 68, 0.1)', border: '1px solid rgba(255, 68, 68, 0.2)' }}>
          <span className="pulse-dot"></span>
          <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '8px' }}>LIVE</span>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {auctions.map(a => (
          <div key={a.id} className="glass-card" style={{ display: 'flex', gap: '12px', padding: '10px', borderColor: a.hot ? 'rgba(255, 68, 68, 0.3)' : 'var(--border)' }}>
            <div style={{ width: '60px', height: '60px', background: '#000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: '1px solid var(--border)', flexShrink: 0 }}>
              {a.img}
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '9px' }}>⏳ {a.time}</span>
                <span style={{ fontSize: '8px', fontWeight: 800, opacity: 0.4 }}>{a.bids} BUD</span>
              </div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: '2px 0' }}>{a.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <PriceTag price={a.price} size="sm" />
                <button className="primary-btn" style={{ width: 'auto', padding: '5px 12px', fontSize: '9px', background: a.hot ? '#ff4444' : 'var(--neon-purple)', color: '#fff' }}>BUDA</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pulse-dot { width: 5px; height: 5px; background: #ff4444; border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(0.95); opacity: 1; } 70% { transform: scale(1.5); opacity: 0; } 100% { transform: scale(0.95); opacity: 0; } }
      `}</style>
    </div>
  );
}
