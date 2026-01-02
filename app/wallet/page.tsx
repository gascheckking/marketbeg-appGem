"use client";
import React from 'react';
import BegLoan from "@/components/BegLoan";

export default function Wallet() {
  return (
    <div className="page-wrapper" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-2px' }}>Vault</h1>
        <p className="muted" style={{ fontSize: '1.1rem' }}>Din digitala plånbok för en cirkulär framtid.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        {/* Balanskort */}
        <div className="glass-card" style={{ padding: '50px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '20px', right: '30px', color: 'var(--neon-mint)', fontWeight: 900, fontSize: '12px' }}>
            ● LIVE LIKVIDITET
          </div>
          <small className="muted" style={{ letterSpacing: '2px', fontWeight: 800, textTransform: 'uppercase' }}>Tillgängligt Saldo</small>
          <div style={{ fontSize: '4.5rem', fontWeight: 900, margin: '15px 0', letterSpacing: '-2px' }}>
            14 250,00 <span style={{fontSize: '1.5rem', color: '#444'}}>SEK</span>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', color: 'var(--neon-mint)', padding: '8px 15px', borderRadius: '12px', fontSize: '12px', fontWeight: 900 }}>
              +450 BEGTOKENS
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', padding: '8px 15px', borderRadius: '12px', fontSize: '12px', fontWeight: 900 }}>
              3.5% CASHBACK AKTIV
            </div>
          </div>
        </div>

        {/* Snabbval */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-card" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: '30px' }}>₿</span>
            <div>
              <strong style={{ display: 'block' }}>Crypto Payout</strong>
              <small className="muted">Växla till BTC / ETH / SOL</small>
            </div>
          </div>
          <div className="glass-card" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer', border: '1px solid var(--neon-mint)' }}>
            <span style={{ fontSize: '30px' }}>🛡️</span>
            <div>
              <strong style={{ display: 'block' }}>BegLoan Instant</strong>
              <small style={{ color: 'var(--neon-mint)', fontWeight: 800 }}>Limit: 5 000 kr (Räntefritt)</small>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h3 style={{ marginBottom: '25px', fontWeight: 900, fontSize: '1.5rem' }}>Transaktionshistorik</h3>
        <div className="glass-card" style={{ padding: '0' }}>
          {[
            { label: "Sälj-bonus: iPhone 15 Pro", amount: "+142 BegTokens", date: "Idag 14:22", type: 'plus' },
            { label: "Cashback: MacBook M3 Köp", amount: "+450 BegTokens", date: "Igår 09:15", type: 'plus' },
            { label: "Utbetalning till Bankkonto", amount: "-2 400 SEK", date: "24 Okt 2025", type: 'minus' }
          ].map((item, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '25px 30px', 
              borderBottom: i === 2 ? 'none' : '1px solid rgba(255,255,255,0.05)' 
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '15px' }}>{item.label}</div>
                <small className="muted" style={{ fontSize: '12px' }}>{item.date}</small>
              </div>
              <strong style={{ color: item.type === 'plus' ? 'var(--neon-mint)' : '#fff', fontSize: '15px' }}>
                {item.amount}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
