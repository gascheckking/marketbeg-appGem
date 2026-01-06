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
    <div className="page-wrapper" style={{ height: '90vh', display: 'flex', flexDirection: 'column', padding: '15px' }}>
      <header style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0 }}>BURST MODE</h1>
          <p style={{ fontSize: '8px', opacity: 0.5, fontWeight: 800 }}>SMATTA AV BILDER PÅ OBJEKTEN</p>
        </div>
        <div style={{ color: 'var(--neon-mint)', fontSize: '14px', fontWeight: 900 }}>{photoCount}</div>
      </header>

      <div style={{ 
        flex: 1, background: '#000', borderRadius: '24px', position: 'relative', 
        overflow: 'hidden', border: '1px solid rgba(157, 78, 221, 0.3)', display: 'flex', 
        alignItems: 'center', justifyContent: 'center'
      }}>
        {/* Viewfinder Corners */}
        <div style={{ position: 'absolute', top: 20, left: 20, width: 20, height: 20, borderTop: '1px solid #fff', borderLeft: '1px solid #fff', opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: 20, right: 20, width: 20, height: 20, borderTop: '1px solid #fff', borderRight: '1px solid #fff', opacity: 0.3 }} />
        
        <div style={{ fontSize: '40px', opacity: 0.1 }}>📸</div>
        
        <div style={{ 
          position: 'absolute', top: '20px', background: 'rgba(0,0,0,0.8)', 
          padding: '8px 15px', borderRadius: '30px', fontWeight: 900, 
          border: '1px solid var(--neon-mint)', color: 'var(--neon-mint)', fontSize: '9px'
        }}>
          {photoCount > 0 ? `${photoCount} OBJEKT IDENTIFIERADE` : "SIKTA PÅ OBJEKTET"}
        </div>

        <button onClick={handleCapture} className="shutter-btn" />
      </div>

      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', color: '#444', fontWeight: 900, fontSize: '10px' }}>AVBRYT</button>
        
        {photoCount > 0 && (
          <button onClick={finishSession} className="primary-btn" style={{ width: 'auto', padding: '12px 25px', background: 'var(--neon-purple)', fontSize: '10px' }}>
            {isProcessing ? "ANALYSERAR..." : "SLUTFÖR ANALYS"}
          </button>
        )}
      </div>

      <style jsx>{`
        .shutter-btn {
          position: absolute; bottom: 30px; width: 65px; height: 65px; 
          border-radius: 50%; border: 4px solid #fff; background: transparent;
          cursor: pointer; transition: all 0.1s; box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .shutter-btn:active { transform: scale(0.9); background: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
}
