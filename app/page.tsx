"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KarmaLoopPage() {
  const router = useRouter();
  const [lang, setLang] = useState('SV');
  const [showLang, setShowLang] = useState(false);

  // Språkinställningar
  const content: any = {
    SV: { title1: "Give your things", title2: "a second life.", desc: "Tryggt, enkelt och cirkulärt. Med Karma Shield handlar du alltid verifierat med BankID.", btn: "Starta din Loop" },
    EN: { title1: "Give your things", title2: "a second life.", desc: "Safe, simple and circular. With Karma Shield you always trade verified with BankID.", btn: "Start your Loop" },
    NO: { title1: "Gi dine ting", title2: "et nytt liv.", desc: "Trygt, enkelt og sirkulært. Med Karma Shield handler du alltid verifisert med BankID.", btn: "Start din Loop" },
    DA: { title1: "Giv dine ting", title2: "et nyt liv.", desc: "Sikkert, enkelt og cirkulært. Med Karma Shield handler du altid verificeret med BankID.", btn: "Start din Loop" },
    FI: { title1: "Anna tavaroillesi", title2: "uusi elämä.", desc: "Turvallista, yksinkertaista ja kiertotaloutta. Karma Shieldillä asioit aina vahvistettuna BankID:llä.", btn: "Aloita Loop" }
  };

  return (
    <div className="app-shell" style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Bakgrunds-glow (Subtil lila cirkel) */}
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(157, 78, 221, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>

      {/* NAV */}
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-1px' }}>
          KARMA<span style={{ color: '#9d4edd', fontWeight: 300 }}>/LOOP</span> 
          <span style={{ fontSize: '12px', color: '#666', fontWeight: 400, marginLeft: '12px', fontStyle: 'italic' }}>powered by AI</span>
        </div>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {/* Språk-väljare */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowLang(!showLang)}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #333', color: '#fff', borderRadius: '20px', padding: '8px 16px', fontSize: '12px', cursor: 'pointer' }}
            >
              {lang} ▾
            </button>
            {showLang && (
              <div style={{ position: 'absolute', top: '40px', right: 0, background: '#1a1a1a', border: '1px solid #333', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 100 }}>
                {['SV', 'NO', 'DA', 'FI', 'EN'].map(l => (
                  <button key={l} onClick={() => { setLang(l); setShowLang(false); }} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', textAlign: 'left', padding: '5px 10px' }}>{l}</button>
                ))}
              </div>
            )}
          </div>
          <div className="stat-pill" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '8px 16px', fontSize: '13px' }}>Score: 850</div>
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(45deg, #5e2583, #9d4edd)' }}></div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-3px', lineHeight: 1 }}>
          {content[lang].title1} <br/> {content[lang].title2}
        </h1>
        <p className="muted" style={{ fontSize: '1.2rem', maxWidth: '550px', margin: '0 auto 50px', lineHeight: 1.6, opacity: 0.8 }}>
          {content[lang].desc}
        </p>
        
        <button 
          className="primary-btn" 
          onClick={() => router.push('/sell')}
          style={{ 
            width: '240px', height: '56px', fontSize: '17px', fontWeight: 600,
            background: 'linear-gradient(90deg, #9d4edd, #7b2cbf)', color: '#fff', 
            borderRadius: '28px', border: 'none', cursor: 'pointer',
            boxShadow: '0 15px 35px rgba(157, 78, 221, 0.25)'
          }}
        >
          {content[lang].btn}
        </button>
      </main>

      {/* FEATURE GRID */}
      <section style={{ maxWidth: '1100px', margin: '50px auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '0 20px' }}>
        {[
          { icon: '♻️', title: 'Karma Recycle', desc: 'Sälj vidare istället för att slänga. Bra för själen, bra för planeten.' },
          { icon: '🛡️', title: 'Karma Shield', desc: 'BankID-verifierad trygghet i varje steg av din Loop.', border: '1px solid #9d4edd' },
          { icon: '🤝', title: 'Karma Link', desc: 'Koppla samman med ett globalt nätverk av verifierade användare.' }
        ].map((feat, i) => (
          <div key={i} className="glow-card" style={{ padding: '40px 30px', borderRadius: '24px', textAlign: 'center', border: feat.border || '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <div style={{ fontSize: '32px', marginBottom: '20px' }}>{feat.icon}</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{feat.title}</h3>
            <p className="muted" style={{ fontSize: '13px', lineHeight: 1.5 }}>{feat.desc}</p>
          </div>
        ))}
      </section>

      <footer style={{ padding: '100px 0 50px', textAlign: 'center', fontSize: '12px', color: '#444', letterSpacing: '1px' }}>
        © 2026 KARMA LOOP PROTOCOL. POWERED BY AI. ALL RIGHTS SECURED.
      </footer>
    </div>
  );
}
