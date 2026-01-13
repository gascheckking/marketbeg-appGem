// // app/orders/[id]/approve/page.tsx
"use client";
import React from 'react';

export default function ApproveOrder() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900 }}>Godkänn affär</h1>
      <div style={{ margin: '40px 0', padding: '20px', background: '#121212', borderRadius: '12px' }}>
        <p style={{ fontSize: '14px', color: '#b3b3b3' }}>Genom att godkänna låser du transaktionen och Karma-poängen delas ut.</p>
      </div>
      <button className="pill-btn" style={{ width: '100%' }}>GODKÄNN & FÅ BETALT</button>
    </div>
  );
}
