"use client";
import React from 'react';

export default function AdminPage() {
  return (
    <div className="web-container" style={{ padding: '40px 20px', minHeight: '100vh' }}>
      <div className="content-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 className="logo" style={{ fontSize: '2.5rem', letterSpacing: '-2px' }}>
              KARMA <span style={{ color: 'var(--neon-purple)' }}>CONTROL</span>
            </h1>
            <p className="muted">Global realtidsövervakning av likviditetsmotorn.</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="stat-pill" style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)' }}>
              NODE: STOCKHOLM-01
            </span>
          </div>
        </header>

        {/* Övergripande Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div className="glow-card" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '12px', color: 'var(--neon-purple)', textTransform: 'uppercase', letterSpacing: '1px' }}>Aktiva Loops</h3>
            <p style={{ fontSize: '3rem', fontWeight: 900, margin: '10px 0' }}>1,284</p>
            <span style={{ fontSize: '12px', color: 'var(--neon-mint)' }}>▲ +12% senaste timmen</span>
          </div>

          <div className="glow-card" style={{ padding: '30px', border: '1px solid var(--neon-purple)' }}>
            <h3 style={{ fontSize: '12px', color: 'var(--neon-purple)', textTransform: 'uppercase', letterSpacing: '1px' }}>Systemstatus</h3>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ 
                width: '10px', height: '10px', background: 'var(--neon-mint)', 
                borderRadius: '50%', boxShadow: '0 0 15px var(--neon-mint)',
                animation: 'pulse 2s infinite'
              }}></div>
              <span style={{ fontWeight: 800, fontSize: '14px' }}>KARMA ENGINE: ONLINE</span>
            </div>
            <p className="muted" style={{ fontSize: '12px', marginTop: '10px' }}>Likviditets-noder svarar i Stockholm, Oslo & Helsingfors.</p>
          </div>

          <div className="glow-card" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '12px', color: 'var(--neon-purple)', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Match Rate</h3>
            <p style={{ fontSize: '3rem', fontWeight: 900, margin: '10px 0' }}>94.2%</p>
            <span className="muted" style={{ fontSize: '12px' }}>Genomsnittlig matchscore i feeden</span>
          </div>
        </div>

        {/* Live Market Pulse Section (Från din Roadmap) */}
        <div className="glass-card" style={{ padding: '40px' }}>
          <h2 style={{ marginBottom: '25px', fontSize: '1.5rem', fontWeight: 900 }}>AI Market Pulse Log</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              { time: '14:22:01', event: 'Instant Sell matchad', detail: 'iPhone 15 Pro -> Köpare id_882', status: 'COMPLETE' },
              { time: '14:21:45', event: 'Ny Loop skapad', detail: 'MacBook M3 (AI-verifierad)', status: 'ACTIVE' },
              { time: '14:20:12', event: 'BankID Verifiering', detail: 'Användare "Alex L" uppgraderad till 99% Trust', status: 'SUCCESS' },
              { time: '14:18:30', event: 'Demand Spike', detail: 'Elektronik i Sthlm +24% efterfrågan', status: 'PULSE' }
            ].map((log, i) => (
              <div key={i} style={{ 
                display: 'flex', justifyContent: 'space-between', padding: '15px', 
                background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)',
                fontSize: '13px'
              }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <span className="muted" style={{ fontFamily: 'monospace' }}>[{log.time}]</span>
                  <span style={{ fontWeight: 800 }}>{log.event}</span>
                  <span className="muted">{log.detail}</span>
                </div>
                <span style={{ color: i === 0 ? 'var(--neon-mint)' : 'var(--neon-purple)', fontWeight: 900, fontSize: '10px' }}>{log.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
