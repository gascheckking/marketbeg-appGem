// // components/OrderTrack.tsx
"use client";
import React from 'react';

export default function OrderTrack({ step = 2 }) {
  const steps = ['Packas', 'Skickat', 'Hämtat'];
  
  return (
    <div style={{ padding: '20px', background: '#121212', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        {steps.map((s, i) => (
          <div key={s} style={{ 
            fontSize: '10px', fontWeight: 900, 
            color: i < step ? 'var(--karma-green)' : '#333' 
          }}>{s.toUpperCase()}</div>
        ))}
      </div>
      <div style={{ height: '4px', background: '#282828', borderRadius: '2px', display: 'flex' }}>
        <div style={{ 
          width: step === 1 ? '33%' : step === 2 ? '66%' : '100%', 
          background: 'var(--karma-green)', borderRadius: '2px', transition: 'width 0.5s' 
        }} />
      </div>
    </div>
  );
}
