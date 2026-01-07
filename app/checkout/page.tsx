// app/checkout/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const params = useSearchParams();

  const basePrice = Number(params.get("price")) || 11450;
  const trust = params.get("trust");
  const demand = params.get("demand");

  const [shieldActive, setShieldActive] = useState(true);

  const shieldFee = shieldActive ? 149 : 0;
  const total = basePrice + shieldFee;

  return (
    <div className="page-wrapper" style={{ padding: "20px" }}>
      <header style={{ marginBottom: "25px" }}>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 900 }}>KASSA</h1>
        {trust && (
          <div style={{ fontSize: "9px", opacity: 0.6, fontWeight: 800 }}>
            Köpare med {trust}% tillit • {demand}
          </div>
        )}
      </header>

      <div style={{ padding: "25px", borderRadius: "24px", background: "rgba(255,255,255,0.02)" }}>
        <div className="row">
          <span>PRIS</span>
          <span>{basePrice.toLocaleString("sv-SE")} KR</span>
        </div>
        <div className="row">
          <span>SKYDD</span>
          <span>{shieldFee} KR</span>
        </div>
        <div className="total-row">
          <span>TOTALT</span>
          <span>{total.toLocaleString("sv-SE")} KR</span>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => router.push("/checkout/success")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "18px",
            background: "#fff",
            color: "#000",
            fontWeight: 900,
            border: "none",
          }}
        >
          BETALA MED BANKID
        </button>
      </div>

      <style jsx>{`
        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 11px;
          font-weight: 800;
          opacity: 0.8;
        }
        .total-row {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #222;
          padding-top: 15px;
          margin-top: 15px;
          font-weight: 900;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}