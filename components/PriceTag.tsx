// // components/PriceTag.tsx
"use client";
import React from 'react';

export default function PriceTag({ price }: { price: number }) {
  return (
    <div style={{ 
      display: 'inline-block', background: 'var(--karma-green)', 
      color: '#000', padding: '4px 10px', borderRadius: '4px',
      fontSize: '14px', fontWeight: 900, boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }}>
      {price}:-
    </div>
  );
}
