"use client";

import { useState } from "react";
import FeedCardSell from "../../components/FeedCardSell";
import { useRouter } from "next/navigation";

const LISTINGS = [
  { id: "1", title: "iPhone 13", price: 6500, trust: 92, tag: "Hög efterfrågan" },
  { id: "2", title: "AirPods Pro", price: 1800, trust: 81, tag: "Snabb affär" },
  { id: "3", title: "MacBook Air M1", price: 8500, trust: 95, tag: "Trending" },
];

export default function FeedPage() {
  const [tab, setTab] = useState("market");
  const router = useRouter();

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-card">
          <h1>Sälj smartare med AI</h1>
          <p>
            Ta några bilder. Vi sätter pris, hittar köpare och skapar annonsen.
          </p>
          <button className="primary" onClick={() => router.push("/sell")}>
            Snabb sälj med AI
          </button>
        </div>

        <div className="hero-card">
          <h3>Just nu i marknaden</h3>
          <p className="muted">
            Elektronik säljs snabbast · Hög efterfrågan på Apple
          </p>
        </div>
      </section>

      {/* TABS */}
      <div className="tabs">
        <button className={`tab ${tab === "market" ? "active" : ""}`} onClick={() => setTab("market")}>
          Marknaden
        </button>
        <button className={`tab ${tab === "buy" ? "active" : ""}`} onClick={() => setTab("buy")}>
          Köpare söker
        </button>
        <button className={`tab ${tab === "fast" ? "active" : ""}`} onClick={() => setTab("fast")}>
          Snabb affär
        </button>
        <button className={`tab ${tab === "trend" ? "active" : ""}`} onClick={() => setTab("trend")}>
          Trendande
        </button>
      </div>

      {/* CONTENT */}
      {(tab === "market" || tab === "trend") && (
        <div className="grid">
          {LISTINGS.map(item => (
            <FeedCardSell key={item.id} {...item} />
          ))}
        </div>
      )}

      {tab === "buy" && (
        <div className="grid">
          {LISTINGS.map(item => (
            <FeedCardSell key={item.id} {...item} />
          ))}
        </div>
      )}

      {tab === "fast" && (
        <div className="card">
          <span className="badge">Direkt bud</span>
          <h2>Sälj direkt till köpare</h2>
          <p className="muted">
            AI hittar aktiva köpare och ger dig prisförslag direkt.
          </p>
          <button className="primary" onClick={() => router.push("/sell")}>
            Starta snabb sälj
          </button>
        </div>
      )}
    </main>
  );
}
