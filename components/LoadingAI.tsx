// // components/LoadingAI.tsx
"use client";

export function LoadingAI() {
  return (
    <div className="ai-container">
      <div className="scanner-box">
        <div className="emoji">📦</div>
        <div className="laser-line"></div>
      </div>
      <div className="status-text">AI ANALYSERAR PIXLAR...</div>
      
      <style jsx>{`
        .ai-container {
          display: flex; flex-direction: column; align-items: center;
          gap: 15px; padding: 30px;
        }
        .scanner-box {
          width: 60px; height: 60px; background: #111;
          border-radius: 15px; display: flex; align-items: center;
          justify-content: center; position: relative; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .emoji { font-size: 30px; z-index: 1; }
        .laser-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--neon-purple);
          box-shadow: 0 0 10px var(--neon-purple);
          animation: scan 1.5s ease-in-out infinite;
          z-index: 2;
        }
        .status-text {
          font-size: 8px; font-weight: 900; color: var(--neon-purple);
          letter-spacing: 2px; animation: pulse 1s infinite alternate;
        }
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(60px); }
          100% { transform: translateY(0); }
        }
        @keyframes pulse {
          from { opacity: 0.4; } to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
