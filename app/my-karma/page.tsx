// app/my-karma/page.tsx
"use client";
import React from "react";

export default function MyKarmaPage() {
  const steps = ["KNOW", "ACQUIRE", "REUSE", "MATCH", "AGAIN"];

  return (
    <div className="page-wrapper" style={{ padding: 20 }}>
      <header style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 8, fontWeight: 900, letterSpacing: 1.5, opacity: 0.5 }}>
          VERIFIERAD IDENTITET
        </div>
        <h1 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 900 }}>
          Din KARMA
        </h1>
      </header>

      <section className="glass-card" style={{ padding: 14, borderRadius: 16 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ flex: 1 }}>
              <div style={{
                textAlign: "center",
                fontSize: 6,
                fontWeight: 900,
                opacity: i <= 2 ? 1 : 0.3
              }}>
                {s}
              </div>
              <div style={{
                height: 3,
                marginTop: 6,
                borderRadius: 3,
                background: i <= 2 ? "var(--neon-purple)" : "#222"
              }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ fontSize: 10, fontWeight: 900, opacity: 0.5 }}>
            Din tillit
          </div>
          <div style={{ fontSize: 16, fontWeight: 900, marginTop: 4 }}>
            Mycket hög
          </div>
          <div style={{ fontSize: 9, opacity: 0.4 }}>
            Baserat på tidigare affärer
          </div>
        </div>
      </section>

      <section style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div className="glass-card" style={{ padding: 14 }}>
          <div style={{ fontSize: 8, fontWeight: 900, opacity: 0.5 }}>
            Värde skapat
          </div>
          <div style={{ fontWeight: 900 }}>42 500 kr</div>
        </div>

        <div className="glass-card" style={{ padding: 14 }}>
          <div style={{ fontSize: 8, fontWeight: 900, opacity: 0.5 }}>
            CO₂ sparat
          </div>
          <div style={{ fontWeight: 900, color: "var(--neon-mint)" }}>
            124 kg
          </div>
        </div>
      </section>
    </div>
  );
}
