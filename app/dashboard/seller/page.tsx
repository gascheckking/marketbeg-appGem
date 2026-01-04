// // app/dashboard/seller/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function KarmaSellerDashboard() {
  const router = useRouter();
  const assets = [
    { name: "Vintage Denim Jacket", status: "LEVERERAD", value: "450 kr", color: 'var(--neon-purple)' },
    { name: "Sony WH-1000XM4", status: "I TRANSPORT", value: "1 950 kr", color: '#888' },
    { name: "North Face Parka", status: "I LOOPEN", value: "2 800 kr", color: 'var(--neon-mint)' }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>SALDO</h1>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span className="badge-status purple">TRUST 4.9</span>
          <span className="badge-status mint">SHIELD ✅</span>
        </div>
      </header>

      <div className="glass-card balance-card">
        <div style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '2px', opacity: 0.6 }}>TILLGÄNGLIG LIKVIDITET</div>
        <div style={{ fontSize: '2.8rem', fontWeight: 900, margin: '8px 0', letterSpacing: '-2px' }}>
          14 250<span style={{ fontSize: '1rem', opacity: 0.4, marginLeft: '6px' }}>SEK</span>
        </div>
        <button className="primary-btn" style={{ background: '#fff', color: '#000', padding: '12px', fontSize: '11px', borderRadius: '14px' }}>
          UTTAG VIA SWISH
        </button>
      </div>

      <div onClick={() => router.push('/sell/instant?item=iphone15')} className="match-alert">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)' }}>INSTANT MATCH AKTIV ✨</div>
            <div style={{ fontSize: '11px', fontWeight: 800 }}>Sälj din iPhone 15 Pro för 9 500:- nu</div>
          </div>
          <span style={{ fontSize: '16px' }}>→</span>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '10px', fontWeight: 900, color: '#555', letterSpacing: '1px', marginBottom: '15px' }}>DINA TILLGÅNGAR</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {assets.map((item, i) => (
            <div key={i} className="asset-row">
              <div>
                <div style={{ fontWeight: 800, fontSize: '13px' }}>{item.name}</div>
                <div style={{ fontSize: '8px', color: item.color, fontWeight: 900, marginTop: '3px' }}>{item.status}</div>
              </div>
              <div style={{ fontWeight: 900, fontSize: '14px' }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .balance-card {
          background: linear-gradient(135deg, rgba(157, 78, 221, 0.15) 0%, rgba(0,0,0,1) 100%);
          padding: 30px; border: 1px solid rgba(157, 78, 221, 0.3); border-radius: 24px; text-align: center;
        }
        .badge-status { font-size: 8px; font-weight: 900; padding: 4px 8px; border-radius: 6px; }
        .badge-status.purple { color: var(--neon-purple); border: 1px solid rgba(157, 78, 221, 0.3); }
        .badge-status.mint { color: var(--neon-mint); border: 1px solid rgba(0, 255, 136, 0.3); }
        .match-alert {
          margin-top: 15px; padding: 18px; border-radius: 18px; border: 1px solid var(--neon-mint);
          background: rgba(0, 255, 136, 0.04); cursor: pointer; animation: pulseGlow 2s infinite;
        }
        .asset-row {
          background: rgba(255,255,255,0.02); padding: 15px 20px; border-radius: 16px;
          display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255,255,255,0.05);
        }
        @keyframes pulseGlow { 0% { box-shadow: 0 0 0px rgba(0,255,136,0); } 50% { box-shadow: 0 0 15px rgba(0,255,136,0.1); } 100% { box-shadow: 0 0 0px rgba(0,255,136,0); } }
      `}</style>
    </div>
  );
}
