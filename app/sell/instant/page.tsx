// app/sell/instant/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PriceTag from "@/components/PriceTag";
import TrustBadge from "@/components/TrustBadge";

/* ----------------------------------------
   CLIENT-ONLY INNER COMPONENT
   (FÅR ALDRIG RENDERAS UTAN SUSPENSE)
----------------------------------------- */
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
    <div className="page-wrapper" style={{ padding: "15px" }}>
      <header style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "7px",
            fontWeight: 900,
            color: "var(--neon-purple)",
            letterSpacing: "1px",
          }}
        >
          AI VISION SCAN COMPLETE
        </div>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 900, margin: 0 }}>
          RESULTAT
        </h1>
      </header>

      <div
        className="glass-card"
        style={{
          padding: "20px",
          border: "1px solid var(--neon-mint)",
          background: "rgba(0,255,136,0.02)",
          marginBottom: "15px",
          borderRadius: "18px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "8px",
            fontWeight: 900,
            opacity: 0.5,
            marginBottom: "2px",
          }}
        >
          ESTIMERAT TOTALVÄRDE
        </div>
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: 900,
            letterSpacing: "-1.5px",
          }}
        >
          {aiPrice.toLocaleString("sv-SE")}
          <span
            style={{
              fontSize: "0.9rem",
              color: "var(--neon-mint)",
              marginLeft: "5px",
            }}
          >
            SEK
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gap: "8px", marginBottom: "100px" }}>
        {mockItems.slice(0, count).map((item, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px",
              borderRadius: "14px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#000",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                {item.emoji}
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 900 }}>
                  {item.name}
                </div>
                <TrustBadge score={item.trust} />
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <PriceTag price={item.price} size="sm" />
              <div
                style={{
                  fontSize: "7px",
                  color: "var(--neon-purple)",
                  fontWeight: 900,
                  marginTop: "2px",
                }}
              >
                MATCH ✨
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: "15px",
          right: "15px",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => router.push("/dashboard/seller")}
          className="primary-btn"
          style={{
            padding: "18px",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(0,255,136,0.15)",
          }}
        >
          ACCEPTERA & SÄLJ ALLA
        </button>
      </div>
    </div>
  );
}

/* ----------------------------------------
   PUBLIC PAGE EXPORT
----------------------------------------- */
export default function AISellPage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "20px", fontSize: "10px", color: "#fff" }}>
          BOOTING AI…
        </div>
      }
    >
      <AISellInner />
    </Suspense>
  );
}