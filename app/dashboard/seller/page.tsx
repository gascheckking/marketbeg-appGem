"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function KarmaSellerDashboard() {
  const router = useRouter();
  const assets = [
    { name: "Vintage Denim Jacket", status: "LEVERERAD", value: "450:-", color: 'var(--neon-purple)' },
    { name: "Sony WH-1000XM4", status: "I TRANSPORT", value: "1 950:-", color: '#444' },
    { name: "North Face Parka", status: "I LOOPEN", value: "2 800:-", color: 'var(--neon-mint)' }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>SALDO</h1>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-purple)', border: '1px solid rgba(157, 78, 221, 0.3)', padding: '2px 6px', borderRadius: '4px' }}>TRUST 4.9</span>
          <span style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-mint)', border: '1px solid rgba(0, 255, 136, 0.3)', padding: '2px 6px', borderRadius: '4px' }}>SHIELD</span>
        </div>
      </header>

      {/* SALDO CARD */}
      <div className="glass-card" style={{ 
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1), #000)',
        padding: '20px', marginBottom: '20px', textAlign: 'center', border: '1px solid rgba(157, 78, 221, 0.2)'
      }}>
        <div style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '1px', opacity: 0.5 }}>TILLGÄNGLIG LIKVIDITET</div>
        <div style={{ fontSize: '2.2rem', fontWeight: 900, margin: '4px 0', letterSpacing: '-1.5px' }}>14 250<span style={{ fontSize: '0.8rem', opacity: 0.4, marginLeft: '4px' }}>SEK</span></div>
        <button className="primary-btn" style={{ padding: '8px', fontSize: '10px', marginTop: '8px' }}>UTTAG VIA SWISH</button>
      </div>

      {/* NYHET: INSTANT MATCH ALERT */}
      <div 
        onClick={() => router.push('/wanted')}
        className="glass-card" style={{ marginBottom: '20px', border: '1px solid var(--neon-mint)', background: 'rgba(0, 255, 136, 0.03)', cursor: 'pointer' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)' }}>INSTANT MATCH TILLGÄNGLIG ✨</div>
            <div style={{ fontSize: '11px', fontWeight: 800 }}>Sälj din "iPhone 15 Pro" för 9.500:- direkt</div>
          </div>
          <span style={{ fontSize: '12px' }}>➔</span>
        </div>
      </div>

      {/* ASSETS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ fontSize: '9px', fontWeight: 900, color: '#444', letterSpacing: '1px' }}>DINA TILLGÅNGAR</h3>
        {assets.map((item, i) => (
          <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 15px', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '11px' }}>{item.name}</div>
              <div style={{ fontSize: '7px', color: item.color, fontWeight: 900, marginTop: '2px', letterSpacing: '0.5px' }}>{item.status}</div>
            </div>
            <div style={{ fontWeight: 900, fontSize: '12px' }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
