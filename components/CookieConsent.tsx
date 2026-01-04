// // components/CookieConsent.tsx
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
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', zIndex: 9999, maxWidth: '400px' }}>
      <div className="glass-card" style={{ padding: '20px', border: '1px solid var(--neon-purple)', background: 'rgba(5,5,5,0.98)' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: 900 }}>AI OPTIMERING ⚙️</h4>
        <p className="muted" style={{ fontSize: '10px', lineHeight: '1.5', marginBottom: '15px' }}>
          Vi använder data för att kalibrera din matchnings-score och optimera likviditeten i loopen.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={accept} style={{ flex: 1, padding: '12px', borderRadius: '12px', background: 'var(--neon-mint)', color: '#000', fontWeight: 900, border: 'none', fontSize: '11px' }}>ACCEPTERA</button>
          <button onClick={() => setShow(false)} style={{ flex: 1, padding: '12px', borderRadius: '12px', background: 'transparent', color: '#444', border: '1px solid #222', fontSize: '11px' }}>NEKA</button>
        </div>
      </div>
    </div>
  );
};
