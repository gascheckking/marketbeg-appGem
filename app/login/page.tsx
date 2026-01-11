// // app/login/page.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBankIDLogin = () => {
    setIsLoading(true);
    // Simulerar BankID-verifiering
    setTimeout(() => {
      router.push('/feed');
    }, 2000);
  };

  return (
    <div className="page-wrapper" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      minHeight: '100vh',
      paddingBottom: '100px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ 
          width: '70px', height: '70px', background: 'var(--karma-green)', 
          borderRadius: '20px', margin: '0 auto 20px', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '30px',
          boxShadow: '0 0 30px rgba(29, 185, 84, 0.3)'
        }}>
          ♻️
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-2px', margin: 0 }}>Karma</h1>
        <p style={{ fontSize: '12px', fontWeight: 800, opacity: 0.4, letterSpacing: '2px', marginTop: '5px' }}>
          VERIFIERAD HANDEL
        </p>
      </div>

      <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 900, marginBottom: '10px' }}>Välkommen tillbaka</h2>
        <p style={{ fontSize: '13px', opacity: 0.5, marginBottom: '30px', lineHeight: '1.5' }}>
          För din säkerhet använder Karma BankID för att garantera 100% äkta profiler i loopen.
        </p>

        <button 
          onClick={handleBankIDLogin}
          disabled={isLoading}
          style={{ 
            width: '100%', 
            padding: '20px', 
            borderRadius: '16px', 
            background: '#fff', 
            color: '#000', 
            border: 'none', 
            fontWeight: 900, 
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            transition: '0.2s',
            cursor: 'pointer'
          }}
        >
          {isLoading ? (
            <div className="spinner" />
          ) : (
            <>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/BankID_logo.svg" alt="BankID" style={{ width: '24px' }} />
              ÖPPNA BANKID
            </>
          )}
        </button>

        <p style={{ fontSize: '10px', opacity: 0.3, marginTop: '20px', fontWeight: 700 }}>
          Genom att logga in godkänner du våra användarvillkor och <br/> Karma Shield-skydd.
        </p>
      </div>

      <div style={{ position: 'absolute', bottom: '40px', left: 0, right: 0, textAlign: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 800, opacity: 0.2 }}>POWERED BY KARMA NODE v2.0</span>
      </div>

      <style jsx>{`
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(0,0,0,0.1);
          border-top: 3px solid #000;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
