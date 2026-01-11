// // app/buy/[id]/page.tsx
"use client";
import React, { useState } from 'react';
import TrustBadge from "@/components/TrustBadge";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div style={{ background: "var(--bg-deep)", minHeight: "100vh", color: "#fff", paddingBottom: "140px" }}>
      {/* MASSIVE VISUAL */}
      <div style={{ width: '100%', aspectRatio: '1/1', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '100px', borderRadius: '0 0 40px 40px', borderBottom: '1px solid var(--border)' }}>
        🎧
      </div>

      <div style={{ padding: '30px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
          <div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>AirPods Max</h1>
            <div style={{ color: 'var(--karma-green)', fontWeight: 900, fontSize: '1.6rem', marginTop: '5px' }}>3 950:-</div>
          </div>
          <div style={{ background: 'var(--karma-green)', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '10px', fontWeight: 900 }}>LOOP #2</div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <TrustBadge score={98} />
        </div>

        {/* AI PREDICTION CARD */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #121212 0%, #000 100%)', border: '1px solid rgba(29, 185, 84, 0.2)', marginBottom: '30px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: 'var(--karma-green)' }}>✨</span>
            <span className="text-small" style={{ color: 'var(--karma-green)' }}>AI VALUATION 2027</span>
          </div>
          <p style={{ fontSize: '14px', opacity: 0.8, margin: 0, lineHeight: '1.5' }}>
            Hög andrahands-retention. Estimerat loop-värde om 12 månader: <span style={{ color: '#fff', fontWeight: 900 }}>2 800:-</span>
          </p>
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: '30px', marginBottom: '20px', borderBottom: '1px solid var(--border)' }}>
          {['INFO', 'HISTORIK'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab === 'INFO' ? 'info' : 'loop')}
              style={{ 
                padding: '15px 0', background: 'none', border: 'none', 
                color: activeTab === (tab === 'INFO' ? 'info' : 'loop') ? '#fff' : '#444',
                fontSize: '12px', fontWeight: 900, letterSpacing: '1px',
                borderBottom: activeTab === (tab === 'INFO' ? 'info' : 'loop') ? '2px solid var(--karma-green)' : '2px solid transparent',
                transition: '0.3s'
              }}>{tab}</button>
          ))}
        </div>

        <p style={{ fontSize: '15px', opacity: 0.5, lineHeight: '1.7', fontWeight: 500 }}>
          Omsorgsfullt ägd. Inga repor på kåporna. Karma Shield-garanti ingår i 6 månader för att säkra loopen och din investering.
        </p>
      </div>

      {/* STICKY CTA */}
      <div style={{ position: 'fixed', bottom: '90px', left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, #000, transparent)', zIndex: 100 }}>
        <button className="primary-btn" style={{ background: '#fff', color: '#000', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          KÖP DIREKT MED SWISH
        </button>
      </div>
    </div>
  );
}
