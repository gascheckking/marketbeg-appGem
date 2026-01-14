// // app/sell/page.tsx
"use client";
import React from 'react';
import AIScanView from '@/components/AIScanView';

export default function SellPage() {
  // Vi kör Video Scan som default när man trycker på Sälj - precis som din vision
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <header style={{ padding: '20px', position: 'absolute', top: 0, zIndex: 10, width: '100%' }}>
        <h1 style={{ fontSize: '18px', fontWeight: 900, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>VIDEO SCAN ACTIVE</h1>
      </header>
      
      <AIScanView />
    </div>
  );
}
