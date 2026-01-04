"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function AISellPage() {
  const [scanning, setScanning] = useState(false);
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const router = useRouter();

  const startScan = () => {
    setScanning(true);
    // Simulerar mass-detektering av objekt
    setTimeout(() => setFoundItems(prev => [...prev, "iPhone 15 Pro"]), 1000);
    setTimeout(() => setFoundItems(prev => [...prev, "AirPods Max"]), 2000);
    setTimeout(() => setFoundItems(prev => [...prev, "Leather Wallet"]), 2800);
  };

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px' }}>QUICK SELL v2</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1 }}>AI Vision Scan</h1>
        <p style={{ fontSize: '10px', opacity: 0.5 }}>Fota upp till 25 objekt samtidigt. AI sköter rubrik, pris och matchning.</p>
      </header>

      {/* SCANNER VIEWPORT */}
      <div style={{ 
        position: 'relative', width: '100%', aspectRatio: '3/4', background: '#000', 
        borderRadius: '24px', border: `2px solid ${scanning ? 'var(--neon-mint)' : '#222'}`, 
        overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {!scanning ? (
          <button onClick={startScan} className="primary-btn" style={{ width: 'auto', padding: '15px 30px' }}>
            STARTA AI-KAMERA
          </button>
        ) : (
          <div style={{ width: '100%', height: '100%' }}>
            <div className="scan-line" />
            
            {/* Live Detected Tags */}
            <div style={{ position: 'absolute', top: '40%', left: '30%', background: 'var(--neon-mint)', color: '#000', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: 900, animation: 'pop 0.3s ease-out' }}>
              IPHONE 15 PRO (99%)
            </div>
            {foundItems.length > 1 && (
              <div style={{ position: 'absolute', top: '60%', right: '20%', background: 'var(--neon-mint)', color: '#000', padding: '4px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: 900, animation: 'pop 0.3s ease-out' }}>
                AIRPODS MAX (96%)
              </div>
            )}
            
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', gap: '10px' }}>
              <div className="glass-card" style={{ flex: 1, padding: '10px', textAlign: 'center', borderColor: 'var(--neon-mint)' }}>
                <div style={{ fontSize: '14px', fontWeight: 900 }}>{foundItems.length}</div>
                <div style={{ fontSize: '7px', opacity: 0.6 }}>OBJEKT</div>
              </div>
              <div className="glass-card" style={{ flex: 1, padding: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--neon-mint)' }}>12 400:-</div>
                <div style={{ fontSize: '7px', opacity: 0.6 }}>EST. VÄRDE</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {foundItems.length > 0 && (
        <button 
          onClick={() => router.push('/dashboard/seller')}
          className="primary-btn" style={{ marginTop: '20px', background: 'var(--neon-purple)', color: '#fff' }}>
          LISTA {foundItems.length} OBJEKT DIREKT
        </button>
      )}

      <style jsx>{`
        .scan-line {
          position: absolute; width: 100%; height: 2px; background: var(--neon-mint);
          box-shadow: 0 0 15px var(--neon-mint); animation: move 2s infinite linear;
        }
        @keyframes move { 0% { top: 0% } 100% { top: 100% } }
        @keyframes pop { 0% { transform: scale(0); } 100% { transform: scale(1); } }
      `}</style>
    </div>
  );
}
