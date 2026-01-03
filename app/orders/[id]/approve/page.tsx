"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApproveOrderPage({ params }: { params: { id: string } }) {
  const [approved, setApproved] = useState(false);
  const router = useRouter();

  const handleFinalApprove = () => {
    // Här triggas utbetalning till säljaren i backend
    alert("Karma Shield: Utbetalning påbörjad till säljaren!");
    router.push('/dashboard');
  };

  return (
    <div className="page-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="glass-card" style={{ textAlign: 'center', padding: '50px' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>📦</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '10px' }}>Har du fått varan?</h1>
        <p className="muted">Kontrollera att varan stämmer överens med beskrivningen innan du godkänner.</p>
        
        <div style={{ margin: '40px 0', textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <input 
              type="checkbox" 
              id="check1" 
              onChange={(e) => setApproved(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: 'var(--neon-mint)' }} 
            />
            <label htmlFor="check1" style={{ fontSize: '14px' }}>Jag har kontrollerat skicket och godkänner varan.</label>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--neon-purple)', fontWeight: 800 }}>
            ⚠️ EFTER GODKÄNNANDE KAN PENGARNA INTE LÄNGRE STOPPAS.
          </p>
        </div>

        <button 
          disabled={!approved}
          onClick={handleFinalApprove}
          className="primary-btn" 
          style={{ 
            width: '100%', 
            background: approved ? 'var(--neon-mint)' : '#222', 
            color: approved ? '#000' : '#444',
            opacity: approved ? 1 : 0.5
          }}
        >
          GODKÄNN OCH SLÄPP PENGAR
        </button>
        
        <button 
          style={{ background: 'none', border: 'none', color: '#ff4444', marginTop: '20px', fontSize: '12px', fontWeight: 800, cursor: 'pointer' }}
          onClick={() => router.push('/dispute')}
        >
          NÅGOT ÄR FEL? ÖPPNA TVIST
        </button>
      </div>
    </div>
  );
}
