"use client";
import React from 'react';

export default function MyKarma() {
  const transactions = [
    { id: 1, label: "Såld: iPhone 12", amount: "+4,200 kr", date: "Igår", status: "Klar" },
    { id: 2, label: "Köpt: Sony WH-1000XM5", amount: "-2,100 kr", date: "3 jan", status: "Skyddad" },
    { id: 3, label: "Loyalty Bonus", amount: "+500 pts", date: "1 jan", status: "Klar" },
  ];

  return (
    <div className="page-wrapper">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px' }}>Min Ekonomi</h1>
          <p className="muted">Hanteras säkert via Karma Shield & BankID.</p>
        </div>
        <div className="glass-card" style={{ padding: '15px 30px', borderColor: 'var(--neon-mint)', textAlign: 'right' }}>
          <small className="muted" style={{ fontWeight: 800 }}>TILLGÄNGLIGT SALDO</small>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--neon-mint)' }}>12,450 kr</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* Transaktionshistorik */}
        <div className="glass-card">
          <h3 style={{ marginBottom: '25px' }}>Senaste händelser</h3>
          {transactions.map(t => (
            <div key={t.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '20px', 
              background: 'rgba(255,255,255,0.02)', 
              borderRadius: '15px', 
              marginBottom: '15px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div>
                <div style={{ fontWeight: 700 }}>{t.label}</div>
                <div className="muted" style={{ fontSize: '12px' }}>{t.date} • {t.status}</div>
              </div>
              <div style={{ fontWeight: 900, color: t.amount.includes('+') ? 'var(--neon-mint)' : '#fff' }}>
                {t.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Karma Status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="glass-card" style={{ background: 'linear-gradient(145deg, #0a0a0a 0%, #12081a 100%)', borderColor: 'var(--neon-purple)' }}>
            <h3 style={{ color: 'var(--neon-purple)' }}>Karma Score</h3>
            <div style={{ fontSize: '3rem', fontWeight: 900, margin: '15px 0' }}>842</div>
            <p className="muted" style={{ fontSize: '12px' }}>Du är i topp 5% i Norden. Fortsätt sälja för att låsa upp "Ghost Bidder" Pro.</p>
          </div>

          <button className="primary-btn" style={{ width: '100%', padding: '20px' }}>
            TA UT PENGAR
          </button>
        </div>
      </div>
    </div>
  );
}
