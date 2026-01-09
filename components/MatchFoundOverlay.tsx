// // components/MatchFoundOverlay.tsx
"use client";
import React, { useEffect, useState } from "react";
import TrustBadge from "@/components/TrustBadge";
import PriceTag from "@/components/PriceTag";

export default function MatchFoundOverlay({ price, trust, demand, onAccept, onClose }: any) {
  const [animatedPrice, setAnimatedPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setAnimatedPrice(Math.round(start + (price - start) * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [price]);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
      backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div style={{
        width: '100%', maxWidth: '360px', background: '#1DB954', borderRadius: '32px',
        padding: '40px 24px', textAlign: 'center', color: '#000',
        animation: 'slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', opacity: 0.7, marginBottom: '20px' }}>
          AFFÄR MATCHAD
        </div>

        <div style={{ marginBottom: '20px' }}>
          <PriceTag price={animatedPrice} size="lg" color="#000" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '6px 12px', borderRadius: '12px' }}>
             <TrustBadge score={trust} />
          </div>
          <span style={{ fontSize: '11px', fontWeight: 900, opacity: 0.7, alignSelf: 'center' }}>{demand.toUpperCase()}</span>
        </div>

        <p style={{ fontSize: '13px', fontWeight: 600, lineHeight: '1.5', marginBottom: '30px', opacity: 0.8 }}>
          En köpare med hög Karma har accepterat ditt pris. Pengarna skickas sekunden du postar.
        </p>

        <button 
          onClick={onAccept}
          style={{
            width: '100%', background: '#000', color: '#fff', border: 'none',
            padding: '20px', borderRadius: '18px', fontWeight: 900, fontSize: '15px', marginBottom: '12px'
          }}
        >
          ACCEPTERA & SÄLJ
        </button>

        <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '12px', fontWeight: 800, opacity: 0.6 }}>
          Kanske senare
        </button>
      </div>

      <style jsx>{`
        @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}
