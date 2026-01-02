"use client";
import { useRouter } from 'next/navigation';

export default function MyKarmaPage() {
  const router = useRouter();

  return (
    <div className="web-container">
      <div className="content-wrapper" style={{ maxWidth: '800px', padding: '60px 20px' }}>
        <div className="stat-pill" style={{ marginBottom: '20px', display: 'inline-block', color: '#9d4edd' }}>
          ✨ 2,450 Loyalty Points
        </div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '40px' }}>Min Karma</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="glow-card" onClick={() => router.push('/sell')} style={{ padding: '40px', cursor: 'pointer', textAlign: 'center' }}>
            <span style={{ fontSize: '40px' }}>📤</span>
            <h3 style={{ margin: '15px 0' }}>Sälj prylar</h3>
            <p className="muted">Ge dina saker en ny Loop.</p>
          </div>

          <div className="glow-card" style={{ padding: '40px', opacity: 0.5, textAlign: 'center' }}>
            <span style={{ fontSize: '40px' }}>🔄</span>
            <h3 style={{ margin: '15px 0' }}>Hyr ut</h3>
            <p style={{ color: '#9d4edd', fontWeight: 'bold', fontSize: '10px' }}>KOMMER SNART</p>
          </div>
        </div>

        <div className="glow-card" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px' }}>
          <div>
            <strong>Använd poäng till frakt</strong>
            <p className="muted">Du har tillräckligt för 5 fria frakter.</p>
          </div>
          <button style={{ background: '#fff', color: '#000', border: 'none', padding: '12px 25px', borderRadius: '15px', fontWeight: 800, cursor: 'pointer' }}>AKTIVERA</button>
        </div>
      </div>
    </div>
  );
}
