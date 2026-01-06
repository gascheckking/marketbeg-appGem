// // components/LoadingAI.tsx
"use client";
import React from 'react';

export default function LoadingAI() {
  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
      padding: '40px', textAlign: 'center', minHeight: '200px'
    }}>
      <div className="scanner-container" style={{ position: 'relative', width: '80px', height: '80px', marginBottom: '20px' }}>
        <div style={{ 
          fontSize: '40px', animation: 'pulse 1.5s infinite ease-in-out',
          filter: 'drop-shadow(0 0 10px var(--neon-mint))'
        }}>🧠</div>
        <div className="scanner-laser" style={{
          position: 'absolute',
          width: '100%',
          height: '2px',
          background: 'var(--neon-mint)',
          top: '50%',
          boxShadow: '0 0 15px var(--neon-mint)',
          animation: 'scan 2s infinite linear'
        }} />
      </div>
      <h3 style={{ fontWeight: 900, fontSize: '13px', letterSpacing: '1px', color: 'var(--neon-mint)', margin: 0 }}>
        ANALYSERSAR LIKVIDITET...
      </h3>
      <p style={{ fontSize: '9px', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.4, fontWeight: 800 }}>
        Optimera matchning via KARMA Engine
      </p>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
