// // components/CameraBatch.tsx
"use client";
import { useState, useRef } from "react";

export default function CameraBatch({ onScanComplete }: { onScanComplete: (price: number) => void }) {
  const [status, setStatus] = useState<"idle" | "scanning" | "success">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    setStatus("scanning");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onScanComplete(9800); 
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
          height: "160px",
          background: status === "scanning" ? "var(--karma-green)" : "var(--bg-card)",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: status === "scanning" ? "2px solid var(--karma-green)" : "1px dashed var(--border)",
          transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {status === "idle" && (
          <>
            <span style={{ fontSize: "36px", marginBottom: "12px" }}>📸</span>
            <span style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "1px", opacity: 0.6 }}>
              AI BATCH SCAN (MAX 25)
            </span>
          </>
        )}

        {status === "scanning" && (
          <div style={{ textAlign: "center", color: "#000" }}>
            <div className="ai-loader" />
            <div style={{ fontSize: "13px", fontWeight: 900, marginTop: "15px", letterSpacing: "1px" }}>ANALYSERAR...</div>
          </div>
        )}

        {status === "success" && (
          <div style={{ fontSize: "44px", animation: "pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}>✅</div>
        )}
      </div>

      <style jsx>{`
        .ai-loader {
          width: 35px; height: 35px;
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
