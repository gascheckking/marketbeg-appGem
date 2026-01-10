// // app/dashboard/seller/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function KarmaSellerDashboard() {
  const router = useRouter();
  const assets = [
    { name: "Vintage Denim Jacket", status: "LEVERERAD", value: "450:-", statusColor: '#1DB954' },
    { name: "Sony WH-1000XM4", status: "I TRANSPORT", value: "1 950:-", statusColor: '#fff' },
    { name: "North Face Parka", status: "I LOOPEN", value: "2 800:-", statusColor: '#1DB954' }
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-1px' }}>Saldo</h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ fontSize: '9px', fontWeight: 900, padding: '5px 10px', borderRadius: '20px', border: '1px solid #1DB954', color: '#1DB954' }}>4.9 TRUST</span>
        </div>
      </header>

      {/* BALANCE CARD */}
      <div style={{ background: '#fff', padding: '30px', borderRadius: '32px', textAlign: 'center', marginBottom: '15px' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, color: '#000', opacity: 0.4, letterSpacing: '1px' }}>TILLGÄNGLIGT</div>
        <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#000', margin: '4px 0', letterSpacing: '-2px' }}>14 250:-</div>
        <button style={{ background: '#000', color: '#fff', padding: '15px 25px', fontSize: '12px', borderRadius: '15px', fontWeight: 900, border: 'none', width: '100%', marginTop: '10px' }}>
          UTTAG VIA SWISH
        </button>
      </div>

      {/* MATCH ALERT */}
      <div onClick={() => router.push('/sell/instant?item=iphone15')} style={{ 
        padding: '18px', borderRadius: '24px', background: '#1DB95415', border: '1px solid #1DB95433', cursor: 'pointer', marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '8px', fontWeight: 900, color: '#1DB954', letterSpacing: '1px' }}>INSTANT MATCH ✨</div>
            <div style={{ fontSize: '11px', fontWeight: 800, marginTop: '2px' }}>Sälj iPhone 15 Pro för 9 500:- direkt</div>
          </div>
          <span style={{ fontSize: '18px', color: '#1DB954' }}>→</span>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '10px', fontWeight: 900, opacity: 0.3, letterSpacing: '1px', marginBottom: '15px' }}>AKTIVA TILLGÅNGAR</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {assets.map((item, i) => (
            <div key={i} style={{ background: '#111', padding: '16px 20px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '12px' }}>{item.name}</div>
                <div style={{ fontSize: '8px', color: item.statusColor, fontWeight: 900, marginTop: '4px' }}>{item.status}</div>
              </div>
              <div style={{ fontWeight: 900, fontSize: '14px' }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
