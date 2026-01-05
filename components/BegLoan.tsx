// // components/BegLoan.tsx
"use client";
import { useEffect, useState } from "react";

export default function BegLoan({ price = 5000 }: { price?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="glow-card" style={{ 
      marginTop: '25px', padding: '30px', borderRadius: '32px', 
      background: 'linear-gradient(145deg, #050505 0%, #0a1510 100%)',
      border: '1px solid rgba(0, 255, 136, 0.2)',
      boxShadow: '0 10px 40px rgba(0, 255, 136, 0.05)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '2px', marginBottom: '6px' }}>LIQUIDITY ENGINE</div>
          <strong style={{ fontSize: '1.2rem', color: '#fff' }}>BegAI Instant Loan</strong>
          <p className="muted" style={{ fontSize: '11px', marginTop: '4px' }}>Baserat på din 98.2% Trust Score.</p>
        </div>
        <div style={{ fontSize: '28px' }}>🏦</div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <div style={{ fontSize: '36px', fontWeight: 900, color: '#fff', letterSpacing: '-2px' }}>
          {price.toLocaleString('sv-SE')} <span style={{ fontSize: '14px', opacity: 0.4 }}>SEK</span>
        </div>
        <div style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(0,255,136,0.1)', borderRadius: '8px', fontSize: '10px', color: 'var(--neon-mint)', fontWeight: 900, marginTop: '5px' }}>
          0% RÄNTA • UTBETALNING DIREKT
        </div>
      </div>
      
      <button className="primary-btn" style={{ background: 'var(--neon-mint)', color: '#000', fontWeight: 900 }}>
        ANSÖK PÅ 1 SEKUND
      </button>
    </div>
  );
}