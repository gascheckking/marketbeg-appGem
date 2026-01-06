// // app/buy/[id]/page.tsx
"use client";
import React, { useState } from 'react';
import TrustBadge from '@/components/TrustBadge';
import ShippingAI from '@/components/ShippingAI';
import PriceTag from '@/components/PriceTag';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('info');

  // Mock-data för att visa Loop-tänket
  const product = {
    title: "AirPods Max - Space Gray",
    price: 3950,
    trust: 98,
    loopCount: 2,
    history: [
      { date: "2024-02-12", action: "Köpt ny", user: "Verifierad Butik" },
      { date: "2025-06-20", action: "Loop #1", user: "Användare 4821" },
      { date: "Nu", action: "Loop #2", user: "Säljare (Du)" }
    ],
    aiInsight: "Detta objekt håller sitt värde väl. AI estimerar ett framtida Loop-värde på 2 800 kr om 12 månader."
  };

  return (
    <div className="page-wrapper" style={{ animation: 'fadeIn 0.4s ease' }}>
      
      {/* BILD-SECTION */}
      <div style={{ width: '100%', aspectRatio: '1/1', background: '#111', position: 'relative' }}>
        <div style={{ 
          position: 'absolute', top: '20px', left: '20px', zIndex: 2,
          background: 'var(--neon-purple)', padding: '5px 12px', borderRadius: '10px',
          fontSize: '10px', fontWeight: 900, boxShadow: '0 0 15px var(--neon-purple)'
        }}>
          LOOP #{product.loopCount}
        </div>
        {/* Här skulle din bild-komponent ligga */}
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.2 }}>
           <span style={{ fontSize: '40px' }}>📸</span>
        </div>
      </div>

      <div style={{ padding: '25px', marginTop: '-20px', background: 'var(--bg-deep)', borderRadius: '30px 30px 0 0', position: 'relative', zIndex: 3 }}>
        
        {/* TITEL & TRUST */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>{product.title}</h1>
            <p style={{ fontSize: '10px', opacity: 0.5, marginTop: '4px' }}>Publicerad i Stockholm • 12 sek sedan</p>
          </div>
          <TrustBadge score={product.trust} />
        </div>

        <PriceTag price={product.price} size="lg" />

        {/* AI SOM AKTÖR - REKOMMENDATION */}
        <div className="glass-card" style={{ 
          padding: '15px', borderRadius: '18px', margin: '20px 0', 
          border: '1px solid var(--neon-purple)', background: 'rgba(157, 78, 221, 0.05)' 
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '16px' }}>✨</span>
            <strong style={{ fontSize: '10px', letterSpacing: '1px', color: 'var(--neon-purple)' }}>AI ANALYS</strong>
          </div>
          <p style={{ fontSize: '11px', lineHeight: '1.4', margin: 0, fontWeight: 600 }}>
            {product.aiInsight}
          </p>
        </div>

        {/* FLIKAR: INFO / LOOP-HISTORIK */}
        <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #222', marginBottom: '20px' }}>
          <button 
            onClick={() => setActiveTab('info')}
            style={{ 
              padding: '10px 0', background: 'none', border: 'none', color: activeTab === 'info' ? '#fff' : '#555',
              fontSize: '11px', fontWeight: 900, borderBottom: activeTab === 'info' ? '2px solid #fff' : 'none'
            }}>BESKRIVNING</button>
          <button 
            onClick={() => setActiveTab('loop')}
            style={{ 
              padding: '10px 0', background: 'none', border: 'none', color: activeTab === 'loop' ? '#fff' : '#555',
              fontSize: '11px', fontWeight: 900, borderBottom: activeTab === 'loop' ? '2px solid var(--neon-mint)' : 'none'
            }}>LOOP-HISTORIK 🔁</button>
        </div>

        {activeTab === 'info' ? (
          <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: '1.6' }}>
            Extremt fint skick. Använda sparsamt på kontor. Originalförpackning och kvitto finns. 
            Karma-shield täcker detta köp till 100%.
          </p>
        ) : (
          <div style={{ display: 'grid', gap: '15px' }}>
            {product.history.map((h, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800 }}>{h.action}</span>
                <span style={{ fontSize: '10px', opacity: 0.5 }}>{h.date} av {h.user}</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ margin: '30px 0' }}>
           <ShippingAI itemWeight="1.2kg" />
        </div>

        {/* ESCROW / TRYGGHET */}
        <div style={{ 
          textAlign: 'center', padding: '15px', borderRadius: '15px', 
          background: 'rgba(0, 255, 136, 0.03)', border: '1px solid rgba(0, 255, 136, 0.1)',
          marginBottom: '100px'
        }}>
          <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-mint)' }}>
            🛡️ SKYDDAD VIA KARMA SHIELD
          </span>
          <p style={{ fontSize: '8px', opacity: 0.6, margin: '5px 0 0' }}>
            Pengarna hålls säkert i escrow tills du bekräftat varans skick.
          </p>
        </div>
      </div>

      {/* FIXED BOTTOM CTA */}
      <div style={{ 
        position: 'fixed', bottom: 0, left: 0, right: 0, 
        padding: '20px 25px calc(20px + env(safe-area-inset-bottom))',
        background: 'rgba(2, 4, 10, 0.9)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid #222', zIndex: 100
      }}>
        <button style={{ 
          width: '100%', padding: '18px', borderRadius: '18px', 
          background: 'var(--neon-mint)', color: '#000', 
          fontWeight: 900, fontSize: '14px', border: 'none',
          boxShadow: '0 0 25px rgba(0, 255, 136, 0.2)'
        }}>
          KÖP DIREKT MED SWISH
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
