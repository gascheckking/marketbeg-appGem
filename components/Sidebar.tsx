// // components/Sidebar.tsx
"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Marknad', icon: '🌐', path: '/feed' },
    { name: 'Matchningar', icon: '🤝', path: '/match' },
    { name: 'Eftersökt', icon: '🔍', path: '/wanted' },
    { name: 'Sändningar', icon: '📦', path: '/profile/active-sales' },
    { name: 'Belöningar', icon: '💰', path: '/rewards' },
  ];

  return (
    <aside style={{
      width: '280px', height: '100vh', position: 'fixed', left: 0, top: 0,
      background: '#000', borderRight: '1px solid var(--border)', padding: '40px 24px',
      display: 'flex', flexDirection: 'column', zIndex: 2001
    }}>
      <div 
        onClick={() => router.push('/')}
        style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '50px', cursor: 'pointer', letterSpacing: '3px' }}
      >
        KARMA<span style={{color: 'var(--karma-green)'}}>∞</span>
      </div>

      <nav style={{ flex: 1 }}>
        <p className="text-small" style={{ color: '#444', marginBottom: '20px' }}>NAVIGATION</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div 
              key={item.path}
              onClick={() => router.push(item.path)}
              style={{
                padding: '16px', borderRadius: '16px', cursor: 'pointer', marginBottom: '8px',
                display: 'flex', alignItems: 'center', gap: '15px',
                background: isActive ? 'rgba(29, 185, 84, 0.1)' : 'transparent',
                color: isActive ? 'var(--karma-green)' : '#888',
                transition: '0.2s all ease'
              }}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <span style={{ fontWeight: 900, fontSize: '12px' }}>{item.name.toUpperCase()}</span>
            </div>
          );
        })}
      </nav>

      <div 
        onClick={() => router.push('/profile')}
        className="card"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '15px' }}
      >
        <div style={{ 
          width: '35px', height: '35px', borderRadius: '12px', 
          background: 'var(--karma-green)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>👤</div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 900 }}>DITT VALV</div>
          <div style={{ fontSize: '9px', color: 'var(--karma-green)', fontWeight: 900 }}>98.2% TRUST</div>
        </div>
      </div>
    </aside>
  );
}
