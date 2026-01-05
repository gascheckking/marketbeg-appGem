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
          fontSize: '40px', animation: 'pulse 1.5s infinite ease-in-out' 
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
      <h3 style={{ fontWeight: 900, fontSize: '14px', letterSpacing: '1px', color: 'var(--neon-mint)', margin: 0 }}>
        ANALYSERSAR LIKVIDITET...
      </h3>
      <p className="muted" style={{ fontSize: '10px', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Optimera matchning via BegAI Engine
      </p>
      
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
