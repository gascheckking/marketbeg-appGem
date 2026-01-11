// // components/LoadingAI.tsx
"use client";
import React from "react";

export default function LoadingAI({ label = "Kopplar upp mot Karma-noden..." }: { label?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 20px", textAlign: "center" }}>
      <div style={{ position: 'relative', marginBottom: '30px' }}>
        <div className="pulse-ring" />
        <div style={{ fontSize: "40px", position: 'relative', zIndex: 2 }}>🧠</div>
      </div>

      <div style={{ width: "140px", height: "3px", background: "rgba(255,255,255,0.05)", position: "relative", overflow: "hidden", borderRadius: "10px", marginBottom: "20px" }}>
        <div style={{ width: "50%", height: "100%", background: "var(--karma-green)", animation: "scan 1.5s ease-in-out infinite", boxShadow: '0 0 15px var(--karma-green)' }} />
      </div>

      <div style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "1px", color: "var(--karma-green)" }}>{label.toUpperCase()}</div>

      <style jsx>{`
        .pulse-ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 60px; height: 60px; border: 2px solid var(--karma-green);
          border-radius: 50%; animation: ringPulse 2s infinite;
        }
        @keyframes scan { 0% { left: -100%; } 100% { left: 100%; } }
        @keyframes ringPulse { 0% { width: 40px; height: 40px; opacity: 1; } 100% { width: 100px; height: 100px; opacity: 0; } }
      `}</style>
    </div>
  );
}
