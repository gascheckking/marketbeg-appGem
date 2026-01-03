"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header style={{
      padding: '15px 25px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(2,4,10,0.6)',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* KARMA LOGO */}
      <div 
        className="logo" 
        onClick={() => router.push("/")} 
        style={{ fontSize: '1.4rem', fontWeight: 900, cursor: 'pointer', letterSpacing: '2px' }}
      >
        KARMA<span style={{color: 'var(--neon-purple)'}}>.</span>
      </div>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button 
          onClick={() => router.push('/dashboard/seller')}
          style={{ 
            background: 'rgba(157, 78, 221, 0.1)', 
            border: '1px solid rgba(157, 78, 221, 0.3)', 
            color: '#fff', padding: '8px 14px', borderRadius: '12px', 
            fontSize: '11px', fontWeight: 800, cursor: 'pointer' 
          }}
        >
          SALDO 💰
        </button>
        <div 
          style={{ 
            width: '38px', height: '38px', borderRadius: '50%', 
            background: 'linear-gradient(45deg, #111, #222)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            cursor: 'pointer', border: '1px solid var(--border)' 
          }} 
          onClick={() => router.push('/profile')}
        >
          👤
        </div>
      </div>
    </header>
  );
}
