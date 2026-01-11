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
    <div className="page-wrapper">
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>EFTERFRÅGAN</h1>
          <p className="text-small" style={{ color: 'var(--karma-green)' }}>STOCKHOLM NODE • LIVE</p>
        </div>
        <div style={{ fontSize: '9px', background: 'rgba(29,185,84,0.1)', color: 'var(--karma-green)', padding: '6px 14px', borderRadius: '20px', fontWeight: 900 }}>
          1.2k KÖPARE ONLINE
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {matchingRequests.map(req => (
          <div key={req.id} className="card" style={{ 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderLeft: req.demand === 'EXTREM' ? '4px solid var(--karma-green)' : '1px solid var(--border)'
          }}>
            <div>
              <span style={{ fontSize: '8px', fontWeight: 900, color: 'var(--karma-green)', letterSpacing: '1px' }}>{req.demand} PRESSURE</span>
              <div style={{ fontSize: '14px', fontWeight: 900, margin: '4px 0' }}>{req.item}</div>
              <div style={{ fontSize: '10px', opacity: 0.4, fontWeight: 700 }}>BUDGET: {req.budget} • STR: {req.size}</div>
            </div>
            <button onClick={() => router.push('/sell/burst')} className="primary-btn" style={{ width: 'auto', padding: '10px 20px', fontSize: '10px' }}>SÄLJ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
