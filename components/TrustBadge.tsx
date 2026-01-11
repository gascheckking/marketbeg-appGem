// // components/TrustBadge.tsx
"use client";

export default function TrustBadge({ score }: { score: number }) {
  const isHigh = score >= 95;

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      padding: '8px 16px', background: '#121212', borderRadius: '20px', 
      border: `1px solid ${isHigh ? 'rgba(29, 185, 84, 0.2)' : 'rgba(255,255,255,0.05)'}`,
    }}>
      <div className="status-dot" />
      <span style={{ fontSize: '10px', fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>
        {score}% TRUST
      </span>

      <style jsx>{`
        .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${isHigh ? 'var(--karma-green)' : '#fff'};
          box-shadow: ${isHigh ? '0 0 12px var(--karma-green)' : 'none'};
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
