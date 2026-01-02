"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  return (
    <div style={{ padding: '60px', width: '100%', minHeight: '100vh' }}>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px', letterSpacing: '-1px' }}>Slutför köp 🛍️</h1>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <div style={{ flex: 1, padding: '25px', background: 'rgba(157, 78, 221, 0.05)', border: '1px solid rgba(157, 78, 221, 0.2)', borderRadius: '20px' }}>
            <p className="muted" style={{ fontSize: '10px', fontWeight: 800 }}>VARUOBJEKT</p>
            <h3 style={{ margin: '5px 0' }}>MacBook Pro M3</h3>
            <p style={{ fontWeight: 900, color: '#00ff88', fontSize: '20px' }}>18 900 kr</p>
          </div>
          <div style={{ flex: 1, padding: '25px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="muted" style={{ fontSize: '10px', fontWeight: 800 }}>FRAKT</p>
            <p style={{ margin: '5px 0' }}>Karma Blue Loop</p>
            <p style={{ fontWeight: 700 }}>49 kr</p>
          </div>
        </div>

        {/* BankID Sektion */}
        <div style={{ textAlign: 'center', padding: '50px', background: 'rgba(0,0,0,0.2)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '50px', marginBottom: '20px' }}>🆔</div>
          <h2 style={{ marginBottom: '10px' }}>Verifiera betalning</h2>
          <p className="muted" style={{ maxWidth: '300px', margin: '0 auto' }}>Dina pengar skyddas av Karma Shield tills du godkänt varan.</p>
          
          <button 
            onClick={() => setStep(2)}
            className="primary-btn"
            style={{ marginTop: '40px', width: '100%', maxWidth: '300px' }}
          >ÖPPNA BANKID</button>
        </div>
      </div>
    </div>
  );
}
