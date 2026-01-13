// // components/LoadingAI.tsx
"use client";
import React from 'react';

export default function LoadingAI() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <div className="spinner" />
      <p style={{ marginTop: '20px', fontSize: '12px', fontWeight: 900, letterSpacing: '2px', color: 'var(--karma-green)' }}>ANALYSERAR FÖRRÅD...</p>
      <style jsx>{`
        .spinner {
          width: 40px; height: 40px; border: 3px solid #181818;
          border-top: 3px solid var(--karma-green); border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
