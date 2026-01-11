// // app/chat/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const messages = [
    { sender: "them", text: "Tja! Grym overall. Är sugen på ett direkt byte mot min i stl 92?", time: "14:02" },
    { sender: "me", text: "Absolut, AI:n säger att värdet diffar 50kr bara. Kör vi?", time: "14:05" },
  ];

  return (
    <div style={{ background: "#000", minHeight: "calc(100vh - 120px)", display: "flex", flexDirection: "column", padding: "0 20px" }}>
      {/* CHAT HEADER */}
      <div style={{ padding: "20px 0", display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ width: "45px", height: "45px", borderRadius: "14px", background: "#121212", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>👤</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "15px", fontWeight: 900 }}>ERIK S.</div>
          <div style={{ fontSize: "9px", color: "var(--karma-green)", fontWeight: 900, letterSpacing: "1px" }}>VERIFIERAD I LOOPEN</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
             <button onClick={() => router.push("/swap")} style={{ background: "rgba(29, 185, 84, 0.1)", color: "var(--karma-green)", borderRadius: "12px", padding: "10px 14px", fontWeight: 900, fontSize: "10px", border: "1px solid rgba(29, 185, 84, 0.2)" }}>BYTE</button>
             <button onClick={() => router.push("/checkout")} style={{ background: "#fff", color: "#000", borderRadius: "12px", padding: "10px 14px", fontWeight: 900, fontSize: "10px", border: "none" }}>KÖP</button>
        </div>
      </div>

      {/* MESSAGES */}
      <div style={{ flex: 1, padding: "25px 0", display: "flex", flexDirection: "column", gap: "16px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ alignSelf: m.sender === "me" ? "flex-end" : "flex-start", maxWidth: "85%" }}>
            <div style={{ 
              background: m.sender === "me" ? "var(--karma-green)" : "#181818",
              color: m.sender === "me" ? "#000" : "#fff",
              padding: "14px 18px", borderRadius: m.sender === "me" ? "20px 20px 4px 20px" : "20px 20px 20px 4px", 
              fontSize: "14px", fontWeight: 600, lineHeight: "1.4"
            }}>
              {m.text}
            </div>
            <div style={{ fontSize: "8px", opacity: 0.3, marginTop: "6px", textAlign: m.sender === "me" ? "right" : "left", fontWeight: 800 }}>{m.time}</div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div style={{ padding: "20px 0" }}>
        <div style={{ display: "flex", gap: "12px", background: "#121212", padding: "8px", borderRadius: "24px", border: "1px solid var(--border)" }}>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv ett meddelande..."
            style={{ flex: 1, background: "transparent", border: "none", color: "#fff", padding: "0 15px", fontSize: "14px", outline: "none" }}
          />
          <button style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#fff", color: "#000", border: "none", fontWeight: 900 }}>➔</button>
        </div>
      </div>
    </div>
  );
}
