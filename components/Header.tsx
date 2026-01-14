// // components/Header.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <header style={{ 
      padding: '16px 20px', display: 'flex', justifyContent: 'space-between', 
      alignItems: 'center', position: 'sticky', top: 0, z.Index: 100,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)' 
    }}>
      <div onClick={() => router.push('/feed')} style={{ fontSize: '22px', fontWeight: 900, color: 'var(--karma-green)', cursor: 'pointer' }}>
        Karma
      </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <span onClick={() => router.push('/notifications')} style={{ fontSize: '18px' }}>🔔</span>
        <div onClick={() => router.push('/profile')} style={{ width: '28px', height: '28px', background: '#282828', borderRadius: '50%' }} />
      </div>
    </header>
  );
}
