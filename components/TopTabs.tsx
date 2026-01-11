// // components/TopTabs.tsx
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TopTabs({ onOpenMenu }: { onOpenMenu: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const [pulseIndex, setPulseIndex] = useState(0);
  const pulses = ["IPHONE 15 PRO: +12% 🔥", "SNEAKERS SÄLJER SNABBT ⚡", "842 AKTIVA LOOPS"];

  useEffect(() => {
    const timer = setInterval(() => setPulseIndex(p => (p + 1) % pulses.length), 4000);
    return () => clearInterval(timer);
  }, [pulses.length]);

  const tabs = [
    { name: "Allt", path: "/feed" },
    { name: "Match", path: "/match" },
    { name: "Sälj", path: "/sell/instant" },
    { name: "Valv", path: "/profile/active-sales" }
  ];

  return (
    <div style={{ 
      position: "sticky", top: 0, zIndex: 1000, 
      background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border)"
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px" }}>
        <button onClick={onOpenMenu} style={{ background: "none", border: "none", fontSize: "24px", color: "#fff", cursor: "pointer" }}>☰</button>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 900, fontSize: "15px", letterSpacing: "3px" }}>KARMA<span style={{color: 'var(--karma-green)'}}>∞</span></div>
          <div style={{ fontSize: '8px', color: 'var(--karma-green)', fontWeight: 900 }}>{pulses[pulseIndex]}</div>
        </div>

        <button onClick={() => router.push('/rewards')} style={{ background: 'var(--karma-green)', border: 'none', padding: '8px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 900, color: '#000' }}>
          14 250:-
        </button>
      </div>

      <div style={{ display: "flex", gap: "25px", padding: "0 20px 10px", overflowX: "auto" }} className="no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            onClick={() => router.push(tab.path)}
            style={{
              padding: "10px 0", background: "none", border: "none",
              color: pathname === tab.path ? "#fff" : "#555", fontSize: "11px", fontWeight: 900,
              borderBottom: pathname === tab.path ? "2px solid var(--karma-green)" : "2px solid transparent",
              transition: "0.2s", whiteSpace: "nowrap"
            }}
          >
            {tab.name.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
