"use client";
import { useState } from 'react';

export default function InstantSell() {
  const [status, setStatus] = useState('camera'); // camera -> ai_processing -> live

  return (
    <div style={{ marginLeft: '280px', padding: '40px', textAlign: 'center' }}>
      {status === 'camera' && (
        <div className="glass-card" style={{ padding: '60px', marginTop: '10vh' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>FOTA OBJEKTET</h1>
          <div style={{ 
            width: '100%', height: '400px', background: '#000', borderRadius: '30px', 
            margin: '30px 0', display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid #333' 
          }}>
            <span style={{ fontSize: '100px' }}>📸</span>
          </div>
          <button 
            onClick={() => setStatus('ai_processing')}
            style={{ width: '100%', padding: '25px', borderRadius: '20px', background: 'var(--neon-mint)', color: '#000', fontWeight: 900, fontSize: '20px', border: 'none', cursor: 'pointer' }}
          >
            TA BILD & PUBLICERA DIREKT
          </button>
        </div>
      )}

      {status === 'ai_processing' && (
        <div style={{ marginTop: '20vh' }}>
          <div className="ai-loader"></div> {/* En snygg CSS-snurra */}
          <h2 style={{ fontSize: '2rem', marginTop: '30px' }}>AI analyserar och skapar din annons...</h2>
          <p className="muted">Vi hämtar modell, nypris, specifikationer och sätter ett optimalt Karma-pris.</p>
          {setTimeout(() => setStatus('live'), 3000) && null}
        </div>
      )}

      {status === 'live' && (
        <div className="glass-card" style={{ padding: '60px', marginTop: '10vh', border: '2px solid var(--neon-mint)' }}>
          <div style={{ fontSize: '80px' }}>🚀</div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>BOOM! DIN ANNONS ÄR LIVE.</h1>
          <p className="muted">Verifierad med BankID: Alex L.</p>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px', margin: '30px 0', textAlign: 'left' }}>
            <strong>AI-GENERERAD TITEL:</strong> iPhone 15 Pro, Black Titanium, 256GB<br/>
            <strong>PRIS:</strong> 9 450 kr (Baserat på marknadsvärde)
          </div>
          <button onClick={() => window.location.href='/feed'} className="primary-btn">GÅ TILL FEEDEN</button>
        </div>
      )}
    </div>
  );
}
