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
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.5s ease', background: '#02040a', minHeight: '100vh' }}>
      
      {/* SYSTEM-NAV (Smidig överblick) */}
      <div style={{ 
        position: 'sticky', top: 0, zIndex: 100, 
        background: 'rgba(2, 4, 10, 0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '12px 20px' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px', opacity: 0.6 }}>DIN PROFIL</span>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
             <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--neon-mint)' }}>{user.karma} KARMA</div>
                <div style={{ fontSize: '7px', fontWeight: 800, opacity: 0.4 }}>TILLGÅNGAR</div>
             </div>
             <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.1)' }}></div>
             <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: 900 }}>14 250 KR</div>
                <div style={{ fontSize: '7px', fontWeight: 800, opacity: 0.4 }}>SALDO</div>
             </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        
        {/* HEADER SECTION (Fokus på Verifiering & Tillit) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', marginTop: '10px' }}>
          <div style={{ 
            width: '70px', height: '70px', borderRadius: '24px', 
            border: '1px solid rgba(255,255,255,0.1)', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', fontSize: '28px', 
            background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)'
          }}>🛡️</div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>{user.name}</h1>
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
              <span style={{ color: 'var(--neon-mint)', fontSize: '9px', fontWeight: 900, letterSpacing: '0.5px' }}>
                BANKID VERIFIERAD
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', fontWeight: 900 }}>• MEDLEM SEDAN 2023</span>
            </div>
          </div>
        </div>

        {/* TILLIT & AKTIVITET (Rensat Grid) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--neon-mint)' }}>{user.trustScore}</div>
            <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4, marginTop: '4px' }}>TILLIT HOS ANDRA</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '20px', fontWeight: 900 }}>{user.loops}</div>
            <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4, marginTop: '4px' }}>SLUTFÖRDA LOOPS</div>
          </div>
        </div>

        {/* DINA FÖRMÅNER (Ersätter DNA/Hype) */}
        <div style={{ 
          padding: '25px', 
          background: 'rgba(157, 78, 221, 0.03)', 
          border: '1px solid rgba(157, 78, 221, 0.1)', 
          borderRadius: '24px' 
        }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1px' }}>AKTIVA FÖRMÅNER</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px' }}>⚡</span>
              <span style={{ fontSize: '12px', fontWeight: 800 }}>Prioriterad i Snabbsälj</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px' }}>🛡️</span>
              <span style={{ fontSize: '12px', fontWeight: 800 }}>Reducerad Karma Shield-avgift</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px' }}>📦</span>
              <span style={{ fontSize: '12px', fontWeight: 800 }}>Förtur på PostNord-etiketter</span>
            </div>
          </div>
        </div>

        {/* LUGN INFO-RAD */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '10px', opacity: 0.3, fontWeight: 700, lineHeight: '1.5', maxWidth: '200px', margin: '0 auto' }}>
            {user.statusText.toUpperCase()}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
