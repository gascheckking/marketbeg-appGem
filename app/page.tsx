"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KarmaLoopPage() {
  const router = useRouter();
  const [lang, setLang] = useState('SV');
  const [showLang, setShowLang] = useState(false);

  const content: any = {
    SV: { 
      title1: "Give your things", 
      title2: "a second life.", 
      desc: "Tryggt, enkelt och cirkulärt. Med Karma Shield handlar du alltid verifierat med BankID.", 
      btn: "Starta din Loop",
      loyalty: "Loyalty Points",
      pointsDesc: "Använd poäng för frakt eller spara till rewards"
    },
    EN: { 
      title1: "Give your things", 
      title2: "a second life.", 
      desc: "Safe, simple and circular. With Karma Shield you always trade verified with BankID.", 
      btn: "Start your Loop",
      loyalty: "Loyalty Points",
      pointsDesc: "Use points for shipping or save for rewards"
    }
  };

  const selected = content[lang] || content.SV;

  return (
    <div className="web-container" style={{ 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      color: '#fff', 
      fontFamily: '"Inter", sans-serif',
      display: 'flex',
      justifyContent: 'center'
    }}>
      {/* PC VIEW: Denna wrapper gör att innehållet känns centrerat men täcker ytan proffsigt */}
      <div className="content-wrapper" style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        padding: '0 20px',
        position: 'relative'
      }}>
        
        {/* Bakgrunds-glow */}
        <div style={{ 
          position: 'fixed', 
          top: '20%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '80vw', 
          height: '60vh', 
          background: 'radial-gradient(circle, rgba(157, 78, 221, 0.05) 0%, transparent 70%)', 
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        {/* --- NY NAV: UTAN BEG.AI --- */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '40px 0', 
          position: 'relative', 
          zIndex: 10 
        }}>
          <div style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-1px' }}>
            KARMA<span style={{ color: '#9d4edd', fontWeight: 300 }}>/LOOP</span>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* Loyalty Points istället för Tokens */}
            <div className="stat-pill" style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid #222', 
              borderRadius: '20px', 
              padding: '8px 20px', 
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ color: '#9d4edd' }}>●</span> 
              2,450 {selected.loyalty}
            </div>

            <button 
              onClick={() => setShowLang(!showLang)}
              style={{ background: 'none', border: '1px solid #333', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}
            >
              {lang}
            </button>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <main style={{ textAlign: 'center', padding: '100px 0', position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 5rem)', 
            fontWeight: 900, 
            lineHeight: 0.9, 
            marginBottom: '30px', 
            letterSpacing: '-3px' 
          }}>
            {selected.title1} <br/> 
            <span style={{ color: '#9d4edd' }}>{selected.title2}</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            maxWidth: '500px', 
            margin: '0 auto 50px', 
            opacity: 0.7, 
            lineHeight: 1.5 
          }}>
            {selected.desc}
          </p>

          <button 
            className="main-cta"
            onClick={() => router.push('/sell')}
            style={{ 
              background: '#fff', 
              color: '#000', 
              border: 'none', 
              padding: '20px 50px', 
              borderRadius: '40px', 
              fontSize: '18px', 
              fontWeight: 700, 
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(157, 78, 221, 0.2)'
            }}
          >
            {selected.btn}
          </button>
        </main>

        {/* --- GRID: SERVICES --- */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px', 
          paddingBottom: '100px' 
        }}>
          <div className="glow-card" style={{ padding: '40px', borderRadius: '24px', background: '#0a0a0a', border: '1px solid #111' }}>
            <div style={{ color: '#9d4edd', fontSize: '24px', marginBottom: '15px' }}>♻️</div>
            <h3 style={{ marginBottom: '10px' }}>Karma Recycle</h3>
            <p className="muted" style={{ fontSize: '14px' }}>{selected.pointsDesc}</p>
          </div>

          <div className="glow-card" style={{ padding: '40px', borderRadius: '24px', background: '#0a0a0a', border: '1px solid #9d4edd' }}>
            <div style={{ color: '#9d4edd', fontSize: '24px', marginBottom: '15px' }}>🛡️</div>
            <h3 style={{ marginBottom: '10px' }}>Karma Shield</h3>
            <p className="muted" style={{ fontSize: '14px' }}>BankID-verifierad trygghet för 100% säkra köp.</p>
          </div>
        </section>

        {/* --- DOCK: MOBIL NAV (Döljs på PC via CSS om önskas) --- */}
        <div style={{ 
          position: 'fixed', 
          bottom: '30px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          background: 'rgba(15, 15, 15, 0.8)', 
          backdropFilter: 'blur(20px)',
          border: '1px solid #222',
          padding: '15px 30px',
          borderRadius: '40px',
          display: 'flex',
          gap: '40px',
          zIndex: 100
        }}>
          <span>🏠</span>
          <span onClick={() => router.push('/sell')} style={{ cursor: 'pointer' }}>🔍</span>
          <span style={{ background: '#fff', color: '#000', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>+</span>
          <span>🏆</span>
          <span onClick={() => router.push('/vault')}>💳</span>
        </div>

      </div>
    </div>
  );
}
