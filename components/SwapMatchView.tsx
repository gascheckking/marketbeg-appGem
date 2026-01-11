// // components/SwapMatchView.tsx
"use client";
import React from "react";
import PriceTag from "./PriceTag";

export default function SwapMatchView({ myItem, theirItem, diff = 0 }: any) {
  return (
    <div style={{
      background: "#000", padding: "30px 20px", borderRadius: "32px",
      border: "1px solid var(--karma-green)", position: "relative", overflow: "hidden"
    }}>
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <div style={{ background: 'var(--karma-green)', color: '#000', display: 'inline-block', padding: '4px 12px', borderRadius: '10px', fontSize: '10px', fontWeight: 900, marginBottom: '10px' }}>
          PERFEKT SWAP-MATCH
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 900, margin: 0 }}>Direktbyte i Loopen</h2>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "15px", marginBottom: "30px" }}>
        {/* Mitt objekt */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ width: '100%', aspectRatio: '1', background: '#111', borderRadius: '20px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>📦</div>
          <div style={{ fontSize: '11px', fontWeight: 900 }}>DIN POlARN O. PYRET</div>
          <div style={{ fontSize: '9px', opacity: 0.5 }}>STL 86</div>
        </div>

        <div style={{ fontSize: "24px", color: "var(--karma-green)", fontWeight: 900 }}>⇆</div>

        {/* Deras objekt */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ width: '100%', aspectRatio: '1', background: '#111', borderRadius: '20px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>✨</div>
          <div style={{ fontSize: '11px', fontWeight: 900 }}>ERIK S. POlARN O. PYRET</div>
          <div style={{ fontSize: '9px', opacity: 0.5 }}>STL 92</div>
        </div>
      </div>

      <div style={{ background: '#111', padding: '20px', borderRadius: '20px', textAlign: 'center', marginBottom: '25px' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, opacity: 0.5, marginBottom: '5px' }}>MELLANSKILLNAD ATT BETALA</div>
        <PriceTag price={diff} size="sm" />
        <p style={{ fontSize: '10px', marginTop: '10px', opacity: 0.4 }}>Baserat på AI-värdering av skick och efterfrågan.</p>
      </div>

      <button style={{ width: '100%', background: 'var(--karma-green)', color: '#000', padding: '20px', borderRadius: '18px', fontWeight: 900, fontSize: '15px', border: 'none' }}>
        BEKRÄFTA BYTE
      </button>
    </div>
  );
}
