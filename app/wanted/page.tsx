// // app/wanted/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function WantedPage() {
  const router = useRouter();
  const matchingRequests = [
    { id: 1, item: "Versace Tofflor", size: "42", budget: "2 100 kr", demand: "EXTREM" },
    { id: 2, item: "Polarn O. Pyret Skaljacka", size: "116", budget: "450 kr", demand: "HÖG" },
    { id: 3, item: "iPad Pro M4", size: "11\"", budget: "9 500 kr", demand: "MEDEL" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>EFTERFRÅGAN</h1>
          <p style={{ fontSize: '8px', color: 'var(--neon-purple)', fontWeight: 900 }}>STOCKHOLM NODE • LIVE</p>
        </div>
        <div style={{ fontSize: '8px', background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)', padding: '5px 12px', borderRadius: '20px', fontWeight: 900 }}>
          1.2k KÖPARE ONLINE
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {matchingRequests.map(req => (
          <div key={req.id} className="glass-card" style={{ 
            padding: '15px', 
            borderLeft: req.demand === 'EXTREM' ? '3px solid var(--neon-purple)' : '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '7px', fontWeight: 900, color: req.demand === 'EXTREM' ? 'var(--neon-purple)' : 'var(--neon-mint)' }}>{req.demand} PRESSURE</span>
              <div style={{ fontSize: '12px', fontWeight: 900, margin: '2px 0' }}>{req.item}</div>
              <div style={{ fontSize: '9px', opacity: 0.4 }}>BUDGET: {req.budget} • STR: {req.size}</div>
            </div>
            <button onClick={() => router.push('/sell/burst')} className="primary-btn" style={{ width: 'auto', padding: '8px 15px', fontSize: '9px', background: 'var(--neon-purple)', color: '#fff' }}>SÄLJ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
