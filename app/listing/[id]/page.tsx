"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";
import { useRouter } from "next/navigation";

/**
 * Produktdetalj-sida.
 * Fokus på "Circular History" och Match Score för att sälja in idén om Loopen.
 */
export default function ListingPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingBottom: '120px' }}>
      {/* Minimal Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(2,4,10,0.8)', backdropFilter: 'blur(10px)' }}>
        <button onClick={() => router.back()} style={{ background: 'var(--glass)', border: '1px solid var(--border)', color: '#fff', width: '35px', height: '35px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        <div style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '2px' }}>KARMA</div>
        <div style={{ width: '35px' }}></div> {/* Spacer */}
      </div>

      <div className="page-wrapper" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Produkt-Hero */}
        <div className="glass-card" style={{ 
          padding: '0', overflow: 'hidden', position: 'relative', 
          border: '1px solid rgba(157, 78, 221, 0.2)', background: '#000', borderRadius: '24px'
        }}>
          {/* Match Score */}
          <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10 }}>
            <div style={{ 
              background: 'rgba(0,0,0,0.8)', color: 'var(--neon-mint)', padding: '8px 12px', 
              borderRadius: '12px', fontSize: '14px', fontWeight: 900, border: '1px solid var(--neon-mint)',
              textAlign: 'center', lineHeight: '1'
            }}>
              98%<br /><span style={{ fontSize: '7px', opacity: 0.8 }}>MATCH</span>
            </div>
          </div>
          
          <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px' }}>
            📱
          </div>

          <div style={{ display: 'flex', gap: '8px', padding: '12px', background: 'rgba(255,255,255,0.02)' }}>
            <span className="spec-badge">OLED</span>
            <span className="spec-badge">VERIFIERAD</span>
            <span className="spec-badge">AI-SKAN</span>
          </div>
        </div>

        {/* Info */}
        <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>iPhone 15 Pro Max</h1>
            <p className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>Black Titanium • ID:{params.id}</p>
          </div>
          <PriceTag price={11450} size="lg" />
        </div>

        {/* Säljare-info */}
        <div className="glass-card" style={{ margin: '25px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', borderRadius: '50%' }}></div>
            <div>
              <strong style={{ fontSize: '14px', display: 'block' }}>Alex L.</strong>
              <TrustBadge score={98} />
            </div>
          </div>
          <button style={{ background: 'var(--glass)', border: '1px solid var(--border)', color: '#fff', padding: '8px 12px', borderRadius: '10px', fontSize: '10px', fontWeight: 800 }}>PROFIL</button>
        </div>

        {/* Circular History (Storytelling) */}
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '2px', marginBottom: '20px', color: '#555' }}>CIRCULAR HISTORY</h3>
          <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '1px solid #1a1a1a', marginLeft: '5px' }}>
            {[
              { label: 'Origin', desc: 'Apple Store Täby', date: 'Okt 2023' },
              { label: 'Verified', desc: 'Karma Protocol Check', date: 'Jan 2026' },
              { label: 'Live', desc: 'Väntar på matchning', date: 'Nu', active: true },
            ].map((step, i) => (
              <div key={i} style={{ marginBottom: '25px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-25.5px', top: '4px', width: '10px', height: '10px', 
                  borderRadius: '50%', background: step.active ? 'var(--neon-mint)' : '#222',
                  boxShadow: step.active ? '0 0 10px var(--neon-mint)' : 'none'
                }}></div>
                <div style={{ fontWeight: 800, fontSize: '12px', color: step.active ? '#fff' : '#444' }}>{step.label.toUpperCase()}</div>
                <div className="muted" style={{ fontSize: '11px' }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Footer Buttons */}
        <div style={{ 
          position: 'fixed', bottom: '85px', left: '0', right: '0',
          padding: '15px 20px', display: 'flex', gap: '10px', 
          background: 'linear-gradient(to top, var(--bg-deep) 80%, transparent)', zIndex: 110
        }}>
          <button className="primary-btn" style={{ flex: 2, padding: '18px', fontSize: '14px' }}>DIREKTKÖP</button>
          <button className="glass-card" style={{ flex: 1, fontWeight: 900, fontSize: '12px', background: 'rgba(0,0,0,0.8)' }}>BUD</button>
        </div>
      </div>

      <style jsx>{`
        .spec-badge { background: rgba(255,255,255,0.03); color: #666; padding: 4px 8px; border-radius: 6px; font-size: 8px; font-weight: 900; border: 1px solid var(--border); }
      `}</style>
    </div>
  );
}
