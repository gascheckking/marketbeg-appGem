// // app/wallet/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import BegLoan from "@/components/BegLoan";

export default function Wallet() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="page-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>VAULT</h1>
        <p className="muted" style={{ fontSize: '12px', fontWeight: 700, marginTop: '5px' }}>DIN DIGITALA PLÅNBOK</p>
      </header>

      <div className="glass-card" style={{ padding: '30px', position: 'relative', background: 'linear-gradient(145deg, #050505 0%, #0a1015 100%)' }}>
        <div style={{ position: 'absolute', top: '15px', right: '20px', color: 'var(--neon-mint)', fontWeight: 900, fontSize: '9px' }}>● LIVE LIKVIDITET</div>
        <small className="muted" style={{ fontWeight: 800, fontSize: '9px' }}>TILLGÄNGLIGT SALDO</small>
        <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-2px' }}>
          14 250,00 <span style={{fontSize: '1rem', color: '#444'}}>SEK</span>
        </div>
      </div>

      <BegLoan price={5000} />

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ marginBottom: '15px', fontWeight: 900, fontSize: '1rem' }}>TRANSAKTIONSHISTORIK</h3>
        <div className="glass-card" style={{ padding: '0' }}>
          {[
            { label: "Sälj-bonus: iPhone 15 Pro", amount: "+142 Tokens", date: "Idag" },
            { label: "Cashback: MacBook M3", amount: "+450 Tokens", date: "Igår" }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
              <div><div style={{ fontWeight: 800, fontSize: '12px' }}>{item.label}</div><small className="muted" style={{ fontSize: '9px' }}>{item.date}</small></div>
              <strong style={{ color: 'var(--neon-mint)', fontSize: '13px' }}>{item.amount}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
