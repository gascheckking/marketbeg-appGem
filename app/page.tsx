"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <span className="badge-ai">Next-Gen Nordic Exchange</span>
      <h1>MARKET<br/>BEG.AI</h1>
      <p className="tagline">
        Glöm annonstexter. Glöm prutande. Vår AI sköter värderingen, 
        verifieringen och matchningen i hela Norden.
      </p>

      <div className="bento-grid">
        <div className="bento-item large featured">
          <span className="badge-ai">Live Market</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Sälj smartare.</h2>
          <p className="muted">Ladda upp en bild – AI sätter priset baserat på data från hela Europa.</p>
          <button className="primary" style={{marginTop: '20px'}} onClick={() => router.push('/sell')}>Starta Scan</button>
        </div>
        
        <div className="bento-item">
          <h3>Snabba affärer</h3>
          <p className="muted">90% av alla objekt säljs inom 24h.</p>
        </div>

        <div className="bento-item">
          <h3>Verified Trust</h3>
          <p className="muted">Bara BankID. Inga bots. Inga scammers.</p>
        </div>
      </div>
    </div>
  );
}
