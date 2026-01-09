// // components/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";

type Props = {
  onOpenMenu: () => void;
};

export default function Navbar({ onOpenMenu }: Props) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <button
        onClick={onOpenMenu}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "22px",
          cursor: "pointer",
          padding: 0
        }}
      >
        ☰
      </button>

      <Link href="/" style={{ textDecoration: "none", textAlign: "center" }}>
        <div style={{ fontWeight: 900, fontSize: "16px", color: "#fff", letterSpacing: "3px" }}>
          KARMA∞
        </div>
      </Link>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Link href="/my-karma" style={{ 
          width: "32px", height: "32px", borderRadius: "50%", background: "#121212", 
          display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px"
        }}>
          🛡️
        </Link>
        <Link href="/wallet" style={{ 
          width: "32px", height: "32px", borderRadius: "50%", background: "#1DB954", 
          display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px"
        }}>
          💰
        </Link>
      </div>
    </nav>
  );
}
