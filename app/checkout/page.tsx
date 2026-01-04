// // app/checkout/page.tsx
"use client";
import React, { useState } from 'react';
import ShippingAI from '@/components/ShippingAI';

export default function CheckoutPage() {
  const [shieldActive, setShieldActive] = useState(true);

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>Kassan</h1>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Karma Shield Selector */}
        <div className="glass-card" style={{ 
          padding: '20px', 
          border: shieldActive ? '1px solid var(--neon-purple)' : '1px solid rgba(255,255,255,0.1)',
          background: shieldActive ? 'linear-gradient(135deg, rgba(157, 78, 221, 0.05), transparent)' : 'transparent'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 900 }}>🛡️ Karma Shield (Escrow)</h3>
              <p className="muted" style={{ fontSize: '11px', marginTop: '4px' }}>Vi håller pengarna tills du godkänt varan.</p>
            </div>
            <input 
              type="checkbox" 
              checked={shieldActive} 
              onChange={() => setShieldActive(!shieldActive)}
              style={{ width: '22px', height: '22px', accentColor: 'var(--neon-purple)' }}
            />
          </div>
        </div>

        <ShippingAI itemWeight="1.2kg" />

        {/* Summa & Betala */}
        <div className="glass-card" style={{ padding: '25px', marginTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
            <span className="muted">Varor</span>
            <span>11 450 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
            <span className="muted">Karma Shield & Frakt</span>
            <span>149 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '15px' }}>
            <strong style={{ fontSize: '1.4rem', fontWeight: 900 }}>Total</strong>
            <strong style={{ fontSize: '1.4rem', color: 'var(--neon-mint)', fontWeight: 900 }}>11 599 kr</strong>
          </div>
          <button className="primary-btn" style={{ background: '#fff', color: '#000', marginTop: '10px' }}>BETALA MED BANKID</button>
        </div>
      </div>
    </div>
  );
}
