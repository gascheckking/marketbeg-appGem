// // components/TopTabs.tsx
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TopTabs({ onOpenMenu }: { onOpenMenu: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const [pulseIndex, setPulseIndex] = useState(0);
  const pulses = ["IPHONE 15 PRO: +12% 🔥", "SNEAKERS SÄLJER SNABBT ⚡", "420 NYA KÖPARE"];

  useEffect(() => {
    const timer = setInterval(() => setPulseIndex(p => (p + 1) % pulses.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { name: "Allt", path: "/" },
    { name: "Match", path: "/match" },
    { name: "Sälj", path: "/sell" },
    { name: "Valv", path: "/vault" }
  ];

  return (
    <div style={{ 
      position: "sticky", top: 0, zIndex: 1000, 
      background: "rgba(0,0,0,0.8)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid #111"
    }}>
      {/* ÖVRE RADEN (Den gamla Headern + Navbaren kombinerad) */}
      <div style={{ 
        display: "flex", alignItems: "center", justifyContent: "space-between", 
        padding: "12px 20px" 
      }}>
        <button onClick={onOpenMenu} style={{ background: "none", border: "none", fontSize: "22px", color: "#fff", padding: 0 }}>☰</button>
        
        <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => router.push("/")}>
          <div style={{ fontWeight: 900, fontSize: "15px", letterSpacing: "3px" }}>KARMA<span style={{color: '#1DB954'}}>∞</span></div>
          <div style={{ fontSize: '7px', color: '#1DB954', fontWeight: 800, opacity: 0.6 }}>{pulses[pulseIndex]}</div>
        </div>

        <button 
          onClick={() => router.push('/wallet')}
          style={{ 
            background: '#1DB954', border: 'none', padding: '6px 12px', borderRadius: '20px', 
            fontSize: '10px', fontWeight: 900, color: '#000', display: 'flex', alignItems: 'center', gap: '4px'
          }}
        >
          14 250 💰
        </button>
      </div>

      {/* UNDRE RADEN (Slimmade Tabs) */}
      <div style={{ 
        display: "flex", gap: "20px", padding: "5px 20px 10px", 
        overflowX: "auto", scrollbarWidth: "none" 
      }}>
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => router.push(tab.path)}
              style={{
                padding: "8px 0", background: "none", border: "none",
                color: isActive ? "#fff" : "#444", fontSize: "11px", fontWeight: 900,
                borderBottom: isActive ? "2px solid #1DB954" : "2px solid transparent",
                transition: "0.2s", whiteSpace: "nowrap"
              }}
            >
              {tab.name.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
