"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="app-shell" style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>
      <div className="bg-glow"></div>
      
      {/* --- NAVIGATION / KARMA CORE --- */}
      <nav className="main-nav" style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '28px', fontWeight: 900, cursor: 'pointer' }} onClick={() => router.push('/')}>
          BEG<span className="ai-text">.AI</span> 
          <span style={{ color: '#9d4edd', marginLeft: '12px', fontSize: '12px', letterSpacing: '2px', verticalAlign: 'middle' }}>KARMA CORE v.4</span>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <div className="stat-pill" style={{ border: '1px solid #9d4edd', color: '#9d4edd', background: 'rgba(157, 78, 221, 0.1)' }}>
            KARMA SCORE: 850
          </div>
          <div className="stat-pill">AI CREDITS: 2,450</div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, #5e2583, #9d4edd)', cursor: 'pointer' }}></div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '30px' }}>
        
        {/* VÄNSTER KOLUMN: AI & ACTIONS */}
        <section>
          {/* HERO / UPLOAD SECTION */}
          <div className="glow-card" style={{ padding: '60px 40px', marginBottom: '30px', position: 'relative', overflow: 'hidden' }}>
            <div className="scan-line"></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h1 style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, marginBottom: '20px' }}>
                SELL AT THE <br/> <span className="ai-text">SPEED OF LIGHT</span>
              </h1>
              <p className="muted" style={{ fontSize: '18px', marginBottom: '40px', maxWidth: '600px' }}>
                Använd <b>KARMA Flow</b> för att ladda upp dina tillgångar. Vår AI sköter värdering, 
                verifiering och annonsering på under 5 sekunder.
              </p>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                <button 
                  className="primary-btn" 
                  onClick={() => router.push('/sell')}
                  style={{ width: '280px', height: '60px', fontSize: '18px' }}
                >
                  STARTA AI-SCAN
                </button>
                <button 
                  style={{ background: 'transparent', border: '1px solid #333', color: '#fff', borderRadius: '12px', padding: '0 30px', cursor: 'pointer' }}
                  onClick={() => alert('Dra filer hit för KARMA Flow')}
                >
                  UPLOAD FILES
                </button>
              </div>
            </div>
          </div>

          {/* KARMA LOOP / ACTIVITY FEED */}
          <div className="glow-card" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#9d4edd', letterSpacing: '1px' }}>KARMA LOOP</h3>
              <span className="muted" style={{ fontSize: '12px' }}>LIVE UPDATES</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Verified sale via <b>KARMA Link</b></span>
                <span style={{ color: 'var(--accent)' }}>+50 Score</span>
              </div>
              <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Transaction secured by <b>KARMA Shield</b></span>
                <span className="muted">Just nu</span>
              </div>
            </div>
          </div>
        </section>

        {/* HÖGER KOLUMN: SECURITY & TRUST */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* KARMA SHIELD (DIN KOD INTEGRERAD) */}
          <div className="glow-card" style={{ padding: '30px', border: '1px solid #5e2583', background: 'linear-gradient(145deg, #050505 0%, #12081a 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <span style={{ fontSize: '24px' }}>🛡️</span>
              <h3 style={{ margin: 0, color: '#9d4edd' }}>KARMA <span style={{ color: '#fff' }}>SHIELD</span></h3>
            </div>
            <p className="muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>
              Transaktionen skyddas av Karma-protokollet. Verifiering sker via BankID för 100% trygghet.
            </p>
            <div style={{ marginTop: '20px', padding: '12px', background: 'rgba(157, 78, 221, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
              <span style={{ fontSize: '12px', color: '#9d4edd', fontWeight: 'bold', letterSpacing: '1px' }}>✓ BANKID VERIFIERAD</span>
            </div>
          </div>

          {/* KARMA SCORE VISUALIZER */}
          <div className="glow-card" style={{ padding: '30px', textAlign: 'center' }}>
            <span className="muted" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Current Reputation</span>
            <div style={{ fontSize: '48px', fontWeight: 900, color: '#00ff88', margin: '10px 0' }}>850</div>
            <div style={{ width: '100%', height: '6px', background: '#1a1a1a', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #00ff88, #9d4edd)', borderRadius: '3px' }}></div>
            </div>
            <p className="muted" style={{ fontSize: '12px', marginTop: '15px' }}>Du tillhör topp 2% av verifierade användare.</p>
          </div>

          {/* QUICK LINKS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="pay-card" style={{ padding: '20px', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ color: '#9d4edd', fontWeight: 800 }}>LINK</span>
              <span className="muted" style={{ fontSize: '10px' }}>Network</span>
            </div>
            <div className="pay-card" style={{ padding: '20px', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 800 }}>PULSE</span>
              <span className="muted" style={{ fontSize: '10px' }}>Market</span>
            </div>
          </div>
        </aside>
      </main>

      {/* MOBILE NAV (Endast synlig på mobilen) */}
      <div className="bottom-dock">
        <button onClick={() => router.push('/')}>🏠</button>
        <button className="scan-btn" onClick={() => router.push('/sell')}>+</button>
        <button onClick={() => router.push('/admin')}>⚙️</button>
      </div>
    </div>
  );
}
