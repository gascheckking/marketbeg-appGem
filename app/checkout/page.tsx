"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ShippingAI from '@/components/ShippingAI';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px', letterSpacing: '-2px' }}>Slutför köp 🛍️</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="glass-card">
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Din beställning</h3>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: '#111', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>💻</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800 }}>MacBook Pro M3</div>
                <div className="muted" style={{ fontSize: '12px' }}>Säljare: Erik L. (99% Trust)</div>
              </div>
              <div style={{ fontWeight: 900, fontSize: '1.2rem' }}>18 900 kr</div>
            </div>
          </div>

          <ShippingAI itemWeight="1.5kg" />
        </div>

        <div className="glass-card" style={{ height: 'fit-content', border: '1px solid var(--neon-mint)' }}>
          <h3 style={{ marginBottom: '25px' }}>Betalning</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span className="muted">Objekt</span>
            <span>18 900 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <span className="muted">Frakt</span>
            <span>49 kr</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '20px', marginBottom: '40px' }}>
            <strong style={{ fontSize: '1.2rem' }}>Totalt</strong>
            <strong style={{ fontSize: '1.5rem', color: 'var(--neon-mint)' }}>18 949 kr</strong>
          </div>

          <button 
            onClick={() => setStep(2)}
            className="primary-btn"
            style={{ width: '100%', background: '#fff', color: '#000' }}
          >
            {step === 1 ? 'BETALA MED BANKID' : 'VERIFIERAR...'}
          </button>
          
          <p className="muted" style={{ fontSize: '11px', textAlign: 'center', marginTop: '20px' }}>
            🔒 Pengarna hålls säkert av Karma Shield tills du tagit emot och godkänt varan.
          </p>
        </div>
      </div>
    </div>
  );
}
