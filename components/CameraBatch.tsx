// // components/CameraBatch.tsx
"use client";
import { useState, useRef } from "react";

export default function CameraBatch({ onScanComplete }: { onScanComplete: (price: number) => void }) {
  const [status, setStatus] = useState<"idle" | "scanning" | "success">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    setStatus("scanning");
    // Fredde-speed: Vi simulerar en blixtsnabb AI-analys
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onScanComplete(9800); // Skickar upp priset till sidan
        setStatus("idle");
      }, 800);
    }, 1500);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input 
        type="file" 
        ref={fileInputRef} 
        hidden 
        onChange={handleUpload} 
        accept="image/*" 
        multiple 
      />

      <div 
        onClick={() => fileInputRef.current?.click()}
        style={{
          height: "140px",
          background: status === "scanning" ? "#1DB954" : "#121212",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed rgba(255,255,255,0.1)",
          transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {status === "idle" && (
          <>
            <span style={{ fontSize: "32px" }}>📸</span>
            <span style={{ fontSize: "12px", fontWeight: 800, marginTop: "10px", opacity: 0.6 }}>
              AI BATCH SCAN (MAX 25)
            </span>
          </>
        )}

        {status === "scanning" && (
          <div style={{ textAlign: "center", color: "#000" }}>
            <div className="ai-loader" />
            <div style={{ fontSize: "14px", fontWeight: 900, marginTop: "10px" }}>ANALYSERAR...</div>
          </div>
        )}

        {status === "success" && (
          <div style={{ fontSize: "40px", animation: "pop 0.4s ease" }}>✅</div>
        )}
      </div>

      <style jsx>{`
        .ai-loader {
          width: 30px; height: 30px;
          border: 4px solid rgba(0,0,0,0.1);
          border-top: 4px solid #000;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes pop { 
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
