// // components/SplashScreen.tsx
"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Vi kollar sessionStorage först efter att komponenten monterats på klienten
    const hasSeen = sessionStorage.getItem("hasSeenKarmaSplash");
    
    if (!hasSeen) {
      setVisible(true);
      sessionStorage.setItem("hasSeenKarmaSplash", "true");
      const timer = setTimeout(() => setVisible(false), 2800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Om vi inte är på klienten än, eller om den ska vara osynlig, rendera inget.
  if (!mounted || !visible) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: 10000, // Högre än allt annat
      backgroundColor: '#02040a', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      pointerEvents: 'none' // Tillåter klick igenom om något hänger sig
    }}>
      <div style={{ textAlign: 'center', animation: 'fadeInOut 2.8s forwards' }}>
        <div style={{ 
          width: '50px', height: '50px', border: '2px solid #00ff88', 
          borderRadius: '14px', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', margin: '0 auto 20px',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)'
        }}>
          <span style={{ color: '#00ff88', fontSize: '24px', fontWeight: 'bold' }}>∞</span>
        </div>
        <h1 style={{ 
          fontSize: '1.5rem', fontWeight: 900, letterSpacing: '8px', 
          background: 'linear-gradient(45deg, #9d4edd, #00ff88)', 
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          margin: 0,
          fontFamily: 'sans-serif'
        }}>KARMA</h1>
        <p style={{ 
          fontSize: '7px', letterSpacing: '3px', color: '#00ff88', 
          marginTop: '12px', opacity: 0.6, fontWeight: 800 
        }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </div>
      <style jsx>{` 
        @keyframes fadeInOut { 
          0% { opacity: 0; transform: translateY(10px) scale(0.95); } 
          15% { opacity: 1; transform: translateY(0) scale(1); } 
          85% { opacity: 1; transform: translateY(0); } 
          100% { opacity: 0; transform: translateY(-10px); } 
        } 
      `}</style>
    </div>
  );
}
