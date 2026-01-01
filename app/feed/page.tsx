"use client";

import { useState } from "react";
import FeedCardSell from "../../components/FeedCardSell";

const MOCK_LISTINGS = [
  { id: "1", title: "iPhone 13", price: 6500, trust: 92 },
  { id: "2", title: "AirPods Pro", price: 1800, trust: 81 },
  { id: "3", title: "MacBook Air M1", price: 8500, trust: 95 },
];

export default function FeedPage() {
  const [tab, setTab] = useState<"sell" | "buy" | "ai">("sell");

  return (
    <main className="container">
      <div className="tabs">
        <button className={tab === "sell" ? "active" : ""} onClick={() => setTab("sell")}>
          Säljes
        </button>
        <button className={tab === "buy" ? "active" : ""} onClick={() => setTab("buy")}>
          Köpes
        </button>
        <button className={tab === "ai" ? "active" : ""} onClick={() => setTab("ai")}>
          AI-match
        </button>
      </div>

      {tab !== "ai" && (
        <div className="grid">
          {MOCK_LISTINGS.map((item) => (
            <FeedCardSell key={item.id} {...item} />
          ))}
        </div>
      )}

      {tab === "ai" && (
        <div className="card">
          <h3>AI-matchning</h3>
          <p className="muted">
            Ladda upp ett objekt så matchar vi rätt pris och köpare i Norden.
          </p>
          <button className="primary">Starta AI-analys</button>
        </div>
      )}
    </main>
  );
}
