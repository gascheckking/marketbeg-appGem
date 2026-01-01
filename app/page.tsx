"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <section className="glow-card" style={{ padding: '40px 20px', textAlign: 'center', marginBottom: '30px', marginTop: '20px' }}>
        <div className="scan-line"></div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
          SELL AT THE <br/> <span className="ai-text">SPEED OF LIGHT</span>
        </h1>
        <p className="muted" style={{ fontSize: '18px', marginBottom: '30px' }}>
          Ingen text. Inget krångel. <br/>Vår AI skapar din annons på 5 sekunder.
        </p>
        <button className="primary-btn" onClick={() => router.push('/sell')} style={{ width: '100%' }}>
          STARTA AI-SCAN
        </button>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div className="glow-card" style={{ gridColumn: 'span 2', padding: '20px' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '12px' }}>AI INSIGHT</span>
          <h3 style={{ margin: '10px 0 5px 0' }}>Market Pulse</h3>
          <p className="muted" style={{ fontSize: '14px' }}>Efterfrågan på iPhone 15 Pro har ökat med 12% idag.</p>
        </div>

        <div className="pay-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
          <span style={{ fontSize: '24px' }}>🛡️</span>
          <strong>99.9% Trust</strong>
          <p className="muted" style={{ fontSize: '11px', margin: 0 }}>BankID-verifierat</p>
        </div>

        <div className="pay-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
          <span style={{ fontSize: '24px' }}>🪙</span>
          <strong>Tokens</strong>
          <p className="muted" style={{ fontSize: '11px', margin: 0 }}>Tjäna på varje köp</p>
        </div>

        <div className="glow-card" style={{ gridColumn: 'span 2', padding: '20px' }}>
          <h3 style={{ marginBottom: '15px' }}>Trending Right Now</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <TrendItem name="Rolex" growth="+12%" />
            <TrendItem name="PS5 Pro" growth="+24%" />
            <TrendItem name="Leica Q3" growth="+5%" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendItem({ name, growth }: { name: string, growth: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
      <span style={{ fontWeight: 500 }}>{name}</span>
      <span style={{ color: 'var(--accent)', fontWeight: 800 }}>{growth}</span>
    </div>
  );
}
