// // app/sell/burst/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SellBurstPage() {
  const router = useRouter();
  const [price, setPrice] = useState(150);

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "20px" }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", paddingTop: "20px" }}>
        <button onClick={() => router.back()} style={{ background: "none", border: "none", color: "#fff", fontSize: "24px" }}>✕</button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "10px", fontWeight: 900, color: "var(--karma-green)", letterSpacing: "1px" }}>AI SCAN AKTIV</div>
          <div style={{ fontSize: "14px", fontWeight: 900 }}>NY LISTNING</div>
        </div>
        <div style={{ width: "24px" }} />
      </div>

      {/* CAMERA PREVIEW PLACEHOLDER */}
      <div style={{ 
        width: "100%", aspectRatio: "3/4", background: "#111", borderRadius: "24px", 
        display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #222",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>📸</div>
          <div style={{ fontSize: "12px", opacity: 0.5, marginTop: "10px" }}>Klicka för att fota</div>
        </div>
        {/* AI TAGS */}
        <div style={{ position: "absolute", bottom: "20px", left: "20px", display: "flex", gap: "8px" }}>
          {["T-SHIRT", "BOMULL", "BRA SKICK"].map(tag => (
            <span key={tag} style={{ background: "rgba(0,0,0,0.7)", padding: "4px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: 900 }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* PRIS-INSTÄLLNING (Vinted-style men Spotify-design) */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <div style={{ fontSize: "12px", fontWeight: 900, opacity: 0.5, marginBottom: "10px" }}>DITT PRIS (SEK)</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          <button onClick={() => setPrice(p => Math.max(0, p - 10))} style={{ fontSize: "30px", background: "none", border: "none", color: "#fff" }}>−</button>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ background: "none", border: "none", color: "var(--karma-green)", fontSize: "48px", fontWeight: 900, width: "140px", textAlign: "center" }}
          />
          <button onClick={() => setPrice(p => p + 10)} style={{ fontSize: "30px", background: "none", border: "none", color: "#fff" }}>+</button>
        </div>
        <p style={{ fontSize: "11px", opacity: 0.4, marginTop: "10px" }}>AI föreslog 135:- baserat på liknande plagg</p>
      </div>

      {/* ACTION BUTTON */}
      <button 
        onClick={() => router.push('/match')}
        style={{ 
          position: "fixed", bottom: "40px", left: "20px", right: "20px",
          background: "var(--karma-green)", color: "#000", padding: "20px", 
          borderRadius: "50px", fontWeight: 900, fontSize: "16px", border: "none"
        }}
      >
        SLÄPP IN I LOOPEN
      </button>
    </div>
  );
}
