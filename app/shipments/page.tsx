// // app/shipments/page.tsx
"use client";
import React from 'react';

export default function ShipmentsPage() {
  const shipments = [
    { id: "TRK-001", item: "iPhone 15 Pro", status: "I TRANSPORT", color: 'var(--karma-green)', step: '75%' },
    { id: "TRK-002", item: "AirPods Max", status: "MOTTAGEN", color: 'var(--karma-green)', step: '100%' }
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: "25px" }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>SÄNDNINGAR</h1>
        <p className="text-small" style={{ opacity: 0.4 }}>REALTIDSSPORRNING VIA KARMA LOGISTICS</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {shipments.map(s => (
          <div key={s.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 900 }}>{s.item}</div>
                <div style={{ fontSize: '9px', opacity: 0.4, fontWeight: 700 }}>ID: {s.id}</div>
              </div>
              <div style={{ fontSize: '9px', fontWeight: 900, color: s.color, background: 'rgba(29,185,84,0.1)', padding: '4px 10px', borderRadius: '8px' }}>
                {s.status}
              </div>
            </div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ width: s.step, height: '100%', background: s.color, boxShadow: `0 0 15px ${s.color}66` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
