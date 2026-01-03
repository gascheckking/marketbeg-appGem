"use client";
import React from 'react';

export default function KarmaSellerDashboard() {
  const stats = [
    { label: "Karma Intjänat", value: "14 250 kr", icon: "💰" },
    { label: "Trust Score", value: "4.9/5", icon: "⭐" },
    { label: "Besparad CO2", value: "124 kg", icon: "🌱" },
    { label: "Aktiva i Escrow", value: "2 400 kr", icon: "🛡️" }
  ];

  return (
    <div className="page-wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px' }}>The Karma Hub</h1>
        <p className="muted">Know • Acquire • Reuse • Match • Again</p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {stats.map((stat, i) => (
          <div key={i} className="glass-card" style={{ textAlign: 'center', borderBottom: i === 3 ? '2px solid var(--neon-purple)' : '1px solid var(--border)' }}>
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>{stat.icon}</div>
            <div className="muted" style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase' }}>{stat.label}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: '5px' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        {/* Utbetalningslogik */}
        <div className="glass-card">
          <h3 style={{ marginBottom: '20px' }}>Väntar på Godkännande (Escrow)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 800 }}>Vintage Denim Jacket</div>
                <small className="muted">Köpare: Sara M. • Levererad igår</small>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--neon-purple)', fontWeight: 900 }}>450 kr</div>
                <small style={{ fontSize: '10px' }}>Frigörs om 24h</small>
              </div>
            </div>
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 800 }}>Sony WH-1000XM4</div>
                <small className="muted">Köpare: Johan L. • I transport</small>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#666', fontWeight: 900 }}>1 950 kr</div>
                <small style={{ fontSize: '10px' }}>Väntar på mottagning</small>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight */}
        <div className="glass-card" style={{ border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
          <h3 style={{ color: 'var(--neon-mint)' }}>AI Market Insight 🧠</h3>
          <p className="muted" style={{ fontSize: '14px' }}>Vi ser en 40% ökning i efterfrågan på <strong>vinterjackor</strong> i ditt område.</p>
          <div style={{ marginTop: '20px', padding: '15px', background: '#000', borderRadius: '15px' }}>
            <small className="muted">Ditt lager:</small>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
              <span>North Face Parka</span>
              <button style={{ background: 'none', border: 'none', color: 'var(--neon-mint)', fontWeight: 800, cursor: 'pointer' }}>LISTA NU</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
