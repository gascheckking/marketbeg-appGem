"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import FeedCardSell from "@/components/FeedCardSell";
import RentModule from "@/components/RentModule";

export default function Marketplace() {
  const router = useRouter();

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* HERO / SEARCH SECTION - Nu med "Hero-text" som skalar för mobil */}
      <section style={{ 
        padding: '60px 20px', 
        background: 'linear-gradient(to bottom, rgba(157,78,221,0.08) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="hero-text">
            Likviditet <br className="mobile-only" />
            <span style={{ 
              background: 'linear-gradient(to right, var(--neon-purple), #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>för dina prylar.</span>
          </h1>
          <p className="muted" style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            AI-driven matchning. Ingen väntan. Sälj direkt till verifierade köpare i KARMA-systemet.
          </p>

          <div className="search-flex-container">
            <div style={{ flex: 1, position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Sök i loopen..." 
                className="main-search-input"
              />
              <span style={{ position: 'absolute', left: '20px', top: '18px', fontSize: '20px' }}>🔍</span>
            </div>
            <button className="location-btn">
              📍 <span className="desktop-only">Hela Sverige</span>
            </button>
          </div>
        </div>
      </section>

      {/* MARKET PULSE TICKER */}
      <div style={{ 
        background: 'rgba(0,255,136,0.03)', 
        borderBottom: '1px solid rgba(0,255,136,0.1)', 
        padding: '12px 0',
        overflow: 'hidden'
      }}>
        <div className="ticker-wrap">
          <span>● IPHONES SÄLJS 23% SNABBARE IDAG</span>
          <span>● HÖG EFTERFRÅGAN: MACBOOK M3</span>
          <span>● TRENDING: PLAYSTATION 5 PRO</span>
          <span>● NY LIKVIDITETS-NODE: GÖTEBORG ONLINE</span>
          <span>● IPHONES SÄLJS 23% SNABBARE IDAG</span>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* TABS - Scrollbara på mobil så de inte bryts fult */}
        <div className="tab-container">
          {['ALLA MATCHNINGAR', 'AUKTIONER', 'DIREKTKÖP'].map((tab, i) => (
            <div key={tab} className={`tab-item ${i === 0 ? 'active' : ''}`}>
              {tab}
            </div>
          ))}
        </div>

        {/* PRODUKT-GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          
          {/* AI Quick Sell Promotion Card - Nu mer kompakt och 'app-lik' */}
          <div className="glow-card-sell">
            <div>
              <div style={{ fontSize: '10px', fontWeight: 900, color: '#fff', marginBottom: '10px', opacity: 0.6 }}>AI WIZARD</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '10px', lineHeight: 1 }}>Sälj på <br/> 5 sekunder.</h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>Ta en bild. Vår AI sköter värdering och hittar köpare direkt.</p>
            </div>
            <button 
              onClick={() => router.push('/sell')}
              className="primary-btn" 
              style={{ background: '#fff', color: '#000', width: '100%', marginTop: '20px', borderRadius: '12px' }}
            >
              STARTA SCAN
            </button>
          </div>

          <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} matchScore={98} />
          <FeedCardSell id="2" title="MacBook Pro M3" price={18900} trust={95} matchScore={87} />
          <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={92} matchScore={94} />
          <FeedCardSell id="4" title="PlayStation 5" price={4500} trust={88} matchScore={76} />
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '20px' }}>Passiv inkomst?</h2>
          <RentModule />
        </div>
      </main>

      <style jsx>{`
        .hero-text {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -3px;
          line-height: 0.95;
          margin-bottom: 20px;
        }

        .search-flex-container {
          display: flex;
          gap: 10px;
          max-width: 800px;
          margin: 0 auto;
        }

        .main-search-input {
          width: 100%;
          padding: 18px 55px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          color: #fff;
          font-size: 16px;
          outline: none;
          transition: 0.2s;
        }
        .main-search-input:focus { border-color: var(--neon-purple); background: rgba(255,255,255,0.07); }

        .location-btn {
          padding: 0 20px;
          border-radius: 18px;
          background: var(--glass);
          border: 1px solid var(--border);
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }

        .ticker-wrap {
          display: flex;
          gap: 50px;
          font-size: 10px;
          font-weight: 900;
          color: var(--neon-mint);
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }

        .tab-container {
          display: flex;
          gap: 25px;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          overflow-x: auto;
        }
        .tab-item {
          padding-bottom: 15px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
          color: #444;
          white-space: nowrap;
        }
        .tab-item.active { color: #fff; border-bottom: 2px solid var(--neon-purple); }

        .glow-card-sell {
          background: linear-gradient(135deg, var(--neon-purple) 0%, #02040a 100%);
          padding: 30px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(157, 78, 221, 0.2);
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .mobile-only { display: block; }
          .desktop-only { display: none; }
          .search-flex-container { flex-direction: column; }
          .location-btn { padding: 15px; }
        }

        @media (min-width: 769px) {
          .mobile-only { display: none; }
        }
      `}</style>
    </div>
  );
}
