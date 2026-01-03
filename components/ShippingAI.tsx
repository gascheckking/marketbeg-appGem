"use client";
import React from 'react';

export default function ShippingAI({ itemWeight }: { itemWeight: string }) {
  return (
    <div className="glass-card" style={{ border: '1px solid rgba(157, 78, 221, 0.3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
        <div style={{ width: '10px', height: '10px', background: 'var(--neon-purple)', borderRadius: '50%', boxShadow: '0 0 10px var(--neon-purple)' }}></div>
        <strong style={{ color: 'var(--neon-purple)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Karma Logistics AI</strong>
      </div>

      <p className="muted" style={{ fontSize: '14px', marginBottom: '25px' }}>
        Baserat på objektets vikt ({itemWeight}) och säljarens position har vi optimerat dina fraktval:
      </p>

      <div style={{ display: 'grid', gap: '15px' }}>
        <div className="glass-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', border: '1px solid var(--border)' }}>
          <div>
            <span style={{ display: 'block', fontWeight: 800 }}>📦 Green Box-to-Box</span>
            <small className="muted">Leverans till ditt närmsta skåp</small>
          </div>
          <strong style={{ color: 'var(--neon-mint)' }}>49 kr</strong>
        </div>

        <div className="glass-card" style={{ padding: '20px', background: 'rgba(157, 78, 221, 0.05)', border: '1px solid var(--neon-purple)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
          <div>
            <span style={{ display: 'block', fontWeight: 800 }}>⚡ Karma Express</span>
            <small style={{ color: 'var(--neon-purple)', fontWeight: 800 }}>Hemleverans ikväll</small>
          </div>
          <strong style={{ color: 'var(--neon-purple)' }}>79 kr</strong>
        </div>
      </div>
    </div>
  );
}
