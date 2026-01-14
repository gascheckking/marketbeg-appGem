// // app/sell/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SellPage() {
  const router = useRouter();

  return (
    <div style={{ padding: '24px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '40px' }}>Sälj i loopen</h1>
      
      <div 
        onClick={() => router.push('/sell/burst')}
        style={{ 
          background: 'var(--karma-green)', color: '#000', padding: '30px', 
          borderRadius: '12px', marginBottom: '16px', cursor: 'pointer' 
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 900 }}>VIDEO SCAN 🎥</div>
        <p style={{ fontSize: '14px', fontWeight: 600, marginTop: '5px' }}>Töm förrådet på 2 minuter</p>
      </div>

      <div 
        onClick={() => router.push('/sell/instant')}
        style={{ 
          background: '#121212', color: '#fff', padding: '24px', 
          borderRadius: '12px', border: '1px solid #282828' 
        }}
      >
        <div style={{ fontSize: '18px', fontWeight: 900 }}>Enstaka objekt 📸</div>
        <p style={{ fontSize: '12px', opacity: 0.6 }}>Fota och sälj direkt</p>
      </div>
    </div>
  );
}
