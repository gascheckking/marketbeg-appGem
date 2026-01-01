"use client";
import { useState, useEffect } from "react";

export default function BankIDSign({ onComplete }: { onComplete: () => void }) {
  const [status, setStatus] = useState("init"); // init, pending, success

  const startSign = () => {
    setStatus("pending");
    // Simulerar BankID-appens signeringstid
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => onComplete(), 1000);
    }, 2500);
  };

  return (
    <div className="bankid-overlay" style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.9)', zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div className="glow-card" style={{ width: '100%', maxWidth: '350px', padding: '40px', textAlign: 'center', background: '#fff', color: '#000' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BankID_logo.svg/1024px-BankID_logo.svg.png" 
             style={{ width: '120px', marginBottom: '30px' }} alt="BankID" />
        
        {status === "init" && (
          <>
            <h3 style={{ margin: '0 0 10px 0' }}>Verifiera identitet</h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>MarketBeg kräver BankID för säkra transaktioner.</p>
            <button className="primary-btn" onClick={startSign} style={{ background: '#5e2583', color: '#fff', width: '100%' }}>
              ÖPPNA BANKID
            </button>
          </>
        )}

        {status === "pending" && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p style={{ marginTop: '20px', fontWeight: 700 }}>Väntar på signering...</p>
          </div>
        )}

        {status === "success" && (
          <div style={{ color: '#28a745' }}>
            <span style={{ fontSize: '50px' }}>✅</span>
            <p style={{ fontWeight: 800, marginTop: '10px' }}>IDENTITET BEKRÄFTAD</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .spinner {
          width: 50px; height: 50px; border: 5px solid #f3f3f3;
          border-top: 5px solid #5e2583; border-radius: 50%;
          animation: spin 1s linear infinite; margin: 0 auto;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
