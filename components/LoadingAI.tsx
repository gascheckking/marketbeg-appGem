"use client";

export function LoadingAI() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      padding: '20px'
    }}>
      <div className="loading-pulse" style={{
        fontSize: '14px',
        fontWeight: 800,
        color: 'var(--neon-purple)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div className="dot-spin"></div>
        ✨ AI analyserar pixlarna...
      </div>
      
      <style jsx>{`
        .dot-spin {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--neon-purple);
          box-shadow: 0 0 15px var(--neon-purple);
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
