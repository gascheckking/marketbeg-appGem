"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      {/* AI-Live Status */}
      <div className="ai-status-bar">
        <div className="pulse-dot"></div>
        <span>BEGAI_CORE: ANALYSERAR 14 293 AKTIVA BUD I NORDEN...</span>
      </div>

      <section className="hero-section">
        {/* Vänster: Den "smarta" grafiken */}
        <div className="ai-visual-box" style={{background: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
           <div className="scan-line"></div>
           {/* AI Neural Network animation (Enkel CSS-cirkel för nu) */}
           <div style={{
             width: '150px', 
             height: '150px', 
             border: '2px dashed #00c805', 
             borderRadius: '50%', 
             display: 'flex', 
             alignItems: 'center', 
             justifyContent: 'center',
             animation: 'spin 10s linear infinite'
           }}>
             <span style={{fontSize: '40px', animation: 'none'}}>🧠</span>
           </div>
           <h3 style={{color: '#00c805', marginTop: '20px', letterSpacing: '2px'}}>ENGINE ACTIVE</h3>
        </div>

        {/* Höger: Texten - Flyttad ut ytterligare */}
        <div className="hero-text" style={{paddingLeft: '40px'}}>
          <h1 style={{fontSize: '5rem', fontWeight: 900, lineHeight: '0.85'}}>
            BEG<span style={{color: '#00c805'}}>.AI</span>
          </h1>
          <p className="muted" style={{fontSize: '1.5rem', marginTop: '30px', maxWidth: '500px'}}>
            Världens första autonoma marknadsplats. 
            Vi säljer inte saker – vi matchar värde.
          </p>
          
          <div style={{marginTop: '50px', display: 'flex', gap: '20px'}}>
            <button className="primary" onClick={() => router.push('/sell')}>
               STARTA AI-SCAN
            </button>
            <button className="secondary" onClick={() => router.push('/feed')}>
               LIVE-MARKET
            </button>
          </div>
        </div>
      </section>

      {/* Nytt: AI Insight Banner */}
      <div className="bento-item bento-insight" style={{marginBottom: '50px'}}>
        <div>
          <h4 style={{margin: 0, color: '#00c805'}}>AI PREDIKTION</h4>
          <p style={{margin: 0, fontSize: '1.2rem'}}>Elektronik-priserna stiger med 12% i Norge – Sälj dina prylar där nu.</p>
        </div>
        <button className="secondary" style={{fontSize: '12px', padding: '10px 20px'}}>VISA ANALYS</button>
      </div>

      <div className="market-grid">
         {/* Dina produkter här */}
         <ProductCard title="Rolex Submariner" price={142000} bids={42} trust={100} aiVerified={true} />
         <ProductCard title="Herman Miller Aeron" price={8500} bids={5} trust={99} aiVerified={true} />
         <ProductCard title="Tesla Model 3" price={320000} bids={104} trust={97} aiVerified={true} />
      </div>
    </div>
  );
}

function ProductCard({ title, price, bids, trust, aiVerified }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {aiVerified && <div style={{position: 'absolute', top: '10px', right: '10px', fontSize: '20px'}}>✨</div>}
        📦
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className="trust-pill">🛡️ {trust}% Trust</div>
        {aiVerified && <span style={{fontSize: '10px', color: '#00c805', fontWeight: 'bold'}}>AI VERIFIED</span>}
      </div>
      <h3 style={{margin: '15px 0 5px 0'}}>{title}</h3>
      <div className="price-tag">{new Intl.NumberFormat('sv-SE').format(price)} kr</div>
      <div style={{color: bids > 10 ? '#ff3b30' : '#888', fontSize: '12px', fontWeight: 'bold'}}>
        {bids} AKTIVA BUD
      </div>
    </div>
  );
}
