// // app/checkout/success/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ 
      padding: '40px 20px', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '80vh',
      animation: 'fadeIn 0.6s ease'
    }}>
      
      {/* ANIMERAD STATUS-IKON */}
      <div className="success-icon-wrapper">
        <div className="pulse-ring"></div>
        <span className="main-icon">🛡️</span>
      </div>

      <h1 style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '30px', marginBottom: '10px' }}>
        LOOPEN ÄR <span style={{ color: 'var(--neon-mint)' }}>SÄKRAD</span>
      </h1>
      <p style={{ fontSize: '12px', opacity: 0.6, fontWeight: 700, maxWidth: '250px', lineHeight: '1.5' }}>
        Dina 11 599 kr hålls nu säkert i Escrow. Säljaren har fått en fraktsedel.
      </p>

      {/* LOOP TRACKER - VISUELL ORIENTERING */}
      <div className="glass-card" style={{ 
        width: '100%', 
        padding: '25px', 
        borderRadius: '24px', 
        marginTop: '40px',
        textAlign: 'left',
        background: 'rgba(255,255,255,0.02)'
      }}>
        <h3 style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2px', marginBottom: '20px', color: 'var(--neon-purple)' }}>
          TRANSAKTIONS-STATUS
        </h3>

        <div className="timeline">
          <div className="step active">
            <div className="dot"></div>
            <div className="text">
              <span className="label">BETALNING MOTTAGEN</span>
              <span className="sub">Verifierad via BankID</span>
            </div>
          </div>
          <div className="step current">
            <div className="dot"></div>
            <div className="text">
              <span className="label">ESCROW AKTIVERAT</span>
              <span className="sub">Pengar hålls av Karma Shield</span>
            </div>
          </div>
          <div className="step pending">
            <div className="dot"></div>
            <div className="text">
              <span className="label">INVÄNTAR INLÄMNING</span>
              <span className="sub">Säljaren har 48h på sig</span>
            </div>
          </div>
        </div>
      </div>

      {/* INFO OM NÄSTA STEG */}
      <div style={{ marginTop: '30px', fontSize: '11px', opacity: 0.4, fontWeight: 800 }}>
        ORDER ID: #KRMA-99281-X
      </div>

      {/* PRIMARY ACTIONS */}
      <div style={{ 
        position: 'fixed', bottom: '0', left: 0, right: 0, 
        padding: '20px 25px calc(25px + env(safe-area-inset-bottom))',
        background: 'linear-gradient(to top, var(--bg-deep) 80%, transparent)'
      }}>
        <button 
          onClick={() => router.push('/')}
          className="primary-btn" 
          style={{ 
            width: '100%', background: 'var(--neon-purple)', color: '#fff', 
            padding: '18px', borderRadius: '18px', fontWeight: 900, fontSize: '13px'
          }}>
          TILLBAKA TILL FEEDEN
        </button>
        <button 
          style={{ width: '100%', background: 'transparent', color: '#fff', border: 'none', marginTop: '15px', fontSize: '11px', fontWeight: 800, opacity: 0.6 }}>
          SE KVITTO & DETALJER
        </button>
      </div>

      <style jsx>{`
        .success-icon-wrapper { position: relative; width: 80px; height: 80px; display: flex; alignItems: center; justify-content: center; }
        .main-icon { fontSize: 40px; zIndex: 2; }
        .pulse-ring { 
          position: absolute; width: 100%; height: 100%; 
          border: 2px solid var(--neon-mint); borderRadius: 50%;
          animation: pulse 2s infinite; opacity: 0;
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .timeline { display: flex; flexDirection: column; gap: 25px; }
        .step { display: flex; gap: 15px; position: relative; }
        .dot { width: 12px; height: 12px; borderRadius: 50%; background: #222; marginTop: 4px; zIndex: 2; }
        .step.active .dot { background: var(--neon-mint); boxShadow: 0 0 10px var(--neon-mint); }
        .step.current .dot { background: var(--neon-purple); boxShadow: 0 0 10px var(--neon-purple); }
        
        .label { display: block; fontSize: 11px; fontWeight: 900; }
        .sub { display: block; fontSize: 9px; opacity: 0.4; fontWeight: 700; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
