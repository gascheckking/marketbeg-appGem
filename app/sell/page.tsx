"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SellPage() {
  const [isScanning, setIsScanning] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulerar en AI-scanning i 3 sekunder, skickar sedan användaren vidare
    const timer = setTimeout(() => {
      setIsScanning(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      
      <div className="glow-card" style={{ width: '100%', maxWidth: '400px', height: '400px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '32px' }}>
        
        {/* Denna rad använder animationen vi skapade i globals.css */}
        {isScanning && <div className="scan-line"></div>}
        
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <span style={{ fontSize: '60px' }}>📸</span>
          <h2 style={{ marginTop: '20px', fontWeight: 900 }}>
            {isScanning ? 'AI ANALYZING...' : 'SCAN COMPLETE'}
          </h2>
          <p className="muted">
            {isScanning ? 'Håller på att identifiera ditt objekt...' : 'Objekt identifierat: iPhone 15 Pro'}
          </p>
        </div>
      </div>

      {!isScanning && (
        <button 
          className="primary-btn" 
          style={{ marginTop: '30px', width: '100%', maxWidth: '400px' }}
          onClick={() => router.push('/')}
        >
          VISA VÄRDERING
        </button>
      )}

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p className="muted" style={{ fontSize: '12px' }}>
          Säkerställt via <span style={{ color: 'var(--accent)' }}>Nordic AI Core v.2</span>
        </p>
      </div>
    </div>
  );
}
