// // app/categories/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CategoriesPage() {
  const router = useRouter();

  const categories = [
    { id: 'tech', name: 'ELEKTRONIK', icon: '💻', items: '1.2k', heat: 'HÖG', color: '#1DB954' },
    { id: 'fashion', name: 'MODE', icon: '👕', items: '4.5k', heat: 'EXTREM', color: '#fff' },
    { id: 'vintage', name: 'VINTAGE', icon: '💎', items: '800', heat: 'STIGANDE', color: '#1DB954' },
    { id: 'home', name: 'INTERIÖR', icon: '🏠', items: '2.1k', heat: 'STABIL', color: '#fff' },
    { id: 'collect', name: 'SAMLING', icon: '🃏', items: '320', heat: 'HÖG', color: '#1DB954' },
    { id: 'other', name: 'ÖVRIGT', icon: '✨', items: '1.1k', heat: 'STABIL', color: '#fff' },
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1.5px' }}>Utforska</h1>
        <p style={{ fontSize: '11px', opacity: 0.4, fontWeight: 800, letterSpacing: '1px' }}>
          AI-SORTERAT EFTER LIKVIDITET
        </p>
      </header>

      {/* SEARCH (Minimalist) */}
      <div style={{ background: '#111', padding: '15px 20px', borderRadius: '20px', marginBottom: '25px', display: 'flex', alignItems: 'center', border: '1px solid #111' }}>
        <span style={{ fontSize: '16px', marginRight: '12px', opacity: 0.3 }}>🔍</span>
        <input 
          type="text" 
          placeholder="Sök kategorier..." 
          style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', fontSize: '14px', fontWeight: 600 }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {categories.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => router.push(`/feed?cat=${cat.id}`)}
            style={{ 
              padding: '25px 20px', borderRadius: '24px', background: '#111', cursor: 'pointer',
              border: '1px solid rgba(255,255,255,0.02)', position: 'relative', overflow: 'hidden'
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '15px' }}>{cat.icon}</div>
            <h3 style={{ fontSize: '12px', fontWeight: 900, margin: '0 0 4px 0', letterSpacing: '0.5px' }}>{cat.name}</h3>
            <div style={{ fontSize: '9px', fontWeight: 800, opacity: 0.3 }}>{cat.items} OBJEKT</div>
            
            <div style={{ 
              position: 'absolute', bottom: '15px', right: '15px', fontSize: '8px', 
              fontWeight: 900, color: cat.color, background: 'rgba(0,0,0,0.3)',
              padding: '4px 8px', borderRadius: '6px'
            }}>
              {cat.heat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
