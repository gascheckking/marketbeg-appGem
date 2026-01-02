"use client";
import React from 'react';

export default function Admin() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <header style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h1 className="logo">SYSTEM <span className="ai-text">CONTROL</span></h1>
        <p className="muted" style={{ fontSize: '12px' }}>
          Realtidsövervakning av nordiska noder.
        </p>
      </header>

      <div className="glow-card" style={{ padding: '20px', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>Aktiva sessioner</h3>
        <p style={{ fontSize: '24px', fontWeight: 900, color: 'var(--accent)' }}>1 284</p>
      </div>

      <div className="glow-card" style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>Systemstatus</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', background: 'var(--accent)', borderRadius: '50%' }}></div>
          <span style={{ fontSize: '14px' }}>AI-Core: Operational</span>
        </div>
      </div>
    </div>
  );
}
