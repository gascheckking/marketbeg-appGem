"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="app-shell" style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>
      <div className="bg-glow"></div>
      
      {/* --- NAVIGATION / KARMA CORE --- */}
      <nav className="main-nav" style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '28px', fontWeight: 900, cursor: 'pointer' }} onClick={() => router.push('/')}>
          KARMA<span style={{ color: '#9d4edd' }}>.AI</span> 
          <span style={{ color: '#9d4edd', marginLeft: '12px', fontSize: '10px', letterSpacing: '3px', verticalAlign: 'middle', opacity: 0.8 }}>CORE ENGINE</span>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <div className="stat-pill" style={{ border: '1px solid #9d4edd', color: '#9d4edd', background: 'rgba(157, 78, 221, 0.1)' }}>
            SCORE: 850
          </div>
          <div className="stat-pill">CREDITS: 2,450</div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, #5e2583, #9d4edd)', border: '2px solid rgba(255,255,255,0.1)' }}></div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '30px' }}>
        
        {/* VÄNSTER KOLUMN: AI & ACTIONS */}
        <section>
          {/* HERO / UPLOAD SECTION */}
          <div className="glow-card" style={{ padding: '80px 40px', marginBottom: '30px', position: 'relative', overflow: 'hidden', borderRadius: '32px' }}>
            <div className="scan-line"></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h1 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '25px', letterSpacing: '-2px' }}>
                TRUST IS THE <br/> <span style={{ color: '#9d4edd' }}>NEW CURRENCY</span>
              </h1>
              <p className="muted" style={{ fontSize: '18px', marginBottom: '45px', maxWidth: '550px', lineHeight: '1.6' }}>
                Använd <b>KARMA Flow</b> för att ladda upp dina objekt. Vår AI sköter värdering och 
                säkerställer din online-reputation genom <b>KARMA Score</b>.
              </p>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                <button 
                  className="primary-btn" 
                  onClick={() => router.push('/sell')}
                  style={{ width: '280px', height: '64px', fontSize: '18px', background: '#fff', color: '#000' }}
                >
                  STARTA AI-SCAN
                </button>
                <button 
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #333', color: '#fff', borderRadius: '16px', padding: '0 30px', cursor: 'pointer', fontWeight: 600 }}
                  onClick={() => alert('Dra filer hit för KARMA Flow')}
                >
                  DROP FILES
                </button>
              </div>
            </div>
          </div>

          {/* KARMA LOOP / ACTIVITY FEED */}
          <div className="glow-card" style={{ padding: '30px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h3 style={{ margin: 0, color: '#9d4edd', letterSpacing: '1px', fontSize: '14px', fontWeight: 800 }}>KARMA LOOP</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', background: '#00ff88', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                <span className="muted" style={{ fontSize: '11px' }}>SYSTEM LIVE</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '18px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', border: '1px solid #111' }}>
                <span>Verifierad säljare via <b>KARMA Link</b></span>
                <span style={{ color: '#00ff88', fontWeight: 700 }}>+50 XP</span>
              </div>
              <div style={{ padding: '18px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', border: '1px solid #111' }}>
                <span>Transaktion säkrad av <b>KARMA Shield</b></span>
                <span className="muted">Sekunder sedan</span>
              </div>
            </div>
          </div>
        </section>

        {/* HÖGER KOLUMN: SECURITY & TRUST */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* KARMA SHIELD */}
          <div className="glow-card" style={{ padding: '30px', border: '1px solid #5e2583', background: 'linear-gradient(145deg, #050505 0%, #12081a 100%)', borderRadius: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <span style={{ fontSize: '24px' }}>🛡️</span>
              <h3 style={{ margin: 0, color: '#9d4edd', fontSize: '16px' }}>KARMA <span style={{ color: '#fff' }}>SHIELD</span></h3>
            </div>
            <p className="muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>
              Transaktionen skyddas av Karma-protokollet. Verifiering sker via BankID för 100% trygghet.
            </p>
            <div style={{ marginTop: '20px', padding: '14px', background: 'rgba(157, 78, 221, 0.1)', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
              <span style={{ fontSize: '11px', color: '#9d4edd', fontWeight: 800, letterSpacing: '1px' }}>✓ BANKID VERIFIERAD</span>
            </div>
          </div>

          {/* KARMA SCORE VISUALIZER */}
          <div className="glow-card" style={{ padding: '35px', textAlign: 'center', borderRadius: '24px' }}>
            <span className="muted" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Reputation Rank</span>
            <div style={{ fontSize: '54px', fontWeight: 900, color: '#fff', margin: '10px 0' }}>850</div>
            <div style={{ width: '100%', height: '8px', background: '#111', borderRadius: '4px', overflow: 'hidden', margin: '15px 0' }}>
              <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #9d4edd, #5e2583)', borderRadius: '4px' }}></div>
            </div>
            <p className="muted" style={{ fontSize: '12px' }}>Topp 2% av globala användare.</p>
          </div>

          {/* QUICK STATS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="pay-card" style={{ padding: '25px', borderRadius: '20px', background: '#0a0a0a' }}>
              <span style={{ color: '#9d4edd', fontWeight: 800, fontSize: '12px' }}>FLOW</span>
              <span className="muted" style={{ fontSize: '10px' }}>Active</span>
            </div>
            <div className="pay-card" style={{ padding: '25px', borderRadius: '20px', background: '#0a0a0a' }}>
              <span style={{ color: '#00ff88', fontWeight: 800, fontSize: '12px' }}>PULSE</span>
              <span className="muted" style={{ fontSize: '10px' }}>Market</span>
            </div>
          </div>
        </aside>
      </main>

      {/* FOOTER / LEGAL */}
      <footer style={{ maxWidth: '1400px', margin: '60px auto 0', padding: '40px 20px', borderTop: '1px solid #111', textAlign: 'center' }}>
        <p className="muted" style={{ fontSize: '12px' }}>© 2026 KARMA AI PROTOCOL. ALL RIGHTS SECURED BY BANKID.</p>
      </footer>
    </div>
  );
}
