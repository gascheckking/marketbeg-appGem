// // app/listing/[id]/page.tsx
"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";
import { useRouter } from "next/navigation";

export default function ListingPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingBottom: '120px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 15px', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(2,4,10,0.8)', backdropFilter: 'blur(10px)' }}>
        <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', width: '32px', height: '32px', borderRadius: '10px' }}>✕</button>
        <div style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '2px', color: 'var(--neon-purple)', alignSelf: 'center' }}>PRODUCT LOOP</div>
        <div style={{ width: '32px' }}></div>
      </header>

      <div className="page-wrapper" style={{ padding: '0 15px' }}>
        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(157, 78, 221, 0.2)', background: '#000', borderRadius: '20px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
            <div style={{ background: 'rgba(0,0,0,0.8)', color: 'var(--neon-mint)', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 900, border: '1px solid var(--neon-mint)', textAlign: 'center' }}>98%<br/><span style={{ fontSize: '6px' }}>AI-SCAN</span></div>
          </div>
          <div style={{ fontSize: '60px' }}>📱</div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>iPhone 15 Pro Max</h1>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}><TrustBadge score={99} /><span style={{ fontSize: '10px', opacity: 0.5 }}>Titanium</span></div>
          </div>
          <PriceTag price={11450} size="sm" />
        </div>

        <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(255,255,255,0.01)', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '1px', marginBottom: '15px', color: 'var(--neon-purple)' }}>LOOP HISTORY</h3>
          <div style={{ borderLeft: '1px solid #222', paddingLeft: '15px', marginLeft: '5px' }}>
            {['Original Purchase', 'AI Health Check', 'Current Loop'].map((step, i) => (
              <div key={i} style={{ marginBottom: '15px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-19.5px', top: '4px', width: '7px', height: '7px', borderRadius: '50%', background: i === 2 ? 'var(--neon-mint)' : 'var(--neon-purple)' }}></div>
                <div style={{ fontWeight: 900, fontSize: '10px' }}>{step}</div>
                <div style={{ fontSize: '9px', opacity: 0.4 }}>Verifierad via Karma Node</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '15px 15px 30px', display: 'flex', gap: '8px', background: 'linear-gradient(to top, #000 80%, transparent)', zIndex: 110 }}>
          <button onClick={() => router.push('/chat/1')} className="primary-btn" style={{ flex: 2, padding: '14px', fontSize: '11px' }}>KÖP DIREKT</button>
          <button className="glass-card" style={{ flex: 1, fontSize: '11px', fontWeight: 900 }}>BUD</button>
        </div>
      </div>
    </div>
  );
}
