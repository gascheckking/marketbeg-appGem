// // components/MatchFoundOverlay.tsx
"use client";
import React, { useEffect, useState } from "react";
import TrustBadge from "@/components/TrustBadge";
import PriceTag from "@/components/PriceTag";

export default function MatchFoundOverlay({ price, trust, demand, onAccept, onClose }: any) {
  const [animatedPrice, setAnimatedPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setAnimatedPrice(Math.round(start + (price - start) * easeOut));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [price]);

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(25px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ 
        width: '100%', maxWidth: '380px', background: 'var(--karma-green)', borderRadius: '40px',
        padding: '50px 30px', textAlign: 'center', color: '#000',
        boxShadow: '0 30px 60px rgba(29, 185, 84, 0.3)',
        animation: 'popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <div style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '3px', opacity: 0.6, marginBottom: '25px' }}>MATCH FUNNEN</div>
        <div style={{ marginBottom: '30px' }}><PriceTag price={animatedPrice} size="lg" color="#000" /></div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '30px' }}>
             <TrustBadge score={trust} />
             <div style={{ background: 'rgba(0,0,0,0.08)', padding: '10px 15px', borderRadius: '15px', fontSize: '11px', fontWeight: 900 }}>{demand}</div>
        </div>
        <p style={{ fontSize: '14px', fontWeight: 700, lineHeight: '1.6', marginBottom: '40px', opacity: 0.8 }}>
          En köpare väntar i loopen. Pengarna släpps direkt när AI-logistiken bekräftar inlämning.
        </p>
        <button onClick={onAccept} style={{ width: '100%', background: '#000', color: '#fff', border: 'none', padding: '22px', borderRadius: '20px', fontWeight: 900, fontSize: '16px', marginBottom: '15px', cursor: 'pointer' }}>ACCEPTERA & SÄLJ</button>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: '13px', fontWeight: 800, opacity: 0.5 }}>Avbryt</button>
      </div>
      <style jsx>{` @keyframes popIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } } `}</style>
    </div>
  );
}
