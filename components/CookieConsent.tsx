// // components/CookieConsent.tsx
"use client";
import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('karma_cookie_consent')) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;
  
  return (
    <div style={{ 
      position: 'fixed', bottom: '100px', left: '15px', right: '15px', zIndex: 10000,
      animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div className="glass-card" style={{ 
        padding: '18px', border: '1px solid var(--neon-purple)',
        background: 'rgba(5, 5, 5, 0.95)', boxShadow: '0 -10px 40px rgba(0,0,0,0.8)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '20px' }}>🔮</span>
          <p style={{ fontSize: '10px', margin: 0, fontWeight: 700, lineHeight: '1.4' }}>
            Vi kalibrerar din <span style={{ color: 'var(--neon-purple)' }}>Match-Score</span> med cookies för en sömlös upplevelse.
          </p>
        </div>
        <button 
          onClick={() => { localStorage.setItem('karma_cookie_consent', 'true'); setShow(false); }} 
          className="primary-btn"
          style={{ background: 'var(--neon-purple)', color: '#fff', fontSize: '9px', padding: '12px' }}
        >
          STARTA KALIBRERING
        </button>
      </div>
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
