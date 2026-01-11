// // components/SplashScreen.tsx
"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeen = sessionStorage.getItem("hasSeenKarmaSplash");
    if (!hasSeen) {
      setVisible(true);
      sessionStorage.setItem("hasSeenKarmaSplash", "true");
      const timer = setTimeout(() => setVisible(false), 2400);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div style={{ 
      position: 'fixed', inset: 0, zIndex: 10000,
      backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', animation: 'karmaIn 2.4s ease-in-out forwards' }}>
        <div style={{ 
          fontSize: '64px', fontWeight: 900, letterSpacing: '-4px', color: '#fff',
          position: 'relative', display: 'inline-block'
        }}>
          KARMA
          <span style={{ color: 'var(--karma-green)', position: 'absolute', right: '-35px', top: '0' }}>∞</span>
        </div>
        <div style={{ 
          height: '2px', width: '0%', background: 'var(--karma-green)', margin: '15px auto 0',
          animation: 'loadBar 1.5s ease-out forwards 0.3s'
        }} />
      </div>
      <style jsx>{` 
        @keyframes karmaIn { 
          0% { opacity: 0; transform: scale(0.9); } 
          20% { opacity: 1; transform: scale(1); } 
          80% { opacity: 1; transform: scale(1); filter: blur(0px); } 
          100% { opacity: 0; transform: scale(1.1); filter: blur(10px); } 
        } 
        @keyframes loadBar { 0% { width: 0%; } 100% { width: 100%; } }
      `}</style>
    </div>
  );
}
