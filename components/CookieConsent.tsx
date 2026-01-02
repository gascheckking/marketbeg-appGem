"use client";
import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', width: '400px', zIndex: 9999 }}>
      <div className="glass-card" style={{ padding: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>Cookie-inställningar ⚙️</h4>
        <p className="muted" style={{ fontSize: '13px' }}>Vi använder AI för att optimera din köpupplevelse. Genom att acceptera godkänner du vår datapolicy.</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button onClick={() => setShow(false)} style={{ flex: 1, padding: '12px', borderRadius: '8px', background: 'var(--neon-mint)', color: '#000', border: 'none', fontWeight: 900, cursor: 'pointer' }}>ACCEPTERA</button>
          <button onClick={() => setShow(false)} style={{ flex: 1, padding: '12px', borderRadius: '8px', background: 'transparent', color: '#888', border: '1px solid #333', cursor: 'pointer' }}>ANPASSA</button>
        </div>
      </div>
    </div>
  );
};
