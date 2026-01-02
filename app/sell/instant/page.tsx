"use client";
import React, { useState } from 'react';

export default function InstantSell() {
  const [step, setStep] = useState('upload'); 

  return (
    <div className="sell-container">
      <div className="glass-card" style={{ maxWidth: '600px', width: '100%', padding: '40px', textAlign: 'center', margin: '0 auto' }}>
        
        {step === 'upload' && (
          <>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Snabb-listning ⚡</h1>
            <p className="muted">Fota objektet, AI sköter resten. Live på under 60s.</p>
            <div 
              style={{ width: '100%', height: '300px', border: '2px dashed var(--neon-purple)', borderRadius: '20px', margin: '40px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} 
              onClick={() => setStep('scanning')}
            >
              <div style={{ fontSize: '50px' }}>📸</div>
            </div>
            <button className="primary-btn" style={{ width: '100%' }} onClick={() => setStep('scanning')}>STARTA KAMERA</button>
          </>
        )}

        {step === 'scanning' && (
          <div style={{ padding: '60px 0' }}>
            <div className="scanner-line"></div>
            <h2 style={{ marginTop: '30px' }}>AI-Skannar objekt...</h2>
            <p className="muted">Identifierar modell och sätter marknadspris...</p>
            {setTimeout(() => setStep('success'), 2000) && null}
          </div>
        )}

        {step === 'success' && (
          <>
            <div style={{ fontSize: '60px', color: 'var(--neon-mint)' }}>✅</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '20px 0' }}>ANNONSEN ÄR LIVE!</h2>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', textAlign: 'left', marginBottom: '30px' }}>
              <p><strong>Titel:</strong> iPhone 15 Pro (Identifierad)</p>
              <p><strong>Pris:</strong> 9 200 kr</p>
              <p><strong>Status:</strong> BankID-Verifierad 🛡️</p>
            </div>
            <button className="primary-btn" onClick={() => window.location.href='/'}>SE DIN ANNONS</button>
          </>
        )}
      </div>

      <style jsx>{`
        .sell-container {
          padding: 60px;
          margin-left: 280px;
        }
        .scanner-line {
          height: 2px;
          background: var(--neon-mint);
          box-shadow: 0 0 15px var(--neon-mint);
          animation: scan 1.5s infinite ease-in-out;
        }
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(100px); }
          100% { transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .sell-container { margin-left: 0; padding: 20px; }
        }
      `}</style>
    </div>
  );
}
