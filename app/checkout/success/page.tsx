// // app/checkout/success/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <div style={{ width: '80px', height: '80px', background: '#1DB954', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '0 auto 30px' }}>
        ✅
      </div>
      
      <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '10px' }}>KLART!</h1>
      <p style={{ fontSize: '14px', opacity: 0.5, fontWeight: 600, lineHeight: '1.5' }}>
        Pengarna är reserverade i loopen.<br/>Varan skickas inom kort.
      </p>

      <div style={{ background: '#111', padding: '25px', borderRadius: '24px', margin: '40px 0', textAlign: 'left', border: '1px solid #1DB95422' }}>
        <h4 style={{ fontSize: '10px', opacity: 0.3, margin: '0 0 15px 0', letterSpacing: '1px' }}>NÄSTA STEG</h4>
        {[
          "Säljaren bokar frakt automatiskt",
          "Du får en notis när paketet lämnas in",
          "Verifiera varan vid ankomst"
        ].map((step, i) => (
          <div key={i} style={{ fontSize: '12px', fontWeight: 700, padding: '12px 0', borderBottom: i < 2 ? '1px solid #222' : 'none', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#1DB954' }}>•</span> {step}
          </div>
        ))}
      </div>

      <button onClick={() => router.push('/feed')} className="primary-btn">TILLBAKA TILL FLÖDET</button>
    </div>
  );
}
