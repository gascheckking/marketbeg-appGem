"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header style={{
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(2,4,10,0.4)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="logo" onClick={() => router.push("/")} style={{ fontSize: '1.2rem', fontWeight: 900, cursor: 'pointer' }}>
        MARKET<span style={{color: 'var(--neon-purple)'}}>BEG</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button 
          onClick={() => router.push('/vault')}
          style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '8px 15px', borderRadius: '10px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
        >
          VALVET 💎
        </button>
        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid var(--border)' }} onClick={() => router.push('/profile')}>
          👤
        </div>
      </div>
    </header>
  );
}
