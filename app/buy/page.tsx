// // app/buy/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import TopTabs from "@/components/TopTabs";

export default function BuyPage() {
  const categories = ['ALLT', 'TECH', 'DESIGN', 'FORDON', 'KLÄDER'];
  
  const listings = [
    { id: '1', title: "iPhone 15 Pro Max", price: "11 450", location: "Stockholm", trust: "98", tags: ["SNABB AFFÄR"] },
    { id: '2', title: "AirPods Max", price: "3 950", location: "Göteborg", trust: "92", tags: ["CIRKULERAD"] },
    { id: '3', title: "Sony WH-1000XM5", price: "2 800", location: "Malmö", trust: "99", tags: ["VERIFIERAD"] },
    { id: '4', title: "Apple Watch Ultra 2", price: "7 200", location: "Uppsala", trust: "95", tags: ["ESCROW"] },
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <TopTabs />
      
      {/* SÖK & KATEGORIER */}
      <div style={{ padding: '20px' }}>
        <div style={{ 
          background: '#121212', padding: '14px 20px', borderRadius: '30px', 
          marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'
        }}>
          <span style={{ opacity: 0.4 }}>🔍</span>
          <input 
            type="text" 
            placeholder="Sök i loopen..." 
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '15px', outline: 'none', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '5px' }} className="no-scrollbar">
          {categories.map((cat, i) => (
            <button key={cat} style={{ 
              background: i === 0 ? '#1DB954' : '#121212', 
              color: i === 0 ? '#000' : '#fff',
              border: 'none', padding: '10px 22px', borderRadius: '20px',
              fontSize: '11px', fontWeight: 900, whiteSpace: 'nowrap'
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* LISTING-GRID */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {listings.map((item) => (
            <Link key={item.id} href={`/buy/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: '#121212', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ aspectRatio: '1/1', background: '#282828', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '32px' }}>{item.title.includes("iPhone") ? "📱" : "🎧"}</span>
                </div>
                
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                  <div style={{ fontSize: '14px', fontWeight: 900, color: '#1DB954', marginBottom: '8px' }}>{item.price} kr</div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, opacity: 0.4 }}>{item.location}</span>
                    <span style={{ fontSize: '9px', fontWeight: 900, color: '#1DB954' }}>{item.trust}% Trust</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
