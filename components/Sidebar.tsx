"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Marknad', icon: '🌐', path: '/feed' },
    { name: 'Matchningar', icon: '🤝', path: '/auctions' },
    { name: 'Belöningar', icon: '💰', path: '/beloningar' },
    { name: 'Sändningar', icon: '📦', path: '/shipments' },
    { name: 'Leaderboard', icon: '🏆', path: '/leaderboard' },
  ];

  return (
    <aside style={{
      width: '230px', height: '100vh', position: 'fixed', left: 0, top: 0,
      background: 'rgba(2, 4, 10, 0.98)', backdropFilter: 'blur(20px)',
      borderRight: '1px solid var(--border)', padding: '20px 15px',
      display: 'flex', flexDirection: 'column', zIndex: 1000
    }}>
      {/* LOGO - Mindre för bättre skalning */}
      <div 
        onClick={() => router.push('/')}
        style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px', cursor: 'pointer', letterSpacing: '2px' }}
      >
        KARMA<span style={{color: 'var(--neon-purple)'}}>.</span>
      </div>

      {/* KÖP/SÄLJ TOGGLE - Tajtare */}
      <div style={{ 
        display: 'flex', background: 'rgba(255,255,255,0.03)', 
        borderRadius: '10px', padding: '3px', marginBottom: '25px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <button 
          onClick={() => router.push('/feed')}
          className={pathname.includes('/feed') ? 'active-toggle' : ''}
          style={{ flex: 1, padding: '8px', borderRadius: '8px', border: 'none', background: 'transparent', color: '#666', fontWeight: 800, cursor: 'pointer', fontSize: '10px' }}
        >KÖP</button>
        <button 
          onClick={() => router.push('/sell')}
          className={pathname.includes('/sell') ? 'active-toggle' : ''}
          style={{ flex: 1, padding: '8px', borderRadius: '8px', border: 'none', background: 'transparent', color: '#666', fontWeight: 800, cursor: 'pointer', fontSize: '10px' }}
        >SÄLJ</button>
      </div>

      {/* NAVIGERING */}
      <nav style={{ flex: 1 }}>
        <p style={{ fontSize: '8px', fontWeight: 900, color: '#444', marginBottom: '10px', letterSpacing: '1px' }}>MENY</p>
        {menuItems.map((item) => (
          <div 
            key={item.path}
            onClick={() => router.push(item.path)}
            style={{
              padding: '10px 12px', borderRadius: '10px', cursor: 'pointer', marginBottom: '4px',
              display: 'flex', alignItems: 'center', gap: '12px',
              background: pathname === item.path ? 'rgba(157, 78, 221, 0.1)' : 'transparent',
              color: pathname === item.path ? '#fff' : '#888',
              transition: '0.2s'
            }}
          >
            <span style={{ fontSize: '14px' }}>{item.icon}</span>
            <span style={{ fontWeight: 700, fontSize: '12px' }}>{item.name.toUpperCase()}</span>
          </div>
        ))}

        {/* AI SMART FOLDERS - Integrerat i sidebaren */}
        <div style={{ marginTop: '30px' }}>
          <p style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', marginBottom: '10px', letterSpacing: '1px' }}>AI SMART FOLDERS</p>
          {['Vinterjackor', 'Apple Tech'].map(folder => (
            <div key={folder} style={{ padding: '8px 12px', fontSize: '11px', color: '#555', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '10px' }}>📂</span> {folder}
            </div>
          ))}
        </div>
      </nav>

      {/* USER PROFIL - Kompakt botten */}
      <div 
        onClick={() => router.push('/profile')}
        style={{
          padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px',
          display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer',
          border: '1px solid var(--border)'
        }}
      >
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))' }}></div>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 900 }}>DITT VALV</div>
          <div style={{ fontSize: '8px', color: 'var(--neon-mint)', fontWeight: 800 }}>98.2% TRUST</div>
        </div>
      </div>

      <style jsx>{`
        .active-toggle { background: var(--neon-purple) !important; color: #fff !important; }
      `}</style>
    </aside>
  );
}
