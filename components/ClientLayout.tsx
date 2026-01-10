// // components/ClientLayout.tsx
"use client";
import React, { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import TopTabs from "@/components/TopTabs";
import Link from "next/link";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SplashScreen />
      <div className={`sidebar-drawer ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <span style={{ fontWeight: 900, letterSpacing: "2px" }}>MENY</span>
            <button onClick={() => setSidebarOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: "20px" }}>✕</button>
          </div>
          <nav className="sidebar-nav">
            <Link href="/settings" className="sidebar-link" onClick={() => setSidebarOpen(false)}>⚙️ INSTÄLLNINGAR</Link>
            <Link href="/impact" className="sidebar-link" onClick={() => setSidebarOpen(false)}>📊 DIN IMPACT</Link>
            <Link href="/verify" className="sidebar-link" onClick={() => setSidebarOpen(false)}>🛡️ KARMA SHIELD</Link>
          </nav>
        </div>
      </div>

      <div className={`app-wrapper ${isSidebarOpen ? "pushed" : ""}`}>
        <TopTabs onOpenMenu={() => setSidebarOpen(true)} />
        <main className="app-main">{children}</main>
      </div>

      <style jsx global>{`
        .sidebar-drawer { position: fixed; left: -280px; top: 0; width: 280px; height: 100%; background: #000; z-index: 2000; transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); border-right: 1px solid #111; }
        .sidebar-drawer.open { transform: translateX(280px); }
        .sidebar-inner { padding: 60px 24px; }
        .sidebar-link { display: block; padding: 18px; background: #111; border-radius: 12px; color: #fff; text-decoration: none; font-size: 11px; font-weight: 900; margin-bottom: 10px; }
        .app-wrapper { transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1); min-height: 100vh; background: #000; }
        .app-wrapper.pushed { transform: translateX(280px) scale(0.95); pointer-events: none; border-radius: 20px; overflow: hidden; }
        .app-main { max-width: 600px; margin: 0 auto; padding: 20px 16px; }
      `}</style>
    </>
  );
}
