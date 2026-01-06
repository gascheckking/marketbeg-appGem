// // app/admin/page.tsx
"use client";
import React from 'react';

export default function AdminPage() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', color: '#fff', padding: '20px 15px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <header style={{ marginBottom: '30px', borderBottom: '1px solid var(--border)', paddingBottom: '15px' }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-1.5px', margin: 0 }}>
            KARMA <span style={{ color: 'var(--neon-purple)' }}>CONTROL</span>
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
            <p style={{ fontSize: '9px', color: '#555', fontWeight: 800 }}>SYSTEM MONITOR v2.6.0</p>
            <span style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '9px', letterSpacing: '1px' }}>● STHLM-HQ ONLINE</span>
          </div>
        </header>

        {/* Stats Grid - 2 kolumner för mobilen */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          {[
            { label: 'Loops', val: '1,284', color: 'var(--neon-mint)' },
            { label: 'Uptime', val: '99.9%', color: 'var(--neon-purple)' },
            { label: 'AI Match', val: '94.2%', color: '#fff' },
            { label: 'Nodes', val: '12', color: '#555' }
          ].map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '8px', color: '#555', textTransform: 'uppercase', margin: 0 }}>{s.label}</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 900, margin: '5px 0', color: s.color }}>{s.val}</p>
            </div>
          ))}
        </div>

        {/* Market Pulse Log */}
        <div className="glass-card" style={{ padding: '15px', borderRadius: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 900, margin: 0 }}>MARKET PULSE</h2>
            <button style={{ background: 'none', border: 'none', color: '#444', fontSize: '9px', fontWeight: 800 }}>RENSA</button>
          </div>
          
          <div style={{ display: 'grid', gap: '8px' }}>
            {[
              { time: '14:22', event: 'Match', detail: 'iPhone 15 Pro', status: 'OK' },
              { time: '14:21', event: 'Loop', detail: 'MacBook M3', status: 'LIVE' },
              { time: '14:20', event: 'Auth', detail: 'BankID Verify', status: 'SEC' },
            ].map((log, i) => (
              <div key={i} style={{ 
                display: 'flex', justifyContent: 'space-between', padding: '10px', 
                background: 'rgba(255,255,255,0.01)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)',
                fontSize: '10px', alignItems: 'center'
              }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ opacity: 0.3, fontFamily: 'monospace' }}>{log.time}</span>
                  <span style={{ fontWeight: 800 }}>{log.event}</span>
                </div>
                <span style={{ color: i === 1 ? 'var(--neon-purple)' : 'var(--neon-mint)', fontWeight: 900 }}>{log.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
