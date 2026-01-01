"use client";

import { useState } from "react";
import FeedCardSell from "../../components/FeedCardSell";

const MOCK_LISTINGS = [
  { id: "1", title: "iPhone 13", price: 6500, trust: 92 },
  { id: "2", title: "AirPods Pro", price: 1800, trust: 81 },
];

export default function FeedPage() {
  const [tab, setTab] = useState<"sell" | "buy">("sell");

  return (
    <main className="container">
      <div className="tabs">
        <button
          className={tab === "sell" ? "active" : ""}
          onClick={() => setTab("sell")}
        >
          Säljes
        </button>
        <button
          className={tab === "buy" ? "active" : ""}
          onClick={() => setTab("buy")}
        >
          Köpes
        </button>
      </div>

      {MOCK_LISTINGS.map((item) => (
        <FeedCardSell key={item.id} {...item} />
      ))}
    </main>
  );
}
