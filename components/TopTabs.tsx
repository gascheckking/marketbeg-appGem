// // components/TopTabs.tsx
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TopTabs({ onOpenMenu }: { onOpenMenu: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const [pulseIndex, setPulseIndex] = useState(0);
  
  // Uppdaterade pulser för att reflektera Swaps och Giveaway
  const pulses = [
    "BYTEN (STL 86→92): +22% 🔥", 
    "SNEAKERS SÄLJER SNABBT ⚡", 
    "12 ST GE-OBJEKT NÄRA DIG 🎁",
    "842 AKTIVA LOOPS"
  ];

  useEffect(() => {
    const timer = setInterval(() => setPulseIndex(p => (p + 1) % pulses.length), 4000);
    return () => clearInterval(timer);
  }, [pulses.length]);

  // Uppdaterad lista med GE BORT fliken
  const tabs = [
    { name: "Allt", path: "/feed" },
    { name: "Match", path: "/match" },
    { name: "Sälj", path: "/sell/instant" },
    { name: "Ge bort", path: "/giveaway" },
    { name: "Valv", path: "/profile/active-sales" }
  ];

  return (
    <div style={{ 
      position: "sticky", top: 0, zIndex: 1000, 
      background: "rgba(0,0,0,0.85)", backdropFilter: "blur(25px)",
      borderBottom: "1px solid var(--border)"
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px" }}>
        <button onClick={onOpenMenu} style={{ background: "none", border: "none", fontSize: "24px", color: "#fff", cursor: "pointer" }}>☰</button>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 900, fontSize: "15px", letterSpacing: "3px" }}>KARMA<span style={{color: 'var(--karma-green)'}}>∞</span></div>
          <div style={{ fontSize: '8px', color: 'var(--karma-green)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>{pulses[pulseIndex]}</div>
        </div>

        <button onClick={() => router.push('/rewards')} style={{ background: 'var(--karma-green)', border: 'none', padding: '8px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: 900, color: '#000', boxShadow: '0 0 15px rgba(29, 185, 84, 0.3)' }}>
          14 250:-
        </button>
      </div>

      <div style={{ 
        display: "flex", 
        gap: "25px", 
        padding: "0 20px 10px", 
        overflowX: "auto",
        scrollbarWidth: 'none'
      }} className="no-scrollbar">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => router.push(tab.path)}
              style={{
                padding: "10px 0", 
                background: "none", 
                border: "none",
                color: isActive ? "#fff" : "#666", 
                fontSize: "11px", 
                fontWeight: 900,
                borderBottom: isActive ? "2px solid var(--karma-green)" : "2px solid transparent",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
                whiteSpace: "nowrap",
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.7
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
