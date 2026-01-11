// // app/checkout/page.tsx
"use client"; // Lägg till denna rad längst upp

import { Suspense } from "react";
import CheckoutClient from "@/components/CheckoutClient";

export default function CheckoutPage() {
  return (
    <div className="page-wrapper">
      <Suspense fallback={
        <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
          <div className="loader" />
          <div style={{ fontSize: '11px', fontWeight: 900, opacity: 0.3, letterSpacing: '2px' }}>SÄKRAR ANSLUTNING...</div>
        </div>
      }>
        <CheckoutClient />
      </Suspense>

      <style jsx>{`
        .loader { 
          width: 40px; 
          height: 40px; 
          border: 3px solid #111; 
          border-top-color: #1DB954; 
          border-radius: 50%; 
          animation: spin 1s linear infinite; 
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
