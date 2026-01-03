"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import FeedCardSell from "@/components/FeedCardSell";

export default function Marketplace() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('ALLA MATCHNINGAR');

  return (
    <div className="page-wrapper" style={{ padding: '12px' }}>
      <section style={{ padding: '15px 0 25px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', lineHeight: '0.9', marginBottom: '10px' }}>
          Likviditet <br/><span style={{ color: 'var(--neon-purple)' }}>för dina prylar.</span>
        </h1>
        <p style={{ fontSize: '11px', opacity: 0.5, marginBottom: '15px' }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
        <input type="text" placeholder="Sök i loopen..." style={{ width: '100%', padding: '12px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--border)', color: '#fff', fontSize: '13px' }} />
      </section>

      <div className="tab-container">
        {['ALLA MATCHNINGAR', 'AUKTIONER', 'DIREKTKÖP'].map((tab) => (
          <div key={tab} onClick={() => setActiveTab(tab)} className={`tab-item ${activeTab === tab ? 'active' : ''}`}>
            {tab}
          </div>
        ))}
      </div>

      <div className="product-grid">
        {activeTab === 'ALLA MATCHNINGAR' && (
          <>
            <div className="glow-card-sell" onClick={() => router.push('/sell')} style={{ background: 'linear-gradient(135deg, #120524, #02040a)', padding: '15px', borderRadius: '16px', border: '1px solid var(--neon-purple)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--neon-mint)' }}>AI WIZARD</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 900, margin: '5px 0' }}>Sälj på 5 sek.</h3>
              <button className="primary-btn" style={{ padding: '8px', fontSize: '10px' }}>STARTA SCAN</button>
            </div>
            <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} />
            <FeedCardSell id="2" title="MacBook Pro M3" price={18900} trust={95} />
            <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={94} />
          </>
        )}
      </div>

      <style jsx>{`
        .tab-container { display: flex; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid var(--border); overflow-x: auto; }
        .tab-item { padding-bottom: 8px; font-size: 10px; font-weight: 900; color: #444; cursor: pointer; white-space: nowrap; }
        .tab-item.active { color: #fff; border-bottom: 2px solid var(--neon-purple); }
      `}</style>
    </div>
  );
}
