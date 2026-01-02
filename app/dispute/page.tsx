"use client";
import React from 'react';

export default function SecurityCenter() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Säkerhetscenter</h1>
      <p className="muted">Här hanterar du dina pågående köpskydd och Karma Shield-status.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
        <div className="glass-card">
          <h2 style={{ color: 'var(--neon-mint)' }}>Aktivt Skydd: PÅ</h2>
          <p>Varje krona du handlar för skyddas av vårt BankID-protokoll.</p>
        </div>
        <div className="glass-card">
          <h2>Öppna Ärenden</h2>
          <div style={{ padding: '20px', border: '1px dashed #333', borderRadius: '12px', textAlign: 'center', marginTop: '10px' }}>
            Inga aktiva tvister
          </div>
        </div>
      </div>
    </div>
  );
}
