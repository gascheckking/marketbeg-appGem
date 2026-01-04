// // app/orders/[id]/approve/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveOrderPage({ params }: { params: { id: string } }) {
  const [approved, setApproved] = useState(false);
  const router = useRouter();

  const handleFinalApprove = () => {
    // Karma Shield utbetalning
    alert("KARMA SHIELD: Utbetalning påbörjad!");
    router.push('/dashboard/seller');
  };

  return (
    <div className="page-wrapper" style={{ padding: '20px' }}>
      <div className="glass-card" style={{ textAlign: 'center', padding: '40px 20px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 25px' }}>
          <div style={{ fontSize: '50px' }}>📦</div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--neon-mint)', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', boxShadow: '0 0 15px var(--neon-mint)' }}>✅</div>
        </div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '10px', letterSpacing: '-1px' }}>Verifiera Leverans</h1>
        <p className="muted" style={{ fontSize: '12px', lineHeight: '1.6' }}>
          Genom att godkänna bekräftar du att varan matchar AI-analysen och beskrivningen.
        </p>
        
        <div style={{ margin: '30px 0', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', textAlign: 'left' }}>
            <input 
              type="checkbox" 
              id="approve-check"
              onChange={(e) => setApproved(e.target.checked)}
              style={{ width: '22px', height: '22px', marginTop: '3px', accentColor: 'var(--neon-mint)' }} 
            />
            <label htmlFor="approve-check" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '1.4' }}>
              Jag har kontrollerat varan och godkänner att pengarna betalas ut till säljaren.
            </label>
          </div>
        </div>

        <button 
          disabled={!approved}
          onClick={handleFinalApprove}
          className="primary-btn"
          style={{ 
            background: approved ? 'var(--neon-mint)' : 'rgba(255,255,255,0.05)', 
            color: approved ? '#000' : '#444'
          }}
        >
          {approved ? "SLÄPP PENGAR DIREKT" : "VÄNTAR PÅ GODKÄNNANDE"}
        </button>
        
        <button 
          style={{ background: 'none', border: 'none', color: '#ff4444', marginTop: '20px', fontSize: '11px', fontWeight: 900, letterSpacing: '1px' }}
          onClick={() => router.push('/dispute')}
        >
          RAPPORTERA PROBLEM
        </button>
      </div>
    </div>
  );
}
