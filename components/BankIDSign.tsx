// // components/BankIDSign.tsx
"use client";
import React, { useState } from 'react';

export default function BankIDSign({ onComplete }: { onComplete: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSign = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 2000);
  };

  return (
    <div style={{ background: '#121212', padding: '30px', borderRadius: '12px', textAlign: 'center', border: '1px solid #282828' }}>
      <div style={{ fontSize: '40px', marginBottom: '20px' }}>🏦</div>
      <h3 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '10px' }}>Signera med BankID</h3>
      <p style={{ fontSize: '12px', color: '#b3b3b3', marginBottom: '25px' }}>Karma använder BankID för att säkerställa att alla affärer är 100% trygga.</p>
      
      <button 
        onClick={handleSign}
        className="pill-btn" 
        style={{ width: '100%', background: loading ? '#333' : '#fff', color: '#000' }}
      >
        {loading ? 'ÖPPNAR BANKID...' : 'ÖPPNA BANKID'}
      </button>
    </div>
  );
}
