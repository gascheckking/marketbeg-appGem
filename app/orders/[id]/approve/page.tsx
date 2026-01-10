// // app/orders/[id]/approve/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveOrderPage() {
  const [approved, setApproved] = useState(false);
  const router = useRouter();

  const handleFinalApprove = () => {
    alert("KARMA SHIELD: Likviditet släppt till säljaren.");
    router.push('/dashboard/seller');
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '40px' }}>
      <div style={{ textAlign: 'center', padding: '40px 20px', borderRadius: '32px', background: '#111', border: '1px solid #222' }}>
        <div style={{ fontSize: '50px', marginBottom: '20px' }}>📦</div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1px', marginBottom: '10px' }}>Verifiera Leverans</h1>
        <p style={{ fontSize: '13px', opacity: 0.4, lineHeight: '1.5', marginBottom: '30px' }}>
          Genom att godkänna bekräftar du att varan matchar AI-scannern. Pengarna släpps från valvet direkt.
        </p>
        
        <div style={{ margin: '30px 0', background: '#000', padding: '20px', borderRadius: '20px', border: '1px solid #222', textAlign: 'left' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <input 
              type="checkbox" 
              id="approve-check" 
              onChange={(e) => setApproved(e.target.checked)} 
              style={{ width: '22px', height: '22px', accentColor: '#1DB954' }} 
            />
            <label htmlFor="approve-check" style={{ fontSize: '12px', fontWeight: 700 }}>
              Jag har kontrollerat varan. Släpp betalningen.
            </label>
          </div>
        </div>

        <button 
          disabled={!approved} 
          onClick={handleFinalApprove} 
          className="primary-btn" 
          style={{ background: approved ? '#1DB954' : '#222', color: approved ? '#000' : '#444' }}
        >
          GODKÄNN & SLÄPP PENGAR
        </button>
        
        <button onClick={() => router.push('/dispute')} style={{ background: 'none', border: 'none', color: '#ff4444', marginTop: '25px', fontSize: '11px', fontWeight: 900, opacity: 0.6 }}>
          RAPPORTERA PROBLEM
        </button>
      </div>
    </div>
  );
}
