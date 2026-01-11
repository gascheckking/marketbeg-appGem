// // app/orders/[id]/approve/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveOrderPage() {
  const [approved, setApproved] = useState(false);
  const router = useRouter();

  const handleFinalApprove = () => {
    alert("KARMA SHIELD: Utbetalning påbörjad!");
    router.push('/wallet');
  };

  return (
    <div className="page-wrapper">
      <div className="card" style={{ textAlign: 'center', padding: '50px 25px', borderRadius: '32px' }}>
        <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 25px' }}>
          <div style={{ fontSize: '50px' }}>📦</div>
          <div style={{ 
            position: 'absolute', bottom: 0, right: 0, background: 'var(--karma-green)', 
            borderRadius: '50%', width: '24px', height: '24px', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', fontSize: '12px', 
            boxShadow: '0 0 15px var(--karma-green)', color: '#000' 
          }}>✓</div>
        </div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '10px' }}>Verifiera Köp</h1>
        <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.5, margin: '0 20px 30px' }}>
          Genom att godkänna bekräftar du att varan matchar beskrivningen. Karma Shield släpper likviditeten direkt.
        </p>
        
        <div 
          onClick={() => setApproved(!approved)}
          style={{ 
            margin: '25px 0', background: 'rgba(255,255,255,0.02)', padding: '20px', 
            borderRadius: '20px', border: approved ? '1px solid var(--karma-green)' : '1px solid var(--border)',
            cursor: 'pointer', transition: '0.2s'
          }}
        >
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', textAlign: 'left' }}>
            <div style={{ 
              width: '22px', height: '22px', borderRadius: '6px', 
              border: '2px solid var(--karma-green)', background: approved ? 'var(--karma-green)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000'
            }}>{approved && "✓"}</div>
            <label style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1.3', cursor: 'pointer' }}>
              Varan matchar. Släpp pengar till säljaren.
            </label>
          </div>
        </div>

        <button 
          disabled={!approved} 
          onClick={handleFinalApprove} 
          className="primary-btn" 
          style={{ 
            background: approved ? 'var(--karma-green)' : 'var(--border)', 
            color: approved ? '#000' : '#444' 
          }}
        >
          {approved ? "SLÄPP PENGAR DIREKT" : "VÄNTAR PÅ GODKÄNNANDE"}
        </button>
        
        <button onClick={() => router.push('/support')} style={{ background: 'none', border: 'none', color: '#ff4444', marginTop: '25px', fontSize: '11px', fontWeight: 900, opacity: 0.6 }}>
          RAPPORTERA PROBLEM
        </button>
      </div>
    </div>
  );
}
