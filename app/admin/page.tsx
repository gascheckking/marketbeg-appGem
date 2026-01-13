// // app/admin/page.tsx
"use client";
import React from 'react';

export default function AdminPage() {
  const stats = [
    { label: "Aktiva Loops", val: "1,240" },
    { label: "CO2 Sparat (Totalt)", val: "14,2 ton" },
    { label: "Karma Trust Avg", val: "94%" }
  ];

  return (
    <div style={{ padding: '20px', background: '#000' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '24px' }}>Karma Node Control</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {stats.map(s => (
          <div key={s.label} className="karma-card">
            <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.5 }}>{s.label}</div>
            <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--karma-green)' }}>{s.val}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }} className="karma-card">
        <h3 style={{ fontSize: '14px', fontWeight: 900 }}>Systemlogg</h3>
        <div style={{ fontSize: '11px', color: '#b3b3b3', marginTop: '10px' }}>
          • AI_CLUSTER_SYNC: 11 objekt i Stockholm Hub<br/>
          • BANKID_VERIFY: OK
        </div>
      </div>
    </div>
  );
}
