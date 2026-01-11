// // app/listing/[id]/page.tsx
"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";
import { useRouter } from "next/navigation";

export default function ListingPage() {
  const router = useRouter();

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingBottom: '120px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(15px)' }}>
        <button onClick={() => router.back()} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: '#fff', width: '35px', height: '35px', borderRadius: '12px' }}>✕</button>
        <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', color: 'var(--karma-green)', alignSelf: 'center' }}>PRODUCT LOOP</div>
        <div style={{ width: '35px' }}></div>
      </header>

      <div className="page-wrapper" style={{ padding: '0 20px' }}>
        <div className="card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(29,185,84,0.1)', background: '#000', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
            <div style={{ background: 'rgba(0,0,0,0.8)', color: 'var(--karma-green)', padding: '8px 12px', borderRadius: '10px', fontSize: '12px', fontWeight: 900, border: '1px solid var(--karma-green)', textAlign: 'center' }}>98%<br/><span style={{ fontSize: '7px' }}>AI-SCAN</span></div>
          </div>
          <div style={{ fontSize: '80px' }}>📱</div>
        </div>

        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>iPhone 15 Pro Max</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
              <TrustBadge score={99} />
              <span style={{ fontSize: '11px', opacity: 0.4, fontWeight: 700 }}>Titanium Black</span>
            </div>
          </div>
          <PriceTag price={11450} size="md" />
        </div>

        <div style={{ marginTop: '30px', padding: '20px', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px', marginBottom: '20px', color: 'var(--karma-green)' }}>LOOP HISTORY</h3>
          <div style={{ borderLeft: '2px solid #111', paddingLeft: '20px', marginLeft: '5px' }}>
            {['Inköpt via Apple', 'AI Health Check', 'Current Loop'].map((step, i) => (
              <div key={i} style={{ marginBottom: '20px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-26px', top: '4px', width: '10px', height: '10px', 
                  borderRadius: '50%', background: i === 2 ? 'var(--karma-green)' : '#333',
                  boxShadow: i === 2 ? '0 0 10px var(--karma-green)' : 'none'
                }}></div>
                <div style={{ fontWeight: 900, fontSize: '12px' }}>{step}</div>
                <div style={{ fontSize: '10px', opacity: 0.4, fontWeight: 600 }}>Verifierad via Karma Node</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '20px 20px 40px', display: 'flex', gap: '10px', background: 'linear-gradient(to top, #000 70%, transparent)', zIndex: 110 }}>
          <button onClick={() => router.push('/buy/checkout')} className="primary-btn" style={{ flex: 2 }}>KÖP DIREKT</button>
          <button className="card" style={{ flex: 1, fontWeight: 900, fontSize: '12px', background: 'transparent' }}>BUD</button>
        </div>
      </div>
    </div>
  );
}
