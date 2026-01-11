// // app/checkout/page.tsx
"use client";

import { Suspense } from "react";
import CheckoutClient from "@/components/CheckoutClient";

export default function CheckoutPage() {
  return (
    <div className="page-wrapper">
      <Suspense fallback={
        <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
          <div className="checkout-loader" />
          <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.3, letterSpacing: '2px' }}>SÄKRAR ANSLUTNING...</div>
        </div>
      }>
        <CheckoutClient />
      </Suspense>

      <style jsx>{`
        .checkout-loader { 
          width: 30px; 
          height: 30px; 
          border: 2px solid #222; 
          border-top-color: var(--karma-green); 
          border-radius: 50%; 
          animation: spin 0.8s linear infinite; 
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
