"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Marknad', icon: '🌐', path: '/feed' },
    { name: 'Matchningar', icon: '🤝', path: '/auctions' },
    { name: 'Mitt Saldo', icon: '💰', path: '/dashboard/seller' },
    { name: 'Leaderboard', icon: '🏆', path: '/leaderboard' },
  ];

  return (
    <aside style={{
      width: '280px', height: '100vh', position: 'fixed', left: 0, top: 0,
      background: 'rgba(2, 4, 10, 0.9)', backdropFilter: 'blur(20px)',
      borderRight: '1px solid var(--border)', padding: '40px 20px',
      display: 'flex', flexDirection: 'column', zIndex: 1000
    }}>
      <div 
        onClick={() => router.push('/')}
        style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '45px', cursor: 'pointer', letterSpacing: '4px' }}
      >
        KARMA<span style={{color: 'var(--neon-purple)'}}>.</span>
      </div>

      <div style={{ 
        display: 'flex', background: 'rgba(255,255,255,0.03)', 
        borderRadius: '16px', padding: '5px', marginBottom: '35px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <button 
          onClick={() => router.push('/feed')}
          className={pathname.includes('/feed') ? 'active-toggle' : ''}
          style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: 'transparent', color: '#666', fontWeight: 800, cursor: 'pointer', fontSize: '11px' }}
        >KÖP</button>
        <button 
          onClick={() => router.push('/sell')}
          className={pathname.includes('/sell') ? 'active-toggle' : ''}
          style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: 'transparent', color: '#666', fontWeight: 800, cursor: 'pointer', fontSize: '11px' }}
        >SÄLJ</button>
      </div>

      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <div 
            key={item.path}
            onClick={() => router.push(item.path)}
            style={{
              padding: '14px 18px', borderRadius: '14px', cursor: 'pointer', marginBottom: '8px',
              display: 'flex', alignItems: 'center', gap: '15px',
              background: pathname === item.path ? 'rgba(157, 78, 221, 0.1)' : 'transparent',
              color: pathname === item.path ? '#fff' : '#888',
              transition: '0.2s'
            }}
          >
            <span style={{ fontSize: '18px' }}>{item.icon}</span>
            <span style={{ fontWeight: 700, fontSize: '14px' }}>{item.name}</span>
          </div>
        ))}
      </nav>

      <div 
        onClick={() => router.push('/my-karma')}
        style={{
          padding: '20px', background: 'rgba(157, 78, 221, 0.03)', borderRadius: '20px',
          display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
          border: '1px solid rgba(157, 78, 221, 0.1)'
        }}
      >
        <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))' }}></div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 900 }}>DIN KARMA</div>
          <div style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 800 }}>98.2% TRUST</div>
        </div>
      </div>

      <style jsx>{`
        .active-toggle { background: var(--neon-purple) !important; color: #fff !important; }
      `}</style>
    </aside>
  );
}
