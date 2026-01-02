"use client";
import React from 'react';

export default function MyKarma() {
  const transactions = [
    { id: 1, label: "Såld: iPhone 12 Pro Max", amount: "+4,200 kr", date: "Idag 14:10", status: "Klar" },
    { id: 2, label: "Köpt: Sony WH-1000XM5", amount: "-2,100 kr", date: "3 Jan", status: "Karma Shield" },
    { id: 3, label: "Loyalty Bonus (High Trust)", amount: "+500 pts", date: "1 Jan", status: "Klar" },
  ];

  return (
    <div className="page-wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px' }}>Min Ekonomi</h1>
          <p className="muted" style={{ fontSize: '1.2rem' }}>Säkrad via Karma Shield & BankID.</p>
        </div>
        <div className="glass-card" style={{ padding: '25px 40px', borderColor: 'var(--neon-mint)', textAlign: 'right' }}>
          <small className="muted" style={{ fontWeight: 900, letterSpacing: '1px' }}>TILLGÄNGLIG LIKVIDITET</small>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '-1px' }}>12,450 kr</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '40px' }}>
        <div className="glass-card" style={{ padding: '40px' }}>
          <h3 style={{ marginBottom: '30px', fontWeight: 900, fontSize: '1.5rem' }}>Transaktionslogg</h3>
          {transactions.map(t => (
            <div key={t.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '25px', 
              background: 'rgba(255,255,255,0.02)', 
              borderRadius: '20px', 
              marginBottom: '20px',
              border: '1px solid var(--border)'
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{t.label}</div>
                <div className="muted" style={{ fontSize: '12px', marginTop: '5px' }}>{t.date} • <span style={{color: 'var(--neon-mint)'}}>{t.status}</span></div>
              </div>
              <div style={{ fontWeight: 900, fontSize: '1.2rem', color: t.amount.includes('+') ? 'var(--neon-mint)' : '#fff' }}>
                {t.amount}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="glass-card" style={{ background: 'linear-gradient(145deg, #0a0a0a 0%, #12081a 100%)', border: '1px solid var(--neon-purple)' }}>
            <h3 style={{ color: 'var(--neon-purple)', fontSize: '12px', letterSpacing: '2px', fontWeight: 900 }}>KARMA SCORE</h3>
            <div style={{ fontSize: '4.5rem', fontWeight: 900, margin: '15px 0', letterSpacing: '-4px' }}>842</div>
            <p className="muted" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              Du tillhör topp **5%** i Norden. Fortsätt sälja för att låsa upp **"Ghost Bidder"** Pro-versionen.
            </p>
          </div>

          <button className="primary-btn" style={{ width: '100%', padding: '25px', fontSize: '16px' }}>
            TA UT PENGAR DIREKT
          </button>
        </div>
      </div>
    </div>
  );
}
