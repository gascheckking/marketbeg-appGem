"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Marknad', icon: '🌐', path: '/feed' },
    { name: 'Auktioner', icon: '🔨', path: '/auctions' },
    { name: 'Valvet', icon: '💎', path: '/vault' },
    { name: 'Leaderboard', icon: '🏆', path: '/leaderboard' },
  ];

  return (
    <aside style={{
      width: '280px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'rgba(2, 4, 10, 0.8)',
      backdropFilter: 'blur(20px)',
      borderRight: '1px solid var(--border)',
      padding: '30px 20px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', marginBottom: '40px', cursor: 'pointer' }} onClick={() => router.push('/')}>
        MARKET<span style={{color: 'var(--neon-purple)'}}>BEG</span>
      </div>

      {/* Quick-Toggle: Köp/Sälj (Kärnan i din Roadmap) */}
      <div style={{ 
        display: 'flex', 
        background: 'rgba(255,255,255,0.03)', 
        borderRadius: '16px', 
        padding: '5px', 
        marginBottom: '30px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <button 
          onClick={() => router.push('/feed')}
          style={{ 
            flex: 1, padding: '10px', borderRadius: '12px', 
            background: pathname.includes('/feed') ? 'var(--neon-purple)' : 'transparent', 
            border: 'none', color: '#fff', fontWeight: 800, cursor: 'pointer', fontSize: '11px' 
          }}>KÖP</button>
        <button 
          onClick={() => router.push('/sell')}
          style={{ 
            flex: 1, padding: '10px', borderRadius: '12px', 
            background: pathname.includes('/sell') ? 'var(--neon-purple)' : 'transparent', 
            border: 'none', color: pathname.includes('/sell') ? '#fff' : '#666', 
            fontWeight: 800, cursor: 'pointer', fontSize: '11px' 
          }}>SÄLJ</button>
      </div>

      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <div 
            key={item.path}
            onClick={() => router.push(item.path)}
            style={{
              padding: '15px 20px',
              borderRadius: '14px',
              cursor: 'pointer',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              background: pathname === item.path ? 'rgba(157, 78, 221, 0.1)' : 'transparent',
              color: pathname === item.path ? '#fff' : '#888',
              transition: 'all 0.2s'
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            <span style={{ fontWeight: 700, fontSize: '14px' }}>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Profil-genväg längst ner */}
      <div 
        onClick={() => router.push('/profile')}
        style={{
          padding: '20px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          border: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))' }}></div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 900 }}>Mitt DNA</div>
          <div style={{ fontSize: '10px', color: 'var(--neon-mint)' }}>98.2% Trust Score</div>
        </div>
      </div>
    </aside>
  );
}
