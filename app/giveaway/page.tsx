// // app/giveaway/page.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function GiveawayPage() {
  const router = useRouter();

  const giveaways = [
    { 
      id: "G1", 
      title: "Polarn O. Pyret Skaljacka", 
      desc: "Sliten vid ärmar men fungerar utmärkt som extrajacka.", 
      type: "FRAKT", 
      cost: 49,
      karmaBonus: "+50"
    },
    { 
      id: "G2", 
      title: "IKEA Barnstol", 
      desc: "Hämtas utanför porten på Söder.", 
      type: "HÄMTAS", 
      cost: 0,
      karmaBonus: "+30"
    }
  ];

  return (
    <div style={{ padding: "20px", background: "#000", minHeight: "100vh" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 900, letterSpacing: "-1px" }}>GIVEAWAYS 🎁</h1>
        <p style={{ fontSize: "12px", opacity: 0.5 }}>Saker som förtjänar ett nytt hem. Betala endast frakt eller hämta gratis.</p>
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        {giveaways.map((item) => (
          <div key={item.id} style={{ 
            background: "#111", border: "1px solid #222", padding: "20px", borderRadius: "24px" 
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "10px", fontWeight: 900, color: "var(--karma-green)", marginBottom: "4px" }}>
                  {item.karmaBonus} KARMA TRUST
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 900, margin: "0 0 8px 0" }}>{item.title}</h3>
                <p style={{ fontSize: "12px", opacity: 0.6, lineHeight: "1.4", marginBottom: "15px" }}>{item.desc}</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button 
                onClick={() => router.push(`/checkout?type=giveaway&id=${item.id}`)}
                style={{ 
                  flex: 1, background: item.type === "FRAKT" ? "var(--karma-green)" : "#fff", 
                  color: "#000", border: "none", padding: "12px", borderRadius: "12px", 
                  fontWeight: 900, fontSize: "12px" 
                }}
              >
                {item.type === "FRAKT" ? `BETALA FRAKT (${item.cost}:-)` : "BOKA HÄMTNING"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
