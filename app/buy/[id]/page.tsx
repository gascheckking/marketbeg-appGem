// // app/buy/[id]/page.tsx
"use client";
import React, { useState } from 'react';
import PriceTag from '@/components/PriceTag';

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", paddingBottom: "120px" }}>
      
      {/* MASSIV BILD */}
      <div style={{ width: '100%', aspectRatio: '1.2/1', background: '#121212', position: 'relative' }}>
        <div style={{ 
          position: 'absolute', top: '20px', right: '20px',
          background: '#1DB954', color: '#000', padding: '6px 14px', borderRadius: '20px',
          fontSize: '10px', fontWeight: 900
        }}>
          LOOP #2
        </div>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>
           🎧
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '8px' }}>AirPods Max</h1>
        <PriceTag price={3950} size="md" color="#1DB954" />

        {/* AI INSIGHT CARD */}
        <div style={{ 
          padding: '20px', borderRadius: '20px', margin: '24px 0', 
          background: 'linear-gradient(135deg, #121212 0%, #000 100%)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ color: '#1DB954' }}>✨</span>
            <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>AI INSIGHT</span>
          </div>
          <p style={{ fontSize: '13px', lineHeight: '1.5', margin: 0, opacity: 0.8 }}>
            Detta objekt håller sitt värde väl. AI estimerar ett framtida Loop-värde på 2 800 kr om 12 månader.
          </p>
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid #121212', marginBottom: '20px' }}>
          {['INFO', 'LOOP-HISTORIK'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab === 'INFO' ? 'info' : 'loop')}
              style={{ 
                padding: '12px 0', background: 'none', border: 'none', 
                color: activeTab === (tab === 'INFO' ? 'info' : 'loop') ? '#fff' : '#444',
                fontSize: '12px', fontWeight: 900, 
                borderBottom: activeTab === (tab === 'INFO' ? 'info' : 'loop') ? '2px solid #1DB954' : 'none'
              }}>{tab}</button>
          ))}
        </div>

        {activeTab === 'info' ? (
          <p style={{ fontSize: '14px', opacity: 0.6, lineHeight: '1.7' }}>
            Extremt fint skick. Använda sparsamt på kontor. Originalförpackning och kvitto finns. 
            Karma-shield täcker detta köp till 100%.
          </p>
        ) : (
          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ padding: '16px', background: '#121212', borderRadius: '12px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 800, fontSize: '13px' }}>Loop #1</span>
              <span style={{ opacity: 0.4, fontSize: '12px' }}>2025-06-20</span>
            </div>
          </div>
        )}
      </div>

      {/* STICKY BOTTOM */}
      <div style={{ 
        position: 'fixed', bottom: 0, left: 0, right: 0, 
        padding: '20px 24px calc(30px + env(safe-area-inset-bottom))',
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <button style={{ 
          width: '100%', padding: '20px', borderRadius: '30px', 
          background: '#fff', color: '#000', 
          fontWeight: 900, fontSize: '15px', border: 'none'
        }}>
          KÖP DIREKT MED SWISH
        </button>
      </div>
    </div>
  );
}
