// components/CheckoutClient.tsx
"use client";

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/* ----------------------------- */
/* INRE KOMPONENT (URL-LOGIK)    */
/* ----------------------------- */
function CheckoutInner() {
  const router = useRouter();
  const params = useSearchParams();

  const basePrice = Number(params.get("price")) || 11450;
  const trust = params.get("trust");
  const demand = params.get("demand");

  const [shieldActive, setShieldActive] = useState(true);

  const shieldFee = shieldActive ? 149 : 0;
  const total = basePrice + shieldFee;

  return (
    <div
      className="page-wrapper"
      style={{ padding: 20, animation: "fadeIn 0.4s ease" }}
    >
      <header style={{ marginBottom: 25 }}>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 900 }}>KASSA</h1>

        {trust && (
          <div style={{ fontSize: 9, fontWeight: 800, opacity: 0.6 }}>
            Köpare med {trust}% tillit • {demand}
          </div>
        )}
      </header>

      {/* ---- EXISTERANDE INNEHÅLL KAN LIGGA HÄR OÄNDRAT ---- */}
      {/* Shield toggle, prisrad, sammanställning etc */}

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
          marginTop: 20,
        }}
      >
        BETALA MED BANKID
      </button>
    </div>
  );
}

/* ----------------------------- */
/* YTTRE EXPORT (SUSPENSE)       */
/* ----------------------------- */
export default function CheckoutClient() {
  return (
    <Suspense
      fallback={
        <div
          className="page-wrapper"
          style={{ padding: 20, fontSize: 10, opacity: 0.6 }}
        >
          LADDAR KASSA…
        </div>
      }
    >
      <CheckoutInner />
    </Suspense>
  );
}