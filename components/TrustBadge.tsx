// // components/TrustBadge.tsx
"use client";

export default function TrustBadge({ score }: { score: number }) {
  const color = score >= 95 ? 'var(--neon-mint)' : 'var(--neon-purple)';

  return (
    <div style={{
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '4px',
      padding: '2px 6px', 
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '4px', 
      border: `1px solid ${color}22`
    }}>
      <div style={{
        width: '3px', height: '3px', borderRadius: '50%',
        background: color, boxShadow: `0 0 5px ${color}`
      }}></div>
      <span style={{ 
        fontSize: '7px', 
        fontWeight: 900, 
        color: 'rgba(255,255,255,0.5)', 
        letterSpacing: '0.3px',
        textTransform: 'uppercase'
      }}>
        Trust {score}%
      </span>
    </div>
  );
}
