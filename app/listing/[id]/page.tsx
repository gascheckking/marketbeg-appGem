// // app/listing/[id]/page.tsx
"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";
import { useRouter } from "next/navigation";

export default function ListingPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingBottom: '140px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(2,4,10,0.8)', backdropFilter: 'blur(10px)' }}>
        <button onClick={() => router.back()} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', width: '36px', height: '36px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        <div style={{ fontSize: '0.9rem', fontWeight: 900, letterSpacing: '3px', color: 'var(--neon-purple)' }}>PRODUCT LOOP</div>
        <div style={{ width: '36px' }}></div>
      </header>

      <div className="page-wrapper" style={{ maxWidth: '500px', margin: '0 auto', padding: '0 15px' }}>
        {/* Produkt-Hero */}
        <div className="glass-card" style={{ 
          padding: '0', overflow: 'hidden', position: 'relative', 
          border: '1px solid rgba(157, 78, 221, 0.2)', background: '#000', borderRadius: '28px', height: '320px',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10 }}>
            <div style={{ 
              background: 'rgba(0,0,0,0.8)', color: 'var(--neon-mint)', padding: '8px 12px', 
              borderRadius: '12px', fontSize: '13px', fontWeight: 900, border: '1px solid var(--neon-mint)',
              textAlign: 'center', boxShadow: '0 0 15px rgba(0,255,136,0.2)'
            }}>
              98%<br /><span style={{ fontSize: '7px', opacity: 0.8, letterSpacing: '1px' }}>AI-SCAN</span>
            </div>
          </div>
          <div style={{ fontSize: '80px' }}>📱</div>
        </div>

        {/* Title & Info */}
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>iPhone 15 Pro Max</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '5px' }}>
              <TrustBadge score={99} />
              <span className="muted" style={{ fontSize: '11px' }}>Black Titanium</span>
            </div>
          </div>
          <PriceTag price={11450} size="md" />
        </div>

        {/* Loop History - Autenticitet genom spårbarhet */}
        <div style={{ marginTop: '35px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', marginBottom: '20px', color: 'var(--neon-purple)' }}>LOOP HISTORY</h3>
          <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '1px solid #222' }}>
            {[
              { label: 'Original Purchase', desc: 'Apple Täby • 2024', status: 'verified' },
              { label: 'AI Health Check', desc: 'Battery 98% • Screen OK', status: 'verified' },
              { label: 'Current Loop', desc: 'Ready for Instant Match', status: 'active' },
            ].map((step, i) => (
              <div key={i} style={{ marginBottom: '20px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-24.5px', top: '4px', width: '9px', height: '9px', 
                  borderRadius: '50%', background: step.status === 'active' ? 'var(--neon-mint)' : 'var(--neon-purple)',
                  boxShadow: step.status === 'active' ? '0 0 10px var(--neon-mint)' : 'none'
                }}></div>
                <div style={{ fontWeight: 900, fontSize: '11px', color: '#fff' }}>{step.label}</div>
                <div style={{ fontSize: '10px', opacity: 0.5, marginTop: '2px' }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          position: 'fixed', bottom: '0', left: '0', right: '0',
          padding: '20px 15px 40px', display: 'flex', gap: '10px', 
          background: 'linear-gradient(to top, #000 80%, transparent)', zIndex: 110
        }}>
          <button onClick={() => router.push('/chat/1')} className="primary-btn" style={{ flex: 2, padding: '18px' }}>KÖP DIREKT</button>
          <button className="glass-card" style={{ flex: 1, fontWeight: 900, fontSize: '12px', border: '1px solid #222' }}>BUD</button>
        </div>
      </div>
    </div>
  );
}
