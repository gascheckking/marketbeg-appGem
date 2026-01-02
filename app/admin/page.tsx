"use client";
import React from 'react';

export default function AdminPage() {
  return (
    <div className="web-container" style={{ padding: '40px 20px' }}>
      <div className="content-wrapper" style={{ maxWidth: '800px' }}>
        <header style={{ marginBottom: '40px' }}>
          <h1 className="logo">KARMA <span style={{ color: '#9d4edd' }}>CONTROL</span></h1>
          <p className="muted">Realtidsövervakning av nordiska Karma-noder.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="glow-card" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '14px', color: '#9d4edd', textTransform: 'uppercase' }}>Aktiva Loops</h3>
            <p style={{ fontSize: '3rem', fontWeight: 900, margin: '10px 0' }}>1,284</p>
            <span className="success-text" style={{ fontSize: '12px' }}>+12% senaste timmen</span>
          </div>

          <div className="glow-card" style={{ padding: '30px', border: '1px solid #9d4edd' }}>
            <h3 style={{ fontSize: '14px', color: '#9d4edd', textTransform: 'uppercase' }}>Systemstatus</h3>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '12px', height: '12px', background: '#00ff88', borderRadius: '50%', boxShadow: '0 0 10px #00ff88' }}></div>
              <span style={{ fontWeight: 700 }}>KARMA ENGINE: ONLINE</span>
            </div>
            <p className="muted" style={{ fontSize: '12px', marginTop: '10px' }}>Alla noder i Stockholm, Oslo och Helsingfors svarar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
