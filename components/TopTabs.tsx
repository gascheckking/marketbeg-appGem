// // components/TopTabs.tsx
"use client";
import { useRouter, usePathname } from "next/navigation";

export default function TopTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: "Allt", path: "/feed" },
    { name: "Match", path: "/match" },
    { name: "Sälj", path: "/sell" },
    { name: "Valv", path: "/vault" },
    { name: "Karma", path: "/my-karma" }
  ];

  return (
    <div style={{ 
      display: "flex", 
      gap: "8px", 
      padding: "10px 20px", 
      overflowX: "auto", 
      background: "#000",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => router.push(tab.path)}
          style={{
            padding: "8px 18px",
            borderRadius: "20px",
            border: "none",
            background: pathname === tab.path ? "#fff" : "#282828",
            color: pathname === tab.path ? "#000" : "#fff",
            fontSize: "13px",
            fontWeight: 700,
            whiteSpace: "nowrap",
            transition: "0.2s"
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
