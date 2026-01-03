"use client";
import React from 'react';

export default function TrustBadge({ score }: { score: number }) {
  const color = score >= 95 ? 'var(--neon-mint)' : 'var(--neon-purple)';

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '4px 10px', background: 'rgba(255,255,255,0.03)',
      borderRadius: '6px', border: `1px solid ${color}44`
    }}>
      <div style={{
        width: '5px', height: '5px', borderRadius: '50%',
        background: color, boxShadow: `0 0 8px ${color}`
      }}></div>
      <span style={{ fontSize: '9px', fontWeight: 900, color: '#fff', letterSpacing: '0.5px' }}>
        TRUST {score}%
      </span>
    </div>
  );
}
