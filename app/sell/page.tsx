"use client";
import { useState } from "react";

export default function Sell() {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setDone(true);
    }, 2500);
  };

  return (
    <div className="app-shell" style={{padding: '20px', textAlign: 'center'}}>
      {!done ? (
        <>
          <h1 style={{marginTop: '40px'}}>Sikta på varan</h1>
          <div style={{
            height: '400px', background: '#111', borderRadius: '40px', border: scanning ? '2px solid var(--accent)' : '2px solid #222',
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', marginTop: '30px'
          }}>
            {scanning && <div className="scan-line" style={{position: 'absolute', width: '100%', height: '2px', background: 'var(--accent)', boxShadow: '0 0 15px var(--accent)', animation: 'scan 2s infinite'}}></div>}
            <span style={{fontSize: '60px'}}>{scanning ? '🤖' : '📸'}</span>
          </div>
          <button className="primary-btn" onClick={handleScan} style={{marginTop: '40px', width: '100%'}}>
            {scanning ? 'ANALYSERAR...' : 'STARTA AI-SCAN'}
          </button>
        </>
      ) : (
        <div style={{marginTop: '40px'}}>
          <div className="ai-text" style={{fontWeight: 800}}>IDENTIFIERAD</div>
          <h1 style={{fontSize: '3rem'}}>iPhone 15 Pro</h1>
          <div className="pay-card" style={{justifyContent: 'center', gap: '20px'}}>
             <small className="muted">REK. PRIS</small>
             <strong style={{fontSize: '1.5rem'}}>8 900 KR</strong>
          </div>
          <button className="primary-btn" onClick={() => window.location.href='/checkout'} style={{marginTop: '30px', width: '100%'}}>PUBLICERA & SÄLJ</button>
        </div>
      )}

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
