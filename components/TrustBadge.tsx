// // components/TrustBadge.tsx
"use client";

export default function TrustBadge({ score }: { score: number }) {
  const color = score >= 95 ? 'var(--neon-mint)' : 'var(--neon-purple)';

  return (
    <div style={{
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '6px',
      padding: '4px 8px', 
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '8px', 
      border: `1px solid ${color}44`,
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        width: '5px', height: '5px', borderRadius: '50%',
        background: color, 
        boxShadow: `0 0 8px ${color}`,
        animation: score >= 98 ? 'pulse 2s infinite' : 'none'
      }}></div>
      
      <span style={{ 
        fontSize: '8px', 
        fontWeight: 900, 
        color: '#fff', 
        letterSpacing: '0.5px'
      }}>
        {score}% TILLIT
      </span>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
