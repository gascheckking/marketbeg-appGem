// // app/wanted/page.tsx
"use client";
import React from 'react';

export default function WantedPage() {
  const requests = [
    { id: 1, item: "Barnjacka stl 92", user: "Anna", urgency: "HÖG" },
    { id: 2, item: "iPhone 13-14", user: "Erik", urgency: "MEDIUM" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '20px' }}>Efterlyst</h1>
      <p style={{ fontSize: '13px', color: '#b3b3b3', marginBottom: '25px' }}>Svara på en efterlysning för att tjäna dubbla Karma Trust-poäng.</p>
      
      {requests.map(req => (
        <div key={req.id} className="karma-card" style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 800 }}>{req.item}</div>
            <div style={{ fontSize: '10px', opacity: 0.6 }}>EFTERLYST AV {req.user}</div>
          </div>
          <button className="pill-btn" style={{ padding: '6px 12px', fontSize: '11px' }}>ERBJUD</button>
        </div>
      ))}
    </div>
  );
}
