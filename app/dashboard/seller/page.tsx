"use client";
import React from 'react';

export default function KarmaSellerDashboard() {
  const assets = [
    { name: "Vintage Denim Jacket", status: "DELIVERED", value: "450 kr", sub: "Frigörs om 24h", color: 'var(--neon-purple)' },
    { name: "Sony WH-1000XM4", status: "TRANSIT", value: "1 950 kr", sub: "Väntar på mottagning", color: '#444' },
    { name: "North Face Parka", status: "VAULTED", value: "Est. 2 800 kr", sub: "Hög efterfrågan", color: 'var(--neon-mint)' }
  ];

  return (
    <div className="page-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px', margin: 0 }}>Vault</h1>
        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          <span className="stat-pill" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}>TRUST SCORE: 4.9/5</span>
          <span className="stat-pill" style={{ borderColor: 'var(--neon-mint)', color: 'var(--neon-mint)' }}>PROTOCOL: ACTIVE</span>
        </div>
      </header>

      {/* Saldo-kort: Den centrala "bank-känslan" */}
      <div className="glass-card" style={{ 
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.05) 0%, rgba(2, 4, 10, 1) 100%)',
        border: '1px solid rgba(157, 78, 221, 0.2)',
        padding: '50px 40px',
        marginBottom: '40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '10px', fontWeight: 800, color: 'var(--neon-purple)', letterSpacing: '2px' }}>SHIELD SECURED 🛡️</div>
        <div className="muted" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>Tillgängligt Saldo</div>
        <div style={{ fontSize: '4rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-2px' }}>
          14 250 <span style={{ fontSize: '1.5rem', verticalAlign: 'middle', opacity: 0.5 }}>KR</span>
        </div>
        <button className="primary-btn" style={{ width: 'auto', padding: '15px 50px', fontSize: '14px', marginTop: '10px', background: '#fff', color: '#000' }}>
          UTBETALNING VIA SWISH
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '30px' }}>
        
        {/* Assets & Digitala Kvitton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '1px', marginBottom: '10px' }}>DINA TILLGÅNGAR</h3>
          {assets.map((item, i) => (
            <div key={i} className="glass-card" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '25px 30px',
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid var(--border)'
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '16px' }}>{item.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                  <span style={{ 
                    fontSize: '9px', 
                    padding: '3px 8px', 
                    borderRadius: '4px', 
                    background: item.color, 
                    color: item.status === 'TRANSIT' ? '#888' : '#fff',
                    fontWeight: 900 
                  }}>{item.status}</span>
                  <span className="muted" style={{ fontSize: '12px' }}>{item.sub}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right', fontWeight: 900, fontSize: '18px' }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* AI Insight - Nu mer som en diskret widget */}
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '1px', marginBottom: '10px' }}>INSIGHTS</h3>
          <div className="glass-card" style={{ border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
            <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--neon-mint)', marginBottom: '10px' }}>MARKET PULSE</div>
            <p style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.4' }}>
              Efterfrågan på <span style={{ color: 'var(--neon-mint)' }}>vinterjackor</span> i ditt område är extremt hög.
            </p>
            <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(0,0,0,0.4)', borderRadius: '15px', border: '1px solid rgba(0,255,136,0.1)' }}>
              <div className="muted" style={{ fontSize: '10px', marginBottom: '5px' }}>DITT LAGER:</div>
              <div style={{ fontSize: '13px', fontWeight: 800 }}>North Face Parka</div>
              <button style={{ 
                marginTop: '15px', 
                width: '100%', 
                padding: '10px', 
                background: 'var(--neon-mint)', 
                border: 'none', 
                borderRadius: '10px', 
                fontWeight: 900, 
                fontSize: '11px',
                cursor: 'pointer'
              }}>LISTA NU (+12% VÄRDE)</button>
            </div>
          </div>
          
          <div className="glass-card" style={{ marginTop: '20px', padding: '20px', textAlign: 'center' }}>
            <div className="muted" style={{ fontSize: '10px', marginBottom: '5px' }}>MILJÖPÅVERKAN</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>124 <span style={{ fontSize: '12px' }}>kg CO2</span></div>
            <div style={{ fontSize: '10px', color: 'var(--neon-mint)', fontWeight: 800, marginTop: '5px' }}>🌱 BESPARAD EMISSION</div>
          </div>
        </div>

      </div>
    </div>
  );
}
