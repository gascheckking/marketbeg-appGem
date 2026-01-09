// // components/MatchScanner.tsx
"use client";
import React, { useState } from 'react';

export default function MatchScanner() {
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'MATCHED' | 'WISHLIST'>('IDLE');

  const startScan = () => {
    setStatus('SCANNING');
    setTimeout(() => {
      const foundMatch = Math.random() > 0.5;
      setStatus(foundMatch ? 'MATCHED' : 'WISHLIST');
    }, 2500);
  };

  return (
    <div style={{ 
      background: '#121212', 
      border: '1px solid rgba(255, 255, 255, 0.05)', 
      borderRadius: '32px', padding: '40px 20px', textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}>
      {status === 'IDLE' && (
        <div style={{ animation: 'fadeIn 0.4s ease' }}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>⚡</div>
          <h3 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '8px', letterSpacing: '-0.5px' }}>HITTA BILLIGARE</h3>
          <p style={{ fontSize: '12px', opacity: 0.5, marginBottom: '25px', padding: '0 20px' }}>
            AI-skanna objektet så hittar vi det i Loopen till lägre pris direkt.
          </p>
          <button 
            onClick={startScan} 
            style={{ 
              background: '#fff', color: '#000', border: 'none', 
              padding: '16px 32px', borderRadius: '30px', fontWeight: 900, fontSize: '13px'
            }}
          >
            STARTA AI-RADAR
          </button>
        </div>
      )}

      {status === 'SCANNING' && (
        <div style={{ padding: '20px' }}>
          <div className="radar-animation">
            <div className="dot"></div>
          </div>
          <p style={{ fontSize: '11px', fontWeight: 900, color: '#1DB954', letterSpacing: '2px', marginTop: '30px' }}>
            ANALYS PÅGÅR...
          </p>
        </div>
      )}

      {status === 'MATCHED' && (
        <div style={{ animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>💎</div>
          <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#1DB954' }}>MATCHNING FUNNEN!</h3>
          <p style={{ fontSize: '12px', opacity: 0.6, marginBottom: '20px' }}>Vi hittade 3 identiska objekt till -40% pris.</p>
          <button style={{ background: '#1DB954', color: '#000', border: 'none', padding: '16px 32px', borderRadius: '30px', fontWeight: 900 }}>
            VISA DEALS
          </button>
        </div>
      )}

      {status === 'WISHLIST' && (
        <div style={{ animation: 'fadeIn 0.3s' }}>
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔍</div>
          <p style={{ fontSize: '13px', fontWeight: 700, marginBottom: '20px' }}>Ingen matchning just nu.<br/><span style={{opacity: 0.5}}>Lagt till i din bevakningslista.</span></p>
          <button onClick={() => setStatus('IDLE')} style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '12px 24px', borderRadius: '30px', fontSize: '12px' }}>STÄNG</button>
        </div>
      )}

      <style jsx>{`
        .radar-animation {
          position: relative; width: 80px; height: 80px; margin: 0 auto;
          border: 2px solid rgba(29, 185, 84, 0.2); border-radius: 50%;
        }
        .radar-animation::after {
          content: ''; position: absolute; inset: -10px;
          border: 2px solid rgba(29, 185, 84, 0.1); border-radius: 50%;
          animation: pulse 1.5s infinite;
        }
        .dot {
          width: 10px; height: 10px; background: #1DB954; border-radius: 50%;
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          box-shadow: 0 0 15px #1DB954;
        }
        @keyframes pulse { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes popIn { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
