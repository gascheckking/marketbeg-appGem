"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenKarmaSplash");
    if (!hasSeenSplash) {
      setVisible(true);
      sessionStorage.setItem("hasSeenKarmaSplash", "true");
      const timer = setTimeout(() => setVisible(false), 3200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      backgroundColor: '#02040a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}>
      <div className="splash-content" style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '50px', height: '50px', margin: '0 auto 15px',
          border: '1.5px solid var(--neon-mint)', borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.15)'
        }}>
           <span style={{ fontSize: '24px', color: 'var(--neon-mint)' }}>∞</span>
        </div>
        
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 900, 
          letterSpacing: '8px',
          margin: 0,
          background: 'linear-gradient(45deg, #9d4edd, #00ff88)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          KARMA
        </h1>
        <p style={{ 
          fontSize: '7px', color: 'var(--neon-mint)', letterSpacing: '3px', 
          marginTop: '10px', fontWeight: 800, opacity: 0.6 
        }}>
          REUSE • MATCH • AGAIN
        </p>
      </div>

      <style jsx>{`
        .splash-content { animation: karmaFade 3s ease-in-out forwards; }
        @keyframes karmaFade {
          0% { opacity: 0; transform: scale(0.98); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}
