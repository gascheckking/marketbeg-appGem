"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

  return (
    <div style={{ position: "sticky", top: 56, zIndex: 50 }}>
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "8px 12px",
          background: "rgba(14,15,18,0.85)",
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
                router.push(tab.path);
                setOpenTab(openTab === tab.key ? null : tab.key);
              }}
              style={{
                flex: 1,
                height: 36,
                borderRadius: 12,
                border: "1px solid var(--border-soft)",
                background: active
                  ? "linear-gradient(135deg,#1b1e24,#15171c)"
                  : "transparent",
                color: active ? "var(--accent-mint)" : "var(--text-muted)",
                fontWeight: 800,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <span style={{ opacity: 0.9 }}>{tab.icon}</span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* RULLGARDIN */}
      {openTab && (
        <div
          style={{
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border-soft)",
            padding: "10px 14px",
            display: "flex",
            gap: 8,
            animation: "fadeIn 0.15s ease",
          }}
        >
          {tabs
            .find((t) => t.key === openTab)
            ?.actions.map((a) => (
              <div
                key={a}
                style={{
                  padding: "8px 12px",
                  borderRadius: 10,
                  background: "var(--bg-soft)",
                  fontSize: 10,
                  fontWeight: 800,
                  color: "var(--text-main)",
                  border: "1px solid var(--border-soft)",
                }}
              >
                {a}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}