// // app/orders/[id]/approve/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveOrderPage() {
  const [approved, setApproved] = useState(false);
  const router = useRouter();

  const handleFinalApprove = () => {
    // Här triggas Karma Shield release
    alert("KARMA SHIELD: Likviditet släppt till säljaren.");
    router.push('/wallet');
  };

  return (
    <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
      <div className="card" style={{ textAlign: 'center', padding: '50px 25px', width: '100%' }}>
        <div style={{ fontSize: '60px', marginBottom: '25px' }}>📦</div>

        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '12px' }}>Verifiera Leverans</h1>
        <p className="text-small" style={{ opacity: 0.5, lineHeight: '1.6', marginBottom: '35px' }}>
          Genom att godkänna bekräftar du att varan matchar AI-scannern. Karma Shield släpper då betalningen från valvet direkt.
        </p>
        
        <div 
          onClick={() => setApproved(!approved)}
          style={{ 
            marginBottom: '35px', background: 'rgba(255,255,255,0.02)', padding: '22px', 
            borderRadius: '24px', border: approved ? '1px solid var(--karma-green)' : '1px solid var(--border)',
            textAlign: 'left', cursor: 'pointer', transition: '0.2s'
          }}
        >
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ 
              width: '24px', height: '24px', borderRadius: '8px', 
              border: '2px solid var(--karma-green)', background: approved ? 'var(--karma-green)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '14px', fontWeight: 900
            }}>
              {approved && "✓"}
            </div>
            <label style={{ fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
              Jag har kontrollerat varan. Släpp betalningen.
            </label>
          </div>
        </div>

        <button 
          disabled={!approved} 
          onClick={handleFinalApprove} 
          className="primary-btn" 
          style={{ 
            background: approved ? 'var(--karma-green)' : 'var(--border)', 
            color: approved ? '#000' : '#444',
            opacity: approved ? 1 : 0.5
          }}
        >
          GODKÄNN & SLÄPP PENGAR
        </button>
        
        <button 
          onClick={() => router.push('/support')} 
          style={{ background: 'none', border: 'none', color: '#ff4444', marginTop: '30px', fontSize: '11px', fontWeight: 900, opacity: 0.8, letterSpacing: '0.5px' }}
        >
          RAPPORTERA PROBLEM
        </button>
      </div>
    </div>
  );
}
