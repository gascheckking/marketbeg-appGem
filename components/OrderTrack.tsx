"use client";
import React from 'react';

export default function OrderTrack({ status }: { status: string }) {
  return (
    <div className="glass-card" style={{ maxWidth: '600px', margin: '20px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h3 style={{ margin: 0 }}>Din Leverans</h3>
        <span style={{ 
          background: 'rgba(0,255,136,0.1)', 
          color: 'var(--neon-mint)', 
          padding: '5px 15px', 
          borderRadius: '20px', 
          fontSize: '12px', 
          fontWeight: 900 
        }}>{status}</span>
      </div>
      
      {/* QR-kod för inlämning hos ombud */}
      <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ fontSize: '60px', color: '#000' }}>🔳</div>
        <div style={{ color: '#000', fontWeight: 900, marginTop: '10px' }}>QR-KOD FÖR OMBUD</div>
        <p style={{ color: '#666', fontSize: '12px' }}>Visa denna vid inlämning hos PostNord/Bring.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="muted">Fraktbolag:</span>
          <strong>Bring</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="muted">Deadline för inlämning:</span>
          <strong style={{ color: '#ff4444' }}>4 arbetsdagar kvar</strong>
        </div>
      </div>

      <button className="glass-card" style={{ width: '100%', marginTop: '30px', fontWeight: 900 }}>KONTAKTA SUPPORT</button>
    </div>
  );
}
