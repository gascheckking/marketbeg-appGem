// // app/profile/page.tsx
"use client";
import React from 'react';

export default function Profile() {
  const user = {
    name: "Alex Lindgren",
    karma: 2450,
    level: "Pålitlig",
    statusText: "Du handlar smidigt. Det märks."
  };

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease' }}>
      
      {/* LÅST SYSTEM-NAV (Samma som på Marketplace för enhetlighet) */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>DIN PROFIL</span>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
             <span style={{ fontSize: '11px', fontWeight: 900, color: 'var(--neon-mint)' }}>{user.karma} KARMA</span>
             <div style={{ width: '1px', height: '12px', background: '#333' }}></div>
             <span style={{ fontSize: '11px', fontWeight: 900 }}>14 250 KR</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* HEADER SECTION */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <div style={{ 
            width: '60px', height: '60px', borderRadius: '50%', 
            border: '2px solid var(--neon-mint)', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', fontSize: '24px', 
            background: '#080808', boxShadow: '0 0 15px rgba(0, 255, 136, 0.1)' 
          }}>🛡️</div>
          <div>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>{user.name}</h1>
            <div style={{ display: 'flex', gap: '5px', marginTop: '4px' }}>
              <span style={{ background: 'var(--neon-purple)', color: '#fff', fontSize: '8px', fontWeight: 900, padding: '3px 10px', borderRadius: '6px' }}>
                NIVÅ: {user.level.toUpperCase()}
              </span>
              <span style={{ background: 'rgba(255,255,255,0.05)', color: '#666', fontSize: '8px', fontWeight: 900, padding: '3px 10px', borderRadius: '6px' }}>EST. 2023</span>
            </div>
          </div>
        </div>

        {/* STATS GRID (Smala avlånga rutor) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
          {[
            { val: '98.2%', label: 'TRUST SCORE', color: 'var(--neon-mint)' },
            { val: user.karma.toLocaleString(), label: 'KARMA', color: '#fff' },
            { val: '42', label: 'LOOPS', color: '#fff' }
          ].map((stat, i) => (
            <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '15px 5px', borderRadius: '15px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: stat.color }}>{stat.val}</div>
              <div style={{ fontSize: '7px', fontWeight: 900, opacity: 0.4, marginTop: '4px', letterSpacing: '0.5px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* AI HANDELS-DNA */}
        <div className="glass-card" style={{ 
          padding: '20px', 
          background: 'rgba(157, 78, 221, 0.05)', 
          border: '1px solid rgba(157, 78, 221, 0.2)', 
          borderRadius: '20px' 
        }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ fontSize: '28px' }}>🤖</div>
            <div>
              <span style={{ fontSize: '8px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1px' }}>AI HANDELS-DNA</span>
              <strong style={{ fontSize: '1.1rem', display: 'block', margin: '2px 0', fontWeight: 900 }}>"The Quick Flipper"</strong>
              <p style={{ margin: 0, fontSize: '10px', opacity: 0.5, lineHeight: '1.4' }}>
                Du säljer <span style={{color: '#fff', fontWeight: 700}}>42% snabbare</span> än snittet inom <span style={{color: 'var(--neon-mint)', fontWeight: 700}}>Apple Tech</span>.
              </p>
            </div>
          </div>
        </div>

        {/* LUGN INFO-RAD (Tradera-smart) */}
        <p style={{ textAlign: 'center', fontSize: '10px', opacity: 0.3, marginTop: '30px', fontWeight: 700 }}>
          {user.statusText}
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
