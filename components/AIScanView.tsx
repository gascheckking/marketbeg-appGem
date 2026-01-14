// // components/AIScanView.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AIScanView() {
  const router = useRouter();
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnalyzing(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const clusters = [
    { id: 1, title: "7x Barnjackor (86-92)", action: "PAKET", price: 150 },
    { id: 2, title: "Vintage Sneakers", action: "SÄLJ DIREKT", price: 450 },
    { id: 3, title: "Leksaker & Småprylar", action: "BORTSKÄNKES", price: 0 }
  ];

  return (
    <div style={{ background: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* SCANNER VIEWPORT */}
      <div style={{ width: '100%', aspectRatio: '4/5', background: '#111', position: 'relative' }}>
        {/* Simulerad AI-detektering ovanpå bilden */}
        <div style={{ position: 'absolute', top: '30%', left: '20%', width: '40%', height: '30%', border: '2px solid var(--karma-green)', borderRadius: '4px' }}>
          <div style={{ background: 'var(--karma-green)', color: '#000', fontSize: '10px', fontWeight: 900, padding: '2px 6px', width: 'fit-content' }}>7 OBJEKT DETEKTERADE</div>
        </div>
        {analyzing && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontWeight: 900, color: 'var(--karma-green)', letterSpacing: '2px' }}>ANALYSERAR FÖRRÅD...</div>
          </div>
        )}
      </div>

      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '11px', fontWeight: 900, opacity: 0.5, marginBottom: '15px' }}>AI-FÖRSLAG (BASERAT PÅ DITT KAOS)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {clusters.map(c => (
            <div key={c.id} className="karma-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800 }}>{c.title}</div>
                <div style={{ fontSize: '10px', color: 'var(--karma-green)', fontWeight: 900 }}>{c.action}</div>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 900 }}>{c.price > 0 ? `${c.price}:-` : 'GRATIS'}</div>
            </div>
          ))}
        </div>

        <button onClick={() => router.push('/vault')} className="pill-btn" style={{ width: '100%', marginTop: '30px' }}>
          Godkänn & Publicera Allt
        </button>
      </div>
    </div>
  );
}
