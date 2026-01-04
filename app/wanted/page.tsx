"use client";
import React from 'react';

export default function WantedPage() {
  const matchingRequests = [
    { id: 1, item: "Versace Tofflor", size: "42", budget: "2 100:-", demand: "EXTREM" },
    { id: 2, item: "Polarn O. Pyret Skaljacka", size: "116", budget: "450:-", demand: "HÖG" },
    { id: 3, item: "iPad Pro M4", size: "11\"", budget: "9 500:-", demand: "MEDEL" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.2rem', fontWeight: 900 }}>EFTERSÖKT JUST NU</h1>
        <p style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 800 }}>AI-MATCHNINGAR VÄNTAR PÅ DIN SCAN</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {matchingRequests.map(req => (
          <div key={req.id} className="glass-card" style={{ 
            padding: '15px', 
            borderLeft: req.demand === 'EXTREM' ? '4px solid var(--neon-purple)' : '1px solid var(--border)' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)' }}>{req.demand} EFTERFRÅGAN</span>
                <div style={{ fontSize: '13px', fontWeight: 800, margin: '2px 0' }}>{req.item}</div>
                <div style={{ fontSize: '10px', opacity: 0.5 }}>Storlek: {req.size} • Budget: {req.budget}</div>
              </div>
              <button style={{ 
                background: 'var(--neon-mint)', border: 'none', borderRadius: '8px', 
                padding: '8px 12px', fontSize: '9px', fontWeight: 900, color: '#000' 
              }}>
                FOTA & SÄLJ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Botten-notis */}
      <div style={{ 
        marginTop: '30px', padding: '15px', borderRadius: '12px', 
        background: 'rgba(157, 78, 221, 0.05)', border: '1px solid rgba(157, 78, 221, 0.2)' 
      }}>
        <p style={{ fontSize: '10px', lineHeight: '1.4', textAlign: 'center', margin: 0 }}>
          <span style={{ fontWeight: 900 }}>AI TIPS:</span> Vi har 420 köpare som letar efter <span style={{ color: 'var(--neon-purple)' }}>elektronik</span> just nu. Gör en snabb-scan av ditt skrivbord för att få direkt-notiser.
        </p>
      </div>
    </div>
  );
}
