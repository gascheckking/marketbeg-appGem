// // app/shipments/page.tsx
"use client";
import React from 'react';

export default function ShipmentsPage() {
  const shipments = [
    { id: "TRK-001", item: "iPhone 15 Pro", status: "I TRANSPORT", color: 'var(--neon-purple)', step: '75%' },
    { id: "TRK-002", item: "AirPods Max", status: "MOTTAGEN", color: 'var(--neon-mint)', step: '100%' }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>SÄNDNINGAR</h1>
        <p style={{ fontSize: '8px', opacity: 0.5 }}>REALTIDSSPORRNING VIA KARMA LOGISTICS</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {shipments.map(s => (
          <div key={s.id} className="glass-card" style={{ padding: '12px 15px', borderRadius: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 900 }}>{s.item}</div>
                <div style={{ fontSize: '8px', opacity: 0.4 }}>ID: {s.id}</div>
              </div>
              <div style={{ fontSize: '8px', fontWeight: 900, color: s.color }}>{s.status}</div>
            </div>
            <div style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ width: s.step, height: '100%', background: s.color, boxShadow: `0 0 10px ${s.color}` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
