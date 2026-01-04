"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CameraBatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFileCount(e.target.files.length);
      setIsAnalyzing(true);
      // Simulerar AI-process innan vi skickar användaren till mass-listning
      setTimeout(() => {
        router.push(`/sell/instant?count=${e.target.files?.length}`);
      }, 2500);
    }
  };

  return (
    <div style={{ 
      padding: '25px 15px', textAlign: 'center', borderRadius: '20px',
      border: '1px dashed var(--neon-mint)', background: 'rgba(0, 255, 136, 0.02)', margin: '10px 0'
    }}>
      <input type="file" ref={fileInputRef} onChange={handleFile} accept="image/*" capture="environment" hidden multiple />
      
      {!isAnalyzing ? (
        <>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>📸</div>
          <h3 style={{ fontSize: '1rem', fontWeight: 900, marginBottom: '4px', letterSpacing: '-0.5px' }}>MASS-SCAN OBJEKT</h3>
          <p style={{ fontSize: '9px', opacity: 0.5, marginBottom: '20px', fontWeight: 700 }}>
            FOTA UPP TILL 25 PRYLAR • AI MATCHNING DIREKT
          </p>
          <button onClick={() => fileInputRef.current?.click()} className="primary-btn" style={{ 
            padding: '12px 25px', fontSize: '11px', width: 'auto'
          }}>ÖPPNA KAMERA</button>
        </>
      ) : (
        <div style={{ padding: '15px 0' }}>
          <div className="spinner" />
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-mint)' }}>IDENTIFIERAR {fileCount} OBJEKT...</div>
            <div style={{ width: '100px', height: '2px', background: 'rgba(255,255,255,0.1)', margin: '10px auto', borderRadius: '2px', overflow: 'hidden' }}>
              <div className="progress-bar-scan" />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .spinner { width: 30px; height: 30px; border: 2px solid rgba(0,255,136,0.1); border-top: 2px solid var(--neon-mint); border-radius: 50%; margin: 0 auto; animation: spin 0.8s linear infinite; }
        .progress-bar-scan { width: 100%; height: 100%; background: var(--neon-mint); animation: load 2.5s ease-in-out; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes load { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </div>
  );
}
