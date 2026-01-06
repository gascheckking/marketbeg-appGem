// // app/buy/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';

export default function BuyPage() {
  const categories = ['ALLT', 'TECH', 'DESIGN', 'FORDON', 'KLÄDER'];
  
  const listings = [
    { id: '1', title: "iPhone 15 Pro Max", price: "11 450", location: "Stockholm", trust: "98%", tags: ["REDO FÖR SNABB AFFÄR"] },
    { id: '2', title: "AirPods Max - Space Gray", price: "3 950", location: "Göteborg", trust: "92%", tags: ["CIRKULERAT TIDIGARE"] },
    { id: '3', title: "Sony WH-1000XM5", price: "2 800", location: "Malmö", trust: "99%", tags: ["BANKID VERIFIERAD"] },
    { id: '4', title: "Apple Watch Ultra 2", price: "7 200", location: "Uppsala", trust: "95%", tags: ["ESCROW AKTIVERAT"] },
  ];

  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px', animation: 'fadeIn 0.5s ease' }}>
      
      {/* 1. SÖK & KATEGORIER */}
      <div style={{ padding: '20px', background: 'linear-gradient(to bottom, #05070a, #02040a)' }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '18px', 
          border: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px',
          display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <span style={{ opacity: 0.4 }}>🔍</span>
          <input 
            type="text" 
            placeholder="Sök i loopen..." 
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '14px', outline: 'none', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '5px' }} className="no-scrollbar">
          {categories.map((cat, i) => (
            <button key={cat} style={{ 
              background: i === 0 ? '#fff' : 'rgba(255,255,255,0.02)', 
              color: i === 0 ? '#000' : '#fff',
              border: 'none', padding: '8px 18px', borderRadius: '12px',
              fontSize: '10px', fontWeight: 900, whiteSpace: 'nowrap'
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. LISTING-FLÖDE */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {listings.map((item) => (
            <Link key={item.id} href={`/buy/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                {/* PRODUKTBILD PLACEHOLDER */}
                <div style={{ aspectRatio: '1/1', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ opacity: 0.1, fontSize: '24px' }}>🖼️</span>
                </div>
                
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 900, marginBottom: '4px', height: '36px', overflow: 'hidden' }}>{item.title}</div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '8px' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 900, color: 'var(--neon-mint)' }}>{item.price} kr</div>
                      <div style={{ fontSize: '7px', fontWeight: 800, opacity: 0.4 }}>{item.location.toUpperCase()}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)' }}>{item.trust}</div>
                      <div style={{ fontSize: '6px', fontWeight: 800, opacity: 0.3 }}>TILLIT</div>
                    </div>
                  </div>

                  {/* LUGNA SIGNALER (Baserat på din vision) */}
                  <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                    {item.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '6px', fontWeight: 900, opacity: 0.5, letterSpacing: '0.5px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. LUGN INFO-RAD I BOTTEN */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '9px', fontWeight: 800, opacity: 0.2, letterSpacing: '1px' }}>
          ALLA AFFÄRER KONTROLLERAS VIA KARMA SHIELD
        </p>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
