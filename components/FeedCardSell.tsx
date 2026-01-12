// // components/FeedCardSell.tsx
"use client";
import React from 'react';
import PriceTag from './PriceTag';
import TrustBadge from './TrustBadge';

export default function FeedCardSell({ id, title, price, trust, isSwap }: any) {
  return (
    <div className="spotify-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ 
        width: '100%', aspectRatio: '1', background: '#333', borderRadius: '4px', 
        position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <span style={{ fontSize: '40px' }}>📦</span>
        {isSwap && (
          <div style={{ 
            position: 'absolute', top: '8px', right: '8px', background: 'var(--karma-green)', 
            color: '#000', fontSize: '8px', fontWeight: 900, padding: '2px 6px', borderRadius: '4px' 
          }}>
            SWAP ⇆
          </div>
        )}
      </div>
      
      <div>
        <div style={{ fontSize: '13px', fontWeight: 900, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title.toUpperCase()}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
          <PriceTag price={price} size="xs" />
          <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--karma-green)' }}>{trust}% TRUST</div>
        </div>
      </div>
    </div>
  );
}
