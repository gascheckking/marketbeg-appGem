// // app/buy/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';

export default function BuyPage() {
  const categories = ['ALLT', 'TECH', 'DESIGN', 'KLÄDER'];
  const listings = [
    { id: '1', title: "iPhone 15 Pro Max", price: "11 450", trust: "98", img: "📱" },
    { id: '2', title: "AirPods Max", price: "3 950", trust: "92", img: "🎧" },
    { id: '3', title: "Sony WH-1000XM5", price: "2 800", trust: "99", img: "🎧" },
    { id: '4', title: "Apple Watch Ultra 2", price: "7 200", trust: "95", img: "⌚" },
  ];

  return (
    <div className="page-wrapper">
      {/* SEARCH FIELD */}
      <div style={{ background: '#111', padding: '16px 20px', borderRadius: '30px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #111' }}>
        <span style={{ opacity: 0.3 }}>🔍</span>
        <input type="text" placeholder="Sök i loopen..." style={{ background: 'none', border: 'none', color: '#fff', fontSize: '14px', outline: 'none', width: '100%', fontWeight: 600 }} />
      </div>

      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '30px' }} className="no-scrollbar">
        {categories.map((cat, i) => (
          <button key={cat} style={{ 
            background: i === 0 ? '#1DB954' : '#111', color: i === 0 ? '#000' : '#fff',
            border: 'none', padding: '10px 25px', borderRadius: '20px', fontSize: '11px', fontWeight: 900, whiteSpace: 'nowrap'
          }}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {listings.map((item) => (
          <Link key={item.id} href={`/buy/${item.id}`} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#111', borderRadius: '24px', overflow: 'hidden', border: '1px solid #111' }}>
              <div style={{ aspectRatio: '1/1', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
                {item.img}
              </div>
              <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#fff', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#1DB954' }}>{item.price}:-</div>
                <div style={{ marginTop: '10px', fontSize: '9px', fontWeight: 900, color: '#1DB954', opacity: 0.6 }}>{item.trust}% TRUST</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
