// // components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function Navbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 20px", background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)",
        position: "sticky", top: 0, zIndex: 1000,
    }}>
      <button onClick={onOpenMenu} style={{ background: "none", border: "none", color: "#fff", fontSize: "24px", cursor: "pointer" }}>
        ☰
      </button>

      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ fontWeight: 900, fontSize: "16px", color: "#fff", letterSpacing: "3px" }}>
          KARMA<span style={{color: 'var(--karma-green)'}}>∞</span>
        </div>
      </Link>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link href="/profile" style={{ 
          width: "36px", height: "36px", borderRadius: "12px", background: "#121212", 
          display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none"
        }}>🛡️</Link>
        <Link href="/rewards" style={{ 
          width: "36px", height: "36px", borderRadius: "12px", background: 'var(--karma-green)', 
          display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none"
        }}>💰</Link>
      </div>
    </nav>
  );
}
