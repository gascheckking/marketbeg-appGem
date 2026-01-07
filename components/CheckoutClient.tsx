// components/CheckoutClient.tsx
"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutClient() {
  const router = useRouter();
  const params = useSearchParams();

  const basePrice = Number(params.get("price")) || 11450;
  const trust = params.get("trust");
  const demand = params.get("demand");

  const [shieldActive, setShieldActive] = useState(true);

  const shieldFee = shieldActive ? 149 : 0;
  const total = basePrice + shieldFee;

  return (
    <div className="page-wrapper" style={{ padding: 20, animation: "fadeIn 0.4s ease" }}>
      <header style={{ marginBottom: 25 }}>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 900 }}>KASSA</h1>
        {trust && (
          <div style={{ fontSize: 9, fontWeight: 800, opacity: 0.6 }}>
            Köpare med {trust}% tillit • {demand}
          </div>
        )}
      </header>

      {/* … resten exakt som du redan har … */}

      <button
        onClick={() => router.push("/checkout/success")}
        style={{
          width: "100%",
          padding: 18,
          borderRadius: 18,
          background: "#fff",
          color: "#000",
          fontWeight: 900,
          border: "none",
        }}
      >
        BETALA MED BANKID
      </button>
    </div>
  );
}