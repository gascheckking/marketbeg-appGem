// // app/rewards/page.tsx
"use client";
import React from 'react';

export default function RewardsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900 }}>Dina Förmåner</h1>
      <div style={{ marginTop: '20px' }} className="karma-card">
        <div style={{ fontSize: '12px', color: 'var(--karma-green)', fontWeight: 900 }}>NÄSTA NIVÅ</div>
        <div style={{ fontSize: '18px', fontWeight: 900 }}>FRI FRAKT I 30 DAGAR</div>
        <div style={{ width: '100%', height: '4px', background: '#282828', marginTop: '10px', borderRadius: '2px' }}>
          <div style={{ width: '70%', height: '100%', background: 'var(--karma-green)', borderRadius: '2px' }} />
        </div>
      </div>
    </div>
  );
}
