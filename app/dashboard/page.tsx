// // app/dashboard/page.tsx
"use client";
import React from 'react';

export default function Dashboard() {
  const transactions = [
    { title: "Såld: iPhone 15 Pro", date: "Igår 14:20", amount: "+9 800", color: "#1DB954" },
    { title: "Köpt: AirPods Max", date: "3 jan", amount: "-3 950", color: "#fff" },
    { title: "Service: Karma Shield", date: "3 jan", amount: "-49", color: "#444" }
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1.5px' }}>Karma Wallet</h1>
        <p style={{ fontSize: '11px', fontWeight: 900, color: '#1DB954', letterSpacing: '1px' }}>DIN CIRKULÄRA EKONOMI</p>
      </header>

      <div style={{ background: '#111', padding: '40px 20px', borderRadius: '32px', marginBottom: '30px', textAlign: 'center', border: '1px solid #222' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.3, letterSpacing: '1px', marginBottom: '10px' }}>TOTALT INNEHAV</div>
        <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px' }}>14 250:-</div>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        <h3 style={{ fontSize: '10px', fontWeight: 900, opacity: 0.3, letterSpacing: '1px' }}>TRANSAKTIONER</h3>
        {transactions.map((t, i) => (
          <div key={i} style={{ 
            padding: '20px', background: '#111', borderRadius: '24px', display: 'flex', 
            justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.02)'
          }}>
            <div>
               <div style={{ fontSize: '13px', fontWeight: 800 }}>{t.title}</div>
               <div style={{ fontSize: '9px', opacity: 0.3, marginTop: '4px' }}>{t.date}</div>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 900, color: t.color }}>{t.amount}:-</div>
          </div>
        ))}
      </div>
    </div>
  );
}
