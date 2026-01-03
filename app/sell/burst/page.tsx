"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BurstSellPage() {
  const [photoCount, setPhotoCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleCapture = () => {
    setPhotoCount(prev => prev + 1);
    // Här triggas den osynliga AI-analysen i bakgrunden
  };

  const finishSession = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push('/sell/success'); // Vidare till Match-vyn
    }, 2500);
  };

  return (
    <div className="page-wrapper" style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>Burst Mode</h1>
        <p className="muted">Fota allt i förrådet. Vi sorterar, prissätter och matchar åt dig.</p>
      </header>

      {/* Viewfinder - Simulerad kamera */}
      <div style={{ 
        flex: 1, background: '#000', borderRadius: '30px', position: 'relative', 
        overflow: 'hidden', border: '1px solid var(--border)', display: 'flex', 
        alignItems: 'center', justifyContent: 'center' 
      }}>
        <div style={{ fontSize: '40px', opacity: 0.5 }}>📸</div>
        
        {/* Counter Overlay */}
        <div style={{ 
          position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.8)', 
          padding: '10px 20px', borderRadius: '40px', fontWeight: 900, border: '1px solid var(--neon-mint)' 
        }}>
          {photoCount} OBJEKT HITTADE
        </div>

        {/* Shutter Button */}
        <button 
          onClick={handleCapture}
          style={{ 
            position: 'absolute', bottom: '40px', width: '80px', height: '80px', 
            borderRadius: '50%', border: '5px solid #fff', background: 'transparent',
            cursor: 'pointer'
          }}
        />
      </div>

      <div style={{ padding: '30px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => router.back()} className="muted" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>AVBRYT</button>
        
        {photoCount > 0 && (
          <button 
            onClick={finishSession}
            className="primary-btn" 
            style={{ padding: '15px 40px' }}
          >
            {isProcessing ? "ANALYS PÅGÅR..." : `KLAR - SKAPA ${photoCount} ANNONSER`}
          </button>
        )}
      </div>
    </div>
  );
}
