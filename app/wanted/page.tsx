"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function WantedPage() {
  const router = useRouter();
  const matchingRequests = [
    { id: 1, item: "Versace Tofflor", size: "42", budget: "2 100:-", demand: "EXTREM" },
    { id: 2, item: "Polarn O. Pyret Skaljacka", size: "116", budget: "450:-", demand: "HÖG" },
    { id: 3, item: "iPad Pro M4", size: "11\"", budget: "9 500:-", demand: "MEDEL" }
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '25px', padding: '10px 0' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>EFTERSÖKT</h1>
        <p style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 800, letterSpacing: '1px' }}>
          AI-MATCHNINGAR VÄNTAR PÅ DIN SCAN
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {matchingRequests.map(req => (
          <div key={req.id} className="glass-card" style={{ 
            padding: '16px', 
            borderLeft: req.demand === 'EXTREM' ? '4px solid var(--neon-purple)' : '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1px' }}>
                {req.demand} EFTERFRÅGAN
              </span>
              <div style={{ fontSize: '13px', fontWeight: 800, margin: '4px 0' }}>{req.item}</div>
              <div style={{ fontSize: '9px', opacity: 0.5, fontWeight: 700 }}>
                STR: {req.size} • BUDGET: {req.budget}
              </div>
            </div>
            
            <button 
              onClick={() => router.push('/sell')}
              style={{ 
                background: 'var(--neon-mint)', color: '#000', border: 'none', 
                borderRadius: '8px', padding: '10px 14px', fontSize: '9px', 
                fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0, 255, 136, 0.2)'
              }}
            >
              FOTA & SÄLJ
            </button>
          </div>
        ))}
      </div>

      {/* AI Botten-notis med Market Pulse-känsla */}
      <div style={{ 
        marginTop: '30px', padding: '20px', borderRadius: '20px', 
        background: 'rgba(157, 78, 221, 0.03)', border: '1px solid rgba(157, 78, 221, 0.1)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '18px', marginBottom: '8px' }}>🚀</div>
        <p style={{ fontSize: '10px', lineHeight: '1.5', margin: 0, color: '#888', fontWeight: 600 }}>
          <span style={{ color: '#fff', fontWeight: 900 }}>AI MARKET PULSE:</span><br/> 
          Vi har 420 köpare som letar efter <span style={{ color: 'var(--neon-mint)' }}>Elektronik</span> just nu. 
          Gör en snabb-scan för att sälja direkt.
        </p>
      </div>
    </div>
  );
}
