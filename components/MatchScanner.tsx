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
      background: 'rgba(157, 78, 221, 0.03)', 
      border: '1px dashed rgba(157, 78, 221, 0.3)', 
      borderRadius: '24px', padding: '30px', textAlign: 'center' 
    }}>
      {status === 'IDLE' && (
        <div style={{ animation: 'fadeIn 0.3s' }}>
          <div style={{ fontSize: '32px', marginBottom: '15px' }}>⚡</div>
          <h3 style={{ fontSize: '14px', fontWeight: 900, marginBottom: '8px' }}>HITTA BILLIGARE</h3>
          <p style={{ fontSize: '10px', opacity: 0.5, marginBottom: '20px' }}>Fota objektet så söker vi i loopen direkt.</p>
          <button onClick={startScan} className="primary-btn" style={{ background: 'var(--neon-purple)', color: '#fff' }}>
            STARTA SCANNER
          </button>
        </div>
      )}

      {status === 'SCANNING' && (
        <div style={{ padding: '20px' }}>
          <div className="searching-loader"></div>
          <p style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1px' }}>SÖKER I LOOPEN...</p>
        </div>
      )}

      {status === 'MATCHED' && (
        <div style={{ animation: 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>💎</div>
          <h3 style={{ fontSize: '14px', fontWeight: 900, color: 'var(--neon-mint)' }}>MATCHNING FUNNEN!</h3>
          <p style={{ fontSize: '10px', opacity: 0.6, marginBottom: '15px' }}>Vi hittade 3 identiska objekt till -40% pris.</p>
          <button className="primary-btn" style={{ background: 'var(--neon-mint)', color: '#000' }}>VISA MATCHNINGAR</button>
        </div>
      )}

      {status === 'WISHLIST' && (
        <div style={{ animation: 'fadeIn 0.3s' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔍</div>
          <p style={{ fontSize: '11px', fontWeight: 700, marginBottom: '15px' }}>Ingen matchning just nu.<br/><span style={{opacity: 0.5}}>Lagt till i din bevakningslista.</span></p>
          <button onClick={() => setStatus('IDLE')} className="primary-btn" style={{ background: 'transparent', border: '1px solid #333', color: '#fff' }}>STÄNG</button>
        </div>
      )}

      <style jsx>{`
        .searching-loader {
          width: 40px; height: 40px; border: 3px solid rgba(157, 78, 221, 0.1);
          border-top: 3px solid var(--neon-purple); border-radius: 50%;
          margin: 0 auto 15px auto; animation: spin 1s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
