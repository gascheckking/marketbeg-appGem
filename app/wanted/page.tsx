"use client";
import React from 'react';

export default function WantedPage() {
  const requests = [
    { id: 1, item: "PoP Mössa", size: "74/80", price: "150:-", user: "Elin92" },
    { id: 2, item: "Moncler Väst", size: "L", price: "4500:-", user: "Alex_K" },
    { id: 3, item: "Dyson V15", size: "N/A", price: "3800:-", user: "TechLover" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.2rem', fontWeight: 900 }}>EFTERSÖKT</h1>
        <p style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 800 }}>MATCHA DERAS BEHOV DIREKT</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {requests.map(req => (
          <div key={req.id} className="glass-card" style={{ padding: '15px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 800 }}>{req.item}</div>
                <div style={{ fontSize: '9px', opacity: 0.5 }}>STORLEK: {req.size} • BUDGET: {req.price}</div>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)' }}>@{req.user}</div>
            </div>
            
            <button className="primary-btn" style={{ 
              background: 'var(--neon-mint)', color: '#000', fontSize: '9px', padding: '10px' 
            }}>
              JAG HAR DENNA – FOTA & SKICKA MATCH
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
