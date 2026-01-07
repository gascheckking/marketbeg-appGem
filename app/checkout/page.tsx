// app/checkout/page.tsx
"use client";

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/* =========================
   CLIENT CHECKOUT CONTENT
   ========================= */
function CheckoutClient() {
  const router = useRouter();
  const params = useSearchParams();

  const basePrice = Number(params.get("price")) || 11450;
  const trust = params.get("trust");
  const demand = params.get("demand");

  const [shieldActive, setShieldActive] = useState(true);

  const shieldFee = shieldActive ? 149 : 0;
  const total = basePrice + shieldFee;

  return (
    <div className="page-wrapper" style={{ padding: "20px", animation: "fadeIn 0.4s ease" }}>
      <header style={{ marginBottom: "25px" }}>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 900, margin: 0 }}>KASSA</h1>

        {trust && (
          <div style={{ marginTop: "6px", fontSize: "9px", fontWeight: 800, opacity: 0.6 }}>
            Köpare med {trust}% tillit • {demand}
          </div>
        )}
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* KARMA SHIELD */}
        <div
          style={{
            padding: "20px",
            borderRadius: "24px",
            background: shieldActive
              ? "rgba(157, 78, 221, 0.05)"
              : "rgba(255,255,255,0.02)",
            border: shieldActive
              ? "1px solid var(--neon-purple)"
              : "1px solid #222",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: "13px", fontWeight: 900 }}>
                🛡️ KARMA SHIELD
              </h3>
              <p
                style={{
                  fontSize: "10px",
                  marginTop: "6px",
                  opacity: 0.5,
                  lineHeight: "1.4",
                }}
              >
                Pengarna släpps till säljaren när varan är godkänd.
              </p>
            </div>

            <div
              onClick={() => setShieldActive(!shieldActive)}
              style={{
                width: "44px",
                height: "24px",
                background: shieldActive ? "var(--neon-purple)" : "#333",
                borderRadius: "12px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  background: "#fff",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "3px",
                  left: shieldActive ? "23px" : "3px",
                  transition: "0.3s",
                }}
              />
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div
          style={{
            padding: "25px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid #111",
          }}
        >
          <div className="row">
            <span>PRIS</span>
            <span>{basePrice.toLocaleString("sv-SE")} KR</span>
          </div>
          <div className="row" style={{ color: "var(--neon-purple)" }}>
            <span>SKYDD</span>
            <span>{shieldFee} KR</span>
          </div>
          <div className="total-row">
            <span>TOTALT</span>
            <span style={{ color: "var(--neon-mint)" }}>
              {total.toLocaleString("sv-SE")} KR
            </span>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: "9px", opacity: 0.3, fontWeight: 800 }}>
          TRANSAKTIONEN KRYPTERAS VIA BANKID
        </p>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "calc(20px + env(safe-area-inset-bottom))",
          left: "20px",
          right: "20px",
        }}
      >
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
            fontSize: "14px",
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/* =========================
   PAGE EXPORT (WITH SUSPENSE)
   ========================= */
export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Laddar kassa…</div>}>
      <CheckoutClient />
    </Suspense>
  );
}