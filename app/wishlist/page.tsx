// // app/wishlist/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Wishlist() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center' }}>
      <div style={{ marginBottom: '30px' }}>
        <div style={{ fontSize: '50px', marginBottom: '15px', filter: 'grayscale(1)' }}>🔍</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1px', margin: 0 }}>LETAR EFTER</h1>
        <p className="text-small" style={{ opacity: 0.5, marginTop: '8px', maxWidth: '240px', margin: '8px auto' }}>
          Objekt som inte matchades direkt i loopen hamnar här för AI-bevakning.
        </p>
      </div>
      
      <div style={{ width: '100%', padding: '50px 20px', border: '1px dashed var(--border)', borderRadius: '32px', background: 'rgba(255,255,255,0.02)' }}>
        <p style={{ fontWeight: 800, fontSize: '11px', color: '#444', letterSpacing: '1px' }}>DIN ÖNSKELISTA ÄR TOM</p>
        <button 
          onClick={() => router.push('/feed')}
          className="primary-btn" 
          style={{ marginTop: '20px', width: 'auto', padding: '12px 30px', fontSize: '11px' }}
        >
          UTFORSKA FEEDEN
        </button>
      </div>
    </div>
  );
}
