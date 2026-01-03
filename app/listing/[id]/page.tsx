"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";
import { useRouter } from "next/navigation";

export default function ListingPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div style={{ paddingBottom: '150px', background: 'var(--bg-deep)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }}>✕</button>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '4px' }}>KARMA</div>
        <div style={{ position: 'relative' }}>
          <span>🔔</span>
          <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--neon-purple)', borderRadius: '50%', width: '12px', height: '12px', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
        </div>
      </div>

      <div className="page-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Produktkortet */}
        <div className="glass-card" style={{ 
          padding: '0', 
          overflow: 'hidden', 
          position: 'relative', 
          border: '1px solid rgba(157, 78, 221, 0.3)',
          background: '#000',
          borderRadius: '30px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          {/* Match Score Badge */}
          <div style={{ position: 'absolute', top: '25px', right: '25px', zIndex: 10 }}>
            <div style={{ 
              background: 'rgba(0,0,0,0.85)', 
              color: 'var(--neon-mint)', 
              padding: '12px', 
              borderRadius: '14px', 
              fontSize: '16px', 
              fontWeight: 900, 
              border: '2px solid var(--neon-mint)',
              textAlign: 'center',
              lineHeight: '1',
              boxShadow: '0 0 20px rgba(0,255,136,0.2)'
            }}>
              98%<br /><span style={{ fontSize: '8px', opacity: 0.8 }}>MATCH</span>
            </div>
          </div>
          
          <div style={{ 
            height: '400px', 
            background: 'radial-gradient(circle, #1a1a1a 0%, #000 100%)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '100px' 
          }}>
            📱
          </div>

          <div style={{ display: 'flex', gap: '10px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
            <span className="spec-badge">OLED DISPLAY</span>
            <span className="spec-badge">VERIFIERAD</span>
            <span className="spec-badge">AI-SKAN</span>
          </div>
        </div>

        {/* Info Section - Här använder vi nu PriceTag lg */}
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>iPhone 15 Pro Max</h1>
            <p className="muted" style={{ fontSize: '1.2rem', marginTop: '5px' }}>i Black Titanium • {params.id}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <PriceTag price={11450} size="lg" />
          </div>
        </div>

        {/* Säljare */}
        <div className="glass-card" style={{ margin: '40px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '45px', height: '45px', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', borderRadius: '50%' }}></div>
            <div>
              <strong style={{ fontSize: '1rem', display: 'block', marginBottom: '4px' }}>Alex L.</strong>
              <TrustBadge score={98.2} />
            </div>
          </div>
          <button style={{ background: 'var(--glass)', border: '1px solid var(--border)', color: '#fff', padding: '10px 20px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>PROFIL</button>
        </div>

        {/* History */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', marginBottom: '30px', color: '#444' }}>CIRCULAR HISTORY</h3>
          <div style={{ position: 'relative', paddingLeft: '30px', borderLeft: '1px solid #1a1a1a', marginLeft: '10px' }}>
            {[
              { label: 'Origin', desc: 'Apple Store Täby', date: 'Okt 2023', active: false },
              { label: 'Verified', desc: 'Karma Protocol Check', date: 'Jan 2026', active: false },
              { label: 'Live', desc: 'Väntar på matchning', date: 'Nu', active: true },
            ].map((step, i) => (
              <div key={i} style={{ marginBottom: '35px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-36px', top: '4px', 
                  width: '10px', height: '10px', borderRadius: '50%', 
                  background: step.active ? 'var(--neon-mint)' : '#222',
                  boxShadow: step.active ? '0 0 15px var(--neon-mint)' : 'none'
                }}></div>
                <div style={{ fontWeight: 800, fontSize: '13px', color: step.active ? '#fff' : '#555', textTransform: 'uppercase' }}>{step.label}</div>
                <div className="muted" style={{ fontSize: '12px', marginTop: '4px' }}>{step.desc} • {step.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Bar */}
        <div style={{ 
          position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          width: '90%', maxWidth: '500px', display: 'flex', gap: '15px', zIndex: 100
        }}>
          <button className="primary-btn" style={{ flex: 2, padding: '22px', fontSize: '16px', letterSpacing: '1px' }}>
            DIREKTKÖP
          </button>
          <button className="glass-card" style={{ flex: 1, fontWeight: 900, fontSize: '14px', background: 'rgba(0,0,0,0.8)', border: '1px solid #222' }}>
            BUD
          </button>
        </div>
      </div>

      <style jsx>{`
        .spec-badge {
          background: rgba(255, 255, 255, 0.03);
          color: #888;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
          border: 1px solid var(--border);
        }
      `}</style>
    </div>
  );
}
