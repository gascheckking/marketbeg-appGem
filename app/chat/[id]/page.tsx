// // app/chat/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const messages = [
    { sender: "them", text: "Tja! Är objektet kvar? Kan köra direkt via Karma.", time: "14:02" },
    { sender: "me", text: "Absolut, AI:n har redan verifierat allt. Bara att trycka köp.", time: "14:05" },
  ];

  return (
    <div style={{ background: "#000", minHeight: "calc(100vh - 120px)", display: "flex", flexDirection: "column" }}>
      {/* CHAT HEADER */}
      <div style={{ padding: "20px 0", display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid #111" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>E</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "14px", fontWeight: 900 }}>ERIK S.</div>
          <div style={{ fontSize: "9px", color: "#1DB954", fontWeight: 900 }}>VERIFIERAD KÖPARE</div>
        </div>
        <button onClick={() => router.push("/checkout")} style={{ background: "#fff", color: "#000", borderRadius: "10px", padding: "8px 16px", fontWeight: 900, fontSize: "11px", border: "none" }}>
          KÖP NU
        </button>
      </div>

      {/* MESSAGES */}
      <div style={{ flex: 1, padding: "25px 0", display: "flex", flexDirection: "column", gap: "20px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ alignSelf: m.sender === "me" ? "flex-end" : "flex-start", maxWidth: "80%" }}>
            <div style={{ 
              background: m.sender === "me" ? "#1DB954" : "#111",
              color: m.sender === "me" ? "#000" : "#fff",
              padding: "14px 18px", borderRadius: "18px", fontSize: "14px", fontWeight: 500, lineHeight: "1.4"
            }}>
              {m.text}
            </div>
            <div style={{ fontSize: "8px", opacity: 0.2, marginTop: "6px", textAlign: m.sender === "me" ? "right" : "left", fontWeight: 900 }}>{m.time}</div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div style={{ padding: "20px 0" }}>
        <div style={{ display: "flex", gap: "10px", background: "#111", padding: "8px", borderRadius: "20px", border: "1px solid #222" }}>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv..."
            style={{ flex: 1, background: "transparent", border: "none", color: "#fff", padding: "0 15px", fontSize: "14px", outline: "none" }}
          />
          <button style={{ width: "35px", height: "35px", borderRadius: "12px", background: "#fff", color: "#000", border: "none", fontWeight: 900 }}>➔</button>
        </div>
      </div>
    </div>
  );
}
