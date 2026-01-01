"use client";
import { useState } from "react";
import BankIDSign from "../../components/BankIDSign";

export default function Checkout() {
  const [step, setStep] = useState("review"); // review, signing, complete

  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      {step === "signing" && <BankIDSign onComplete={() => setStep("complete")} />}

      <h1 style={{ marginTop: '40px', fontWeight: 900 }}>Checkout</h1>
      
      {step === "review" && (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div className="pay-card" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '60px', height: '60px', background: '#111', borderRadius: '12px' }}></div>
              <div>
                <strong>iPhone 15 Pro</strong>
                <p className="muted" style={{ fontSize: '12px' }}>Skick: Nyskick (AI-Verifierad)</p>
              </div>
            </div>
            <strong>8 900 kr</strong>
          </div>

          <div className="glow-card" style={{ padding: '20px', borderRadius: '24px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Vara</span><span>8 900 kr</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Frakt (Green-AI)</span><span style={{ color: 'var(--accent)' }}>GRATIS</span>
            </div>
            <div style={{ borderTop: '1px solid #222', marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: 900 }}>
              <span>TOTALT</span><span>8 900 kr</span>
            </div>
          </div>

          <button className="primary-btn" onClick={() => setStep("signing")} style={{ width: '100%', background: '#ff5b24', color: '#fff' }}>
            BETALA MED SWISH
          </button>
        </div>
      )}

      {step === "complete" && (
        <div style={{ textAlign: 'center', marginTop: '60px', animation: 'scaleUp 0.5s ease' }}>
          <div style={{ fontSize: '80px' }}>🎉</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 900 }}>KÖPET KLART!</h2>
          <p className="muted">Dina pengar hålls i AI-Escrow tills du godkänt varan.</p>
          <div className="stat-pill" style={{ margin: '20px auto', display: 'inline-block' }}>
            +120 BegTokens Intjänade 🪙
          </div>
          <button className="primary-btn" onClick={() => window.location.href='/feed'} style={{ width: '100%', marginTop: '30px' }}>
            TILL MINA KÖP
          </button>
        </div>
      )}
    </div>
  );
}
