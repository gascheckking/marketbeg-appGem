// // app/auctions/page.tsx
"use client";
import React from 'react';

export default function AuctionsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '20px' }}>Live Auktioner</h1>
      <div className="karma-card" style={{ border: '1px solid var(--karma-green)' }}>
        <div style={{ fontSize: '12px', fontWeight: 900 }}>SLUTAR OM: 02:14:55</div>
        <div style={{ fontSize: '18px', fontWeight: 800, marginTop: '10px' }}>Vintage Skinnpaj</div>
        <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--karma-green)' }}>Högsta bud: 850:-</div>
        <button className="pill-btn" style={{ width: '100%', marginTop: '15px' }}>LÄGG BUD</button>
      </div>
    </div>
  );
}
