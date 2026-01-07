// components/LoadingAI.tsx
"use client";
import React from "react";

export default function LoadingAI({ label = "Analyserar objekt..." }: { label?: string }) {
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <div style={{ fontSize: "36px", marginBottom: "18px", opacity: 0.9 }}>
        🧠
      </div>

      <div style={{
        width: "120px",
        height: "2px",
        background: "rgba(255,255,255,0.1)",
        position: "relative",
        overflow: "hidden",
        borderRadius: "2px",
        marginBottom: "14px"
      }}>
        <div style={{
          width: "40%",
          height: "100%",
          background: "var(--neon-mint)",
          animation: "scan 1.4s infinite"
        }} />
      </div>

      <div style={{ fontSize: "11px", fontWeight: 800, opacity: 0.6 }}>
        {label}
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
}