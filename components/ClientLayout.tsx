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
          <Link href="/feed" className={`tab ${pathname === "/feed" ? "active" : ""}`}>
            <div className="icon">🏠</div>
            <small>HEM</small>
          </Link>

          <Link href="/match" className={`tab ${pathname === "/match" ? "active" : ""}`}>
            <div className="icon">🚀</div>
            <small>MATCH</small>
          </Link>

          <div className="center-fab">
            <Link href="/sell/instant">
              <button className="fab-btn">+</button>
            </Link>
          </div>

          <Link href="/profile/active-sales" className={`tab ${pathname.includes("/active-sales") ? "active" : ""}`}>
            <div className="icon">💎</div>
            <small>VAULT</small>
          </Link>

          <Link href="/chat" className={`tab ${pathname.includes("/chat") ? "active" : ""}`}>
            <div className="icon">💬</div>
            <small>CHATT</small>
          </Link>
        </nav>
      </div>

      {/* Overlay för att stänga sidebar vid klick utanför */}
      {isSidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 1500, background: 'transparent' }}
        />
      )}

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
        .close-btn { background: none; border: none; color: #fff; font-size: 24px; cursor: pointer; }
        
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
          user-select: none;
        }
        .sidebar-link:active { background: #121212; }

        .app-container { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); background: #000; min-height: 100vh; position: relative; z-index: 100; }
        .app-container.pushed { transform: translateX(260px) scale(0.92); pointer-events: none; border-radius: 40px; overflow: hidden; box-shadow: -20px 0 60px rgba(0,0,0,0.5); }

        .mobile-nav {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          max-width: 400px;
          height: 70px;
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          border-radius: 35px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          z-index: 1000;
          padding: 0 10px;
        }

        .tab {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #444;
          transition: 0.3s;
        }
        .tab.active { color: #1DB954; }
        .tab .icon { font-size: 20px; margin-bottom: 2px; }
        .tab small { font-size: 8px; font-weight: 900; letter-spacing: 0.5px; }

        .center-fab { position: relative; width: 60px; }
        .fab-btn {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: #fff;
          border-radius: 50%;
          border: none;
          color: #000;
          font-size: 32px;
          font-weight: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
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
