"use client";
import React from 'react';

export default function TrustBadge({ score }: { score: number }) {
  const isHigh = score >= 95;
  const color = isHigh ? 'var(--neon-mint)' : 'var(--neon-purple)';

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      padding: '3px 8px', background: 'rgba(255,255,255,0.02)',
      borderRadius: '5px', border: `1px solid ${color}33`
    }}>
      <div style={{
        width: '4px', height: '4px', borderRadius: '50%',
        background: color, boxShadow: `0 0 6px ${color}`
      }}></div>
      <span style={{ fontSize: '8px', fontWeight: 900, color: '#fff', letterSpacing: '0.5px' }}>
        TRUST {score}%
      </span>
    </div>
  );
}
