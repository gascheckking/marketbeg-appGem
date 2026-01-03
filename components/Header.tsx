"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header style={{
      padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'rgba(2,4,10,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 100
    }}>
      <div onClick={() => router.push("/")} style={{ cursor: 'pointer' }}>
        <div style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '2px', lineHeight: 1 }}>
          KARMA<span style={{color: 'var(--neon-mint)'}}>∞</span>
        </div>
        <div style={{ fontSize: '5px', fontWeight: 800, letterSpacing: '1px', color: 'var(--neon-mint)', marginTop: '3px', opacity: 0.6 }}>
          KNOW • ACQUIRE • REUSE • MATCH • AGAIN
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => router.push('/vault')} style={{ 
          background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.1)', 
          color: '#fff', padding: '5px 10px', borderRadius: '6px', fontSize: '8px', fontWeight: 800 
        }}>SALDO 💰</button>
        <div onClick={() => router.push('/profile')} style={{ 
          width: '28px', height: '28px', borderRadius: '50%', background: '#111', 
          border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' 
        }}>👤</div>
      </div>
    </header>
  );
}
