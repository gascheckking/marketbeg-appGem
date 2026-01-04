// --- components/LoadingAI.tsx ---
"use client";

export function LoadingAI() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      padding: '20px'
    }}>
      <div className="ai-loader-container">
        <div className="dot-spin"></div>
        <div className="scanner-line-mini"></div>
      </div>
      <div style={{
        fontSize: '9px',
        fontWeight: 900,
        color: 'var(--neon-purple)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        animation: 'pulseText 1.5s infinite'
      }}>
        AI Analyserar Pixlar...
      </div>
      
      <style jsx>{`
        .ai-loader-container {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          alignItems: center;
          justifyContent: center;
        }
        .dot-spin {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--neon-purple);
          box-shadow: 0 0 15px var(--neon-purple);
          animation: bounce 0.6s infinite alternate;
        }
        @keyframes bounce {
          from { transform: translateY(-5px); }
          to { transform: translateY(5px); }
        }
        @keyframes pulseText {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
