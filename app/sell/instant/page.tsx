"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingAI } from '@/components/LoadingAI';

export default function InstantSell() {
  const [status, setStatus] = useState<'upload' | 'analyzing' | 'done'>('upload');
  const router = useRouter();

  const startAnalysis = () => {
    setStatus('analyzing');
    setTimeout(() => setStatus('done'), 3000);
  };

  return (
    <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div className="glass-card" style={{ maxWidth: '500px', width: '100%', textAlign: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '10px' }}>Europa-Sälj ⚡</h1>
        <p className="muted" style={{ marginBottom: '40px' }}>Live på under 60 sekunder med AI-vision.</p>
        
        {status === 'upload' && (
          <>
            <div style={{ 
              width: '100%', height: '350px', border: '2px dashed var(--neon-purple)', 
              borderRadius: '32px', marginBottom: '30px', display: 'flex', 
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(157, 78, 221, 0.02)', cursor: 'pointer'
            }} onClick={startAnalysis}>
              <span style={{ fontSize: '60px', marginBottom: '20px' }}>📸</span>
              <p style={{ fontWeight: 800 }}>TA BILD ELLER DRA FILER HIT</p>
            </div>
            <button className="primary-btn" style={{ width: '100%' }} onClick={startAnalysis}>
              AKTIVERA AI-KAMERA
            </button>
          </>
        )}

        {status === 'analyzing' && <LoadingAI />}

        {status === 'done' && (
          <div style={{ animation: 'popIn 0.5s ease' }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
            <h2 style={{ color: 'var(--neon-mint)', fontWeight: 900 }}>BOOM!</h2>
            <p className="muted" style={{ marginBottom: '30px' }}>AI identifierade din iPhone 15 Pro. Annonsen är nu live i hela Europa-loopen.</p>
            <button className="primary-btn" onClick={() => router.push('/feed')} style={{ width: '100%' }}>
              VISA MIN ANNONS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
