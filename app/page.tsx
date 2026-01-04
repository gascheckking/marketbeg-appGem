"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import FeedCardSell from "@/components/FeedCardSell";

export default function Marketplace() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('ALLA MATCHNINGAR');

  // Demo-data för "Eftersökt" snabbvy
  const quickWanted = [
    { id: 1, item: "PoP Skaljacka", size: "116", demand: "HÖG" },
    { id: 2, item: "Versace Tofflor", size: "42", demand: "EXTREM" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      {/* HEADER - Kompakt & Krispig */}
      <section style={{ padding: '10px 0 20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, lineHeight: '1.1', margin: '0 0 5px 0', letterSpacing: '-0.5px' }}>
          Likviditet <span style={{ color: 'var(--neon-purple)' }}>för dina prylar.</span>
        </h1>
        <p style={{ fontSize: '9px', fontWeight: 800, opacity: 0.4, marginBottom: '15px', letterSpacing: '0.5px' }}>
          KNOW • ACQUIRE • REUSE • MATCH • AGAIN
        </p>
        
        {/* SÖK - Mindre och tajtare */}
        <input 
          type="text" 
          placeholder="Sök i loopen (t.ex. iPhone, Gorpcore...)" 
          style={{ 
            width: '100%', padding: '10px 12px', borderRadius: '10px', 
            background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', 
            color: '#fff', fontSize: '12px' 
          }} 
        />
      </section>

      {/* SMART FOLDERS - AI lär sig vad folk söker */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '25px', paddingBottom: '5px' }}>
        {['Vinterjackor', 'Apple Tech', 'Sneakers', 'Vintage'].map((folder) => (
          <div key={folder} style={{ 
            padding: '6px 12px', borderRadius: '20px', background: 'rgba(0,255,136,0.05)', 
            border: '1px solid rgba(0,255,136,0.1)', fontSize: '9px', fontWeight: 900, 
            color: 'var(--neon-mint)', whiteSpace: 'nowrap' 
          }}>
            📂 {folder.toUpperCase()}
          </div>
        ))}
      </div>

      {/* TABS - Nu med EFTERSÖKT */}
      <div className="tab-container" style={{ 
        marginBottom: '15px', 
        borderBottom: '1px solid var(--border)', 
        display: 'flex', 
        gap: '15px',
        overflowX: 'auto' 
      }}>
        {['ALLA MATCHNINGAR', 'EFTERSÖKT', 'AUKTIONER', 'DIREKTKÖP'].map((tab) => (
          <div 
            key={tab} 
            onClick={() => setActiveTab(tab)} 
            style={{ 
              paddingBottom: '8px', fontSize: '9px', fontWeight: 900, 
              color: activeTab === tab ? '#fff' : '#444', 
              borderBottom: activeTab === tab ? '2px solid var(--neon-purple)' : 'none',
              cursor: 'pointer', whiteSpace: 'nowrap'
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* PRODUCT GRID - Tätare layout */}
      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        
        {/* TAB: EFTERSÖKT (Wanted) */}
        {activeTab === 'EFTERSÖKT' && (
          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ padding: '15px', background: 'rgba(157, 78, 221, 0.05)', borderRadius: '12px', border: '1px dashed var(--neon-purple)' }}>
              <p style={{ fontSize: '10px', fontWeight: 800, marginBottom: '10px', textAlign: 'center' }}>
                FOLK LETAR EFTER DETTA JUST NU:
              </p>
              {quickWanted.map(w => (
                <div key={w.id} style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '8px', marginBottom: '5px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 900 }}>{w.item}</div>
                    <div style={{ fontSize: '8px', color: 'var(--neon-purple)' }}>EFTERFRÅGAN: {w.demand}</div>
                  </div>
                  <button 
                    onClick={() => router.push('/sell')}
                    style={{ background: 'var(--neon-mint)', border: 'none', borderRadius: '4px', fontSize: '8px', fontWeight: 900, padding: '5px 10px' }}
                  >SÄLJ</button>
                </div>
              ))}
              <button 
                onClick={() => router.push('/wanted')} 
                style={{ width: '100%', background: 'none', border: '1px solid #333', color: '#fff', fontSize: '9px', padding: '10px', borderRadius: '8px', marginTop: '10px', fontWeight: 800 }}
              >
                VISA ALLA ÖNSKEMÅL
              </button>
            </div>
          </div>
        )}

        {/* TAB: ALLA MATCHNINGAR */}
        {activeTab === 'ALLA MATCHNINGAR' && (
          <>
            {/* AI WIZARD CARD - QUICK SELL ENTRY */}
            <div 
              onClick={() => router.push('/sell')} 
              style={{ 
                gridColumn: 'span 2', background: 'linear-gradient(135deg, #0a0514, #02040a)', 
                padding: '15px', borderRadius: '12px', border: '1px solid rgba(157, 78, 221, 0.4)', 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
              }}
            >
              <div>
                <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '1px' }}>AI SCANNER</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 900, margin: '2px 0' }}>Sälj 25 objekt nu</h3>
                <p style={{ fontSize: '8px', opacity: 0.5, margin: 0 }}>Fota direkt • AI sköter resten</p>
              </div>
              <button className="primary-btn" style={{ padding: '8px 15px', fontSize: '9px', width: 'auto' }}>STARTA</button>
            </div>

            <FeedCardSell id="1" title="iPhone 15 Pro Max" price={11450} trust={99} />
            <FeedCardSell id="2" title="MacBook Pro M3" price={18900} trust={95} />
            <FeedCardSell id="3" title="Sony WH-1000XM5" price={2800} trust={94} />
            <FeedCardSell id="4" title="Stone Island Shell" price={4200} trust={98} />
          </>
        )}
      </div>

      <style jsx>{`
        .product-grid { margin-bottom: 80px; }
        ::-webkit-scrollbar { display: none; }
        .tab-container { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
