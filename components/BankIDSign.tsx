"use client";
import React, { useState, useEffect } from 'react';

interface BankIDProps {
  onComplete?: () => void;
}

export default function BankIDSign({ onComplete }: BankIDProps) {
  const [status, setStatus] = useState<'waiting' | 'success'>('waiting');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('success');
      if (onComplete) {
        setTimeout(onComplete, 1800); // Går vidare lite snabbare för bättre flyt
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      padding: '40px 30px',
      textAlign: 'center',
      background: '#fff',
      borderRadius: '28px',
      color: '#000',
      maxWidth: '360px',
      margin: '20px auto',
      boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ marginBottom: '25px' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/BankID_logo.svg" 
          alt="BankID" 
          style={{ width: '110px' }} 
        />
      </div>

      {status === 'waiting' ? (
        <div>
          <div className="bankid-loader" style={{
            width: '45px', height: '45px', border: '4px solid #f0f0f0',
            borderTop: '4px solid #5e2583', borderRadius: '50%',
            margin: '0 auto 20px auto', animation: 'spin 0.8s linear infinite'
          }}></div>
          <p style={{ fontWeight: 800, fontSize: '18px', margin: '0' }}>Öppna BankID-appen</p>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>Verifierar din identitet för säker loop...</p>
        </div>
      ) : (
        <div style={{ animation: 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
          <div style={{ fontSize: '50px', marginBottom: '10px' }}>✅</div>
          <p style={{ fontWeight: 900, fontSize: '18px', color: '#1a1a1a' }}>Verifierad!</p>
          <p style={{ fontSize: '13px', color: '#28a745', fontWeight: 700 }}>Handels-DNA uppdaterat</p>
        </div>
      )}

      <style jsx>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}
