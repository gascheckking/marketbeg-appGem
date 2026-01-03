"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";
import { useRouter } from "next/navigation";

export default function ListingPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div style={{ paddingBottom: '150px', background: 'var(--bg-deep)' }}>
      {/* Header med Back-button och LOGO likt bilden */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px' }}>
        <button onClick={() => router.back()} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }}>✕</button>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '4px' }}>KARMA</div>
        <div style={{ position: 'relative' }}>
          <span>🔔</span>
          <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'red', borderRadius: '50%', width: '12px', height: '12px', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
        </div>
      </div>

      <div className="page-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Den "Tunga" Produktkortet från bilden */}
        <div className="glass-card" style={{ 
          padding: '0', 
          overflow: 'hidden', 
          position: 'relative', 
          border: '1px solid rgba(157, 78, 221, 0.3)',
          background: '#000',
          borderRadius: '30px'
        }}>
          {/* Match Score Badge */}
          <div style={{ position: 'absolute', top: '25px', right: '25px', zIndex: 10 }}>
            <div style={{ 
              background: 'rgba(0,0,0,0.8)', 
              color: 'var(--neon-mint)', 
              padding: '10px 15px', 
              borderRadius: '12px', 
              fontSize: '14px', 
              fontWeight: 900, 
              border: '2px solid var(--neon-mint)',
              textAlign: 'center',
              lineHeight: '1'
            }}>
              98%<br /><span style={{ fontSize: '8px' }}>MATCH</span>
            </div>
          </div>
          
          {/* Produktbilden */}
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

          {/* Action Tags under bilden */}
          <div style={{ display: 'flex', gap: '10px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
            <span className="spec-badge">TRUST 99%</span>
            <span className="spec-badge">VERIFIERAD</span>
            <span className="spec-badge">AI-SKAN</span>
          </div>
        </div>

        {/* Info Section */}
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>iPhone 15 Pro Max</h1>
            <p className="muted" style={{ fontSize: '1.2rem' }}>i Black Titanium • {params.id}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--neon-mint)' }}>11 450 kr</div>
          </div>
        </div>

        {/* Din säljare-sektion behålls men snyggas till */}
        <div className="glass-card" style={{ margin: '40px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '45px', height: '45px', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', borderRadius: '50%' }}></div>
            <div>
              <strong style={{ fontSize: '1rem' }}>Alex L.</strong>
              <div style={{ marginTop: '2px' }}><TrustBadge score={98.2} /></div>
            </div>
          </div>
          <button style={{ background: 'none', border: '1px solid #444', color: '#fff', padding: '8px 15px', borderRadius: '10px', fontSize: '11px', fontWeight: 800 }}>PROFIL</button>
        </div>

        {/* Circular History - Tidslinjen från bilden */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '2px', marginBottom: '30px', color: '#555' }}>CIRCULAR HISTORY</h3>
          <div style={{ position: 'relative', paddingLeft: '30px', borderLeft: '1px solid #222', marginLeft: '10px' }}>
            {[
              { label: 'Origin', desc: 'Apple Store Täby', date: 'Okt 2023', active: false },
              { label: 'Verified', desc: 'Karma Protocol Check', date: 'Jan 2026', active: false },
              { label: 'Live', desc: 'Tillgänglig för Matchning', date: 'Nu', active: true },
            ].map((step, i) => (
              <div key={i} style={{ marginBottom: '30px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', left: '-36px', top: '0', 
                  width: '10px', height: '10px', borderRadius: '50%', 
                  background: step.active ? 'var(--neon-mint)' : '#333',
                  boxShadow: step.active ? '0 0 15px var(--neon-mint)' : 'none'
                }}></div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: step.active ? '#fff' : '#666' }}>{step.label}</div>
                <div className="muted" style={{ fontSize: '12px' }}>{step.desc} • {step.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Bar - Din originalknapp behålls */}
        <div style={{ 
          position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          width: '90%', maxWidth: '500px', display: 'flex', gap: '15px', zIndex: 100
        }}>
          <button className="primary-btn" style={{ flex: 2, padding: '20px', fontSize: '15px', background: 'var(--neon-purple)', color: '#fff' }}>
            DIREKTKÖP
          </button>
          <button className="glass-card" style={{ flex: 1, fontWeight: 900, fontSize: '13px', background: '#000', border: '1px solid #333' }}>
            LÄGG BUD
          </button>
        </div>
      </div>

      <style jsx>{`
        .spec-badge {
          background: rgba(157, 78, 221, 0.15);
          color: var(--neon-purple);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}
