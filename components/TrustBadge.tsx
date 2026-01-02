"use client";

import React from 'react';

interface TrustBadgeProps {
  score: number;
}

export default function TrustBadge({ score }: TrustBadgeProps) {
  // Dynamisk färg baserat på Trust Score (Handels-DNA)
  const getTrustColor = (s: number) => {
    if (s >= 95) return 'var(--neon-mint)'; // Elit-säljare
    if (s >= 80) return 'var(--neon-purple)'; // Pålitlig
    return '#888'; // Ny/Under verifiering
  };

  const trustColor = getTrustColor(score);

  return (
    <div className="trust-badge" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '100px',
      border: `1px solid ${trustColor}44`, // 44 lägger till lite transparens på färgen
      transition: 'all 0.3s ease'
    }}>
      <span style={{ 
        fontSize: '14px',
        filter: score >= 95 ? `drop-shadow(0 0 5px ${trustColor})` : 'none'
      }}>
        🛡️
      </span>
      <span style={{ 
        fontSize: '11px', 
        fontWeight: 800, 
        letterSpacing: '0.5px',
        color: trustColor,
        textTransform: 'uppercase'
      }}>
        Trust {score}% · Verifierad
      </span>

      <style jsx>{`
        .trust-badge:hover {
          background: rgba(255, 255, 255, 0.07);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
