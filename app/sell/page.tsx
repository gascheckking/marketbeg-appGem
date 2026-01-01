"use client";
import { useState } from "react";

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [analyzing, setAnalyzing] = useState(false);

  const startScan = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setStep(2);
      setAnalyzing(false);
    }, 3000);
  };

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      {step === 1 && (
        <div className="sell-hero">
          <div className={`scan-container ${analyzing ? 'active' : ''}`}>
             <div className="camera-box" style={{height: '400px', background: '#111', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {analyzing ? <div className="scan-line"></div> : <span style={{fontSize: '60px'}}>📸</span>}
             </div>
          </div>
          <h2 style={{fontSize: '2.5rem', marginTop: '30px'}}>Sikta på varan.</h2>
          <p className="muted">BegAI sköter värdering och annons åt dig.</p>
          <button className="primary-btn" onClick={startScan} disabled={analyzing}>
            {analyzing ? "AI ANALYSERAR..." : "STARTA SCAN"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="ai-result">
          <div className="badge-ai">PRODUKT IDENTIFIERAD</div>
          <h1 style={{fontSize: '3rem'}}>iPhone 15 Pro</h1>
          <div className="price-suggestion">
            <small>FÖRESLAGET PRIS</small>
            <h2>8 900 kr</h2>
          </div>
          <div className="bento-info">
             <p>✨ AI-Beskrivning: "Toppskick, Titanium Blue. Batterihälsa 98%."</p>
          </div>
          <button className="primary-btn" onClick={() => window.location.href='/checkout'}>PUBLICERA NU</button>
        </div>
      )}
    </div>
  );
}
