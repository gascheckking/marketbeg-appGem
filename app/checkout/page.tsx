"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [step, setStep] = useState("review"); // review, signing, complete
  const router = useRouter();

  return (
    <div className="web-container">
      <div className="content-wrapper" style={{ maxWidth: '600px', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px' }}>Checkout</h1>
        
        {step === "review" && (
          <div style={{ animation: 'fadeIn 0.4s ease' }}>
            <div className="glow-card" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: '#111', borderRadius: '16px' }}></div>
                <div>
                  <strong style={{ fontSize: '18px' }}>iPhone 15 Pro</strong>
                  <p className="muted" style={{ fontSize: '12px' }}>Säkrad med Karma Shield</p>
                </div>
              </div>
              <strong style={{ fontSize: '18px' }}>8 900 kr</strong>
            </div>

            <div className="glow-card" style={{ padding: '30px', borderRadius: '24px', marginBottom: '30px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span>Pris</span><span>8 900 kr</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span>Frakt (Karma Recycle)</span><span style={{ color: '#00ff88' }}>0 kr (Poäng använda)</span>
              </div>
              <div style={{ borderTop: '1px solid #222', marginTop: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '24px', fontWeight: 900 }}>
                <span>TOTALT</span><span>8 900 kr</span>
              </div>
            </div>

            <button className="primary-btn" onClick={() => setStep("signing")} style={{ width: '100%', background: '#ff5b24', color: '#fff' }}>
              BETALA MED SWISH
            </button>
          </div>
        )}

        {step === "signing" && (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="scan-line" style={{ position: 'relative', width: '100px', margin: '0 auto 40px' }}></div>
            <h2>Öppna BankID</h2>
            <p className="muted">Vi verifierar din betalning via Karma Shield...</p>
            <button onClick={() => setStep("complete")} style={{ marginTop: '40px', background: 'none', border: '1px solid #333', color: '#666', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>Simulera godkänd betalning</button>
          </div>
        )}

        {step === "complete" && (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>💎</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>DIN LOOP ÄR STARTAD!</h2>
            <p className="muted">Varan skickas inom 24h. Dina pengar är skyddade tills du tagit emot paketet.</p>
            <div className="stat-pill" style={{ margin: '30px auto', display: 'inline-block', borderColor: '#00ff88', color: '#00ff88' }}>
              +500 Loyalty Points Intjänade
            </div>
            <button className="primary-btn" onClick={() => router.push('/')} style={{ width: '100%', marginTop: '40px' }}>
              TILLBAKA TILL HEM
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
