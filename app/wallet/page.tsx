// // app/wallet/page.tsx
"use client";
import React from 'react';
import BegLoan from "@/components/BegLoan";

export default function Wallet() {
  return (
    <div className="page-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>VAULT</h1>
        <p className="muted" style={{ fontSize: '12px', fontWeight: 700, marginTop: '5px' }}>
          DIN DIGITALA PLÅNBOK FÖR CIRKULÄRT VÄRDE
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
        {/* Balanskort - Full bredd på mobil för bättre impact */}
        <div className="glass-card" style={{ 
          padding: '30px', 
          position: 'relative', 
          overflow: 'hidden', 
          background: 'linear-gradient(145deg, #050505 0%, #0a1015 100%)',
          borderRadius: '24px'
        }}>
          <div style={{ position: 'absolute', top: '15px', right: '20px', color: 'var(--neon-mint)', fontWeight: 900, fontSize: '9px', letterSpacing: '1px' }}>
            ● LIVE LIKVIDITET
          </div>
          <small className="muted" style={{ letterSpacing: '1.5px', fontWeight: 800, fontSize: '9px' }}>TILLGÄNGLIGT SALDO</small>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-2px' }}>
            14 250,00 <span style={{fontSize: '1rem', color: '#444'}}>SEK</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ background: 'rgba(0, 255, 136, 0.08)', color: 'var(--neon-mint)', padding: '6px 12px', borderRadius: '8px', fontSize: '10px', fontWeight: 900 }}>
              +450 TOKENS
            </div>
            <div style={{ background: 'rgba(157, 78, 221, 0.1)', color: 'var(--neon-purple)', padding: '6px 12px', borderRadius: '8px', fontSize: '10px', fontWeight: 900 }}>
              LEVEL 4 SELLER
            </div>
          </div>
        </div>

        {/* Snabbvals-grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div className="glass-card" style={{ padding: '15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', borderRadius: '16px' }}>
            <span style={{ fontSize: '20px' }}>₿</span>
            <div>
              <strong style={{ display: 'block', fontSize: '11px' }}>Crypto Payout</strong>
              <small className="muted" style={{ fontSize: '8px' }}>BTC / ETH / SOL</small>
            </div>
          </div>
          <div className="glass-card" style={{ 
            padding: '15px', display: 'flex', alignItems: 'center', gap: '12px', 
            cursor: 'pointer', border: '1px solid rgba(0, 255, 136, 0.3)', borderRadius: '16px' 
          }}>
            <span style={{ fontSize: '20px' }}>🛡️</span>
            <div>
              <strong style={{ display: 'block', fontSize: '11px' }}>Limit Increase</strong>
              <small style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '8px' }}>+ 2 500 kr</small>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Loan Komponent - Placerad för maximal konvertering */}
      <BegLoan price={5000} />

      {/* Transaktionshistorik */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ marginBottom: '15px', fontWeight: 900, fontSize: '1rem', letterSpacing: '1px' }}>TRANSAKTIONSHISTORIK</h3>
        <div className="glass-card" style={{ padding: '0', borderRadius: '20px', overflow: 'hidden' }}>
          {[
            { label: "Sälj-bonus: iPhone 15 Pro", amount: "+142 Tokens", date: "Idag 14:22", type: 'plus' },
            { label: "Cashback: MacBook M3 Köp", amount: "+450 Tokens", date: "Igår 09:15", type: 'plus' },
            { label: "Utbetalning till Bank", amount: "-2 400 SEK", date: "24 Okt 2025", type: 'minus' }
          ].map((item, i) => (
            <div key={i} style={{ 
              display: 'flex', justifyContent: 'space-between', padding: '18px 20px', 
              borderBottom: i === 2 ? 'none' : '1px solid rgba(255,255,255,0.03)',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '12px' }}>{item.label}</div>
                <small className="muted" style={{ fontSize: '9px', textTransform: 'uppercase' }}>{item.date}</small>
              </div>
              <strong style={{ color: item.type === 'plus' ? 'var(--neon-mint)' : '#fff', fontSize: '13px' }}>
                {item.amount}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
