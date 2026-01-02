"use client";
import React from 'react';

export default function SecurityCenter() {
  return (
    <div className="page-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-2px' }}>Säkerhetscenter</h1>
        <p className="muted" style={{ fontSize: '1.2rem' }}>Övervaka ditt köpskydd och Karma Shield-status.</p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        <div className="glass-card" style={{ border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--neon-mint)', borderRadius: '50%', boxShadow: '0 0 15px var(--neon-mint)' }}></div>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>Aktivt Skydd: PÅ</h2>
          </div>
          <p className="muted" style={{ lineHeight: '1.6' }}>Varje transaktion du gör på Marketbeg krypteras och valideras mot BankID. Dina pengar betalas aldrig ut till säljaren förrän du bekräftat att varan är korrekt.</p>
        </div>

        <div className="glass-card">
          <h2 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Öppna Ärenden</h2>
          <div style={{ padding: '40px 20px', border: '1px dashed var(--border)', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>✨</div>
            <p className="muted" style={{ fontSize: '14px', margin: 0 }}>Inga aktiva tvister eller problem hittades. Du handlar säkert!</p>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ marginTop: '30px', padding: '30px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Hur fungerar Karma Shield?</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          <div style={{ fontSize: '12px' }}>
            <strong style={{ display: 'block', color: '#fff', marginBottom: '5px' }}>1. BankID</strong>
            <span className="muted">Alla parter är identifierade.</span>
          </div>
          <div style={{ fontSize: '12px' }}>
            <strong style={{ display: 'block', color: '#fff', marginBottom: '5px' }}>2. Escrow</strong>
            <span className="muted">Vi håller pengarna säkert.</span>
          </div>
          <div style={{ fontSize: '12px' }}>
            <strong style={{ display: 'block', color: '#fff', marginBottom: '5px' }}>3. Verifiering</strong>
            <span className="muted">Godkänn varan vid leverans.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
