"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); // Visas i 3 sekunder
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      backgroundColor: '#02040a',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 1s ease',
    }}>
      {/* Här lägger du din logga-bild */}
      <div className="fade-in" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>
          {/* Ersätt med din faktiska logga-fil */}
          <img src="/karma-logo-chip.png" style={{ width: '80px' }} />
        </div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 900, 
          letterSpacing: '8px',
          background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          KARMA
        </h1>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeInOut 2.5s forwards;
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
