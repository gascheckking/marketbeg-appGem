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
    <div style={{ 
      position: 'fixed', bottom: '15px', left: '15px', right: '15px', 
      zIndex: 9999, maxWidth: '400px', margin: '0 auto' 
    }}>
      <div className="glass-card" style={{ 
        padding: '15px', boxShadow: '0 20px 50px rgba(0,0,0,0.8)', 
        border: '1px solid rgba(157, 78, 221, 0.2)', background: 'rgba(5,5,5,0.95)' 
      }}>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', fontWeight: 900 }}>AI OPTIMERING ⚙️</h4>
        <p className="muted" style={{ fontSize: '10px', lineHeight: '1.4', marginBottom: '15px' }}>
          Vi använder AI för att matcha dina prylar. Genom att acceptera godkänner du vår datapolicy för en snabbare likviditetsmaskin.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={accept} style={{ flex: 2, padding: '10px', borderRadius: '8px', background: 'var(--neon-mint)', color: '#000', border: 'none', fontWeight: 900, cursor: 'pointer', fontSize: '10px' }}>ACCEPTERA</button>
          <button onClick={() => setShow(false)} style={{ flex: 1, padding: '10px', borderRadius: '8px', background: 'transparent', color: '#444', border: '1px solid #222', cursor: 'pointer', fontSize: '10px' }}>NEKA</button>
        </div>
      </div>
    </div>
  );
};
