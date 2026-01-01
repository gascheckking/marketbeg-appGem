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
          <h1 style={{marginTop: '40px', fontWeight: 900}}>Sikta på varan</h1>
          <p className="muted">AI identifierar märke, modell och skick automatiskt.</p>
          
          <div style={{
            height: '420px', background: '#0a0a0a', borderRadius: '40px', 
            border: scanning ? '2px solid var(--accent)' : '1px solid #222',
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            position: 'relative', overflow: 'hidden', marginTop: '30px',
            boxShadow: scanning ? '0 0 40px rgba(0,255,136,0.1)' : 'none'
          }}>
            {scanning && <div className="scan-line"></div>}
            <span style={{fontSize: '80px', filter: scanning ? 'grayscale(0)' : 'grayscale(1)'}}>
              {scanning ? '🤖' : '📸'}
            </span>
          </div>

          <button className="primary-btn" onClick={handleScan} style={{marginTop: '40px', width: '100%', padding: '25px'}}>
            {scanning ? 'ANALYSERAR PIXLAR...' : 'STARTA AI-SCAN'}
          </button>
        </>
      ) : (
        <div style={{marginTop: '60px', animation: 'fadeIn 0.5s ease'}}>
          <div className="ai-text" style={{fontWeight: 900, fontSize: '12px', letterSpacing: '2px'}}>AI IDENTIFICATION COMPLETE</div>
          <h1 style={{fontSize: '3.5rem', fontWeight: 900, margin: '10px 0'}}>iPhone 15 Pro</h1>
          
          <div className="pay-card" style={{justifyContent: 'center', gap: '30px', background: 'transparent', border: '1px dashed #333'}}>
             <div>
               <small className="muted" style={{display: 'block'}}>EST. VÄRDE</small>
               <strong style={{fontSize: '1.8rem', color: 'var(--accent)'}}>9 200 KR</strong>
             </div>
             <div style={{width: '1px', height: '40px', background: '#333'}}></div>
             <div>
               <small className="muted" style={{display: 'block'}}>DEMAND</small>
               <strong style={{fontSize: '1.8rem'}}>HIGH</strong>
             </div>
          </div>

          <div style={{marginTop: '40px', display: 'grid', gap: '15px'}}>
            <button className="primary-btn" onClick={() => window.location.href='/checkout'} style={{width: '100%'}}>PUBLICERA DIREKT</button>
            <button onClick={() => setDone(false)} style={{background: 'none', border: 'none', color: '#555', fontSize: '14px'}}>Ta ny bild</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .scan-line {
          position: absolute; width: 100%; height: 3px; 
          background: var(--accent); boxShadow: 0 0 20px var(--accent);
          animation: scanMove 2s infinite ease-in-out;
          z-index: 10;
        }
        @keyframes scanMove {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
