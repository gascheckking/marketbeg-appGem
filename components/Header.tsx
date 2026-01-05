// // components/Header.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [pulseIndex, setPulseIndex] = useState(0);
  const pulses = ["IPHONE 15 PRO: +12% 🔥", "SNEAKERS SÄLJER SNABBT ⚡", "420 NYA KÖPARE JUST NU"];

  useEffect(() => {
    const timer = setInterval(() => setPulseIndex(p => (p + 1) % pulses.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header style={{ padding: '12px 18px', background: 'rgba(2,4,10,0.85)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div onClick={() => router.push("/")} style={{ cursor: 'pointer' }}>
        <div style={{ fontWeight: 900 }}>KARMA<span style={{color: 'var(--neon-mint)'}}>∞</span></div>
        <div style={{ fontSize: '7px', color: 'var(--neon-mint)' }}>{pulses[pulseIndex]}</div>
      </div>
      <button onClick={() => router.push('/dashboard/seller')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #222', padding: '5px 10px', borderRadius: '20px', fontSize: '9px', color: '#fff' }}>SALDO 💰</button>
    </header>
  );
}
