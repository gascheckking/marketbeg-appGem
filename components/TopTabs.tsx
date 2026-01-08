"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    key: "home",
    label: "Hem",
    icon: "⦿",
    path: "/",
    actions: ["Snabbsälj", "AI-scan", "Historik"],
  },
  {
    key: "match",
    label: "Match",
    icon: "⟡",
    path: "/match",
    actions: ["Aktiva matcher", "Efterfrågan", "Wishlist"],
  },
  {
    key: "sell",
    label: "Sälj",
    icon: "＋",
    path: "/sell",
    actions: ["Burst mode", "Manuell", "Drafts"],
  },
  {
    key: "vault",
    label: "Valv",
    icon: "⬡",
    path: "/vault",
    actions: ["Uttag", "Likviditet", "Karma lån"],
  },
];

export default function TopTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const [openTab, setOpenTab] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Stäng dropdown vid route change
  useEffect(() => {
    setOpenTab(null);
  }, [pathname]);

  // Klick utanför = stäng
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenTab(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "sticky", top: 56, zIndex: 50 }}>
      {/* TOP TABS */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "10px 12px",
          background: "rgba(14,15,18,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-soft)",
        }}
      >
        {tabs.map((tab) => {
          const active = pathname.startsWith(tab.path);

          return (
            <button
              key={tab.key}
              onClick={() => {
                if (active) {
                  setOpenTab(openTab === tab.key ? null : tab.key);
                } else {
                  router.push(tab.path);
                  setOpenTab(null);
                }
              }}
              style={{
                flex: 1,
                height: 38,
                borderRadius: 14,
                border: "1px solid var(--border-soft)",
                background: active
                  ? "linear-gradient(135deg,#1b1e24,#15171c)"
                  : "transparent",
                color: active
                  ? "var(--accent-mint)"
                  : "var(--text-muted)",
                fontWeight: 900,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                transition: "all 0.15s ease",
              }}
            >
              <span style={{ opacity: 0.9 }}>{tab.icon}</span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* DROPDOWN ACTIONS */}
      {openTab && (
        <div
          style={{
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border-soft)",
            padding: "10px 12px 12px",
            display: "flex",
            gap: 8,
            animation: "fadeIn 0.12s ease",
          }}
        >
          {tabs
            .find((t) => t.key === openTab)
            ?.actions.map((action) => (
              <button
                key={action}
                style={{
                  padding: "8px 14px",
                  borderRadius: 12,
                  background: "var(--bg-soft)",
                  fontSize: 10,
                  fontWeight: 900,
                  color: "var(--text-main)",
                  border: "1px solid var(--border-soft)",
                  whiteSpace: "nowrap",
                }}
              >
                {action}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}