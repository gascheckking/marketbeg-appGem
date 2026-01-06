// // app/match/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';

export default function MatchPage() {
  return (
    <div className="page-wrapper" style={{ padding: '20px', animation: 'fadeIn 0.5s ease' }}>
      
      <header style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px', textTransform: 'uppercase' }}>Dina Matchningar</h2>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '5px 0', letterSpacing: '-1px' }}>REDO FÖR <span style={{ color: 'var(--neon-mint)' }}>AFFÄR</span></h1>
        <p style={{ fontSize: '11px', opacity: 0.5, fontWeight: 700, lineHeight: '1.4' }}>
          Här samlas köpare och säljare som systemet parat ihop för en trygg och snabb transaktion.
        </p>
      </header>
      
      {/* EMPTY STATE - När inga matcher finns */}
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 30px', 
        background: 'rgba(255,255,255,0.01)', 
        borderRadius: '32px', 
        border: '1px dashed rgba(255,255,255,0.08)',
        marginTop: '20px'
      }}>
        <div style={{ 
          width: '60px', height: '60px', background: 'rgba(255,255,255,0.03)', 
          borderRadius: '20px', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', margin: '0 auto 20px', fontSize: '24px'
        }}>
          🤝
        </div>
        <h3 style={{ fontSize: '14px', fontWeight: 900, marginBottom: '8px' }}>Inga aktiva matcher</h3>
        <p style={{ fontSize: '10px', fontWeight: 700, opacity: 0.4, maxWidth: '200px', margin: '0 auto 25px', lineHeight: '1.5' }}>
          Just nu har vi inga direkta träffar på dina bevakningar eller annonser.
        </p>
        
        <Link href="/sell">
          <button style={{ 
            background: '#fff', color: '#000', border: 'none', 
            padding: '16px 30px', borderRadius: '16px', 
            fontWeight: 900, fontSize: '11px', cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(255,255,255,0.05)'
          }}>
            STARTA SNABBSÄLJ
          </button>
        </Link>
      </div>

      {/* INFO OM SYSTEMET (Låst vision) */}
      <div style={{ marginTop: '40px', padding: '20px', borderRadius: '20px', background: 'rgba(157, 78, 221, 0.03)', border: '1px solid rgba(157, 78, 221, 0.1)' }}>
        <h4 style={{ margin: 0, fontSize: '10px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '1px' }}>HUR FUNGERAR DET?</h4>
        <p style={{ fontSize: '10px', fontWeight: 700, marginTop: '8px', opacity: 0.6, lineHeight: '1.5' }}>
          Vårt AI-system matchar säljare med köpare baserat på tillit, plats och pris. När en match sker får du en notis och kan slutföra affären direkt i chatten.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
