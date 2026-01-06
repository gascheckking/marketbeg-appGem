// // app/vault/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import BegLoan from "@/components/BegLoan";

export default function VaultPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>VAULT</h1>
        <p style={{ fontSize: '8px', fontWeight: 800, color: 'var(--neon-purple)' }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </header>

      <div className="glass-card" style={{ 
        padding: '25px 15px', marginBottom: '12px', borderRadius: '20px',
        background: 'linear-gradient(145deg, rgba(0,255,136,0.05) 0%, #000 100%)',
        border: '1px solid rgba(0,255,136,0.2)', position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: '12px', right: '15px', color: 'var(--neon-mint)', fontWeight: 900, fontSize: '7px' }}>● LIVE LIKVIDITET</div>
        <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.4 }}>TILLGÄNGLIGT SALDO</div>
        <div style={{ fontSize: '2.4rem', fontWeight: 900, margin: '2px 0', letterSpacing: '-1.5px' }}>
          14 250<span style={{ fontSize: '0.9rem', color: '#444', marginLeft: '4px' }}>SEK</span>
        </div>
        <button className="primary-btn" style={{ marginTop: '10px', padding: '10px', fontSize: '9px', background: 'var(--neon-mint)', color: '#000' }}>UTTAG VIA SWISH</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px' }}>
        <div className="glass-card" style={{ padding: '15px', borderRadius: '14px' }}>
          <div style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-purple)' }}>KARMA SCORE</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, margin: '2px 0' }}>850</div>
          <div style={{ height: '2px', background: '#111', marginTop: '8px' }}>
            <div style={{ width: '85%', height: '100%', background: 'var(--neon-purple)' }}></div>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '15px', borderRadius: '14px' }}>
          <div style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-mint)' }}>TOKENS</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, margin: '2px 0' }}>2 450</div>
          <div style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-mint)', opacity: 0.8, marginTop: '8px' }}>REDO ATT VÄXLA</div>
        </div>
      </div>

      <BegLoan price={5000} />

      <div style={{ marginTop: '25px' }}>
        <h3 style={{ marginBottom: '10px', fontWeight: 900, fontSize: '9px', letterSpacing: '1px' }}>TRANSAKTIONSHISTORIK</h3>
        <div className="glass-card" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden' }}>
          {[
            { label: "Sälj-bonus: iPhone 15 Pro", amount: "+142 Tokens", date: "IDAG" },
            { label: "Cashback: MacBook M3", amount: "+450 Tokens", date: "IGÅR" }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 15px', borderBottom: i === 0 ? '1px solid var(--border)' : 'none' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '10px' }}>{item.label}</div>
                <div style={{ fontSize: '8px', opacity: 0.3 }}>{item.date}</div>
              </div>
              <strong style={{ color: 'var(--neon-mint)', fontSize: '10px' }}>{item.amount}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
