"use client";
import React from 'react';

interface TrustBadgeProps {
  score: number;
}

export default function TrustBadge({ score }: TrustBadgeProps) {
  const getTrustColor = (s: number) => {
    if (s >= 95) return 'var(--neon-mint)'; 
    if (s >= 80) return 'var(--neon-purple)'; 
    return '#888'; 
  };

  const trustColor = getTrustColor(score);

  return (
    <div className="trust-badge" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '5px 12px',
      background: 'rgba(0,0,0,0.4)',
      borderRadius: '8px',
      border: `1px solid ${trustColor}33`,
      backdropFilter: 'blur(10px)'
    }}>
      {/* Status-punkt som pulserar om score är hög */}
      <div style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: trustColor,
        boxShadow: `0 0 8px ${trustColor}`
      }} className={score >= 95 ? 'pulse-dot' : ''}></div>
      
      <span style={{ 
        fontSize: '10px', 
        fontWeight: 900, 
        letterSpacing: '1px',
        color: '#fff',
        textTransform: 'uppercase'
      }}>
        TRUST <span style={{ color: trustColor }}>{score}%</span>
      </span>

      <style jsx>{`
        .pulse-dot {
          animation: dot-pulse 2s infinite ease-in-out;
        }
        @keyframes dot-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
