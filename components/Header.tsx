// // components/Header.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [pulseIndex, setPulseIndex] = useState(0);
  const pulses = ["IPHONE 15 PRO: +12% 🔥", "SNEAKERS SÄLJER SNABBT ⚡", "420 NYA KÖPARE I LOOPEN"];

  useEffect(() => {
    const timer = setInterval(() => setPulseIndex(p => (p + 1) % pulses.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header style={{ 
      padding: '15px 20px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(15px)', 
      position: 'sticky', top: 0, zIndex: 100, display: 'flex', 
      justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #111'
    }}>
      <div onClick={() => router.push("/")} style={{ cursor: 'pointer' }}>
        <div style={{ fontWeight: 900, letterSpacing: '-1px', fontSize: '18px' }}>Karma<span style={{color: '#1DB954'}}>∞</span></div>
        <div style={{ fontSize: '8px', color: '#1DB954', fontWeight: 900, letterSpacing: '0.5px' }}>{pulses[pulseIndex]}</div>
      </div>
      
      <button 
        onClick={() => router.push('/dashboard/seller')} 
        style={{ 
          background: '#111', border: '1px solid #222', padding: '8px 14px', 
          borderRadius: '12px', fontSize: '11px', fontWeight: 900, color: '#fff'
        }}
      >
        14 250:- <span style={{marginLeft: '4px'}}>💰</span>
      </button>
    </header>
  );
}
