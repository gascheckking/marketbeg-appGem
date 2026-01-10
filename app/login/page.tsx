// // app/orders/[id]/approve/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveOrderPage({ params }: { params: { id: string } }) {
  const [approved, setApproved] = useState(false);
  const router = useRouter();

  const handleFinalApprove = () => {
    alert("KARMA SHIELD: Utbetalning påbörjad!");
    router.push('/dashboard/seller');
  };

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <div className="glass-card" style={{ textAlign: 'center', padding: '30px 15px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'relative', width: '60px', height: '60px', margin: '0 auto 20px' }}>
          <div style={{ fontSize: '40px' }}>📦</div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--neon-mint)', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', boxShadow: '0 0 10px var(--neon-mint)' }}>✅</div>
        </div>

        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '8px' }}>Verifiera</h1>
        <p style={{ fontSize: '11px', lineHeight: '1.5', opacity: 0.6, margin: '0 10px' }}>
          Genom att godkänna bekräftar du att varan matchar AI-scannern. Pengarna släpps direkt.
        </p>
        
        <div style={{ margin: '25px 0', background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', textAlign: 'left' }}>
            <input type="checkbox" id="approve-check" onChange={(e) => setApproved(e.target.checked)} style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: 'var(--neon-mint)' }} />
            <label htmlFor="approve-check" style={{ fontSize: '11px', fontWeight: 600, lineHeight: '1.3' }}>
              Varan matchar. Släpp likviditet till säljaren.
            </label>
          </div>
        </div>

        <button disabled={!approved} onClick={handleFinalApprove} className="primary-btn" style={{ background: approved ? 'var(--neon-mint)' : 'rgba(255,255,255,0.05)', color: approved ? '#000' : '#444', fontSize: '11px' }}>
          {approved ? "SLÄPP PENGAR DIREKT" : "VÄNTAR PÅ GODKÄNNANDE"}
        </button>
        
        <button onClick={() => router.push('/dispute')} style={{ background: 'none', border: 'none', color: '#ff4444', marginTop: '15px', fontSize: '9px', fontWeight: 900 }}>
          RAPPORTERA PROBLEM
        </button>
      </div>
    </div>
  );
}
