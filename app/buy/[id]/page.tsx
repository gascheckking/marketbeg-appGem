// // app/buy/[id]/page.tsx
"use client";
import React, { useState } from 'react';

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", paddingBottom: "120px" }}>
      {/* MASSIVE VISUAL */}
      <div style={{ width: '100%', aspectRatio: '1/1', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', borderRadius: '0 0 40px 40px' }}>
        🎧
      </div>

      <div style={{ padding: '30px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>AirPods Max</h1>
            <div style={{ color: '#1DB954', fontWeight: 900, fontSize: '1.5rem', marginTop: '5px' }}>3 950:-</div>
          </div>
          <div style={{ background: '#1DB954', color: '#000', padding: '6px 15px', borderRadius: '20px', fontSize: '10px', fontWeight: 900 }}>LOOP #2</div>
        </div>

        {/* AI PREDICTION CARD */}
        <div style={{ padding: '20px', borderRadius: '24px', background: 'linear-gradient(135deg, #111 0%, #000 100%)', border: '1px solid #1DB95422', marginBottom: '30px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ color: '#1DB954' }}>✨</span>
            <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>AI VALUATION 2027</span>
          </div>
          <p style={{ fontSize: '13px', opacity: 0.7, margin: 0, fontWeight: 500 }}>
            Hög andrahands-retention. Estimerat loop-värde om 12 månader: <span style={{ color: '#fff', fontWeight: 900 }}>2 800:-</span>
          </p>
        </div>

        {/* CLEAN TABS */}
        <div style={{ display: 'flex', gap: '30px', marginBottom: '20px', borderBottom: '1px solid #111' }}>
          {['INFO', 'HISTORIK'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab === 'INFO' ? 'info' : 'loop')}
              style={{ 
                padding: '15px 0', background: 'none', border: 'none', 
                color: activeTab === (tab === 'INFO' ? 'info' : 'loop') ? '#fff' : '#333',
                fontSize: '12px', fontWeight: 900, letterSpacing: '1px',
                borderBottom: activeTab === (tab === 'INFO' ? 'info' : 'loop') ? '2px solid #1DB954' : 'none'
              }}>{tab}</button>
          ))}
        </div>

        <p style={{ fontSize: '14px', opacity: 0.5, lineHeight: '1.6', fontWeight: 500 }}>
          Omsorgsfullt ägd. Inga repor på kåporna. Karma Shield-garanti ingår i 6 månader för att säkra loopen.
        </p>
      </div>

      {/* STICKY CTA */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '20px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', borderTop: '1px solid #111' }}>
        <button style={{ width: '100%', padding: '22px', borderRadius: '30px', background: '#fff', color: '#000', fontWeight: 900, fontSize: '15px', border: 'none' }}>
          KÖP DIREKT MED SWISH
        </button>
      </div>
    </div>
  );
}
