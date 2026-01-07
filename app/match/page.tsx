// app/match/page.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function MatchPage() {
  return (
    <div className="page-wrapper" style={{ padding: 20 }}>
      <header style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 9, fontWeight: 900, opacity: 0.5 }}>
          Dina matchningar
        </div>
        <h1 style={{ margin: "4px 0", fontSize: "1.6rem", fontWeight: 900 }}>
          Redo för affär
        </h1>
        <p style={{ fontSize: 11, opacity: 0.5 }}>
          Köpare och säljare som passar varandra samlas här.
        </p>
      </header>

      <div style={{
        textAlign: "center",
        padding: "50px 20px",
        borderRadius: 24,
        border: "1px dashed rgba(255,255,255,0.1)"
      }}>
        <div style={{ fontSize: 24, marginBottom: 14 }}>🤝</div>
        <div style={{ fontWeight: 900, fontSize: 13 }}>
          Inga aktiva matcher
        </div>
        <div style={{ fontSize: 10, opacity: 0.4, margin: "8px 0 20px" }}>
          Starta en snabbsälj för att hitta köpare direkt.
        </div>

        <Link href="/sell">
          <button style={{
            background: "#fff",
            color: "#000",
            border: "none",
            padding: "14px 28px",
            borderRadius: 16,
            fontWeight: 900,
            fontSize: 11
          }}>
            Starta snabbsälj
          </button>
        </Link>
      </div>
    </div>
  );
}
