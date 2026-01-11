// // components/BankIDSign.tsx
"use client";
import React, { useState, useEffect } from "react";

export default function BankIDSign({ onComplete }: { onComplete?: () => void }) {
  const [status, setStatus] = useState<"waiting" | "success">("waiting");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("success");
      if (onComplete) setTimeout(onComplete, 1500);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{ padding: "40px 30px", textAlign: "center", background: "#fff", borderRadius: "32px", color: "#000", maxWidth: "340px", margin: "20px auto", boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/BankID_logo.svg" alt="BankID" style={{ width: "90px", marginBottom: "30px" }} />

      {status === "waiting" ? (
        <>
          <div className="bankid-loader" />
          <p style={{ fontWeight: 900, fontSize: "18px", margin: 0 }}>Öppna BankID-appen</p>
          <p style={{ fontSize: "12px", color: "#666", marginTop: "8px", fontWeight: 600 }}>Verifierar din identitet...</p>
        </>
      ) : (
        <div style={{ animation: "popIn 0.4s cubic-bezier(.18,.89,.32,1.27)" }}>
          <div style={{ fontSize: "40px", marginBottom: "10px" }}>✅</div>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: 0 }}>Verifierad</p>
          <p style={{ fontSize: "11px", color: "var(--karma-green)", fontWeight: 900, marginTop: "5px" }}>KARMA DNA UPPDATERAT</p>
        </div>
      )}

      <style jsx>{`
        .bankid-loader {
          width: 35px; height: 35px; border: 4px solid #f0f0f0; border-top: 4px solid #000;
          border-radius: 50%; margin: 0 auto 20px; animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
