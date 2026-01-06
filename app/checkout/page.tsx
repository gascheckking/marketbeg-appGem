// // app/checkout/page.tsx
"use client";
import React, { useState } from 'react';
import ShippingAI from '@/components/ShippingAI';

export default function CheckoutPage() {
  const [shieldActive, setShieldActive] = useState(true);

  // Vi räknar ut totalen baserat på Shield-status
  const itemPrice = 11450;
  const shieldFee = shieldActive ? 149 : 0;
  const total = itemPrice + shieldFee;

  return (
    <div className="page-wrapper" style={{ padding: '20px', animation: 'fadeIn 0.4s ease' }}>
      
      {/* ORIENTERING & STATUS */}
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>SLUTFÖR <span style={{ color: 'var(--neon-mint)' }}>KÖP</span></h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-mint)', boxShadow: '0 0 8px var(--neon-mint)' }}></div>
          <span style={{ fontSize: '9px', fontWeight: 800, opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Verifierad Match • Redo för Escrow
          </span>
        </div>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* KARMA SHIELD (UPPGRADERAD MED MER DESCRIPTIVE UI) */}
        <div className="glass-card" style={{ 
          padding: '20px', 
          border: shieldActive ? '1px solid var(--neon-purple)' : '1px solid #222',
          background: shieldActive ? 'rgba(157, 78, 221, 0.05)' : 'rgba(255,255,255,0.02)',
          borderRadius: '24px',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '6px' }}>
                🛡️ Karma Shield {shieldActive && <span style={{ fontSize: '8px', background: 'var(--neon-purple)', padding: '2px 6px', borderRadius: '4px' }}>AKTIV</span>}
              </h3>
              <p style={{ fontSize: '10px', marginTop: '6px', opacity: 0.5, lineHeight: '1.4' }}>
                Pengarna hålls i förvar (escrow). Säljaren får betalt först när du godkänt varan.
              </p>
            </div>
            <div 
              onClick={() => setShieldActive(!shieldActive)}
              style={{ 
                width: '44px', height: '24px', background: shieldActive ? 'var(--neon-purple)' : '#333',
                borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: '0.3s'
              }}>
              <div style={{ 
                width: '18px', height: '18px', background: '#fff', borderRadius: '50%',
                position: 'absolute', top: '3px', left: shieldActive ? '23px' : '3px', transition: '0.3s'
              }}></div>
            </div>
          </div>
        </div>

        {/* FRAKT AI */}
        <div style={{ margin: '5px 0' }}>
           <ShippingAI itemWeight="1.2kg" />
        </div>

        {/* ORDER SPECS */}
        <div className="glass-card" style={{ padding: '20px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '12px', fontWeight: 700 }}>
            <span style={{ opacity: 0.4 }}>OBJEKT</span>
            <span>iPhone 15 Pro Max</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '12px', fontWeight: 700 }}>
            <span style={{ opacity: 0.4 }}>PRIS</span>
            <span>{itemPrice.toLocaleString()} KR</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, color: shieldActive ? 'var(--neon-purple)' : '#555' }}>
            <span style={{ opacity: 0.4 }}>SHIELD & FRAKT</span>
            <span>{shieldFee} KR</span>
          </div>
          
          <div style={{ 
            display: 'flex', justifyContent: 'space-between', 
            paddingTop: '15px', borderTop: '1px solid #222', 
            marginTop: '15px' 
          }}>
            <strong style={{ fontSize: '1.1rem', fontWeight: 900 }}>TOTALT</strong>
            <strong style={{ fontSize: '1.1rem', color: 'var(--neon-mint)', fontWeight: 900 }}>
              {total.toLocaleString()} KR
            </strong>
          </div>
        </div>

        {/* SOCIAL PROOF / TRYGGHETSDATA */}
        <div style={{ textAlign: 'center', marginTop: '10px', paddingBottom: '120px' }}>
          <p style={{ fontSize: '9px', fontWeight: 800, opacity: 0.3, letterSpacing: '1px' }}>
            TRANSAKTIONEN KRYPTERAS VIA BANKID & KARMA PROTOCOL
          </p>
        </div>
      </div>

      {/* FIXERAD BETALKNAPP (SWISH-FOKUS) */}
      <div style={{ 
        position: 'fixed', bottom: 0, left: 0, right: 0, 
        padding: '20px 25px calc(20px + env(safe-area-inset-bottom))',
        background: 'rgba(2, 4, 10, 0.9)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid #222', zIndex: 100
      }}>
        <button style={{ 
          width: '100%', padding: '18px', borderRadius: '18px', 
          background: '#fff', color: '#000', 
          fontWeight: 900, fontSize: '14px', border: 'none',
          boxShadow: '0 0 20px rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
        }}>
          ÖPPNA SWISH & SIGNERA
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
