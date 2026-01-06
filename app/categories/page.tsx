// // app/categories/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CategoriesPage() {
  const router = useRouter();

  const categories = [
    { id: 'tech', name: 'ELEKTRONIK', icon: '💻', items: '1.2k', heat: 'HÖG', color: '#00f2ff' },
    { id: 'fashion', name: 'KLÄDER & MODE', icon: '👕', items: '4.5k', heat: 'EXTREM', color: 'var(--neon-purple)' },
    { id: 'vintage', name: 'VINTAGE', icon: '💎', items: '800', heat: 'STIGANDE', color: 'var(--neon-mint)' },
    { id: 'home', name: 'HEM & INREDNING', icon: '🏠', items: '2.1k', heat: 'STABIL', color: '#ff007b' },
    { id: 'toys', name: 'LEKSAKER', icon: '🧸', items: '950', heat: 'STABIL', color: '#ffcc00' },
    { id: 'collect', name: 'SAMLAROBJEKT', icon: '🃏', items: '320', heat: 'HÖG', color: '#00ffa2' },
  ];

  return (
    <div className="page-wrapper" style={{ padding: '20px', animation: 'fadeIn 0.5s ease' }}>
      
      {/* HEADER ORIENTERING */}
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>UTFORSKA <span style={{ color: 'var(--neon-purple)' }}>VALVET</span></h1>
        <p style={{ fontSize: '11px', opacity: 0.5, fontWeight: 800, marginTop: '5px', letterSpacing: '0.5px' }}>
          AI-SORTERAT EFTER LIKVIDITET OCH EFTERFRÅGAN
        </p>
      </header>

      {/* SÖKFÄLT (GLASSMORPHISM) */}
      <div className="glass-card" style={{ padding: '5px 15px', borderRadius: '15px', marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '16px', marginRight: '10px' }}>🔍</span>
        <input 
          type="text" 
          placeholder="Sök kategori eller objekt..." 
          style={{ background: 'transparent', border: 'none', color: '#fff', padding: '12px 0', width: '100%', outline: 'none', fontSize: '13px', fontWeight: 700 }}
        />
      </div>

      {/* KATEGORI-GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {categories.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => router.push(`/feed?cat=${cat.id}`)}
            className="glass-card category-card"
            style={{ 
              padding: '20px', 
              borderRadius: '24px', 
              cursor: 'pointer',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Glow Effekt i hörnet */}
            <div style={{ 
              position: 'absolute', top: '-20px', right: '-20px', 
              width: '60px', height: '60px', background: cat.color, 
              filter: 'blur(40px)', opacity: 0.2 
            }}></div>

            <div style={{ fontSize: '24px', marginBottom: '15px' }}>{cat.icon}</div>
            <h3 style={{ fontSize: '12px', fontWeight: 900, margin: '0 0 5px 0' }}>{cat.name}</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, opacity: 0.4 }}>{cat.items} OBJEKT</span>
              <span style={{ 
                fontSize: '8px', 
                fontWeight: 900, 
                color: cat.heat === 'EXTREM' ? 'var(--neon-purple)' : 'var(--neon-mint)',
                background: 'rgba(255,255,255,0.03)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}>
                🔥 {cat.heat}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* TRENDING SECTION (Social Proof) */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px', marginBottom: '15px' }}>
          JUST NU I DIN NOD
        </h2>
        <div className="glass-card" style={{ padding: '15px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', background: 'rgba(157, 78, 221, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📈</div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 800, margin: 0 }}>Hög efterfrågan på "AirPods"</p>
            <p style={{ fontSize: '9px', opacity: 0.5, margin: 0 }}>AI estimerar 15% snabbare försäljning idag</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .category-card {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .category-card:active {
          transform: scale(0.95);
          background: rgba(255,255,255,0.05);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
