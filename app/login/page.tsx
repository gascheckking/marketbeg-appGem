// // app/login/page.tsx
"use client";
import React from 'react';

export default function LoginPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}>
      <div style={{ fontSize: '40px', fontWeight: 900, color: 'var(--karma-green)', marginBottom: '10px' }}>Karma</div>
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '40px' }}>Verifierad cirkulär ekonomi.</h2>
      
      <button className="pill-btn" style={{ background: '#fff', marginBottom: '12px' }}>
        Logga in med BankID
      </button>
      <p style={{ fontSize: '11px', textAlign: 'center', opacity: 0.5 }}>
        Vi använder BankID för att garantera 100% Trust i systemet.
      </p>
    </div>
  );
}
