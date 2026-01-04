"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function AISellForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const count = searchParams.get("count") || "1";
  
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);
  const [aiPrice, setAiPrice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) { clearInterval(timer); return 100; }
        return prev + 1;
      });
      setAiPrice(prev => prev + Math.floor(Math.random() * 200));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px' }}>AI VISION SCAN</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, letterSpacing: '-1.5px' }}>Resultat</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '8px', fontWeight: 900, opacity: 0.5 }}>IDENTIFIERADE</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--neon-mint)' }}>{count} st</div>
        </div>
      </header>

      <div className="glass-card" style={{ padding: '20px', border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.03)', marginBottom: '20px' }}>
        <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.6, letterSpacing: '1px' }}>TOTALT EST. VÄRDE</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>{aiPrice}<span style={{ fontSize: '1rem', marginLeft: '5px', opacity: 0.4 }}>SEK</span></div>
        <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', marginTop: '5px' }}>MATCHNINGAR HITTADE DIREKT (4st)</div>
      </div>

      <div style={{ display: 'grid', gap: '10px', marginBottom: '100px' }}>
        {["iPhone 15 Pro", "AirPods Max", "Stone Island Beanie"].map((item, i) => (
          <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: '#111', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📦</div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 800 }}>{item}</div>
                <div style={{ fontSize: '8px', color: 'var(--neon-mint)', fontWeight: 900 }}>INSTANT BUYER READY</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', fontWeight: 900 }}>{(i + 1) * 1200}:-</div>
              <div style={{ fontSize: '7px', opacity: 0.5 }}>98% MATCH</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'fixed', bottom: '0', left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, #000 80%, transparent)' }}>
        <button onClick={() => router.push('/dashboard/seller')} className="primary-btn" style={{ padding: '18px', fontSize: '14px' }}>
          ACCEPTERA & SÄLJ ALLA ({aiPrice}:-)
        </button>
      </div>
    </div>
  );
}

export default function AISellPage() {
  return (
    <Suspense fallback={<div className="page-wrapper">BOOTING AI...</div>}>
      <AISellForm />
    </Suspense>
  );
}
