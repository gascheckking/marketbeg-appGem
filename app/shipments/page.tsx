"use client";
import React from 'react';

export default function ShipmentsPage() {
  const activeShipments = [
    { id: "TRK-001", item: "iPhone 15 Pro", status: "I TRANSPORT", date: "Idag 14:00" },
    { id: "TRK-002", item: "AirPods Max", status: "BEKRÄFTAD", date: "Igår" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.2rem', fontWeight: 900 }}>SÄNDNINGAR</h1>
        <p style={{ fontSize: '9px', opacity: 0.5 }}>SPÅRA DIN LIKVIDITET I REALTID</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {activeShipments.map(s => (
          <div key={s.id} className="glass-card" style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800 }}>{s.item}</div>
              <div style={{ fontSize: '8px', opacity: 0.4 }}>REF: {s.id} • {s.date}</div>
            </div>
            <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-purple)' }}>{s.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
