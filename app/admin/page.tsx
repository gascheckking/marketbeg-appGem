// // app/admin/page.tsx
"use client";
import React from 'react';

export default function AdminPage() {
  const stats = [
    { label: 'LOOPS 24H', val: '1,284', color: 'var(--karma-green)' },
    { label: 'SYSTEM LOAD', val: '12%', color: '#fff' },
    { label: 'AI PRECISION', val: '99.4%', color: 'var(--karma-green)' },
    { label: 'ACTIVE NODES', val: '42', color: '#fff' }
  ];

  return (
    <div className="page-wrapper" style={{ background: '#000', minHeight: '100vh' }}>
      <header style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-2px', color: '#fff' }}>
              CONTROL<span style={{ color: 'var(--karma-green)' }}>CENTER</span>
            </h1>
            <p style={{ fontSize: '10px', fontWeight: 900, opacity: 0.3, letterSpacing: '2px' }}>GLOBAL KARMA MONITOR</p>
          </div>
          <div style={{ background: 'rgba(29, 185, 84, 0.1)', padding: '8px 18px', borderRadius: '30px', border: '1px solid rgba(29, 185, 84, 0.2)' }}>
            <span style={{ color: 'var(--karma-green)', fontWeight: 900, fontSize: '10px' }}>● SYSTEM ONLINE</span>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
        {stats.map((s, i) => (
          <div key={i} className="card" style={{ padding: '25px 20px' }}>
            <h3 style={{ fontSize: '9px', color: '#444', fontWeight: 900, marginBottom: '10px', letterSpacing: '1px' }}>{s.label}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 900, color: s.color, margin: 0 }}>{s.val}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.5px' }}>REALTIDS-LOGG</h2>
          <div style={{ width: '8px', height: '8px', background: 'var(--karma-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--karma-green)' }}></div>
        </div>
        
        <div style={{ display: 'grid', gap: '10px' }}>
          {['14:22 - Match Found - iPhone 15', '14:21 - BankID Verify - *9282', '14:20 - Loop Closed - MacBook M3'].map((log, i) => (
            <div key={i} style={{ 
              padding: '12px 15px', background: '#050505', borderRadius: '12px', 
              fontSize: '11px', color: '#666', fontFamily: 'monospace',
              border: '1px solid #111'
            }}>
              <span style={{ color: 'var(--karma-green)' }}>{'>'}</span> {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
