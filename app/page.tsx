"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import FeedCardSell from "@/components/FeedCardSell";
import RentModule from "@/components/RentModule";

export default function Marketplace() {
  const router = useRouter();

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      
      {/* HERO / SEARCH SECTION */}
      <section style={{ 
        padding: '60px 40px', 
        background: 'linear-gradient(to bottom, rgba(157,78,221,0.05) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 900, 
            letterSpacing: '-3px', 
            marginBottom: '10px',
            background: 'linear-gradient(to right, #fff, #666)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Likviditet för dina prylar.
          </h1>
          <p className="muted" style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
            AI-driven matchning. Ingen väntan. Sälj direkt till verifierade köpare.
          </p>

          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Sök i loopen (t.ex. iPhone 15 Pro, M3 Max...)" 
                style={{ 
                  width: '100%', 
                  padding: '22px 65px', 
                  borderRadius: '20px', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.08)', 
                  color: '#fff', 
                  fontSize: '18px',
                  outline: 'none'
                }} 
              />
              <span style={{ position: 'absolute', left: '25px', top: '24px', fontSize: '20px' }}>🔍</span>
            </div>
            <button className="glass-card" style={{ padding: '20px 30px', borderRadius: '20px', fontWeight: 700, cursor: 'pointer' }}>
              📍 Hela Sverige
            </button>
          </div>
        </div>
      </section>

      {/* MARKET PULSE TICKER (Din roadmap-idé) */}
      <div style={{ 
        background: 'rgba(0,255,136,0.03)', 
        borderBottom: '1px solid rgba(0,255,136,0.1)', 
        padding: '12px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}>
        <div className="ticker-wrap" style={{ display: 'flex', gap: '50px', fontSize: '11px', fontWeight: 900, color: 'var(--neon-mint)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>● IPHONES SÄLJS 23% SNABBARE IDAG</span>
          <span>● HÖG EFTERFRÅGAN: MACBOOK M3</span>
          <span>● TRENDING: PLAYSTATION 5 PRO</span>
          <span>● NY LIKVIDITETS-NODE: GÖTEBORG ONLINE</span>
          <span>● IPHONES SÄLJS 23% SNABBARE IDAG</span>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px' }}>
        
        {/* TABS */}
        <div style={{ display: 'flex', gap: '30px', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {['ALLA MATCHNINGAR', 'AUKTIONER', 'DIREKTKÖP'].map((tab, i) => (
            <div key={tab} style={{ 
              paddingBottom: '15px', 
              fontSize: '13px', 
              fontWeight: 900, 
              letterSpacing: '1px',
              cursor: 'pointer',
              color: i === 0 ? '#fff' : '#444',
              borderBottom: i === 0 ? '2px solid var(--neon-purple)' : 'none'
            }}>
              {tab}
            </div>
          ))}
        </div>

        {/* PRODUKT-GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px' }}>
          {/* AI Quick Sell Promotion Card */}
          <div className="glow-card" style={{ 
            gridColumn: 'span 1', 
            background: 'linear-gradient(135deg, var(--neon-purple) 0%, #000 100%)', 
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '10px' }}>Sälj på 5 sekunder.</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Vår AI skapar annonsen, värderar och hittar köpare direkt.</p>
            </div>
            <button 
              onClick={() => router.push('/sell')}
              className="primary-btn" 
              style={{ background: '#fff', color: '#000', width: '100%', marginTop: '20px' }}
            >
              STARTA AI-SCAN
            </button>
          </div>

          {/* MOCK DATA - Faktiska FeedCards */}
          <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} matchScore={98} />
          <FeedCardSell id="2" title="MacBook Pro M3" price={18900} trust={95} matchScore={87} />
          <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={92} matchScore={94} />
          <FeedCardSell id="4" title="PlayStation 5" price={4500} trust={88} matchScore={76} />
        </div>

        {/* RENT MODULE PREVIEW */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '20px' }}>Passiv inkomst?</h2>
          <RentModule />
        </div>

      </main>

      <style jsx>{`
        .ticker-wrap {
          animation: ticker 30s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
