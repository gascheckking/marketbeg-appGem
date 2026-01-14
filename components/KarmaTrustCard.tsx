// // components/KarmaTrustCard.tsx
"use client";
import React from 'react';

export default function KarmaTrustCard({ score = 98 }) {
  return (
    <div style={{ 
      background: '#121212', borderRadius: '12px', padding: '20px',
      borderLeft: '4px solid var(--karma-green)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.5 }}>DIN TRUST SCORE</div>
          <div style={{ fontSize: '24px', fontWeight: 900 }}>{score}%</div>
        </div>
        <div style={{ fontSize: '32px' }}>💎</div>
      </div>
    </div>
  );
}
