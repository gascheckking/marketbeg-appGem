"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import FeedCardSell from "@/components/FeedCardSell";
import RentModule from "@/components/RentModule";

export default function Marketplace() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('ALLA MATCHNINGAR');

  return (
    <div className="page-wrapper">
      
      {/* HERO - Kompakt för mobil */}
      <section style={{ padding: '20px 0 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 10vw, 3.5rem)', lineHeight: '0.9', marginBottom: '15px' }}>
          Likviditet <br/>
          <span style={{ color: 'var(--neon-purple)' }}>för dina prylar.</span>
        </h1>
        <p className="muted" style={{ fontSize: '13px', maxWidth: '280px', margin: '0 auto 25px' }}>
          AI-driven matchning. Sälj direkt till verifierade köpare i Loopen.
        </p>

        <div style={{ display: 'flex', gap: '8px', maxWidth: '500px', margin: '0 auto' }}>
          <input type="text" placeholder="Sök i loopen..." style={{ flex: 1, padding: '16px', borderRadius: '16px', background: 'var(--glass)', border: '1px solid var(--border)', color: '#fff' }} />
          <button style={{ width: '55px', borderRadius: '16px', background: 'var(--glass)', border: '1px solid var(--border)' }}>📍</button>
        </div>
      </section>

      {/* TABS - Fixad Logik */}
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

      {/* DYNAMISK GRID */}
      <div className="product-grid">
        {activeTab === 'ALLA MATCHNINGAR' && (
          <>
            <div className="glow-card-sell" onClick={() => router.push('/sell')}>
              <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--neon-mint)' }}>AI WIZARD</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: '8px 0' }}>Sälj på 5 sekunder.</h3>
              <button className="primary-btn" style={{ background: '#fff', color: '#000', padding: '10px', fontSize: '11px' }}>STARTA SCAN</button>
            </div>
            <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} matchScore={98} />
            <FeedCardSell id="2" title="MacBook Pro M3" price={18900} trust={95} matchScore={87} />
          </>
        )}
        
        {activeTab === 'AUKTIONER' && (
          <div style={{ gridColumn: '1/-1', padding: '60px 20px', textAlign: 'center' }} className="glass-card">
            <div style={{ fontSize: '40px' }}>🔨</div>
            <h3 style={{ fontWeight: 900 }}>Live Auktioner</h3>
            <p className="muted" style={{ fontSize: '13px' }}>Inga aktiva auktioner just nu i ditt område.</p>
          </div>
        )}

        {activeTab === 'DIREKTKÖP' && (
          <>
            <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={94} matchScore={92} />
            <FeedCardSell id="4" title="PlayStation 5 Pro" price={8500} trust={89} matchScore={85} />
          </>
        )}
      </div>

      <style jsx>{`
        .tab-container { display: flex; gap: 20px; margin-bottom: 25px; border-bottom: 1px solid var(--border); overflow-x: auto; scrollbar-width: none; }
        .tab-item { padding-bottom: 12px; font-size: 11px; font-weight: 900; color: #555; cursor: pointer; white-space: nowrap; }
        .tab-item.active { color: #fff; border-bottom: 2px solid var(--neon-purple); }
        .glow-card-sell { background: linear-gradient(135deg, #1a0b2e, #000); padding: 20px; border-radius: 20px; border: 1px solid var(--neon-purple); display: flex; flex-direction: column; justify-content: space-between; height: 100%; }
      `}</style>
    </div>
  );
}
