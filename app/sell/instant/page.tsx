// // app/sell/instant/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import TrustBadge from "@/components/TrustBadge";

function AISellInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const count = parseInt(searchParams.get("count") || "1", 10);
  const [aiPrice, setAiPrice] = useState(0);

  useEffect(() => {
    const targetPrice = count * 9450;
    const step = Math.max(1, Math.floor(targetPrice / 40));
    const timer = setInterval(() => {
      setAiPrice((prev) => {
        if (prev >= targetPrice) {
          clearInterval(timer);
          return targetPrice;
        }
        return prev + step;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [count]);

  const mockItems = [
    { name: "iPhone 15 Pro", trust: 98, price: 9450, emoji: "📱" },
    { name: "AirPods Max", trust: 94, price: 4100, emoji: "🎧" },
    { name: "MacBook Pro M3", trust: 97, price: 18900, emoji: "💻" },
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: "20px" }}>
        <div className="text-small" style={{ color: "var(--karma-green)" }}>AI VISION SCAN COMPLETE</div>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 900, margin: 0 }}>RESULTAT</h1>
      </header>

      <div className="card" style={{ textAlign: "center", marginBottom: "20px", border: "1px solid var(--karma-green)" }}>
        <div className="text-small" style={{ opacity: 0.5, marginBottom: "5px" }}>ESTIMERAT TOTALVÄRDE</div>
        <div style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-2px" }}>
          {aiPrice.toLocaleString("sv-SE")}
          <span style={{ fontSize: "1rem", color: "var(--karma-green)", marginLeft: "8px" }}>SEK</span>
        </div>
      </div>

      <div style={{ display: "grid", gap: "12px", marginBottom: "120px" }}>
        {mockItems.slice(0, count).map((item, i) => (
          <div key={i} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <div style={{ width: "45px", height: "45px", background: "#000", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>
                {item.emoji}
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 900 }}>{item.name}</div>
                <TrustBadge score={item.trust} />
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 900, fontSize: "15px" }}>{item.price.toLocaleString()} kr</div>
              <div className="text-small" style={{ color: "var(--karma-green)" }}>MATCH ✨</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "fixed", bottom: "100px", left: "20px", right: "20px", maxWidth: "460px", margin: "0 auto" }}>
        <button onClick={() => router.push("/profile/active-sales")} className="primary-btn">
          ACCEPTERA & SÄLJ ALLA
        </button>
      </div>
    </div>
  );
}

export default function AISellPage() {
  return (
    <Suspense fallback={<div className="page-wrapper" style={{ opacity: 0.5 }}>BOOTING AI…</div>}>
      <AISellInner />
    </Suspense>
  );
}
