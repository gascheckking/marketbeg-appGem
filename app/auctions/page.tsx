"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";

/**
 * Live Match-vyn. 
 * Optimerad för informationstäthet likt eBay/Amazon men med KARMA-estetik.
 */
export default function Auctions() {
  const auctions = [
    { id: 1, name: "Vintage Rolex Submariner", bids: 24, time: "14:02", price: 82000, img: "⌚", hot: true },
    { id: 2, name: "Off-White x Nike Dunk", bids: 12, time: "02:15", price: 4200, img: "👟", hot: false },
    { id: 3, name: "Hasselblad 500CM", bids: 18, time: "00:45", price: 22500, img: "📷", hot: true }
  ];

  return (
    <div className="page-wrapper">
      <div className="auction-header" style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>Live Match</h1>
            <p className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>Verifierad budgivning i realtid.</p>
          </div>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '8px', 
            padding: '8px 12px', borderRadius: '10px', 
            border: '1px solid rgba(255, 68, 68, 0.2)', background: 'rgba(255, 68, 68, 0.05)'
          }}>
            <span className="pulse-dot"></span>
            <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '9px', letterSpacing: '1px' }}>LIVE</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {auctions.map(a => (
          <div key={a.id} className="glass-card" style={{ 
            display: 'flex', gap: '16px', padding: '16px',
            borderColor: a.hot ? 'rgba(255, 68, 68, 0.2)' : 'var(--border)',
          }}>
            {/* Bild-area likt Vinted/Marketplace */}
            <div style={{ 
              width: '90px', height: '90px', background: '#000', 
              borderRadius: '12px', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', fontSize: '32px', border: '1px solid var(--border)',
              flexShrink: 0
            }}>
              {a.img}
            </div>

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ color: '#ff4444', fontWeight: 900, fontSize: '11px' }}>⏳ {a.time}</span>
                  <span className="muted" style={{ fontSize: '9px', fontWeight: 800 }}>{a.bids} BUD</span>
                </div>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {a.name}
                </h3>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                <PriceTag price={a.price} size="sm" />
                <button className="primary-btn" style={{ 
                  width: 'auto', padding: '8px 16px', fontSize: '10px', 
                  background: a.hot ? '#ff4444' : 'var(--neon-purple)',
                  borderRadius: '8px'
                }}>
                  BUDA
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pulse-dot { width: 6px; height: 6px; background-color: #ff4444; border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 68, 68, 0); }
        }
      `}</style>
    </div>
  );
}
