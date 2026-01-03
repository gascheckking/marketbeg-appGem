"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header style={{
      padding: '12px 20px', // Mer kompakt
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(2,4,10,0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div 
        className="logo-container" 
        onClick={() => router.push("/")} 
        style={{ cursor: 'pointer', textAlign: 'left' }}
      >
        <div style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '3px', lineHeight: 1 }}>
          KARMA<span style={{color: 'var(--neon-mint)'}}>∞</span>
        </div>
        <div style={{ 
          fontSize: '6px', 
          fontWeight: 800, 
          letterSpacing: '1.5px', 
          color: 'var(--neon-mint)', 
          marginTop: '4px',
          opacity: 0.7
        }}>
          REUSE • MATCH • AGAIN
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button 
          onClick={() => router.push('/vault')}
          style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            color: '#fff', padding: '6px 12px', borderRadius: '8px', 
            fontSize: '9px', fontWeight: 800, cursor: 'pointer',
            letterSpacing: '0.5px'
          }}
        >
          SALDO 💰
        </button>
        <div 
          style={{ 
            width: '32px', height: '32px', borderRadius: '50%', 
            background: '#111', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            cursor: 'pointer', border: '1px solid var(--border)', fontSize: '14px'
          }} 
          onClick={() => router.push('/profile')}
        >
          👤
        </div>
      </div>
    </header>
  );
}
