// // app/impact/page.tsx
"use client";
import React from 'react';

export default function ImpactPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ marginTop: '40px', fontSize: '60px' }}>🌍</div>
      <h1 style={{ fontSize: '32px', fontWeight: 900, marginTop: '20px' }}>Din Karma Impact</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '40px' }}>
        <div className="karma-card">
          <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--karma-green)' }}>42kg</div>
          <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.5 }}>CO2 SPARAT</div>
        </div>
        <div className="karma-card">
          <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--karma-green)' }}>12k L</div>
          <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.5 }}>VATTEN SPARAT</div>
        </div>
      </div>
    </div>
  );
}
