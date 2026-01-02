"use client";
import React from 'react';

export default function SecurityCenter() {
  return (
    <div className="page-container-responsive">
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>Säkerhetscenter</h1>
      <p className="muted">Här hanterar du dina pågående köpskydd och Karma Shield-status.</p>
      
      <div className="dispute-grid">
        <div className="glass-card" style={{ padding: '40px' }}>
          <h2 style={{ color: 'var(--neon-mint)' }}>Aktivt Skydd: PÅ</h2>
          <p>Varje krona du handlar för skyddas av vårt BankID-protokoll.</p>
        </div>
        <div className="glass-card" style={{ padding: '40px' }}>
          <h2>Öppna Ärenden</h2>
          <div style={{ padding: '20px', border: '1px dashed #333', borderRadius: '12px', textAlign: 'center' }}>
            Inga aktiva tvister
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container-responsive {
          padding: 40px;
          margin-left: 280px;
        }
        .dispute-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 40px;
        }
        @media (max-width: 900px) {
          .page-container-responsive {
            margin-left: 0;
            padding: 20px;
            padding-bottom: 100px;
          }
          .dispute-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
