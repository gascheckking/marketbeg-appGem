// // app/vault/page.tsx
"use client";
import React from "react";
import PriceTag from "@/components/PriceTag";
import KarmaTrustCard from "@/components/KarmaTrustCard";

export default function VaultPage() {
  return (
    <div style={{ padding: '20px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-1.5px' }}>Valvet</h1>
      </header>

      {/* SALDO-SEKTION */}
      <div style={{ background: 'linear-gradient(135deg, #222 0%, #000 100%)', padding: '24px', borderRadius: '12px', marginBottom: '25px', border: '1px solid var(--border)' }}>
        <div style={{ fontSize: '11px', fontWeight: 900, opacity: 0.5, letterSpacing: '1px' }}>DITT KARMA SALDO</div>
        <div style={{ fontSize: '42px', fontWeight: 900, margin: '10px 0' }}>14 250:-</div>
        <button style={{ width: '100%', background: '#fff', color: '#000', border: 'none', borderRadius: '50px', padding: '12px', fontWeight: 900, fontSize: '13px', marginTop: '10px' }}>
          TA UT PENGAR
        </button>
      </div>

      <KarmaTrustCard score={98} level="Master" />

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '15px' }}>Aktiva affärer</h2>
        <div style={{ background: 'var(--bg-card)', borderRadius: '8px', padding: '15px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 900 }}>iPhone 15 Pro</div>
              <div style={{ fontSize: '11px', color: 'var(--karma-green)', fontWeight: 900 }}>VÄNTAR PÅ LEVERANS</div>
            </div>
            <PriceTag price={9800} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
