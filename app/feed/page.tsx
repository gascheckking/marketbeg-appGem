// // app/feed/page.tsx
"use client";
import React, { useState } from 'react';
import FeedCardSell from "@/components/FeedCardSell";

export default function GlobalMarket() {
  const [activeCategory, setActiveCategory] = useState('Alla');

  const categories = [
    { id: 'all', name: 'Alla' }, { id: 'swap', name: 'Byten 🔄' }, 
    { id: 'fash', name: 'Mode' }, { id: 'elec', name: 'Tech' }
  ];

  return (
    <div className="page-wrapper" style={{ padding: "10px", background: "#121212" }}>
      {/* SEARCH HEADER */}
      <div style={{ position: "sticky", top: 0, background: "rgba(18,18,18,0.9)", backdropFilter: "blur(10px)", padding: "10px 0", zIndex: 100 }}>
        <div style={{ background: "#fff", borderRadius: "4px", padding: "12px 15px", display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
          <span style={{ color: "#000" }}>🔍</span>
          <input placeholder="Sök i loopen..." style={{ border: "none", outline: "none", width: "100%", fontWeight: 700, fontSize: "14px", color: "#000" }} />
        </div>
        
        <div style={{ display: "flex", gap: "8px", overflowX: "auto" }} className="no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              style={{ 
                background: activeCategory === cat.name ? "var(--karma-green)" : "#282828",
                color: activeCategory === cat.name ? "#000" : "#fff",
                border: "none", padding: "8px 16px", borderRadius: "4px", fontSize: "11px", fontWeight: 900, whiteSpace: "nowrap"
              }}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* WANTED / MATCH ALERT */}
      <div style={{ background: "rgba(29, 185, 84, 0.1)", border: "1px solid var(--karma-green)", borderRadius: "8px", padding: "12px", margin: "15px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 900, color: "var(--karma-green)" }}>AI MATCHNING</div>
          <div style={{ fontSize: "12px", fontWeight: 900 }}>Någon letar efter din stl 86!</div>
        </div>
        <button style={{ background: "var(--karma-green)", color: "#000", border: "none", padding: "6px 12px", borderRadius: "20px", fontSize: "10px", fontWeight: 900 }}>BYT NU</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <FeedCardSell id="1" title="iPhone 15 Pro" price={10500} trust={99} />
        <FeedCardSell id="2" title="MacBook Pro" price={18900} trust={96} />
        <FeedCardSell id="3" title="AirPods Max" price={4200} trust={98} />
        <FeedCardSell id="4" title="Sony WH-1000" price={2800} trust={94} />
      </div>
    </div>
  );
}
