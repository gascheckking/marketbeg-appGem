// app/checkout/page.tsx
import { Suspense } from "react";
import CheckoutClient from "@/components/CheckoutClient";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: "center" }}>Laddar kassa…</div>}>
      <CheckoutClient />
    </Suspense>
  );
}