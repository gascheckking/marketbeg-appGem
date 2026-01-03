"use client";
import React from 'react';

export default function KarmaSellerDashboard() {
  const assets = [
    { name: "Vintage Denim Jacket", status: "LEVERERAD", value: "450 kr", sub: "Frigörs om 24h", color: 'var(--neon-purple)' },
    { name: "Sony WH-1000XM4", status: "I TRANSPORT", value: "1 950 kr", sub: "Väntar på mottagning", color: '#444' },
    { name: "North Face Parka", status: "I LOOPEN", value: "Est. 2 800 kr", sub: "Hög efterfrågan", color: 'var(--neon-mint)' }
  ];

  return (
    <div className="page-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>Ditt Saldo</h1>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
          <span className="stat-pill" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)', fontSize: '10px' }}>TRUST: 4.9/5</span>
          <span className="stat-pill" style={{ borderColor: 'var(--neon-mint)', color: 'var(--neon-mint)', fontSize: '10px' }}>SHIELD AKTIV</span>
        </div>
      </header>

      {/* Saldo-kort */}
      <div className="glass-card" style={{ 
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.08) 0%, rgba(2, 4, 10, 1) 100%)',
        padding: '30px 20px', marginBottom: '30px', textAlign: 'center'
      }}>
        <div className="muted" style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>Tillgängligt för uttag</div>
        <div style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)', fontWeight: 900, margin: '10px 0', letterSpacing: '-2px' }}>
          14 250 <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>KR</span>
        </div>
        <button className="primary-btn" style={{ width: '100%', maxWidth: '300px', background: '#fff', color: '#000', fontSize: '13px' }}>
          TA UT VIA SWISH
        </button>
      </div>

      <div className="dashboard-grid">
        <div className="assets-section">
          <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', marginBottom: '15px', color: '#555' }}>DINA TILLGÅNGAR</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {assets.map((item, i) => (
              <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '14px' }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: item.color, fontWeight: 900, marginTop: '4px' }}>{item.status}</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: '16px' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="insights-section">
          <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', marginBottom: '15px', color: '#555', marginTop: '30px' }}>INSIKTER</h3>
          <div className="glass-card" style={{ border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, margin: 0 }}>
              Sälj din <span style={{ color: 'var(--neon-mint)' }}>North Face</span> nu – priserna toppar i Stockholm.
            </p>
            <button style={{ marginTop: '15px', width: '100%', padding: '12px', background: 'var(--neon-mint)', border: 'none', borderRadius: '10px', fontWeight: 900, fontSize: '11px' }}>
              LISTA NU (+320 kr)
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 768px) { .dashboard-grid { grid-template-columns: 1.4fr 0.6fr; } }
      `}</style>
    </div>
  );
}
