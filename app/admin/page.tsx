// // app/admin/page.tsx
"use client";
import React from 'react';

export default function AdminPage() {
  const stats = [
    { label: 'LOOPS 24H', val: '1,284', color: '#1DB954' },
    { label: 'SYSTEM LOAD', val: '12%', color: '#fff' },
    { label: 'AI PRECISION', val: '99.4%', color: '#1DB954' },
    { label: 'ACTIVE NODES', val: '42', color: '#fff' }
  ];

  return (
    <div className="page-wrapper" style={{ background: '#000', minHeight: '100vh', padding: '20px' }}>
      <header style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-2px', color: '#fff' }}>
              CONTROL<span style={{ color: '#1DB954' }}>CENTER</span>
            </h1>
            <p style={{ fontSize: '10px', fontWeight: 900, opacity: 0.3, letterSpacing: '2px' }}>GLOBAL LOOP MONITOR</p>
          </div>
          <div style={{ background: '#1DB95415', padding: '8px 15px', borderRadius: '30px', border: '1px solid #1DB95444' }}>
            <span style={{ color: '#1DB954', fontWeight: 900, fontSize: '10px' }}>● SYSTEM ONLINE</span>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: '#111', padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '9px', color: '#444', fontWeight: 900, marginBottom: '8px' }}>{s.label}</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 900, color: s.color, margin: 0 }}>{s.val}</p>
          </div>
        ))}
      </div>

      <div style={{ background: '#111', borderRadius: '24px', padding: '20px', border: '1px solid #111' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '12px', fontWeight: 900 }}>REALTIDS-LOGG</h2>
          <div style={{ width: '8px', height: '8px', background: '#1DB954', borderRadius: '50%' }}></div>
        </div>
        
        <div style={{ display: 'grid', gap: '10px' }}>
          {['14:22 - Match Found - iPhone 15', '14:21 - BankID Verify - *9282', '14:20 - Loop Closed - MacBook M3'].map((log, i) => (
            <div key={i} style={{ 
              padding: '12px', background: '#000', borderRadius: '12px', 
              fontSize: '11px', color: '#666', fontFamily: 'monospace',
              border: '1px solid #111'
            }}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
