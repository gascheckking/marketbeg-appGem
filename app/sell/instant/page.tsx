"use client";
import React, { useState } from 'react';

export default function InstantSell() {
  const [status, setStatus] = useState('upload');

  return (
    <div className="page-wrapper">
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Europa-Sälj ⚡</h1>
        <p className="muted">Live på under 60 sekunder med AI.</p>
        
        <div style={{ 
          width: '100%', height: '300px', border: '2px dashed #9d4edd', 
          borderRadius: '20px', margin: '30px 0', display: 'flex', 
          alignItems: 'center', justifyContent: 'center' 
        }}>
          <span style={{ fontSize: '50px' }}>📸</span>
        </div>

        <button 
          onClick={() => setStatus('done')}
          className="primary-btn" 
          style={{ width: '100%', background: '#fff', color: '#000', padding: '15px', borderRadius: '12px', fontWeight: 900, border: 'none', cursor: 'pointer' }}
        >
          TA BILD & PUBLICERA
        </button>

        {status === 'done' && (
          <div style={{ marginTop: '20px', color: '#00ff88', fontWeight: 800 }}>
            BOOM! Annonsen är live.
          </div>
        )}
      </div>
    </div>
  );
}
