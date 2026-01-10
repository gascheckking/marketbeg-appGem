// // components/ClientLayout.tsx
"use client";

import React, { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import TopTabs from "@/components/TopTabs";
import Footer from "@/components/Footer";
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

      {/* SIDEBAR / DRAWER - HELT SVART MODERNT TÄNK */}
      <div className={`sidebar-drawer ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
          <div className="sidebar-header">
            <span className="logo-text">KARMA<span style={{color: '#1DB954'}}>∞</span></span>
            <button className="close-trigger" onClick={() => setSidebarOpen(false)}>✕</button>
          </div>

          <nav className="sidebar-nav">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="sidebar-footer">
            v2.0.6 (2026)
          </div>
        </div>
      </div>

      {/* APP CONTAINER - MED "PUSH" EFFEKT */}
      <div className={`app-wrapper ${isSidebarOpen ? "pushed" : ""}`}>
        {/* Vi skippar Navbar helt och kör TopTabs som kombinerad enhet */}
        <TopTabs onOpenMenu={() => setSidebarOpen(true)} />

        <main className="app-main">
          {children}
        </main>

        <Footer />
      </div>

      {/* GLOBAL REFRESH STYLES */}
      <style jsx global>{`
        :root {
          --karma-green: #1DB954;
          --bg-deep: #000000;
          --bg-card: #121212;
        }

        .sidebar-drawer {
          position: fixed;
          left: -280px;
          top: 0;
          width: 280px;
          height: 100%;
          background: var(--bg-deep);
          z-index: 2000;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-right: 1px solid #111;
        }

        .sidebar-drawer.open {
          transform: translateX(280px);
        }

        .sidebar-inner {
          padding: 60px 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .logo-text {
          font-weight: 900;
          letter-spacing: 3px;
          font-size: 18px;
          color: #fff;
        }

        .close-trigger {
          background: none;
          border: none;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          opacity: 0.5;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px;
          border-radius: 16px;
          background: #0a0a0a;
          color: #fff;
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
          border: 1px solid #111;
          transition: 0.2s;
        }

        .sidebar-link:active {
          background: #111;
          transform: scale(0.98);
        }

        .sidebar-icon {
          font-size: 16px;
        }

        .sidebar-footer {
          margin-top: auto;
          font-size: 9px;
          font-weight: 900;
          opacity: 0.2;
          letter-spacing: 1px;
        }

        .app-wrapper {
          min-height: 100vh;
          background: var(--bg-deep);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.4s;
        }

        .app-wrapper.pushed {
          transform: translateX(280px) scale(0.94);
          pointer-events: none;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: -20px 0 60px rgba(0,0,0,0.5);
        }

        .app-main {
          max-width: 600px;
          margin: 0 auto;
          padding: 10px 16px 120px;
        }

        /* Slim scrollbar för tabs */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
