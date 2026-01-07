"use client";

import { useState } from "react";

export default function Page() {
  const [isAnalysing, setIsAnalysing] = useState(false);

  return (
    <main className="page-wrapper" style={{ animation: "fadeIn 0.5s ease" }}>
      <section style={{ padding: "40px 20px 60px" }}>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 900 }}>
          Sälj snabbt
        </h1>

        <p style={{ opacity: 0.5 }}>
          AI matchar dig direkt mot redo köpare.
        </p>

        <button
          onClick={() => setIsAnalysing(!isAnalysing)}
          className="primary-btn"
        >
          {isAnalysing ? "ANALYSERAR..." : "STARTA SNABBSÄLJ"}
        </button>
      </section>
    </main>
  );
}