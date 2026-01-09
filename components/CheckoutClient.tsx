// // components/ClientLayout.tsx
"use client";

import React, { Suspense, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ClientLayoutInner({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const sidebarItems = [
    { icon: "⚙️", label: "INSTÄLLNINGAR", href: "/settings" },
    { icon: "📈", label: "DIN IMPACT", href: "/impact" },
    { icon: "🛡️", label: "KARMA SHIELD", href: "/verify" },
    { icon: "🎧", label: "SUPPORT", href: "/support" },
  ];

  return (
    <>
      <SplashScreen />

      {/* SIDEBAR - SPOTIFY DARK STYLE */}
      <div className={`sidebar-drawer ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <span style={{ fontWeight: 900, letterSpacing: "3px", color: "#1DB954" }}>
              KARMA∞
            </span>
            <button onClick={() => setSidebarOpen(false)} className="close-btn">✕</button>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "40px" }}>
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={() => setSidebarOpen(false)}
              >
                <span style={{ opacity: 0.6 }}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* APP CONTAINER */}
      <div className={`app-container ${isSidebarOpen ? "pushed" : ""}`}>
        <Navbar onOpenMenu={() => setSidebarOpen(true)} />

        <main style={{
          maxWidth: "600px",
          margin: "0 auto",
          paddingBottom: "140px",
          minHeight: "100vh",
        }}>
          {children}
        </main>

        {/* BOTTOM NAV - THE PILL LOOK */}
        <nav className="mobile-nav">
          <Link href="/" className={`tab ${pathname === "/" ? "active" : ""}`}>
            <div className="icon">🏠</div>
            <small>HEM</small>
          </Link>

          <Link href="/match" className={`tab ${pathname === "/match" ? "active" : ""}`}>
            <div className="icon">🚀</div>
            <small>MATCH</small>
          </Link>

          <div className="center-fab">
            <Link href="/sell">
              <button className="fab-btn">+</button>
            </Link>
          </div>

          <Link href="/vault" className={`tab ${pathname.includes("/vault") ? "active" : ""}`}>
            <div className="icon">💎</div>
            <small>VAULT</small>
          </Link>

          <Link href="/chat" className={`tab ${pathname.includes("/chat") ? "active" : ""}`}>
            <div className="icon">💬</div>
            <small>CHATT</small>
          </Link>
        </nav>
      </div>

      <style jsx global>{`
        .sidebar-drawer {
          position: fixed;
          left: -280px;
          top: 0;
          width: 280px;
          height: 100%;
          background: #000;
          z-index: 2000;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-right: 1px solid rgba(255,255,255,0.05);
        }
        .sidebar-drawer.open { transform: translateX(280px); }
        .sidebar-inner { padding: 60px 24px; }
        .sidebar-header { display: flex; justify-content: space-between; align-items: center; }
        .close-btn { background: none; border: none; color: #fff; fontSize: 24px; cursor: pointer; }
        
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          text-decoration: none;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          border-radius: 12px;
          transition: 0.2s;
        }
        .sidebar-link:hover { background: #121212; }

        .app-container { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); background: #000; }
        .app-container.pushed { transform: translateX(280px) scale(0.95); pointer-events: none; border-radius: 30px; overflow: hidden; }

        .mobile-nav {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 400px;
          height: 70px;
          background: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(25px);
          display: flex;
          border-radius: 35px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 1000;
          padding: 0 10px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }

        .tab {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #666;
          transition: 0.3s;
        }
        .tab.active { color: #1DB954; }
        .tab .icon { font-size: 20px; margin-bottom: 2px; }
        .tab small { font-size: 8px; font-weight: 900; letter-spacing: 0.5px; }

        .center-fab { position: relative; width: 60px; }
        .fab-btn {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 56px;
          background: #fff;
          border-radius: 50%;
          border: none;
          color: #000;
          font-size: 28px;
          font-weight: 300;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#000" }} />}>
      <ClientLayoutInner>{children}</ClientLayoutInner>
    </Suspense>
  );
}
