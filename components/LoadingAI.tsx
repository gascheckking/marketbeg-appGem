"use client";

export function LoadingAI() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px', // Minskad gap
      padding: '15px'
    }}>
      <div className="loading-pulse" style={{
        fontSize: '10px', // Mindre text för pro-look
        fontWeight: 800,
        color: 'var(--neon-purple)',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div className="dot-spin"></div>
        AI ANALYSERAR PIXLAR...
      </div>
      
      <style jsx>{`
        .dot-spin {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon-purple);
          box-shadow: 0 0 12px var(--neon-purple);
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
