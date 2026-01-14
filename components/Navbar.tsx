// // components/Navbar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav style={{ 
      position: 'fixed', bottom: 0, left: 0, right: 0, 
      background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)',
      display: 'flex', justifyContent: 'space-around', padding: '12px 0',
      borderTop: '1px solid #111', zIndex: 1000
    }}>
      <Link href="/feed" style={{ opacity: pathname === '/feed' ? 1 : 0.4, textDecoration: 'none', color: '#fff', textAlign: 'center' }}>
        <div style={{ fontSize: '20px' }}>🏠</div>
        <div style={{ fontSize: '10px', fontWeight: 700 }}>HEM</div>
      </Link>
      <Link href="/sell" style={{ opacity: pathname === '/sell' ? 1 : 0.4, textDecoration: 'none', color: '#fff', textAlign: 'center' }}>
        <div style={{ fontSize: '20px' }}>📸</div>
        <div style={{ fontSize: '10px', fontWeight: 700 }}>SÄLJ</div>
      </Link>
      <Link href="/profile" style={{ opacity: pathname === '/profile' ? 1 : 0.4, textDecoration: 'none', color: '#fff', textAlign: 'center' }}>
        <div style={{ fontSize: '20px' }}>👤</div>
        <div style={{ fontSize: '10px', fontWeight: 700 }}>PROFIL</div>
      </Link>
    </nav>
  );
}
