// // app/profile/page.tsx
"use client";
import React from 'react';

export default function Profile() {
  return (
    <div className="page-wrapper" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '35px' }}>
        <div style={{ 
          width: '80px', height: '80px', borderRadius: '50%', 
          border: '2px solid var(--neon-mint)', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '32px', 
          background: '#080808', boxShadow: '0 0 25px rgba(0, 255, 136, 0.15)' 
        }}>
          🛡️
        </div>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>Alex Lindgren</h1>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <span style={{ background: 'var(--neon-purple)', color: '#fff', fontSize: '8px', fontWeight: 900, padding: '4px 10px', borderRadius: '6px' }}>LEVEL 14 MERCHANT</span>
            <span style={{ background: 'rgba(255,255,255,0.05)', color: '#666', fontSize: '8px', fontWeight: 900, padding: '4px 10px', borderRadius: '6px' }}>EST. 2023</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '30px' }}>
        {[
          { val: '98.2%', label: 'TRUST SCORE', color: 'var(--neon-mint)' },
          { val: '2,450', label: 'TOKENS', color: '#fff' },
          { val: '42', label: 'SALES', color: '#fff' }
        ].map((stat, i) => (
          <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '15px 5px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: stat.color }}>{stat.val}</div>
            <div style={{ fontSize: '8px', fontWeight: 900, color: '#444', marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ padding: '25px', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.08) 0%, transparent 100%)', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '32px', filter: 'drop-shadow(0 0 10px var(--neon-purple))' }}>🤖</div>
          <div>
            <span style={{ fontSize: '10px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1px' }}>AI HANDELS-DNA</span>
            <strong style={{ fontSize: '1.1rem', color: '#fff', display: 'block', margin: '4px 0' }}>"The Quick Flipper"</strong>
            <p className="muted" style={{ margin: 0, lineHeight: '1.6', fontSize: '11px' }}>
              Din profil är optimerad för snabba avslut. Du säljer <span style={{color: '#fff'}}>42% snabbare</span> än snittet inom kategorin <span style={{color: 'var(--neon-mint)'}}>Apple Tech</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
