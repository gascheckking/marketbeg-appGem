// // components/MatchScanner.tsx
"use client";
import React, { useState } from 'react';

export default function MatchScanner() {
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'MATCHED' | 'SWAP_FOUND'>('IDLE');

  const startScan = () => {
    setStatus('SCANNING');
    setTimeout(() => {
      // Slumpa fram om det blir en försäljning eller ett byte
      setStatus(Math.random() > 0.5 ? 'MATCHED' : 'SWAP_FOUND');
    }, 2500);
  };

  return (
    <div style={{ background: '#121212', borderRadius: '32px', padding: '40px 20px', textAlign: 'center', border: '1px solid #1c1c1c' }}>
      {status === 'IDLE' && (
        <>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>⚡</div>
          <h3 style={{ fontSize: '18px', fontWeight: 900 }}>AKTIVERA LOOPEN</h3>
          <p style={{ fontSize: '12px', opacity: 0.5, marginBottom: '25px' }}>Hitta köpare eller direktbyten på sekunder.</p>
          <button onClick={startScan} style={{ background: '#fff', color: '#000', padding: '16px 32px', borderRadius: '30px', fontWeight: 900, border: 'none' }}>STARTA SCAN</button>
        </>
      )}

      {status === 'SCANNING' && (
        <div style={{ padding: '20px' }}>
          <div className="radar" />
          <p style={{ fontSize: '11px', fontWeight: 900, color: '#1DB954', marginTop: '20px' }}>SÖKER I NORDIC LOOP...</p>
        </div>
      )}

      {status === 'SWAP_FOUND' && (
        <div style={{ animation: 'popIn 0.5s forwards' }}>
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔄</div>
          <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#1DB954' }}>DIREKTBYTE FUNNET!</h3>
          <p style={{ fontSize: '12px', opacity: 0.6, marginBottom: '20px' }}>Någon vill byta sin stl 92 mot din 86.</p>
          <button style={{ background: '#1DB954', color: '#000', padding: '16px 32px', borderRadius: '30px', fontWeight: 900, border: 'none' }}>ÖPPNA CHATT & BYT</button>
        </div>
      )}
      
      <style jsx>{`
        .radar { width: 60px; height: 60px; border-radius: 50%; border: 2px solid #1DB954; margin: 0 auto; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
