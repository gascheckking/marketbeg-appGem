"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [pulseIndex, setPulseIndex] = useState(0);
  const pulses = [
    "IPHONE 15 PRO: +12% EFTERFRÅGAN 🔥",
    "SNEAKERS SÄLJER PÅ < 2H JUST NU ⚡",
    "420 NYA KÖPARE I LOOPEN SENASTE TIMMEN",
    "HÖG LIKVIDITET PÅ VINTERJACKOR 🧥"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % pulses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header style={{
      padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'rgba(2,4,10,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 100
    }}>
      <div onClick={() => router.push("/")} style={{ cursor: 'pointer', flex: 1 }}>
        <div style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '2px', lineHeight: 1 }}>
          KARMA<span style={{color: 'var(--neon-mint)'}}>∞</span>
        </div>
        {/* MARKET PULSE TICKER */}
        <div style={{ 
          fontSize: '6px', fontWeight: 900, color: 'var(--neon-mint)', 
          marginTop: '4px', height: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center'
        }}>
          <span className="pulse-text" key={pulseIndex}>{pulses[pulseIndex]}</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button onClick={() => router.push('/dashboard/seller')} style={{ 
          background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.1)', 
          color: '#fff', padding: '6px 10px', borderRadius: '8px', fontSize: '8px', fontWeight: 900 
        }}>SALDO 💰</button>
        <div onClick={() => router.push('/profile')} style={{ 
          width: '30px', height: '30px', borderRadius: '50%', background: '#111', 
          border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' 
        }}>👤</div>
      </div>

      <style jsx>{`
        .pulse-text {
          animation: slideUp 0.5s ease-out;
          white-space: nowrap;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </header>
  );
}
