// app/chat/[id]/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ClientLayout from "@/components/ClientLayout";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();

  return (
    <ClientLayout>
      <div
        className="page-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 120px)",
          padding: "15px",
        }}
      >
        <div
          style={{
            padding: "15px",
            display: "flex",
            gap: "12px",
            background: "rgba(255,255,255,0.02)",
            borderRadius: "24px",
          }}
        >
          <div style={{ fontWeight: 900 }}>ERIK S.</div>
          <button
            onClick={() => router.push("/checkout")}
            style={{
              marginLeft: "auto",
              background: "#fff",
              color: "#000",
              borderRadius: "12px",
              padding: "8px 14px",
              fontWeight: 900,
            }}
          >
            KÖP NU
          </button>
        </div>

        <div style={{ flex: 1, marginTop: "20px" }}>
          <div className="bubble-them">Redo för affär?</div>
          <div className="bubble-me">Ja.</div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv…"
            style={{ flex: 1 }}
          />
          <button>➔</button>
        </div>
      </div>
    </ClientLayout>
  );
}