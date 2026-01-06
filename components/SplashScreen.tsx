// // components/SplashScreen.tsx
"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Förhindra att den visas vid varje sidbyte under samma session
    const hasSeen = sessionStorage.getItem("hasSeenKarmaSplash");
    
    if (!hasSeen) {
      setVisible(true);
      sessionStorage.setItem("hasSeenKarmaSplash", "true");
      const timer = setTimeout(() => setVisible(false), 2800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div style={{ 
      position: 'fixed', inset: 0, zIndex: 10000,
      backgroundColor: '#02040a', display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center', pointerEvents: 'none'
    }}>
      <div style={{ textAlign: 'center', animation: 'fadeInOut 2.8s forwards' }}>
        <div style={{ 
          width: '60px', height: '60px', border: '2px solid var(--neon-mint)', 
          borderRadius: '18px', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', margin: '0 auto 25px',
          boxShadow: '0 0 30px rgba(0, 255, 136, 0.15)'
        }}>
          <span style={{ color: 'var(--neon-mint)', fontSize: '30px', fontWeight: 'bold' }}>∞</span>
        </div>
        <h1 style={{ 
          fontSize: '1.8rem', fontWeight: 900, letterSpacing: '10px', 
          background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', 
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          margin: 0
        }}>KARMA</h1>
        <p style={{ 
          fontSize: '7px', letterSpacing: '3px', color: 'var(--neon-mint)', 
          marginTop: '15px', opacity: 0.6, fontWeight: 800 
        }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </div>
      <style jsx>{` 
        @keyframes fadeInOut { 
          0% { opacity: 0; transform: scale(0.95); filter: blur(10px); } 
          15% { opacity: 1; transform: scale(1); filter: blur(0px); } 
          85% { opacity: 1; transform: scale(1); } 
          100% { opacity: 0; transform: scale(1.05); filter: blur(5px); } 
        } 
      `}</style>
    </div>
  );
}
