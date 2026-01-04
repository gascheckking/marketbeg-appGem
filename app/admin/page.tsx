// // app/admin/page.tsx
"use client";
import React from 'react';

export default function AdminPage() {
  return (
    <div style={{ background: '#02040a', minHeight: '100vh', color: '#fff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <header style={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #111', paddingBottom: '20px' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>
              KARMA <span style={{ color: 'var(--neon-purple)' }}>CONTROL</span>
            </h1>
            <p style={{ fontSize: '11px', color: '#555', fontWeight: 700, marginTop: '4px' }}>SYSTEM MONITOR v2.6.0</p>
          </div>
          <div style={{ background: 'rgba(0,255,136,0.05)', padding: '8px 16px', borderRadius: '10px', border: '1px solid rgba(0,255,136,0.1)' }}>
            <span style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '10px', letterSpacing: '1px' }}>NODE: STHLM-HQ</span>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Aktiva Loops', val: '1,284', change: '+12%', color: 'var(--neon-mint)' },
            { label: 'Karma Engine', val: 'ONLINE', change: '99.9% UPTIME', color: 'var(--neon-purple)' },
            { label: 'AI Match Rate', val: '94.2%', change: 'OPTIMAL', color: '#fff' }
          ].map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '30px', border: `1px solid ${i === 1 ? 'var(--neon-purple)' : 'rgba(255,255,255,0.05)'}` }}>
              <h3 style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>{s.label}</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 900, margin: '15px 0' }}>{s.val}</p>
              <span style={{ fontSize: '10px', color: s.color, fontWeight: 900 }}>{s.change}</span>
            </div>
          ))}
        </div>

        {/* Market Pulse Log */}
        <div className="glass-card" style={{ padding: '30px', borderRadius: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0 }}>AI Market Pulse Log</h2>
            <button style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#666', fontSize: '10px', padding: '5px 10px', borderRadius: '6px', fontWeight: 800 }}>RENSA LOGG</button>
          </div>
          
          <div style={{ display: 'grid', gap: '10px' }}>
            {[
              { time: '14:22:01', event: 'Instant Sell matchad', detail: 'iPhone 15 Pro -> Köpare id_882', status: 'COMPLETE' },
              { time: '14:21:45', event: 'Ny Loop skapad', detail: 'MacBook M3 (AI-verifierad)', status: 'ACTIVE' },
              { time: '14:20:12', event: 'BankID Verifiering', detail: 'Användare "Alex L" (99% Trust)', status: 'SUCCESS' },
            ].map((log, i) => (
              <div key={i} style={{ 
                display: 'flex', justifyContent: 'space-between', padding: '16px', 
                background: 'rgba(255,255,255,0.01)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.03)',
                fontSize: '12px', alignItems: 'center'
              }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <span style={{ opacity: 0.3, fontFamily: 'monospace', fontSize: '10px' }}>{log.time}</span>
                  <span style={{ fontWeight: 800 }}>{log.event}</span>
                  <span style={{ opacity: 0.5 }}>{log.detail}</span>
                </div>
                <span style={{ color: i === 1 ? 'var(--neon-purple)' : 'var(--neon-mint)', fontWeight: 900, fontSize: '9px' }}>{log.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
