"use client";
import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('karma_cookie_consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('karma_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', width: '400px', zIndex: 9999 }}>
      <div className="glass-card" style={{ padding: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>AI Optimering ⚙️</h4>
        <p className="muted" style={{ fontSize: '13px', lineHeight: '1.5' }}>
          Vi använder AI för att matcha dina prylar med rätt köpare i realtid. Genom att acceptera godkänner du vår datapolicy för en snabbare likviditetsmaskin.
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button onClick={accept} style={{ flex: 1, padding: '12px', borderRadius: '12px', background: 'var(--neon-mint)', color: '#000', border: 'none', fontWeight: 900, cursor: 'pointer', fontSize: '12px' }}>ACCEPTERA</button>
          <button onClick={() => setShow(false)} style={{ flex: 1, padding: '12px', borderRadius: '12px', background: 'transparent', color: '#888', border: '1px solid #333', cursor: 'pointer', fontSize: '12px' }}>ANPASSA</button>
        </div>
      </div>
    </div>
  );
};
