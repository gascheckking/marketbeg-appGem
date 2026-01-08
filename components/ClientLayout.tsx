"use client";

import React, { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import TopTabs from "@/components/TopTabs";
import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
                color: "var(--accent-purple)",
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
        <TopTabs />

        <main
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            paddingBottom: "40px",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .sidebar-drawer {
          position: fixed;
          left: -280px;
          top: 0;
          width: 280px;
          height: 100%;
          background: #0e0f12;
          z-index: 2000;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-right: 1px solid var(--border-soft);
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
          color: var(--text-main);
          font-size: 11px;
          font-weight: 900;
          background: var(--bg-soft);
          border-radius: 12px;
          border: 1px solid var(--border-soft);
        }

        .app-container {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          min-height: 100vh;
        }

        .app-container.pushed {
          transform: translateX(280px);
          pointer-events: none;
        }
      `}</style>
    </>
  );
}