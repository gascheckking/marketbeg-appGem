// // app/checkout/page.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [shieldActive, setShieldActive] = useState(true);
  const router = useRouter();

  const itemPrice = 11450;
  const shieldFee = shieldActive ? 149 : 0;
  const total = itemPrice + shieldFee;

  return (
    <div className="page-wrapper" style={{ padding: '20px', animation: 'fadeIn 0.4s ease' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>KASSA</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-mint)' }}></div>
          <span style={{ fontSize: '9px', fontWeight: 800, opacity: 0.6, letterSpacing: '1px' }}>SÄKER BETALNING</span>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* KARMA SHIELD */}
        <div style={{ 
          padding: '20px', borderRadius: '24px',
          background: shieldActive ? 'rgba(157, 78, 221, 0.05)' : 'rgba(255,255,255,0.02)',
          border: shieldActive ? '1px solid var(--neon-purple)' : '1px solid #222'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 900 }}>🛡️ KARMA SHIELD</h3>
              <p style={{ fontSize: '10px', marginTop: '6px', opacity: 0.5, lineHeight: '1.4' }}>
                Pengarna släpps till säljaren när varan är godkänd.
              </p>
            </div>
            <div onClick={() => setShieldActive(!shieldActive)} className="toggle-btn">
              <div style={{ left: shieldActive ? '23px' : '3px' }} className="toggle-dot"></div>
            </div>
          </div>
        </div>

        {/* ORDER SPECS */}
        <div style={{ padding: '25px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid #111' }}>
          <div className="row"><span>OBJEKT</span><span>iPhone 15 Pro Max</span></div>
          <div className="row"><span>PRIS</span><span>{itemPrice.toLocaleString()} KR</span></div>
          <div className="row" style={{ color: 'var(--neon-purple)' }}><span>FRAKT & SKYDD</span><span>{shieldFee} KR</span></div>
          <div className="total-row">
            <span>TOTALT</span>
            <span style={{ color: 'var(--neon-mint)' }}>{total.toLocaleString()} KR</span>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '9px', opacity: 0.3, fontWeight: 800 }}>
          TRANSAKTIONEN KRYPTERAS VIA BANKID
        </p>
      </div>

      <div className="sticky-bottom">
        <button onClick={() => router.push('/checkout/success')} className="swish-btn">
          BETALA MED BANKID
        </button>
      </div>

      <style jsx>{`
        .row { display: flex; justify-content: space-between; margin-bottom: 12px; fontSize: 11px; fontWeight: 800; opacity: 0.8; }
        .total-row { display: flex; justify-content: space-between; border-top: 1px solid #222; paddingTop: 15px; marginTop: 15px; fontWeight: 900; fontSize: 16px; }
        .toggle-btn { width: 44px; height: 24px; background: ${shieldActive ? 'var(--neon-purple)' : '#333'}; borderRadius: 12px; position: relative; cursor: pointer; }
        .toggle-dot { width: 18px; height: 18px; background: #fff; borderRadius: 50%; position: absolute; top: 3px; transition: 0.3s; }
        .sticky-bottom { position: fixed; bottom: 0; left: 0; right: 0; padding: 20px 25px calc(20px + env(safe-area-inset-bottom)); background: rgba(2,4,10,0.9); backdrop-filter: blur(20px); border-top: 1px solid #111; }
        .swish-btn { width: 100%; padding: 18px; borderRadius: 18px; background: #fff; color: #000; fontWeight: 900; border: none; fontSize: 14px; }
      `}</style>
    </div>
  );
}
