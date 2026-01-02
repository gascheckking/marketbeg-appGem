"use client";
import React, { useState } from 'react';
import ShippingAI from '@/components/ShippingAI';

export default function CheckoutPage() {
  const [shieldActive, setShieldActive] = useState(true);

  return (
    <div className="page-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px' }}>Kassa</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Karma Shield Section */}
          <div className="glass-card" style={{ border: shieldActive ? '1px solid var(--neon-purple)' : '1px solid var(--border)', background: shieldActive ? 'rgba(157, 78, 221, 0.03)' : 'transparent' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0 }}>🛡️ Karma Shield (Escrow)</h3>
                <p className="muted" style={{ fontSize: '13px', marginTop: '5px' }}>Säljaren får pengarna först när du godkänt varan.</p>
              </div>
              <input 
                type="checkbox" 
                checked={shieldActive} 
                onChange={() => setShieldActive(!shieldActive)}
                style={{ width: '25px', height: '25px', accentColor: 'var(--neon-purple)', cursor: 'pointer' }}
              />
            </div>
            {shieldActive && (
              <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', fontSize: '12px', borderLeft: '3px solid var(--neon-purple)' }}>
                Dina pengar skyddas vid fraktskador och utebliven leverans.
              </div>
            )}
          </div>

          <ShippingAI itemWeight="1.2kg" />
        </div>

        {/* Order Summary */}
        <div className="glass-card" style={{ height: 'fit-content' }}>
          <h3 style={{ marginBottom: '20px' }}>Sammanställning</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span className="muted">Varor</span>
            <span>450 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span className="muted">Frakt (Bring)</span>
            <span>49 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderTop: '1px solid var(--border)', marginTop: '20px' }}>
            <strong style={{ fontSize: '1.2rem' }}>Total</strong>
            <strong style={{ fontSize: '1.2rem', color: 'var(--neon-mint)' }}>499 kr</strong>
          </div>
          <button className="primary-btn" style={{ width: '100%', background: '#fff', color: '#000' }}>BETALA MED BANKID</button>
        </div>
      </div>
    </div>
  );
}
