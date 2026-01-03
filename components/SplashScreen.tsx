"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasSeenKarmaSplash")) {
      setVisible(true);
      sessionStorage.setItem("hasSeenKarmaSplash", "true");
      setTimeout(() => setVisible(false), 2800);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#02040a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', animation: 'fadeInOut 2.8s forwards' }}>
        <div style={{ width: '40px', height: '40px', border: '1.5px solid var(--neon-mint)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
          <span style={{ color: 'var(--neon-mint)', fontSize: '20px' }}>∞</span>
        </div>
        <h1 style={{ fontSize: '1.2rem', letterSpacing: '5px', background: 'linear-gradient(45deg, #9d4edd, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>KARMA</h1>
        <p style={{ fontSize: '6px', letterSpacing: '2px', color: 'var(--neon-mint)', marginTop: '8px', opacity: 0.6 }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </div>
      <style jsx>{` @keyframes fadeInOut { 0% { opacity:0; transform:scale(0.95); } 20% { opacity:1; transform:scale(1); } 80% { opacity:1; } 100% { opacity:0; } } `}</style>
    </div>
  );
}
