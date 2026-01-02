"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function KarmaLoopPage() {
  const router = useRouter();

  return (
    <div className="app-shell" style={{ backgroundColor: '#080808', minHeight: '100vh', color: '#fff' }}>
      {/* Mjukare bakgrundsljus */}
      <div style={{ position: 'fixed', top: '-10%', left: '50%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(157, 78, 221, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>
      
      <nav className="main-nav" style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px', position: 'relative', zIndex: 10 }}>
        <div className="logo" style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-1px' }}>
          KARMA<span style={{ color: '#9d4edd' }}>LOOP</span>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div className="stat-pill" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(157, 78, 221, 0.3)' }}>
            Score: 850
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 850, marginBottom: '20px', letterSpacing: '-2px' }}>
            Give your things <br/> <span style={{ color: '#9d4edd' }}>a second life.</span>
          </h1>
          <p className="muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
            Tryggt, enkelt och cirkulärt. Med <b>Karma Shield</b> handlar du alltid verifierat med BankID.
          </p>
          
          <button 
            className="primary-btn" 
            onClick={() => router.push('/sell')}
            style={{ 
              width: '260px', height: '60px', fontSize: '18px', 
              background: '#fff', color: '#000', borderRadius: '30px',
              boxShadow: '0 10px 30px rgba(157, 78, 221, 0.3)'
            }}
          >
            Starta din Loop
          </button>
        </div>

        {/* Cirkulär Grid för Mainstream-känsla */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          <div className="glow-card" style={{ padding: '30px', borderRadius: '24px', textAlign: 'center' }}>
            <span style={{ fontSize: '30px' }}>♻️</span>
            <h3 style={{ margin: '15px 0 10px' }}>Karma Recycle</h3>
            <p className="muted" style={{ fontSize: '14px' }}>Sälj vidare istället för att slänga. Bra för själen, bra för planeten.</p>
          </div>
          
          <div className="glow-card" style={{ padding: '30px', borderRadius: '24px', textAlign: 'center', border: '1px solid #9d4edd' }}>
            <span style={{ fontSize: '30px' }}>🛡️</span>
            <h3 style={{ margin: '15px 0 10px' }}>Karma Shield</h3>
            <p className="muted" style={{ fontSize: '14px' }}>BankID-verifierad trygghet i varje steg av din Loop.</p>
          </div>

          <div className="glow-card" style={{ padding: '30px', borderRadius: '24px', textAlign: 'center' }}>
            <span style={{ fontSize: '30px' }}>🤝</span>
            <h3 style={{ margin: '15px 0 10px' }}>Karma Link</h3>
            <p className="muted" style={{ fontSize: '14px' }}>Koppla samman med ett globalt nätverk av verifierade användare.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
