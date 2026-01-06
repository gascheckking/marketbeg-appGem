// // app/checkout/page.tsx
"use client";
import React, { useState } from 'react';
import ShippingAI from '@/components/ShippingAI';

export default function CheckoutPage() {
  const [shieldActive, setShieldActive] = useState(true);

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>Kassan</h1>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        <div className="glass-card" style={{ 
          padding: '15px', 
          border: shieldActive ? '1px solid var(--neon-purple)' : '1px solid rgba(255,255,255,0.1)',
          background: shieldActive ? 'rgba(157, 78, 221, 0.05)' : 'transparent',
          borderRadius: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '12px', fontWeight: 900 }}>🛡️ Karma Shield</h3>
              <p style={{ fontSize: '10px', marginTop: '2px', opacity: 0.5 }}>Säker escrow-betalning via KARMA.</p>
            </div>
            <input 
              type="checkbox" 
              checked={shieldActive} 
              onChange={() => setShieldActive(!shieldActive)}
              style={{ width: '20px', height: '20px', accentColor: 'var(--neon-purple)' }}
            />
          </div>
        </div>

        <ShippingAI itemWeight="1.2kg" />

        <div className="glass-card" style={{ padding: '20px', marginTop: '5px', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
            <span style={{ opacity: 0.5 }}>Varor</span>
            <span>11 450 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
            <span style={{ opacity: 0.5 }}>Shield & Frakt</span>
            <span>149 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0 10px 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '10px' }}>
            <strong style={{ fontSize: '1.2rem', fontWeight: 900 }}>Total</strong>
            <strong style={{ fontSize: '1.2rem', color: 'var(--neon-mint)', fontWeight: 900 }}>11 599 kr</strong>
          </div>
          <button className="primary-btn" style={{ background: '#fff', color: '#000', padding: '14px', fontSize: '12px', fontWeight: 900 }}>BETALA MED BANKID</button>
        </div>
      </div>
    </div>
  );
}
