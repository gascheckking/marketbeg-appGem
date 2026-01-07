// components/ClientLayout.tsx
"use client";

import React, { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const sidebarItems = [
    { icon: "⚙️", label: "INSTÄLLNINGAR", href: "/settings" },
    { icon: "📊", label: "DIN IMPACT", href: "/impact" },
    { icon: "🛡️", label: "KARMA SHIELD INFO", href: "/verify" },
    { icon: "💬", label: "SUPPORT", href: "/support" },
  ];

  return (
    <>
      <SplashScreen />

      {/* SIDEBAR */}
      <div className={`sidebar-drawer ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <span style={{ fontWeight: 900, letterSpacing: "2px", color: "var(--neon-purple)" }}>
              KARMA∞
            </span>
            <button onClick={() => setSidebarOpen(false)}>✕</button>
          </div>

          <nav>
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={() => setSidebarOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* APP */}
      <div className={`app-container ${isSidebarOpen ? "pushed" : ""}`}>
        <Navbar onOpenMenu={() => setSidebarOpen(true)} />

        <main
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            paddingBottom: "calc(120px + env(safe-area-inset-bottom))",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>

        {/* BOTTOM NAV */}
        <nav className="mobile-nav">
          <Link href="/" className={`tab ${pathname === "/" ? "active" : ""}`}>
            🧭<small>Hem</small>
          </Link>
          <Link href="/match" className={`tab ${pathname === "/match" ? "active" : ""}`}>
            🤝<small>Match</small>
          </Link>

          <div className="center-fab">
            <Link href="/sell">
              <button>+</button>
            </Link>
          </div>

          <Link href="/buy" className={`tab ${pathname.includes("/buy") ? "active" : ""}`}>
            🛍️<small>Utforska</small>
          </Link>
          <Link href="/chat" className={`tab ${pathname.includes("/chat") ? "active" : ""}`}>
            💬<small>Chatt</small>
          </Link>
        </nav>
      </div>
    </>
  );
}