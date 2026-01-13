// // app/shipments/page.tsx
"use client";
import React from 'react';

export default function ShipmentsPage() {
  const shipments = [
    { id: '1', status: 'HÄMTAS', item: 'Nike Air', location: 'Box 412' },
    { id: '2', status: 'SKICKAD', item: 'Barnjacka', location: 'PostNord' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '24px' }}>Frakt & Paket</h1>
      {shipments.map(s => (
        <div key={s.id} className="karma-card" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: '24px' }}>📦</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: 800 }}>{s.item}</div>
            <div style={{ fontSize: '11px', color: 'var(--karma-green)', fontWeight: 900 }}>{s.status}</div>
          </div>
          <div style={{ fontSize: '11px', opacity: 0.5 }}>{s.location}</div>
        </div>
      ))}
    </div>
  );
}
