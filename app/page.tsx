"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import FeedCardSell from "@/components/FeedCardSell";
import RentModule from "@/components/RentModule";

export default function Marketplace() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('ALLA MATCHNINGAR');

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* HERO SECTION */}
      <section style={{ 
        padding: '40px 20px', 
        background: 'linear-gradient(to bottom, rgba(157,78,221,0.1) 0%, transparent 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="hero-text">
            Likviditet <br/>
            <span style={{ 
              background: 'linear-gradient(to right, var(--neon-purple), #fff)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>för dina prylar.</span>
          </h1>
          <p className="muted" style={{ fontSize: '14px', marginBottom: '30px', maxWidth: '300px', margin: '0 auto 30px', lineHeight: '1.4' }}>
            AI-driven matchning. Ingen väntan. Sälj direkt till verifierade köpare.
          </p>

          <div className="search-container">
            <input type="text" placeholder="Sök i loopen..." className="main-search-input" />
            <button className="location-btn">📍</button>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-container">
        <div className="ticker-wrap">
          <span>● IPHONES SÄLJS 23% SNABBARE IDAG</span>
          <span>● HÖG EFTERFRÅGAN: MACBOOK M3</span>
          <span>● TRENDING: PLAYSTATION 5 PRO</span>
          <span>● NY LIKVIDITETS-NODE: GÖTEBORG</span>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        
        {/* TABS - Nu fungerande */}
        <div className="tab-container">
          {['ALLA MATCHNINGAR', 'AUKTIONER', 'DIREKTKÖP'].map((tab) => (
            <div 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* PRODUKT-GRID */}
        <div className="product-grid">
          {activeTab === 'ALLA MATCHNINGAR' && (
            <>
              <div className="glow-card-sell" onClick={() => router.push('/sell')}>
                <div style={{ fontSize: '9px', fontWeight: 900, opacity: 0.6 }}>AI WIZARD</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '5px 0' }}>Sälj på 5 sekunder.</h3>
                <button className="scan-btn">STARTA SCAN</button>
              </div>
              <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} matchScore={98} />
              <FeedCardSell id="2" title="MacBook Pro M3" price={18900} trust={95} matchScore={87} />
            </>
          )}
          
          {activeTab === 'AUKTIONER' && (
            <div style={{ gridColumn: '1/-1', padding: '40px', textAlign: 'center' }} className="glass-card">
              <p className="muted">Hämtar live-auktioner...</p>
            </div>
          )}
        </div>

        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '15px' }}>Passiv inkomst?</h2>
          <RentModule />
        </div>
      </main>

      <style jsx>{`
        .hero-text { font-size: clamp(2.2rem, 10vw, 4rem); font-weight: 900; letter-spacing: -2px; line-height: 0.9; margin-bottom: 15px; }
        .search-container { display: flex; gap: 8px; max-width: 500px; margin: 0 auto; }
        .main-search-input { flex: 1; padding: 15px 20px; border-radius: 14px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: #fff; outline: none; }
        .location-btn { width: 50px; border-radius: 14px; background: var(--glass); border: 1px solid var(--border); color: #fff; }
        
        .ticker-container { background: rgba(0,255,136,0.03); border-y: 1px solid rgba(0,255,136,0.1); padding: 10px 0; overflow: hidden; margin-top: 20px; }
        .ticker-wrap { display: flex; gap: 40px; font-size: 9px; font-weight: 900; color: var(--neon-mint); white-space: nowrap; animation: ticker 25s linear infinite; }
        
        .tab-container { display: flex; gap: 20px; margin-bottom: 25px; overflow-x: auto; scrollbar-width: none; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .tab-item { padding-bottom: 12px; font-size: 11px; font-weight: 900; color: #555; white-space: nowrap; cursor: pointer; transition: 0.3s; }
        .tab-item.active { color: #fff; border-bottom: 2px solid var(--neon-purple); }

        .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 15px; }
        @media (min-width: 768px) { .product-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); } }

        .glow-card-sell { background: linear-gradient(135deg, var(--neon-purple), #000); padding: 20px; border-radius: 20px; border: 1px solid rgba(157,78,221,0.3); display: flex; flex-direction: column; justify-content: space-between; }
        .scan-btn { background: #fff; color: #000; border: none; padding: 10px; border-radius: 10px; font-weight: 900; font-size: 10px; margin-top: 15px; }

        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
