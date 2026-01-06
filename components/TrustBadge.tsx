// // components/TrustBadge.tsx
"use client";

export default function TrustBadge({ score }: { score: number }) {
  // Gränsen vid 95% för "Elite"-status (Grön/Mint), annars lila
  const color = score >= 95 ? 'var(--neon-mint)' : 'var(--neon-purple)';

  return (
    <div style={{
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '5px',
      padding: '3px 6px', 
      background: 'rgba(0,0,0,0.2)',
      borderRadius: '6px', 
      border: `1px solid ${color}33`, // 20% opacity på bordern
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        width: '4px', height: '4px', borderRadius: '50%',
        background: color, 
        boxShadow: `0 0 6px ${color}`,
        animation: score >= 98 ? 'pulse 2s infinite' : 'none'
      }}></div>
      
      <span style={{ 
        fontSize: '7px', 
        fontWeight: 900, 
        color: '#fff', 
        opacity: 0.8,
        letterSpacing: '0.5px',
        textTransform: 'uppercase'
      }}>
        TRUST {score}%
      </span>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
