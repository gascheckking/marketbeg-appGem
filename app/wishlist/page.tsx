// // app/wishlist/page.tsx
"use client";
import React from 'react';

export default function Wishlist() {
  return (
    <div className="page-wrapper" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '30px' }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔍</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>LETAR EFTER</h1>
        <p style={{ opacity: 0.5, fontSize: '11px', marginTop: '5px' }}>Objekt som inte matchades direkt i loopen hamnar här.</p>
      </div>
      
      <div style={{ padding: '60px 20px', border: '1px dashed #222', borderRadius: '30px' }}>
        <p style={{ fontWeight: 800, fontSize: '12px', color: '#444' }}>DIN ÖNSKELISTA ÄR TOM</p>
        <button className="primary-btn" style={{ marginTop: '20px', width: 'auto', padding: '12px 30px' }}>UTFORSKA FEEDEN</button>
      </div>
    </div>
  );
}
