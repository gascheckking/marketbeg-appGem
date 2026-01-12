// // app/wanted/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function WantedPage() {
  const router = useRouter();
  const requests = [
    { id: 1, item: "Versace Tofflor", size: "42", budget: "2 100 kr", demand: "EXTREM" },
    { id: 2, item: "Polarn O. Pyret Skaljacka", size: "116", budget: "450 kr", demand: "HÖG" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: "20px" }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 900, margin: 0 }}>Efterfrågan</h1>
        <div style={{ fontSize: '10px', color: 'var(--karma-green)', fontWeight: 900, marginTop: "4px" }}>LIVE MATCHING AKTIVERAD 🟢</div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {requests.map(req => (
          <div key={req.id} style={{ 
            background: "#181818", padding: "12px", borderRadius: "8px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            borderLeft: req.demand === 'EXTREM' ? '4px solid var(--karma-green)' : 'none'
          }}>
            <div>
              <div style={{ fontSize: '9px', fontWeight: 900, color: "var(--karma-green)" }}>{req.demand} PRESSURE</div>
              <div style={{ fontSize: '14px', fontWeight: 900 }}>{req.item}</div>
              <div style={{ fontSize: '11px', opacity: 0.5 }}>BUDGET: {req.budget}</div>
            </div>
            <button onClick={() => router.push('/sell/instant')} style={{ background: "#fff", color: "#000", border: "none", padding: "8px 16px", borderRadius: "50px", fontSize: "11px", fontWeight: 900 }}>SÄLJ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
