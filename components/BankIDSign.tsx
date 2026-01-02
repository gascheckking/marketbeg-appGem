"use client";
import React, { useState, useEffect } from 'react';

export default function BankIDSign() {
  const [status, setStatus] = useState('waiting');

  useEffect(() => {
    const timer = setTimeout(() => setStatus('success'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      padding: '40px 20px',
      textAlign: 'center',
      background: 'white',
      borderRadius: '24px',
      color: 'black',
      maxWidth: '350px',
      margin: '20px auto'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/BankID_logo.svg" 
             alt="BankID" 
             style={{ width: '100px' }} 
        />
      </div>

      {status === 'waiting' ? (
        <div>
          <div className="loading-spinner" style={{
            width: '50px',
            height: '50px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #5e2583',
            borderRadius: '50%',
            margin: '20px auto',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ fontWeight: 700 }}>Öppna BankID-appen</p>
          <p style={{ fontSize: '14px', color: '#666' }}>Vi väntar på din signering...</p>
        </div>
      ) : (
        <div style={{ color: '#28a745' }}>
          <div style={{ fontSize: '50px', marginBottom: '10px' }}>✅</div>
          <p style={{ fontWeight: 800 }}>Signerat och klart!</p>
        </div>
      )}

      {/* Animation för spinnern */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
