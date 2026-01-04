// // app/shipments/page.tsx
"use client";
import React from 'react';

export default function ShipmentsPage() {
  const shipments = [
    { id: "TRK-001", item: "iPhone 15 Pro", status: "I TRANSPORT", color: 'var(--neon-purple)' },
    { id: "TRK-002", item: "AirPods Max", status: "MOTTAGEN", color: 'var(--neon-mint)' }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>Sändningar</h1>
      </header>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {shipments.map(s => (
          <div key={s.id} className="glass-card" style={{ padding: '15px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800 }}>{s.item}</div>
              <div style={{ fontSize: '9px', opacity: 0.4 }}>REF: {s.id}</div>
            </div>
            <div style={{ fontSize: '9px', fontWeight: 900, color: s.color }}>{s.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
