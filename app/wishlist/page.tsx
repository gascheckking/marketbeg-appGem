// // app/wishlist/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Wishlist() {
  const router = useRouter();

  return (
    <div style={{ background: "#121212", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", textAlign: "center" }}>
      <div style={{ fontSize: '64px', marginBottom: '20px' }}>📦</div>
      <h1 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>Hitta ditt nästa byte</h1>
      <p style={{ fontSize: '14px', color: '#b3b3b3', maxWidth: '280px', marginBottom: '30px', fontWeight: 500 }}>
        Lägg till saker du letar efter så matchar Karma dem automatiskt mot andras valv.
      </p>
      
      <button 
        onClick={() => router.push('/feed')}
        style={{ background: "#fff", color: "#000", border: "none", padding: "14px 32px", borderRadius: "50px", fontSize: "14px", fontWeight: 900 }}
      >
        UTFORSKA LOOPEN
      </button>
    </div>
  );
}
