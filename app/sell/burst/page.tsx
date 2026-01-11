// // app/sell/burst/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BurstSellPage() {
  const [photoCount, setPhotoCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleCapture = () => {
    setPhotoCount(prev => prev + 1);
    if (navigator.vibrate) navigator.vibrate(40);
  };

  const finishSession = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push(`/sell/instant?count=${photoCount}`);
    }, 1800);
  };

  return (
    <div className="page-wrapper" style={{ height: '85vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>BURST MODE</h1>
          <p className="text-small" style={{ opacity: 0.5 }}>SMATTA AV BILDER PÅ OBJEKTEN</p>
        </div>
        <div style={{ color: 'var(--karma-green)', fontSize: '18px', fontWeight: 900 }}>{photoCount}</div>
      </header>

      <div style={{ 
        flex: 1, background: '#0a0a0a', borderRadius: '32px', position: 'relative', 
        overflow: 'hidden', border: '1px solid var(--border)', display: 'flex', 
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ position: 'absolute', top: 30, left: 30, width: 25, height: 25, borderTop: '2px solid rgba(255,255,255,0.2)', borderLeft: '2px solid rgba(255,255,255,0.2)' }} />
        <div style={{ position: 'absolute', top: 30, right: 30, width: 25, height: 25, borderTop: '2px solid rgba(255,255,255,0.2)', borderRight: '2px solid rgba(255,255,255,0.2)' }} />
        
        <div style={{ fontSize: '50px', opacity: 0.1 }}>📸</div>
        
        {photoCount > 0 && (
          <div style={{ 
            position: 'absolute', top: '30px', background: 'var(--karma-green)', 
            padding: '8px 20px', borderRadius: '30px', fontWeight: 900, 
            color: '#000', fontSize: '10px', animation: 'fadeIn 0.2s'
          }}>
            {photoCount} OBJEKT IDENTIFIERADE
          </div>
        )}

        <button onClick={handleCapture} className="shutter-btn" />
      </div>

      <div style={{ padding: '30px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', color: '#444', fontWeight: 900, fontSize: '11px' }}>AVBRYT</button>
        
        {photoCount > 0 && (
          <button onClick={finishSession} className="primary-btn" style={{ width: 'auto', padding: '12px 30px', fontSize: '11px' }}>
            {isProcessing ? "ANALYSERAR..." : "SLUTFÖR"}
          </button>
        )}
      </div>

      <style jsx>{`
        .shutter-btn {
          position: absolute; bottom: 40px; width: 70px; height: 70px; 
          border-radius: 50%; border: 5px solid #fff; background: transparent;
          cursor: pointer; transition: all 0.1s;
        }
        .shutter-btn:active { transform: scale(0.9) translate(-50%, 0); background: rgba(255,255,255,0.2); }
        .shutter-btn { left: 50%; transform: translateX(-50%); }
      `}</style>
    </div>
  );
}
