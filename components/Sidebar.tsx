// // components/Sidebar.tsx
"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Marknad', icon: '🌐', path: '/feed' },
    { name: 'Matchningar', icon: '🤝', path: '/auctions' },
    { name: 'Eftersökt', icon: '🔍', path: '/wanted' },
    { name: 'Sändningar', icon: '📦', path: '/shipments' },
    { name: 'Belöningar', icon: '💰', path: '/rewards' },
  ];

  return (
    <aside style={{
      width: '240px', height: '100vh', position: 'fixed', left: 0, top: 0,
      background: 'rgba(2, 4, 10, 0.95)', backdropFilter: 'blur(20px)',
      borderRight: '1px solid var(--border)', padding: '30px 20px',
      display: 'flex', flexDirection: 'column', zIndex: 1000
    }}>
      <div 
        onClick={() => router.push('/')}
        style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '40px', cursor: 'pointer', letterSpacing: '3px', color: '#fff' }}
      >
        KARMA<span style={{color: 'var(--neon-purple)'}}>∞</span>
      </div>

      <nav style={{ flex: 1 }}>
        <p style={{ fontSize: '9px', fontWeight: 900, color: '#444', marginBottom: '15px', letterSpacing: '1.5px' }}>NAVIGATION</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div 
              key={item.path}
              onClick={() => router.push(item.path)}
              style={{
                padding: '12px 15px', borderRadius: '14px', cursor: 'pointer', marginBottom: '6px',
                display: 'flex', alignItems: 'center', gap: '12px',
                background: isActive ? 'rgba(157, 78, 221, 0.08)' : 'transparent',
                color: isActive ? '#fff' : '#888',
                border: isActive ? '1px solid rgba(157, 78, 221, 0.2)' : '1px solid transparent',
                transition: '0.2s all ease'
              }}
            >
              <span style={{ fontSize: '16px', filter: isActive ? 'grayscale(0)' : 'grayscale(1)' }}>{item.icon}</span>
              <span style={{ fontWeight: isActive ? 900 : 700, fontSize: '11px', letterSpacing: '0.5px' }}>{item.name.toUpperCase()}</span>
            </div>
          );
        })}
      </nav>

      {/* Profil/Valv-snabbknapp i botten */}
      <div 
        onClick={() => router.push('/profile')}
        style={{
          padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '18px',
          display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', 
          border: '1px solid var(--border)', transition: '0.2s'
        }}
      >
        <div style={{ 
          width: '32px', height: '32px', borderRadius: '50%', 
          background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))',
          boxShadow: '0 0 10px rgba(157, 78, 221, 0.3)'
        }}></div>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 900, color: '#fff' }}>DITT VALV</div>
          <div style={{ fontSize: '8px', color: 'var(--neon-mint)', fontWeight: 900 }}>98.2% TRUST</div>
        </div>
      </div>
    </aside>
  );
}
