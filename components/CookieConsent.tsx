// // components/CookieConsent.tsx
"use client";
import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('karma_cookie_consent')) setShow(true);
  }, []);

  if (!show) return null;
  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', zIndex: 9999 }}>
      <div className="glass-card" style={{ padding: '20px', border: '1px solid var(--neon-purple)' }}>
        <p style={{ fontSize: '10px' }}>Vi använder data för att kalibrera din matchnings-score.</p>
        <button onClick={() => { localStorage.setItem('karma_cookie_consent', 'true'); setShow(false); }} style={{ background: 'var(--neon-mint)', color: '#000', border: 'none', padding: '10px', width: '100%', fontWeight: 900, borderRadius: '8px' }}>ACCEPTERA</button>
      </div>
    </div>
  );
};
