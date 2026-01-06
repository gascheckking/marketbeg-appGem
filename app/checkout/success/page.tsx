// // app/checkout/success/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <div className="icon-circle">✅</div>
      
      <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '20px' }}>AFFÄREN ÄR KLAR</h1>
      <p style={{ fontSize: '12px', opacity: 0.6, fontWeight: 700 }}>Pengarna hålls säkert tills du godkänt varan.</p>

      <div style={{ background: 'rgba(0,255,136,0.05)', padding: '15px', borderRadius: '15px', border: '1px solid rgba(0,255,136,0.1)', margin: '30px 0' }}>
        <p style={{ margin: 0, fontSize: '11px', color: 'var(--neon-mint)', fontWeight: 900 }}>
          BRA JOBBAT. Dina villkor förbättras automatiskt.
        </p>
      </div>

      <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '20px' }}>
        <h4 style={{ fontSize: '10px', opacity: 0.4, margin: '0 0 15px 0' }}>NÄSTA STEG</h4>
        <div className="step">Säljaren har fått fraktsedel</div>
        <div className="step">Paketet lämnas in inom 48h</div>
        <div className="step">Du godkänner vid leverans</div>
      </div>

      <div style={{ position: 'fixed', bottom: 'calc(20px + env(safe-area-inset-bottom))', left: '20px', right: '20px' }}>
        <button onClick={() => router.push('/')} className="primary-btn">TILLBAKA TILL HEM</button>
      </div>

      <style jsx>{`
        .icon-circle { width: 80px; height: 80px; background: var(--neon-mint); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 40px; margin: 0 auto; color: #000; }
        .step { font-size: 11px; fontWeight: 800; padding: 10px 0; border-bottom: 1px solid #111; }
        .primary-btn { width: 100%; padding: 18px; background: #fff; color: #000; border-radius: 18px; border: none; fontWeight: 900; }
      `}</style>
    </div>
  );
}
