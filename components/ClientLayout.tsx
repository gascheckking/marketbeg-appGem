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
            <span className="logo">KARMA∞</span>
            <button onClick={() => setSidebarOpen(false)}>✕</button>
          </div>

          <nav className="sidebar-nav">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={() => setSidebarOpen(false)}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* APP */}
      <div className={`app-container ${isSidebarOpen ? "pushed" : ""}`}>
        <Navbar onOpenMenu={() => setSidebarOpen(true)} />
        <TopTabs />

        <main className="app-main">
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
          background: var(--bg-card);
          z-index: 2000;
          transition: transform 0.35s ease;
          border-right: 1px solid var(--border-soft);
        }

        .sidebar-drawer.open {
          transform: translateX(280px);
        }

        .sidebar-inner {
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .logo {
          font-weight: 900;
          letter-spacing: 2px;
          color: var(--accent-purple);
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-link {
          display: flex;
          gap: 12px;
          padding: 14px;
          border-radius: 12px;
          background: var(--bg-soft);
          border: 1px solid var(--border-soft);
          color: var(--text-main);
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
        }

        .app-container {
          min-height: 100vh;
          transition: transform 0.35s ease;
        }

        .app-container.pushed {
          transform: translateX(280px);
          pointer-events: none;
        }

        .app-main {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px 16px 40px;
        }
      `}</style>
    </>
  );
}