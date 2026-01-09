// // app/chat/[id]/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopTabs from "@/components/TopTabs";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const messages = [
    { sender: "them", text: "Tja! Är objektet kvar? Kan köra direkt via Karma.", time: "14:02" },
    { sender: "me", text: "Absolut, AI:n har redan verifierat allt. Bara att trycka köp.", time: "14:05" },
  ];

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff", display: "flex", flexDirection: "column" }}>
      <TopTabs />

      {/* CHAT HEADER */}
      <div style={{ 
        padding: "20px", 
        display: "flex", 
        alignItems: "center", 
        gap: "12px", 
        borderBottom: "1px solid rgba(255,255,255,0.05)" 
      }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#282828", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>E</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "14px", fontWeight: 900 }}>ERIK S.</div>
          <div style={{ fontSize: "10px", color: "#1DB954", fontWeight: 800 }}>98% TRUST SCORE</div>
        </div>
        <button
          onClick={() => router.push("/checkout")}
          style={{
            background: "#fff",
            color: "#000",
            borderRadius: "12px",
            padding: "10px 18px",
            fontWeight: 900,
            fontSize: "12px",
            border: "none"
          }}
        >
          KÖP NU
        </button>
      </div>

      {/* MESSAGES AREA */}
      <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", gap: "16px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ 
            alignSelf: m.sender === "me" ? "flex-end" : "flex-start",
            maxWidth: "80%"
          }}>
            <div style={{ 
              background: m.sender === "me" ? "#1DB954" : "#282828",
              color: m.sender === "me" ? "#000" : "#fff",
              padding: "12px 16px",
              borderRadius: m.sender === "me" ? "18px 18px 2px 18px" : "18px 18px 18px 2px",
              fontSize: "14px",
              fontWeight: 600
            }}>
              {m.text}
            </div>
            <div style={{ fontSize: "9px", opacity: 0.4, marginTop: "4px", textAlign: m.sender === "me" ? "right" : "left" }}>{m.time}</div>
          </div>
        ))}
      </div>

      {/* INPUT HUB */}
      <div style={{ padding: "20px", background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "flex", gap: "10px", background: "#121212", padding: "8px", borderRadius: "24px" }}>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv ett meddelande..."
            style={{ 
              flex: 1, 
              background: "transparent", 
              border: "none", 
              color: "#fff", 
              padding: "0 15px",
              fontSize: "14px",
              outline: "none"
            }}
          />
          <button style={{ 
            width: "40px", height: "40px", borderRadius: "50%", background: "#fff", color: "#000", border: "none", fontWeight: 900 
          }}>➔</button>
        </div>
      </div>
    </div>
  );
}
