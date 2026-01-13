// // components/Navbar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Hem', path: '/feed', icon: '🏠' },
    { name: 'Sök', path: '/wanted', icon: '🔍' },
    { name: 'Sälj', path: '/sell', icon: '➕' },
    { name: 'Valvet', path: '/vault', icon: '💰' },
    { name: 'Profil', path: '/profile', icon: '👤' }
  ];

  return (
    <nav style={{ 
      position: 'fixed', bottom: 0, left: 0, right: 0, 
      background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)',
      borderTop: '1px solid #121212', display: 'flex', 
      justifyContent: 'space-around', padding: '10px 0', zIndex: 1000
    }}>
      {navItems.map(item => (
        <Link key={item.path} href={item.path} style={{ textDecoration: 'none', textAlign: 'center', opacity: pathname === item.path ? 1 : 0.5 }}>
          <div style={{ fontSize: '20px' }}>{item.icon}</div>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#fff', marginTop: '2px' }}>{item.name}</div>
        </Link>
      ))}
    </nav>
  );
}
