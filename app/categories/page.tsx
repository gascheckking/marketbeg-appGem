// // app/categories/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CategoriesPage() {
  const router = useRouter();

  const categories = [
    { id: 'tech', name: 'ELEKTRONIK', icon: '💻', items: '1.2k', heat: 'HÖG', color: 'var(--karma-green)' },
    { id: 'fashion', name: 'MODE', icon: '👕', items: '4.5k', heat: 'EXTREM', color: 'var(--karma-green)' },
    { id: 'vintage', name: 'VINTAGE', icon: '💎', items: '800', heat: 'STIGANDE', color: '#fff' },
    { id: 'home', name: 'INTERIÖR', icon: '🏠', items: '2.1k', heat: 'STABIL', color: '#fff' },
    { id: 'collect', name: 'SAMLING', icon: '🃏', items: '320', heat: 'HÖG', color: 'var(--karma-green)' },
    { id: 'other', name: 'ÖVRIGT', icon: '✨', items: '1.1k', heat: 'STABIL', color: '#fff' },
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-2px' }}>Utforska</h1>
        <p className="text-small" style={{ opacity: 0.4 }}>AI-SORTERAT EFTER LIKVIDITET</p>
      </header>

      <div style={{ background: 'var(--bg-card)', padding: '18px 20px', borderRadius: '20px', marginBottom: '25px', display: 'flex', alignItems: 'center', border: '1px solid var(--border)' }}>
        <span style={{ marginRight: '12px', opacity: 0.3 }}>🔍</span>
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
            className="card"
            style={{ padding: '25px 20px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>{cat.icon}</div>
            <h3 style={{ fontSize: '13px', fontWeight: 900, margin: '0 0 4px 0' }}>{cat.name}</h3>
            <div style={{ fontSize: '9px', fontWeight: 800, opacity: 0.3 }}>{cat.items} OBJEKT</div>
            
            <div style={{ 
              position: 'absolute', bottom: '15px', right: '15px', fontSize: '8px', 
              fontWeight: 900, color: cat.color, background: 'rgba(0,0,0,0.5)',
              padding: '4px 8px', borderRadius: '6px', border: `1px solid ${cat.color}33`
            }}>
              {cat.heat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
