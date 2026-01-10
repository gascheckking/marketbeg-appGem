// // components/TrustBadge.tsx
"use client";

export default function TrustBadge({ score }: { score: number }) {
  const isHigh = score >= 95;
  const color = isHigh ? '#1DB954' : '#fff';

  return (
    <div style={{
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '8px',
      padding: '6px 12px', 
      background: '#121212',
      borderRadius: '20px', 
      border: `1px solid ${isHigh ? 'rgba(29, 185, 84, 0.3)' : 'rgba(255,255,255,0.1)'}`,
    }}>
      <div style={{
        width: '6px', height: '6px', borderRadius: '50%',
        background: color, 
        boxShadow: isHigh ? `0 0 10px ${color}` : 'none',
        animation: isHigh ? 'karma-pulse 2s infinite' : 'none'
      }}></div>
      
      <span style={{ 
        fontSize: '10px', 
        fontWeight: 900, 
        color: '#fff', 
        letterSpacing: '1px'
      }}>
        {score}% TRUST
      </span>

      <style jsx>{`
        @keyframes karma-pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
