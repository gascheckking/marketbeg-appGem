"use client";
import React from 'react';

export default function KarmaSellerDashboard() {
  const assets = [
    { name: "Vintage Denim Jacket", status: "LEVERERAD", value: "450 kr", sub: "Frigörs om 24h", color: 'var(--neon-purple)' },
    { name: "Sony WH-1000XM4", status: "I TRANSPORT", value: "1 950 kr", sub: "Väntar på mottagning", color: '#444' },
    { name: "North Face Parka", status: "I LOOPEN", value: "Est. 2 800 kr", sub: "Hög efterfrågan", color: 'var(--neon-mint)' }
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ margin: 0 }}>Mitt Saldo</h1>
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-purple)', border: '1px solid var(--neon-purple)', padding: '4px 8px', borderRadius: '6px' }}>TRUST: 4.9/5</span>
          <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-mint)', border: '1px solid var(--neon-mint)', padding: '4px 8px', borderRadius: '6px' }}>SHIELD AKTIV</span>
        </div>
      </header>

      {/* Saldo-kort - Mer Fintech-look */}
      <div className="glass-card" style={{ 
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1), #000)',
        padding: '35px 20px', marginBottom: '25px', textAlign: 'center', border: '1px solid rgba(157, 78, 221, 0.2)'
      }}>
        <div className="muted" style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>TILLGÄNGLIGT FÖR UTTAG</div>
        <div style={{ fontSize: '3rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-2px' }}>
          14 250 <span style={{ fontSize: '1rem', opacity: 0.5 }}>KR</span>
        </div>
        <button className="primary-btn" style={{ width: '100%', maxWidth: '280px', marginTop: '10px' }}>
          TA UT VIA SWISH
        </button>
      </div>

      <div className="dashboard-grid">
        <section>
          <h3 style={{ fontSize: '12px', fontWeight: 900, marginBottom: '15px', color: '#555' }}>DINA TILLGÅNGAR</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {assets.map((item, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', borderRadius: '16px' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '14px' }}>{item.name}</div>
                  <div style={{ fontSize: '10px', color: item.color, fontWeight: 900, marginTop: '4px' }}>{item.status}</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: '15px' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '30px' }}>
          <div className="glass-card" style={{ border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-mint)', marginBottom: '8px' }}>MARKET PULSE</div>
            <p style={{ fontSize: '13px', fontWeight: 600, margin: 0 }}>Vinterjackor säljer 40% snabbare just nu.</p>
            <button style={{ marginTop: '15px', width: '100%', padding: '12px', background: 'var(--neon-mint)', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 900, fontSize: '11px' }}>LISTA NU</button>
          </div>
        </section>
      </div>

      <style jsx>{`
        .dashboard-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 768px) { .dashboard-grid { grid-template-columns: 1.5fr 0.5fr; } }
      `}</style>
    </div>
  );
}
