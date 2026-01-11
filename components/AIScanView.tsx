// // components/AIScanView.tsx
"use client";
import React, { useState, useEffect } from 'react';

export default function AIScanView() {
  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 2000 }}>
      {/* Kameravy-simulering */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6, background: 'linear-gradient(45deg, #111, #222)' }}>
        {/* Här skulle kameraströmmen ligga */}
      </div>

      {/* Scanning-ramar */}
      <div className="scanner-frame" />

      {/* UI Overlay */}
      <div style={{ position: 'absolute', bottom: '40px', left: 0, right: 0, padding: '0 30px', textAlign: 'center' }}>
        <div style={{ 
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', 
          padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' 
        }}>
          <div style={{ color: '#1DB954', fontSize: '10px', fontWeight: 900, letterSpacing: '2px', marginBottom: '10px' }}>
            AI-IDENTIFIERING PÅGÅR
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 900, margin: 0 }}>Håll objektet i ramen</h2>
          <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '5px' }}>Vi analyserar skick, modell och efterfrågan i realtid.</p>
        </div>
      </div>

      <style jsx>{`
        .scanner-frame {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 280px; height: 380px;
          border: 2px solid rgba(29, 185, 84, 0.3); border-radius: 30px;
        }
        .scanner-frame::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: #1DB954; box-shadow: 0 0 15px #1DB954;
          animation: scanLine 2.5s ease-in-out infinite;
        }
        @keyframes scanLine { 
          0%, 100% { top: 5%; } 
          50% { top: 95%; } 
        }
      `}</style>
    </div>
  );
}
