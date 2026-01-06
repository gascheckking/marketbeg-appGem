// // components/MatchScanner.tsx
"use client";
import React, { useState } from 'react';

export default function MatchScanner() {
  const [status, setStatus] = useState('IDLE'); // IDLE, SCANNING, MATCHED, WISHLIST

  const startScan = () => {
    setStatus('SCANNING');
    // Simulera AI-sökning
    setTimeout(() => {
      const foundMatch = Math.random() > 0.5;
      setStatus(foundMatch ? 'MATCHED' : 'WISHLIST');
    }, 2000);
  };

  return (
    <div className="match-card">
      {status === 'IDLE' && (
        <button onClick={startScan} className="scan-btn">⚡ FOTA & MATCHA DIREKT</button>
      )}

      {status === 'SCANNING' && <div className="loader">SÖKER I LOOPEN...</div>}

      {status === 'MATCHED' && (
        <div className="result matched">
          <p>HIT! Denna finns i lager hos 3 säljare.</p>
          <button className="buy-btn">VISA MATCHNINGAR</button>
        </div>
      )}

      {status === 'WISHLIST' && (
        <div className="result wishlist">
          <p>Ingen matchning just nu. Lagt till i din "LETAR EFTER"-lista.</p>
          <button onClick={() => setStatus('IDLE')}>KLART</button>
        </div>
      )}

      <style jsx>{`
        .match-card { background: rgba(157, 78, 221, 0.1); border: 2px dashed var(--neon-purple); border-radius: 20px; padding: 30px; text-align: center; }
        .scan-btn { background: var(--neon-purple); color: #fff; padding: 15px 25px; border-radius: 12px; font-weight: 900; border: none; cursor: pointer; }
        .buy-btn { background: var(--neon-mint); color: #000; padding: 10px 20px; border-radius: 8px; font-weight: 900; border: none; }
      `}</style>
    </div>
  );
}
