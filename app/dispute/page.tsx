"use client";
export default function SecurityCenter() {
  return (
    <div style={{ padding: '60px', marginLeft: '280px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Säkerhetscenter</h1>
      <p className="muted">Här hanterar du dina pågående köpskydd och Karma Shield-status.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
        <div className="glass-card" style={{ padding: '40px' }}>
          <h2 style={{ color: var(--neon-mint) }}>Aktivt Skydd: PÅ</h2>
          <p>Varje krona du handlar för skyddas av vårt BankID-protokoll.</p>
        </div>
        <div className="glass-card" style={{ padding: '40px' }}>
          <h2>Öppna Ärenden</h2>
          <div style={{ padding: '20px', border: '1px dashed #333', borderRadius: '12px', textAlign: 'center' }}>Inga aktiva tvister</div>
        </div>
      </div>
    </div>
  );
}
