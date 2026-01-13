// // app/dispute/page.tsx
"use client";
import React from 'react';

export default function DisputePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 900 }}>Rapportera Avvikelse</h1>
      <p style={{ color: '#b3b3b3', fontSize: '13px', marginTop: '10px' }}>Objektet matchar inte AI-beskrivningen?</p>
      
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {['Skadat objekt', 'Fel storlek', 'Annat'].map(opt => (
          <button key={opt} className="karma-card" style={{ textAlign: 'left', border: '1px solid #282828' }}>
            {opt}
          </button>
        ))}
      </div>
      <button className="pill-btn" style={{ width: '100%', marginTop: '40px' }}>ÖPPNA ÄRENDE</button>
    </div>
  );
}
