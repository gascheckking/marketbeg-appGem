// components/ClientLayout.tsx
"use client";

import React, { Suspense, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* -------------------------------- */
/* INRE KOMPONENT (URL-STATE OK)    */
/* -------------------------------- */
function ClientLayoutInner({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <span
              style={{
                fontWeight: 900,
                letterSpacing: "2px",
                color: "var(--neon-purple)",
              }}
            >
              KARMA∞
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={() => setSidebarOpen(false)}
              >
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* APP CONTAINER */}
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
            <span>🧭</span>
            <small>Hem</small>
          </Link>

          <Link
            href="/match"
            className={`tab ${pathname === "/match" ? "active" : ""}`}
          >
            <span>🤝</span>
            <small>Match</small>
          </Link>

          <div className="center-fab">
            <Link href="/sell">
              <button>+</button>
            </Link>
          </div>

          <Link
            href="/buy"
            className={`tab ${pathname.includes("/buy") ? "active" : ""}`}
          >
            <span>🛍️</span>
            <small>Utforska</small>
          </Link>

          <Link
            href="/chat"
            className={`tab ${pathname.includes("/chat") ? "active" : ""}`}
          >
            <span>💬</span>
            <small>Chatt</small>
          </Link>
        </nav>
      </div>

      {/* GLOBAL STYLES (oförändrade) */}
      <style jsx global>{`
        .sidebar-drawer {
          position: fixed;
          left: -280px;
          top: 0;
          width: 280px;
          height: 100%;
          background: #05070a;
          z-index: 2000;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-right: 1px solid #111;
          padding-top: env(safe-area-inset-top);
        }

        .sidebar-drawer.open {
          transform: translateX(280px);
        }

        .sidebar-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 40px 20px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          text-decoration: none;
          color: #fff;
          font-size: 11px;
          font-weight: 900;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
        }

        .app-container {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          min-height: 100vh;
        }

        .app-container.pushed {
          transform: translateX(280px);
          pointer-events: none;
        }

        .mobile-nav {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: calc(80px + env(safe-area-inset-bottom));
          background: rgba(2, 4, 10, 0.98);
          backdrop-filter: blur(20px);
          display: flex;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          z-index: 1000;
          padding-bottom: env(safe-area-inset-bottom);
        }

        .tab {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #444;
        }

        .tab.active {
          color: #fff;
        }

        .tab small {
          font-size: 8px;
          font-weight: 900;
          margin-top: 4px;
        }

        .center-fab {
          position: relative;
          width: 70px;
        }

        .center-fab button {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: var(--neon-purple);
          border-radius: 22px;
          border: 5px solid #02040a;
          color: #fff;
          font-size: 30px;
        }
      `}</style>
    </>
  );
}

/* -------------------------------- */
/* YTTRE EXPORT (SUSPENSE)          */
/* -------------------------------- */
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "100vh", background: "#02040a" }} />
      }
    >
      <ClientLayoutInner>{children}</ClientLayoutInner>
    </Suspense>
  );
}