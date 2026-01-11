// // app/profile/page.tsx
"use client";
import React from 'react';

export default function Profile() {
  const user = {
    name: "Alex Lindgren",
    karma: 2450,
    trustScore: "98.2%",
    loops: 42,
    statusText: "Du handlar smidigt. Det märks på dina villkor."
  };

  return (
    <div className="page-wrapper" style={{ paddingBottom: '40px' }}>
      {/* SYSTEM-NAV */}
      <div style={{ 
        margin: '0 -20px 30px -20px', padding: '15px 20px', 
        background: '#080808', borderBottom: '1px solid #111',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1.5px', opacity: 0.4 }}>NODE_042</span>
        <div style={{ display: 'flex', gap: '15px' }}>
           <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: '#1DB954' }}>{user.karma} KRM</div>
           </div>
           <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', fontWeight: 900 }}>14 250:-</div>
           </div>
        </div>
      </div>

      {/* HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '40px' }}>
        <div style={{ 
          width: '80px', height: '80px', borderRadius: '28px', 
          background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px'
        }}>🛡️</div>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>{user.name}</h1>
          <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
            <span style={{ color: '#1DB954', fontSize: '10px', fontWeight: 900 }}>BANKID VERIFIERAD</span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '30px' }}>
        <div style={{ background: '#111', padding: '25px', borderRadius: '24px' }}>
          <div style={{ fontSize: '24px', fontWeight: 900, color: '#1DB954' }}>{user.trustScore}</div>
          <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.3, marginTop: '5px' }}>TRUST SCORE</div>
        </div>
        <div style={{ background: '#111', padding: '25px', borderRadius: '24px' }}>
          <div style={{ fontSize: '24px', fontWeight: 900 }}>{user.loops}</div>
          <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.3, marginTop: '5px' }}>SLUTFÖRDA LOOPS</div>
        </div>
      </div>

      {/* PERKS */}
      <div style={{ padding: '30px', background: '#1DB95408', border: '1px solid #1DB95422', borderRadius: '28px' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '11px', fontWeight: 900, letterSpacing: '1px' }}>AKTIVA FÖRMÅNER</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            { icon: '⚡', text: 'Prioriterad i Snabbsälj' },
            { icon: '🛡️', text: 'Reducerad Shield-avgift' },
            { icon: '📦', text: 'Förtur på fraktsedlar' }
          ].map((perk, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '14px' }}>{perk.icon}</span>
              <span style={{ fontSize: '13px', fontWeight: 700 }}>{perk.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', opacity: 0.2 }}>
        <p style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '1px' }}>{user.statusText.toUpperCase()}</p>
      </div>
    </div>
  );
}
