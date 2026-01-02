"use client";
import React from 'react';

export default function Settings() {
  return (
    <div className="page-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '50px', letterSpacing: '-2px' }}>Inställningar</h1>

      <section style={{ marginBottom: '50px' }}>
        <h3 className="muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Identitet & Säkerhet</h3>
        <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 35px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '24px' }}>🆔</div>
            <div>
              <div style={{ fontWeight: 800 }}>BankID Verifiering</div>
              <div className="muted" style={{ fontSize: '12px' }}>Säkrar din Trust Score på 98.2%</div>
            </div>
          </div>
          <span style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '12px' }}>AKTIV ✅</span>
        </div>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <h3 className="muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>System & Språk</h3>
        <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 35px' }}>
          <span>Primärt Språk</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ background: 'var(--neon-purple)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '10px', fontWeight: 800, fontSize: '12px' }}>SVENSKA</button>
            <button style={{ background: 'rgba(255,255,255,0.05)', color: '#666', border: '1px solid var(--border)', padding: '8px 16px', borderRadius: '10px', fontWeight: 800, fontSize: '12px' }}>ENGLISH</button>
          </div>
        </div>
      </section>

      <button className="primary-btn" style={{ 
        width: '100%', background: 'transparent', border: '1px solid #ff4444', 
        color: '#ff4444', marginTop: '20px', fontSize: '12px' 
      }}>
        AVSLUTA SESSION & LOGGA UT
      </button>
    </div>
  );
}
