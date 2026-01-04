"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Marknad', icon: '🌐', path: '/feed' },
    { name: 'Matchningar', icon: '🤝', path: '/auctions' },
    { name: 'Belöningar', icon: '💰', path: '/rewards' },
    { name: 'Sändningar', icon: '📦', path: '/shipments' },
    { name: 'Eftersökt', icon: '🔍', path: '/wanted' }, // Ny funktion
  ];

  return (
    <aside style={{
      width: '220px', height: '100vh', position: 'fixed', left: 0, top: 0,
      background: 'rgba(2, 4, 10, 0.98)', backdropFilter: 'blur(25px)',
      borderRight: '1px solid var(--border)', padding: '20px 15px',
      display: 'flex', flexDirection: 'column', zIndex: 1000
    }}>
      <div 
        onClick={() => router.push('/')}
        style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '25px', cursor: 'pointer', letterSpacing: '2px' }}
      >
        KARMA<span style={{color: 'var(--neon-purple)'}}>.</span>
      </div>

      <nav style={{ flex: 1 }}>
        <p style={{ fontSize: '8px', fontWeight: 900, color: '#333', marginBottom: '10px', letterSpacing: '1px' }}>NAVIGERING</p>
        {menuItems.map((item) => (
          <div 
            key={item.path}
            onClick={() => router.push(item.path)}
            style={{
              padding: '10px 12px', borderRadius: '10px', cursor: 'pointer', marginBottom: '4px',
              display: 'flex', alignItems: 'center', gap: '10px',
              background: pathname === item.path ? 'rgba(157, 78, 221, 0.1)' : 'transparent',
              color: pathname === item.path ? '#fff' : '#666',
              transition: '0.2s'
            }}
          >
            <span style={{ fontSize: '14px' }}>{item.icon}</span>
            <span style={{ fontWeight: 700, fontSize: '11px' }}>{item.name.toUpperCase()}</span>
          </div>
        ))}

        <div style={{ marginTop: '30px' }}>
          <p style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', marginBottom: '10px' }}>AI SMART FOLDERS</p>
          {['Vinterjackor', 'Apple Tech'].map(folder => (
            <div key={folder} style={{ padding: '8px 12px', fontSize: '10px', color: '#444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📂</span> {folder}
            </div>
          ))}
        </div>
      </nav>

      <div 
        onClick={() => router.push('/profile')}
        style={{
          padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px',
          display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: '1px solid var(--border)'
        }}
      >
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))' }}></div>
        <div>
          <div style={{ fontSize: '9px', fontWeight: 900 }}>DITT VALV</div>
          <div style={{ fontSize: '7px', color: 'var(--neon-mint)', fontWeight: 800 }}>98.2% TRUST</div>
        </div>
      </div>
    </aside>
  );
}
