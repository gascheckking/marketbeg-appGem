// // components/SplashScreen.tsx
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
    <div style={{ 
      position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: '#02040a', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' 
    }}>
      <div style={{ textAlign: 'center', animation: 'fadeInOut 2.8s forwards' }}>
        <div style={{ 
          width: '50px', height: '50px', border: '2px solid var(--neon-mint)', 
          borderRadius: '14px', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', margin: '0 auto 20px',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)'
        }}>
          <span style={{ color: 'var(--neon-mint)', fontSize: '24px', fontWeight: 'bold' }}>∞</span>
        </div>
        <h1 style={{ 
          fontSize: '1.5rem', fontWeight: 900, letterSpacing: '8px', 
          background: 'linear-gradient(45deg, #9d4edd, #00ff88)', 
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          margin: 0
        }}>KARMA</h1>
        <p style={{ 
          fontSize: '7px', letterSpacing: '3px', color: 'var(--neon-mint)', 
          marginTop: '12px', opacity: 0.6, fontWeight: 800 
        }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </div>
      <style jsx>{` 
        @keyframes fadeInOut { 
          0% { opacity: 0; transform: translateY(10px) scale(0.95); } 
          20% { opacity: 1; transform: translateY(0) scale(1); } 
          80% { opacity: 1; transform: translateY(0); } 
          100% { opacity: 0; transform: translateY(-10px); } 
        } 
      `}</style>
    </div>
  );
}
