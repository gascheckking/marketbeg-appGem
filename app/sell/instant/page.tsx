"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function AISellForm() {
  const searchParams = useSearchParams();
  const isAgainMode = searchParams.get("source") === "history";
  
  const [mode, setMode] = useState("single");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [aiPrice, setAiPrice] = useState(0);

  // Simulera AI-skanning
  useEffect(() => {
    if (isScanning) {
      const timer = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
        // Pris-tikker som "hittar" värdet
        setAiPrice(prev => prev + Math.floor(Math.random() * 250));
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isScanning]);

  return (
    <div className="page-wrapper" style={{ paddingBottom: '120px' }}>
      <header style={{ marginBottom: '30px' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px', marginBottom: '5px' }}>
          OBJECT IDENTIFICATION SYSTEM
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px', lineHeight: 0.9 }}>
          {isAgainMode ? "Loopa Igen" : "AI Snabbsälj"}
        </h1>
      </header>
      
      {/* SCANNER VIEWPORT */}
      <div className="scanner-container" style={{
        position: 'relative',
        height: '400px',
        background: '#000',
        borderRadius: '32px',
        border: `2px solid ${isScanning ? 'var(--neon-mint)' : 'var(--border)'}`,
        overflow: 'hidden',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.5s all'
      }}>
        {/* Sci-fi Overlay Brackets */}
        <div className="scanner-corner tl"></div>
        <div className="scanner-corner tr"></div>
        <div className="scanner-corner bl"></div>
        <div className="scanner-corner br"></div>

        {!isScanning ? (
          <div style={{ textAlign: 'center', zIndex: 10 }}>
            <div style={{ fontSize: '60px', marginBottom: '15px', filter: 'grayscale(1)' }}>📸</div>
            <button 
              onClick={() => setIsScanning(true)}
              className="primary-btn" 
              style={{ background: '#fff', color: '#000', borderRadius: '12px' }}
            >
              STARTA AI-SKAN
            </button>
          </div>
        ) : (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {/* Laser Line */}
            <div className="laser-line"></div>
            
            {/* Scanning Data Overlay */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 20 }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-mint)' }}>IDENTIFYING... {scanProgress}%</div>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>
                {scanProgress > 40 ? "iPhone 15 Pro" : "Analyserar..."}
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '20px', right: '20px', textAlign: 'right' }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)' }}>ESTIMATED VALUE</div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--neon-mint)' }}>{aiPrice} kr</div>
            </div>

            {/* Simulated Camera Feed Background */}
            <div style={{ width: '100%', height: '100%', opacity: 0.3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '150px' }}>
              📱
            </div>
          </div>
        )}
      </div>

      {/* Manual Details - Dyker upp efter skan */}
      <div className={`glass-card ${isScanning ? 'fade-in' : 'hidden-form'}`}>
        <h3 style={{ marginBottom: '20px', fontSize: '14px', fontWeight: 900, letterSpacing: '1px' }}>PROTOKOLL-DATA</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label className="muted" style={{ fontSize: '9px', fontWeight: 900 }}>OBJEKT</label>
            <div className="data-field">iPhone 15 Pro</div>
          </div>
          <div>
            <label className="muted" style={{ fontSize: '9px', fontWeight: 900 }}>SKICK-ANALYS</label>
            <div className="data-field" style={{ color: 'var(--neon-mint)' }}>Grade A+ (98%)</div>
          </div>
        </div>

        <button className="primary-btn" style={{ width: '100%', marginTop: '30px' }}>
          PUBLICERA I LOOPEN
        </button>
      </div>

      <style jsx>{`
        .scanner-container {
          box-shadow: ${isScanning ? '0 0 50px rgba(0, 255, 136, 0.1)' : 'none'};
        }
        .scanner-corner {
          position: absolute; width: 30px; height: 30px; border: 3px solid var(--neon-mint); z-index: 5;
        }
        .tl { top: 20px; left: 20px; border-right: 0; border-bottom: 0; }
        .tr { top: 20px; right: 20px; border-left: 0; border-bottom: 0; }
        .bl { bottom: 20px; left: 20px; border-right: 0; border-top: 0; }
        .br { bottom: 20px; right: 20px; border-left: 0; border-top: 0; }

        .laser-line {
          position: absolute; width: 100%; height: 2px; background: var(--neon-mint);
          box-shadow: 0 0 15px var(--neon-mint); z-index: 15;
          animation: scan 2s infinite ease-in-out;
        }

        .data-field {
          background: rgba(255,255,255,0.03); border: 1px solid var(--border);
          padding: 15px; borderRadius: 12px; margin-top: 5px; font-weight: 800;
        }

        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .hidden-form { opacity: 0.2; pointer-events: none; filter: blur(4px); transition: 0.5s; }
        .fade-in { opacity: 1; filter: blur(0); transition: 0.5s; }
      `}</style>
    </div>
  );
}

export default function AISellPage() {
  return (
    <Suspense fallback={<div className="page-wrapper">INITIALIZING KARMA PROTOCOL...</div>}>
      <AISellForm />
    </Suspense>
  );
}
