"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenKarmaSplash");
    if (!hasSeen) {
      setVisible(true);
      sessionStorage.setItem("hasSeenKarmaSplash", "true");
      const timer = setTimeout(() => setVisible(false), 2800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zTarget: 9999, backgroundColor: '#02040a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999
    }}>
      <div className="splash-content" style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '45px', height: '45px', margin: '0 auto 12px',
          border: '1.5px solid var(--neon-mint)', borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 15px rgba(0, 255, 136, 0.15)'
        }}>
           <span style={{ fontSize: '22px', color: 'var(--neon-mint)' }}>∞</span>
        </div>
        <h1 style={{ 
          fontSize: '1.2rem', fontWeight: 900, letterSpacing: '6px', margin: 0,
          background: 'linear-gradient(45deg, #9d4edd, #00ff88)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>KARMA</h1>
        <p style={{ 
          fontSize: '6px', color: 'var(--neon-mint)', letterSpacing: '2px', 
          marginTop: '10px', fontWeight: 800, opacity: 0.6 
        }}>
          KNOW • ACQUIRE • REUSE • MATCH • AGAIN
        </p>
      </div>
      <style jsx>{`
        .splash-content { animation: kFade 2.8s ease-in-out forwards; }
        @keyframes kFade {
          0% { opacity: 0; transform: scale(0.98); }
          15% { opacity: 1; transform: scale(1); }
          85% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}
