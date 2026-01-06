// // components/OrderTrack.tsx
"use client";
import React from 'react';

export default function OrderTrack({ status = "Aktiv" }: { status?: string }) {
  return (
    <div className="glass-card" style={{ maxWidth: '500px', margin: '15px auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900 }}>LEVERANS</h3>
        <span style={{ 
          background: 'rgba(0,255,136,0.1)', 
          color: 'var(--neon-mint)', 
          padding: '4px 12px', 
          borderRadius: '20px', 
          fontSize: '9px', 
          fontWeight: 900,
          letterSpacing: '1px'
        }}>{status.toUpperCase()}</span>
      </div>
      
      <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', marginBottom: '20px' }}>
        {/* Simulerad QR-kod-behållare */}
        <div style={{ 
          width: '120px', height: '120px', margin: '0 auto', 
          border: '8px solid #000', borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '40px'
        }}>🔳</div>
        <div style={{ color: '#000', fontWeight: 900, marginTop: '12px', fontSize: '12px', letterSpacing: '1px' }}>POSTNORD QR</div>
        <p style={{ color: '#888', fontSize: '10px', margin: '4px 0 0', fontWeight: 600 }}>SKANNA HOS OMBUD</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
          <span className="muted" style={{ fontWeight: 800 }}>PARTNER:</span>
          <strong style={{ fontWeight: 900 }}>POSTNORD SE</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
          <span className="muted" style={{ fontWeight: 800 }}>DEADLINE:</span>
          <strong style={{ color: '#ff4444', fontWeight: 900 }}>48 TIMMAR KVAR</strong>
        </div>
      </div>
    </div>
  );
}
