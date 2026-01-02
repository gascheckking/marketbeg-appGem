"use client";
import { useState } from 'react';

export default function InstantSell() {
  const [step, setStep] = useState('upload'); // upload -> scanning -> success

  return (
    <div style={{ marginLeft: '280px', padding: '60px', width: 'calc(100vw - 280px)', display: 'flex', justifyContent: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '600px', width: '100%', padding: '40px', textAlign: 'center' }}>
        
        {step === 'upload' && (
          <>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Snabb-listning ⚡</h1>
            <p className="muted">Europa snabbaste säljverktyg. Fota, sen är du klar.</p>
            <div style={{ 
              width: '100%', height: '300px', border: '2px dashed var(--neon-purple)', 
              borderRadius: '20px', margin: '40px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' 
            }} onClick={() => setStep('scanning')}>
              <div style={{ fontSize: '50px' }}>📸</div>
            </div>
            <button className="primary-btn" style={{ width: '100%' }} onClick={() => setStep('scanning')}>
              STARTA KAMERA
            </button>
          </>
        )}

        {step === 'scanning' && (
          <>
            <div className="ai-scanner-line"></div> {/* CSS Animation som går upp och ner */}
            <h2 style={{ marginTop: '30px' }}>AI-Skannar objekt...</h2>
            <p className="muted">Identifierar modell och sätter marknadspris...</p>
            {setTimeout(() => setStep('success'), 2500) && null}
          </>
        )}

        {step === 'success' && (
          <>
            <div style={{ fontSize: '60px', color: 'var(--neon-mint)' }}>✅</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '20px 0' }}>ANNONSEN ÄR LIVE!</h2>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', textAlign: 'left', marginBottom: '30px' }}>
              <p><strong>Titel:</strong> iPhone 15 Pro (Auto-identifierad)</p>
              <p><strong>Pris:</strong> 9 200 kr (Karma-rekommendation)</p>
              <p><strong>Status:</strong> BankID-Verifierad 🛡️</p>
            </div>
            <button className="primary-btn" onClick={() => window.location.href='/feed'}>SE DIN ANNONS</button>
          </>
        )}
      </div>
    </div>
  );
}
