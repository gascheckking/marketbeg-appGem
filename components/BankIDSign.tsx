"use client";
import React, { useState, useEffect } from "react";

interface BankIDProps {
  onComplete?: () => void;
}

export default function BankIDSign({ onComplete }: BankIDProps) {
  const [status, setStatus] = useState<"waiting" | "success">("waiting");

  useEffect(() => {
    let alive = true;

    const timer = setTimeout(() => {
      if (!alive) return;
      setStatus("success");

      if (onComplete) {
        setTimeout(() => {
          if (alive) onComplete();
        }, 1800);
      }
    }, 2500);

    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        padding: "40px 30px",
        textAlign: "center",
        background: "#fff",
        borderRadius: "32px",
        color: "#000",
        maxWidth: "360px",
        margin: "20px auto",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
      }}
    >
      <div style={{ marginBottom: "25px" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/BankID_logo.svg"
          alt="BankID"
          style={{ width: "100px" }}
        />
      </div>

      {status === "waiting" ? (
        <>
          <div className="bankid-loader" />
          <p style={{ fontWeight: 800, fontSize: "18px", margin: 0 }}>
            Öppna BankID-appen
          </p>
          <p style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}>
            Verifierar ditt handels-DNA...
          </p>
        </>
      ) : (
        <div style={{ animation: "popIn 0.4s cubic-bezier(.18,.89,.32,1.27)" }}>
          <div style={{ fontSize: "50px", marginBottom: "10px" }}>✅</div>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: 0 }}>
            Verifierad!
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#28a745",
              fontWeight: 800,
              marginTop: "4px",
            }}
          >
            TRUST SCORE UPPDATERAD
          </p>
        </div>
      )}

      <style jsx>{`
        .bankid-loader {
          width: 40px;
          height: 40px;
          border: 4px solid #f0f0f0;
          border-top: 4px solid #5e2583;
          border-radius: 50%;
          margin: 0 auto 20px;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes popIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}