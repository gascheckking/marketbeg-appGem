"use client";
import { useState } from 'react';

const MOCK_ITEMS = [
  { id: 1, name: "MacBook Pro M2", price: "14.500 kr", match: 98, location: "Stockholm", img: "💻" },
  { id: 2, name: "iPhone 15 Pro", price: "9.200 kr", match: 85, location: "Oslo", img: "📱" },
  { id: 3, name: "Dyson V15", price: "4.100 kr", match: 72, location: "Köpenhamn", img: "🧹" },
];

export default function Feed() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900 }}>AI Match Feed</h2>
        <div className="pulse-banner" style={{ marginTop: '10px' }}>
          🤖 <span className="ai-text">PULSE:</span> Elektronik säljs 15% dyrare i Stockholm just nu.
        </div>
      </header>

      <div style={{ display: 'grid', gap: '15px' }}>
        {MOCK_ITEMS.map(item => (
          <div key={item.id} className="pay-card" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start',
            position: 'relative',
            padding: '25px',
            background: 'var(--glass)',
            border: item.match > 90 ? '1px solid var(--accent)' : '1px solid var(--border)'
          }}>
            {item.match > 90 && (
              <span style={{ 
                position: 'absolute', top: '15px', right: '15px', 
                background: 'var(--accent)', color: '#000', 
                padding: '4px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 900 
              }}>HIGH MATCH</span>
            )}
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%' }}>
              <span style={{ fontSize: '40px' }}>{item.img}</span>
              <div>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p className="muted" style={{ margin: 0 }}>{item.location} • {item.match}% match</p>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <strong style={{ fontSize: '1.2rem' }}>{item.price}</strong>
              </div>
            </div>
            
            <button className="primary-btn" style={{ 
              marginTop: '15px', width: '100%', padding: '12px', fontSize: '14px' 
            }} onClick={() => window.location.href='/checkout'}>VISA MATCH</button>
          </div>
        ))}
      </div>
    </div>
  );
}
