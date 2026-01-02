"use client";
import React, { useState } from 'react';

const CATEGORIES = ["Alla", "Elektronik", "Mode", "Gaming", "Inredning"];
const TRENDING = [
  { id: 1, name: "MacBook Pro M3", price: "18.900 kr", img: "💻", trust: 99 },
  { id: 2, name: "Jordan 1 Retro", price: "2.100 kr", img: "👟", trust: 95 },
  { id: 3, name: "PS5 Pro", price: "8.400 kr", img: "🎮", trust: 98 },
  { id: 4, name: "Dyson Airwrap", price: "4.200 kr", img: "🌬️", trust: 92 },
];

export default function GlobalMarketplace() {
  return (
    <div style={{ width: '100%', paddingBottom: '100px' }}>
      
      {/* --- HERO / SEARCH AREA --- */}
      <header style={{ padding: '40px', borderBottom: '1px solid var(--border)' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px' }}>Utforska Loopen.</h1>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Vad letar du efter? AI söker i hela Norden..." 
            style={{ flex: 1, padding: '18px 25px', borderRadius: '16px', background: '#111', border: '1px solid #222', color: '#fff', fontSize: '16px' }}
          />
          <button style={{ padding: '18px 30px', background: 'var(--accent)', color: '#000', borderRadius: '16px', fontWeight: 900, border: 'none' }}>SÖK</button>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          {CATEGORIES.map(cat => <div key={cat} className="filter-pill">{cat}</div>)}
          <div className="filter-pill" style={{ color: 'var(--accent)' }}>Sortera efter: Relevans ▼</div>
        </div>
      </header>

      {/* --- TRENDANDE PRODUKTER (Vinted-style Grid) --- */}
      <section style={{ padding: '40px' }}>
        <h3 style={{ marginBottom: '25px', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          Populärt just nu <span style={{ padding: '4px 8px', background: 'rgba(255,0,0,0.1)', color: '#ff4444', borderRadius: '4px', fontSize: '10px' }}>HETASTE DEALSEN</span>
        </h3>
        <div className="main-grid">
          {TRENDING.map(item => (
            <div key={item.id} className="glow-card" style={{ padding: '0', overflow: 'hidden', position: 'relative' }}>
              <div style={{ height: '200px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>{item.img}</div>
              <div style={{ padding: '15px' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.name}</div>
                <div style={{ color: 'var(--accent)', fontWeight: 900 }}>{item.price}</div>
                <div style={{ fontSize: '11px', marginTop: '10px', opacity: 0.6 }}>🛡️ {item.trust}% Trust Score</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- REKLAM-PLATS / PARTNERSHIPS --- */}
      <section style={{ padding: '0 40px' }}>
        <div style={{ 
          width: '100%', height: '150px', borderRadius: '24px', 
          background: 'linear-gradient(90deg, #1a1a1a 0%, #0a0a0a 100%)',
          border: '1px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <p className="muted">REKLAM: Sälj din gamla iPhone - få 500 BegCredits extra denna vecka!</p>
        </div>
      </section>

      {/* --- TOP TRADERS (Inspiration) --- */}
      <section style={{ padding: '60px 40px' }}>
        <h3 style={{ marginBottom: '25px' }}>Toppsäljare att följa</h3>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ minWidth: '200px', background: 'var(--glass)', padding: '20px', borderRadius: '20px', textAlign: 'center', border: '1px solid var(--border)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#222', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👨‍🚀</div>
              <div style={{ fontWeight: 700 }}>Trader_{i}99</div>
              <div style={{ fontSize: '11px', color: 'var(--accent)' }}>GOD MODE</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
