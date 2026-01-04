// // app/sell/instant/page.tsx
"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";

function AISellForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const count = searchParams.get("count") || "1";
  const [aiPrice, setAiPrice] = useState(0);

  useEffect(() => {
    const targetPrice = parseInt(count) * 1450;
    const timer = setInterval(() => {
      setAiPrice(prev => {
        if (prev >= targetPrice) { clearInterval(timer); return targetPrice; }
        return prev + Math.floor(targetPrice / 50);
      });
    }, 20);
    return () => clearInterval(timer);
  }, [count]);

  const mockItems = [
    { name: "iPhone 15 Pro", trust: 98, price: 9200, emoji: "📱" },
    { name: "AirPods Max", trust: 94, price: 4100, emoji: "🎧" },
    { name: "MacBook Pro M3", trust: 97, price: 18900, emoji: "💻" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-purple)', letterSpacing: '2px' }}>AI VISION SCAN COMPLETE</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>Resultat</h1>
        </div>
        <div className="badge-match" style={{ padding: '8px 15px', borderRadius: '12px', border: '1px solid var(--neon-mint)', color: 'var(--neon-mint)', fontWeight: 900, fontSize: '12px' }}>
          {count} OBJEKT
        </div>
      </header>

      <div className="glass-card" style={{ padding: '25px', border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.03)', marginBottom: '20px', borderRadius: '24px' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.6, marginBottom: '5px' }}>ESTIMERAT TOTALVÄRDE</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span style={{ fontSize: '2.8rem', fontWeight: 900 }}>{aiPrice.toLocaleString()}</span>
          <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--neon-mint)' }}>kr</span>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '12px', marginBottom: '120px' }}>
        {mockItems.slice(0, parseInt(count)).map((item, i) => (
          <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderRadius: '18px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', background: '#000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                {item.emoji}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 900, marginBottom: '4px' }}>{item.name}</div>
                <TrustBadge score={item.trust} />
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <PriceTag price={item.price} size="md" />
              <div style={{ fontSize: '8px', color: 'var(--neon-purple)', fontWeight: 900, marginTop: '4px' }}>INSTANT MATCH ✨</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'fixed', bottom: '100px', left: '15px', right: '15px', zIndex: 10 }}>
        <button onClick={() => router.push('/dashboard/seller')} className="primary-btn" style={{ padding: '20px', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,255,136,0.2)' }}>
          ACCEPTERA & SÄLJ ALLA
        </button>
      </div>
    </div>
  );
}

export default function AISellPage() {
  return (
    <Suspense fallback={<div className="page-wrapper">BOOTING AI...</div>}>
      <AISellForm />
    </Suspense>
  );
}
