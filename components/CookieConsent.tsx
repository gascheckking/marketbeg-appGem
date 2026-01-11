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
      position: 'fixed', bottom: '110px', left: '20px', right: '20px', zLimit: 10000,
      animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div className="card" style={{ 
        padding: '24px', border: '1px solid var(--karma-green)',
        background: 'rgba(5, 5, 5, 0.98)', boxShadow: '0 20px 60px rgba(0,0,0,0.9)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <span style={{ fontSize: '24px' }}>🔮</span>
          <p style={{ fontSize: '11px', margin: 0, fontWeight: 700, lineHeight: '1.5', opacity: 0.9 }}>
            Vi kalibrerar din <span style={{ color: 'var(--karma-green)' }}>Match-Score</span> med cookies för en sömlös upplevelse i loopen.
          </p>
        </div>
        <button 
          onClick={() => { localStorage.setItem('karma_cookie_consent', 'true'); setShow(false); }} 
          className="primary-btn"
          style={{ fontSize: '10px', padding: '14px' }}
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
