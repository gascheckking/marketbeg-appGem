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

      {/* KARMA Loop Visualizer */}
      <section className="glass-card" style={{ padding: '40px', marginBottom: '40px', background: 'rgba(157, 78, 221, 0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
          {['Know', 'Acquire', 'Reuse', 'Match', 'Again'].map((step, i) => (
            <div key={step} style={{ textAlign: 'center', flex: 1, position: 'relative', zIndex: 2 }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '50%', background: i === 2 ? 'var(--neon-purple)' : '#111', 
                margin: '0 auto 15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)', fontWeight: 900, fontSize: '12px'
              }}>
                {i + 1}
              </div>
              <div style={{ fontWeight: 900, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>{step}</div>
              {i === 2 && <div style={{ fontSize: '10px', color: 'var(--neon-purple)', marginTop: '5px' }}>DIN STATUS</div>}
            </div>
          ))}
          {/* Connecting Line */}
          <div style={{ 
            position: 'absolute', top: '20px', left: '10%', right: '10%', height: '1px', 
            background: 'linear-gradient(90deg, #111 0%, var(--neon-purple) 50%, #111 100%)', z.Index: 1 
          }}></div>
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {karmaStats.map((s, i) => (
          <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
            <div className="muted" style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px' }}>{s.label}</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, margin: '10px 0' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--neon-purple)', fontWeight: 700 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
        <div className="glass-card">
          <h3 style={{ margin: '0 0 20px 0' }}>Aktiva Relationer</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { label: "Säljer: MacBook Air", status: "Matchar köpare...", price: "6 500 kr" },
              { label: "Köper: Vintage Kamera", status: "I Karma Shield", price: "1 200 kr" }
            ].map((rel, i) => (
              <div key={i} style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 800 }}>{rel.label}</div>
                  <small className="muted">{rel.status}</small>
                </div>
                <div style={{ fontWeight: 900 }}>{rel.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ background: 'var(--neon-mint)', color: '#000' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Ditt nästa steg</h3>
          <p style={{ fontSize: '14px', fontWeight: 600 }}>Du har 14 objekt i ditt förråd som väntar på att få nytt liv.</p>
          <button style={{ 
            marginTop: '20px', width: '100%', padding: '15px', borderRadius: '12px', 
            background: '#000', color: '#fff', border: 'none', fontWeight: 900, cursor: 'pointer' 
          }}>
            AKTIVERA BURST MODE
          </button>
        </div>
      </div>

      <footer style={{ marginTop: '80px', textAlign: 'center', opacity: 0.3 }}>
        <p style={{ fontSize: '12px', letterSpacing: '2px' }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </footer>
    </div>
  );
}
