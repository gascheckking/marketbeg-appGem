"use client";
import React from 'react';

export default function MyKarmaPage() {
  const karmaStats = [
    { label: "Värde i rörelse", value: "24 800 kr", sub: "Via din Loop" },
    { label: "Karma Shield", value: "Aktiv", sub: "3 skyddade köp" },
    { label: "Relay Score", value: "98%", sub: "Saker som gått vidare" }
  ];

  return (
    <div className="page-wrapper" style={{ maxWidth: '1000px' }}>
      <header style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px', margin: 0 }}>Din Karma</h1>
        <p className="muted" style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          Ett system av relationer. Värde som rör sig vidare.
        </p>
      </header>

      <section className="glass-card" style={{ padding: '40px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {['Know', 'Acquire', 'Reuse', 'Match', 'Again'].map((step, i) => (
            <div key={step} style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '14px' }}>{step.toUpperCase()}</div>
              <div style={{ width: '50px', height: '2px', background: i === 2 ? 'var(--neon-purple)' : '#222', margin: '10px auto' }}></div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {karmaStats.map((s, i) => (
          <div key={i} className="glass-card">
            <div className="muted" style={{ fontSize: '10px', fontWeight: 800 }}>{s.label}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '10px 0' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--neon-purple)' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
