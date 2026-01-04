// // components/OrderTrack.tsx
"use client";
import React from 'react';

export default function OrderTrack({ status }: { status: string }) {
  return (
    <div className="glass-card" style={{ maxWidth: '500px', margin: '20px auto', padding: '25px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900 }}>Leverans</h3>
        <span style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)', padding: '6px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 900 }}>{status.toUpperCase()}</span>
      </div>
      
      <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', textAlign: 'center', marginBottom: '25px' }}>
        <div style={{ fontSize: '70px', color: '#000' }}>🔳</div>
        <div style={{ color: '#000', fontWeight: 900, marginTop: '15px', fontSize: '14px' }}>POSTNORD QR</div>
        <p style={{ color: '#888', fontSize: '11px', margin: '5px 0 0' }}>Skanna hos närmaste ombud.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
          <span className="muted">Logistikpartner:</span>
          <strong style={{ fontWeight: 900 }}>POSTNORD</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
          <span className="muted">Deadline:</span>
          <strong style={{ color: '#ff4444', fontWeight: 900 }}>3 DAGAR KVAR</strong>
        </div>
      </div>
    </div>
  );
}
