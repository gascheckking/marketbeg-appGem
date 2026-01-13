// // components/FeedCardSell.tsx
"use client";
import React from 'react';

export default function FeedCardSell({ title, price, trust, isSwap }: any) {
  return (
    <div style={{ background: '#121212', padding: '8px', borderRadius: '4px' }}>
      <div style={{ 
        width: '100%', aspectRatio: '1', background: '#282828', 
        borderRadius: '3px', marginBottom: '8px', position: 'relative' 
      }}>
        {isSwap && (
          <div style={{ position: 'absolute', top: '6px', left: '6px', background: 'var(--karma-green)', color: '#000', fontSize: '8px', fontWeight: 900, padding: '2px 4px', borderRadius: '2px' }}>
            BYTE 🔄
          </div>
        )}
      </div>
      <div style={{ fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {title.toUpperCase()}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
        <div style={{ fontSize: '13px', fontWeight: 900 }}>{price}:-</div>
        <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--karma-green)' }}>{trust}% TRUST</div>
      </div>
    </div>
  );
}
