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
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>Efterfrågan</h1>
        <div style={{ fontSize: '8px', background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)', padding: '5px 10px', borderRadius: '20px', fontWeight: 900 }}>
          1.2k KÖPARE ONLINE
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {matchingRequests.map(req => (
          <div key={req.id} className="glass-card" style={{ 
            padding: '16px', 
            borderLeft: req.demand === 'EXTREM' ? '3px solid var(--neon-purple)' : '1px solid rgba(255,255,255,0.05)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '18px'
          }}>
            <div>
              <span style={{ fontSize: '7px', fontWeight: 900, color: req.demand === 'EXTREM' ? 'var(--neon-purple)' : 'var(--neon-mint)' }}>{req.demand} EFTERFRÅGAN</span>
              <div style={{ fontSize: '13px', fontWeight: 900, margin: '2px 0' }}>{req.item}</div>
              <div style={{ fontSize: '9px', opacity: 0.4 }}>BUDGET: {req.budget} • STR: {req.size}</div>
            </div>
            <button onClick={() => router.push('/sell')} className="primary-btn" style={{ width: 'auto', padding: '8px 15px', fontSize: '9px' }}>SÄLJ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
