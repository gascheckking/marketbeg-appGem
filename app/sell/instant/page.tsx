"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function AISellForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAgainMode = searchParams.get("source") === "history";
  
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [aiPrice, setAiPrice] = useState(0);
  const [objectsFound, setObjectsFound] = useState(0);

  // Demo-data för Instant Match (Folk som letar just nu)
  const marketPulse = [
    { buyer: "Alex_K", item: "iPhone 15 Pro", price: "9500:-", match: 99 },
    { buyer: "Sanda_Loop", item: "Versace Tofflor", price: "1800:-", match: 94 }
  ];

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
        setAiPrice(prev => prev + Math.floor(Math.random() * 150));
        // Simulera att AI hittar flera objekt i samma skan
        if (scanProgress === 20) setObjectsFound(1);
        if (scanProgress === 60) setObjectsFound(3);
        if (scanProgress === 90) setObjectsFound(5);
      }, 40);
      return () => clearInterval(timer);
    }
  }, [isScanning, scanProgress]);

  return (
    <div className="page-wrapper" style={{ paddingBottom: '120px', padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px' }}>
            KARMA VISION v2.0
          </div>
          <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', background: 'rgba(0,255,136,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
            MARKET PULSE: HIGH DEMAND 🔥
          </div>
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1, marginTop: '10px' }}>
          {isAgainMode ? "Loopa Igen" : "Snabblista"}
        </h1>
        <p style={{ fontSize: '10px', opacity: 0.5, marginTop: '5px' }}>Fota upp till 25 objekt. AI skapar annonser direkt.</p>
      </header>
      
      {/* SCANNER VIEWPORT */}
      <div className="scanner-container" style={{
        position: 'relative', height: '380px', background: '#000', borderRadius: '24px',
        border: `2px solid ${isScanning ? 'var(--neon-mint)' : 'var(--border)'}`,
        overflow: 'hidden', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="scanner-corner tl"></div><div className="scanner-corner tr"></div>
        <div className="scanner-corner bl"></div><div className="scanner-corner br"></div>

        {!isScanning ? (
          <div style={{ textAlign: 'center', zIndex: 10 }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>📸</div>
            <button 
              onClick={() => setIsScanning(true)}
              className="primary-btn" 
              style={{ background: '#fff', color: '#000', borderRadius: '12px', padding: '12px 25px' }}
            >
              STARTA MASS-SKAN
            </button>
          </div>
        ) : (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div className="laser-line"></div>
            
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 20 }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-mint)' }}>IDENTIFYING OBJECTS... {scanProgress}%</div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>
                {objectsFound} OBJEKT HITTADE
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '20px', right: '20px', textAlign: 'right' }}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)' }}>TOTAL LIKVIDITET</div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--neon-mint)' }}>{aiPrice} kr</div>
            </div>
          </div>
        )}
      </div>

      {/* INSTANT SELL / MARKET MATCHES */}
      <div className={`glass-card ${isScanning ? 'fade-in' : 'hidden-form'}`} style={{ padding: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <h3 style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>INSTANT MATCHES FOUND</h3>
          <span style={{ fontSize: '8px', color: 'var(--neon-mint)', fontWeight: 900 }}>PENGAR REDO</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {marketPulse.map(match => (
            <div key={match.buyer} style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800 }}>{match.item}</div>
                <div style={{ fontSize: '8px', opacity: 0.5 }}>DIREKTKÖPARE: @{match.buyer}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: 900, color: 'var(--neon-mint)' }}>{match.price}</div>
                <div style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-purple)' }}>{match.match}% MATCH SCORE</div>
              </div>
            </div>
          ))}
        </div>

        <button className="primary-btn" style={{ width: '100%', marginTop: '20px', background: 'var(--neon-purple)' }}>
          GODKÄNN ALLA & SÄLJ DIREKT
        </button>
        <button style={{ width: '100%', marginTop: '10px', background: 'transparent', border: '1px solid #222', color: '#444', fontSize: '10px', fontWeight: 800, padding: '10px' }}>
          ELLER LISTA FÖR BUDGIVNING
        </button>
      </div>

      <style jsx>{`
        .scanner-corner { position: absolute; width: 20px; height: 20px; border: 2px solid var(--neon-mint); z-index: 5; }
        .tl { top: 15px; left: 15px; border-right: 0; border-bottom: 0; }
        .tr { top: 15px; right: 15px; border-left: 0; border-bottom: 0; }
        .bl { bottom: 15px; left: 15px; border-right: 0; border-top: 0; }
        .br { bottom: 15px; right: 15px; border-left: 0; border-top: 0; }
        .laser-line {
          position: absolute; width: 100%; height: 2px; background: var(--neon-mint);
          box-shadow: 0 0 15px var(--neon-mint); z-index: 15; animation: scan 2s infinite ease-in-out;
        }
        @keyframes scan { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .hidden-form { opacity: 0.1; pointer-events: none; filter: blur(2px); transition: 0.5s; }
        .fade-in { opacity: 1; filter: blur(0); transition: 0.5s; }
      `}</style>
    </div>
  );
}

export default function AISellPage() {
  return (
    <Suspense fallback={<div className="page-wrapper">INITIALIZING KARMA VISION...</div>}>
      <AISellForm />
    </Suspense>
  );
}
