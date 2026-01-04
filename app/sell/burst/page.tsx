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
    // Haptisk feedback (simulerad)
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const finishSession = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push(`/sell/instant?count=${photoCount}`);
    }, 2000);
  };

  return (
    <div className="page-wrapper" style={{ height: '92vh', display: 'flex', flexDirection: 'column', padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0 }}>Burst Mode</h1>
        <p className="muted" style={{ fontSize: '12px' }}>Smatta av bilder på allt du vill sälja.</p>
      </header>

      <div style={{ 
        flex: 1, background: '#050505', borderRadius: '32px', position: 'relative', 
        overflow: 'hidden', border: '2px solid rgba(157, 78, 221, 0.3)', display: 'flex', 
        alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 50px rgba(157, 78, 221, 0.1)'
      }}>
        <div style={{ fontSize: '50px', opacity: 0.2 }}>📸</div>
        
        <div style={{ 
          position: 'absolute', top: '25px', background: 'rgba(0,0,0,0.8)', 
          padding: '12px 25px', borderRadius: '40px', fontWeight: 900, 
          border: '1px solid var(--neon-mint)', color: 'var(--neon-mint)', fontSize: '12px'
        }}>
          {photoCount} OBJEKT IDENTIFIERADE
        </div>

        <button 
          onClick={handleCapture}
          className="shutter-btn"
        />
      </div>

      <div style={{ padding: '25px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', color: '#555', fontWeight: 900, fontSize: '12px' }}>AVBRYT</button>
        
        {photoCount > 0 && (
          <button onClick={finishSession} className="primary-btn" style={{ width: 'auto', padding: '15px 35px', background: 'var(--neon-purple)' }}>
            {isProcessing ? "ANALYSERAR..." : "KLAR & ANALYSERA"}
          </button>
        )}
      </div>

      <style jsx>{`
        .shutter-btn {
          position: absolute; bottom: 40px; width: 75px; height: 75px; 
          borderRadius: 50%; border: 6px solid #fff; background: transparent;
          cursor: pointer; transition: all 0.1s;
        }
        .shutter-btn:active { transform: scale(0.9); background: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
}
