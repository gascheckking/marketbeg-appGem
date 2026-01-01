"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      {/* HERO SECTION - Grafik Vänster, Text Höger */}
      <section className="hero-section">
        <div className="ai-visual-box">
          <div className="scan-line"></div>
          <div style={{color: 'white', padding: '40px', textAlign: 'center'}}>
             <p style={{fontSize: '80px'}}>📸</p>
             <h2>AI ANALYZING...</h2>
             <p className="muted">Låt kameran göra jobbet.</p>
          </div>
        </div>

        <div className="hero-text">
          <span className="trust-pill">Norden's #1 AI Marketplace</span>
          <h1 style={{fontSize: '4.5rem', margin: '20px 0'}}>Sälj smartare.<br/>Inte hårdare.</h1>
          <p className="muted" style={{fontSize: '1.4rem', marginBottom: '40px'}}>
             BegAI använder bank-grade säkerhet och deep learning för att sälja dina saker på rekordtid. Ingen text. Bara bilder.
          </p>
          <div style={{display: 'flex', gap: '20px'}}>
            <button className="primary" onClick={() => router.push('/sell')} style={{padding: '20px 50px'}}>KOM IGÅNG</button>
            <button className="secondary" onClick={() => router.push('/feed')}>UTFORSKA FLÖDET</button>
          </div>
        </div>
      </section>

      {/* TRENDING SECTION - "Heta" objekt som på Amazon/Temu */}
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
        <h2 style={{fontSize: '2rem'}}>Just nu i flödet 🔥</h2>
        <button style={{background: 'none', border: 'none', fontWeight: 700, cursor: 'pointer'}}>Visa alla -{">"}</button>
      </div>

      <div className="market-grid">
        <ProductCard title="PlayStation 5" price={4200} bids={12} trust={98} />
        <ProductCard title="Air Jordan 1 Low" price={1800} bids={4} trust={95} />
        <ProductCard title="Dyson V15" price={5100} bids={0} trust={100} />
        <ProductCard title="MacBook M2" price={12500} bids={28} trust={92} />
      </div>

      <button className="sell-button-fixed" onClick={() => router.push('/sell')}>SÄLJ MED AI 📷</button>
    </div>
  );
}

function ProductCard({ title, price, bids, trust }) {
  return (
    <div className="product-card">
      <div className="product-image">📦</div>
      <div className="trust-pill">🛡️ {trust}% Trust</div>
      <h3 style={{fontSize: '18px', margin: '10px 0'}}>{title}</h3>
      <div className="price-tag">{price} kr</div>
      <div className="bid-info">{bids > 0 ? `🔥 ${bids} BUD JUST NU` : "KÖP NU"}</div>
    </div>
  );
}
