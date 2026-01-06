// // app/profile/page.tsx
"use client";
import React from 'react';

export default function Profile() {
  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--neon-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', background: '#080808' }}>🛡️</div>
        <div>
          <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>Alex Lindgren</h1>
          <div style={{ display: 'flex', gap: '5px', marginTop: '4px' }}>
            <span style={{ background: 'var(--neon-purple)', color: '#fff', fontSize: '7px', fontWeight: 900, padding: '3px 8px', borderRadius: '5px' }}>LVL 14</span>
            <span style={{ background: 'rgba(255,255,255,0.05)', color: '#666', fontSize: '7px', fontWeight: 900, padding: '3px 8px', borderRadius: '5px' }}>EST. 2023</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
        {[
          { val: '98.2%', label: 'TRUST', color: 'var(--neon-mint)' },
          { val: '2,450', label: 'TOKENS', color: '#fff' },
          { val: '42', label: 'SALES', color: '#fff' }
        ].map((stat, i) => (
          <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '12px 5px', borderRadius: '12px' }}>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: stat.color }}>{stat.val}</div>
            <div style={{ fontSize: '7px', fontWeight: 900, opacity: 0.4, marginTop: '2px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ padding: '20px', background: 'rgba(157, 78, 221, 0.05)', border: '1px solid rgba(157, 78, 221, 0.2)', borderRadius: '18px' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ fontSize: '24px' }}>🤖</div>
          <div>
            <span style={{ fontSize: '8px', color: 'var(--neon-purple)', fontWeight: 900 }}>AI HANDELS-DNA</span>
            <strong style={{ fontSize: '1rem', display: 'block', margin: '2px 0' }}>"The Quick Flipper"</strong>
            <p style={{ margin: 0, fontSize: '10px', opacity: 0.5, lineHeight: '1.4' }}>
              Du säljer <span style={{color: '#fff'}}>42% snabbare</span> än snittet inom <span style={{color: 'var(--neon-mint)'}}>Apple Tech</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
