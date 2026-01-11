// // components/Header.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [pulseIndex, setPulseIndex] = useState(0);
  const pulses = ["STRL 86 -> 92 SWAPS: +22% 🔥", "SNEAKERS SÄLJER SNABBT ⚡", "842 NYA I LOOPEN"];

  useEffect(() => {
    const timer = setInterval(() => setPulseIndex(p => (p + 1) % pulses.length), 4000);
    return () => clearInterval(timer);
  }, [pulses.length]);

  return (
    <header style={{ 
      padding: '15px 20px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)', 
      position: 'sticky', top: 0, zIndex: 100, display: 'flex', 
      justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #111'
    }}>
      <div onClick={() => router.push("/")} style={{ cursor: 'pointer' }}>
        <div style={{ fontWeight: 900, fontSize: '18px' }}>Karma<span style={{color: '#1DB954'}}>∞</span></div>
        <div style={{ fontSize: '8px', color: '#1DB954', fontWeight: 900 }}>{pulses[pulseIndex]}</div>
      </div>
      <button onClick={() => router.push('/wallet')} style={{ background: '#111', border: '1px solid #222', padding: '8px 14px', borderRadius: '12px', fontSize: '11px', fontWeight: 900, color: '#fff' }}>
        14 250:- 💰
      </button>
    </header>
  );
}
