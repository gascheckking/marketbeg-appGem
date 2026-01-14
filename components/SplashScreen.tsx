// // components/SplashScreen.tsx
"use client";
import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{ 
      position: 'fixed', inset: 0, zIndex: 9999, background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ fontSize: '48px', fontWeight: 900, color: 'var(--karma-green)', letterSpacing: '-2px' }}>
        Karma
      </div>
      <div style={{ position: 'absolute', bottom: '50px', fontSize: '10px', fontWeight: 800, letterSpacing: '2px', opacity: 0.5 }}>
        THINGS DESERVE MORE THAN ONE LIFE
      </div>
    </div>
  );
}
