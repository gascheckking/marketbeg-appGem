"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";
import { useRouter } from "next/navigation";

export default function ListingPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingBottom: '120px' }}>
      {/* Header remain same as your code */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(2,4,10,0.8)', backdropFilter: 'blur(10px)' }}>
        <button onClick={() => router.back()} style={{ background: 'var(--glass)', border: '1px solid var(--border)', color: '#fff', width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>✕</button>
        <div style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '2px' }}>KARMA</div>
        <div style={{ width: '32px' }}></div>
      </div>

      <div className="page-wrapper" style={{ maxWidth: '450px', margin: '0 auto', padding: '0 15px' }}>
        {/* Produkt-Hero */}
        <div className="glass-card" style={{ 
          padding: '0', overflow: 'hidden', position: 'relative', 
          border: '1px solid rgba(157, 78, 221, 0.2)', background: '#000', borderRadius: '20px'
        }}>
          <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 10 }}>
            <div style={{ 
              background: 'rgba(0,0,0,0.85)', color: 'var(--neon-mint)', padding: '6px 10px', 
              borderRadius: '10px', fontSize: '12px', fontWeight: 900, border: '1px solid var(--neon-mint)',
              textAlign: 'center', lineHeight: '1'
            }}>
              98%<br /><span style={{ fontSize: '6px', opacity: 0.8 }}>AI-MATCH</span>
            </div>
          </div>
          <div style={{ height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>📱</div>
        </div>

        {/* Title & Price */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>iPhone 15 Pro Max</h1>
            <p className="muted" style={{ fontSize: '11px', marginTop: '2px' }}>Black Titanium • Karma Verified</p>
          </div>
          <PriceTag price={11450} size="sm" />
        </div>

        {/* Circular History (Storytelling) - Tajtare version */}
        <div style={{ marginTop: '25px' }}>
          <h3 style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '1px', marginBottom: '15px', color: '#444' }}>LOOP HISTORY</h3>
          <div style={{ position: 'relative', paddingLeft: '15px', borderLeft: '1px solid #111', marginLeft: '5px' }}>
            {[
              { label: 'Origin', desc: 'Apple Store Täby', active: false },
              { label: 'Verified', desc: 'AI Vision Analysis', active: false },
              { label: 'Live Match', desc: 'Ready for next owner', active: true },
            ].map((step, i) => (
              <div key={i} style={{ marginBottom: '15px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-20.5px', top: '4px', width: '8px', height: '8px', 
                  borderRadius: '50%', background: step.active ? 'var(--neon-mint)' : '#222',
                  boxShadow: step.active ? '0 0 8px var(--neon-mint)' : 'none'
                }}></div>
                <div style={{ fontWeight: 800, fontSize: '10px', color: step.active ? '#fff' : '#333' }}>{step.label.toUpperCase()}</div>
                <div style={{ fontSize: '9px', opacity: 0.5 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{ 
          position: 'fixed', bottom: '80px', left: '0', right: '0',
          padding: '15px', display: 'flex', gap: '8px', 
          background: 'linear-gradient(to top, var(--bg-deep) 80%, transparent)', zIndex: 110
        }}>
          <button 
            onClick={() => router.push('/chat/1')}
            className="primary-btn" 
            style={{ flex: 2, background: 'var(--neon-purple)', color: '#fff', padding: '15px', fontSize: '12px' }}>
            DIREKTKÖP NU
          </button>
          <button className="glass-card" style={{ flex: 1, fontWeight: 900, fontSize: '10px', background: 'rgba(0,0,0,0.8)', border: '1px solid #222' }}>LÄGG BUD</button>
        </div>
      </div>
    </div>
  );
}
