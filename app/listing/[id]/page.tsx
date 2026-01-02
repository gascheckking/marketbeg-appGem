"use client";
import React from 'react';
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";

export default function ListingPage({ params }: { params: { id: string } }) {
  return (
    <div style={{ paddingBottom: '150px' }}>
      <div style={{ 
        width: '100%', height: '50vh', background: 'linear-gradient(to bottom, #111, #02040a)', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '120px', borderBottom: '1px solid var(--border)' 
      }}>
        📱
      </div>

      <div className="page-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <span className="stat-pill" style={{ background: 'rgba(255,255,255,0.05)', color: '#888' }}>ID: {params.id}</span>
              <span style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)', padding: '5px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: 900 }}>NYSKICK</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, margin: 0, letterSpacing: '-2px' }}>iPhone 15 Pro</h1>
            <p className="muted" style={{ fontSize: '1.1rem', marginTop: '10px' }}>📍 Stockholm, Sverige</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <PriceTag price={11450} />
            <div style={{ fontSize: '12px', color: 'var(--neon-mint)', fontWeight: 900, marginTop: '10px' }}>BÄSTA PRIS I LOOPEN JUST NU</div>
          </div>
        </div>

        <div className="glass-card" style={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '50px', height: '50px', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', borderRadius: '50%' }}></div>
            <div>
              <strong style={{ fontSize: '1.1rem' }}>Säljare: Alex L.</strong>
              <div style={{ marginTop: '5px' }}><TrustBadge score={98.2} /></div>
            </div>
          </div>
          <button className="glass-card" style={{ padding: '10px 20px', fontSize: '12px', fontWeight: 800 }}>SE PROFIL</button>
        </div>

        <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '20px' }}>AI Beskrivning & Analys</h3>
        <p className="muted" style={{ lineHeight: '1.8', fontSize: '1.1rem', maxWidth: '700px' }}>
          Denna iPhone 15 Pro i Natural Titanium har genomgått vår AI-validering. 
          Enheten är i perfekt skick utan repor på sensorer eller skärm. 100% batterihälsa bekräftad via systemlogg. 
          Säljaren har 42 tidigare försäljningar utan anmärkning.
        </p>

        {/* Floating Action Bar */}
        <div style={{ 
          position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          width: '90%', maxWidth: '600px', display: 'flex', gap: '15px', zIndex: 100
        }}>
          <button className="primary-btn" style={{ flex: 2, padding: '20px', fontSize: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
            KÖP MED KARMA SHIELD
          </button>
          <button className="glass-card" style={{ flex: 1, fontWeight: 900, fontSize: '14px' }}>
            LÄGG BUD
          </button>
        </div>
      </div>
    </div>
  );
}
