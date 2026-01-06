// // components/ShippingAI.tsx
"use client";
import React from 'react';

export default function ShippingAI({ itemWeight = "0.5kg" }: { itemWeight?: string }) {
  return (
    <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
        <div style={{ 
          width: '8px', height: '8px', background: 'var(--neon-purple)', 
          borderRadius: '50%', boxShadow: '0 0 10px var(--neon-purple)',
          animation: 'pulse 2s infinite'
        }}></div>
        <strong style={{ color: 'var(--neon-purple)', fontSize: '9px', letterSpacing: '1.5px', fontWeight: 900 }}>KARMA LOGISTICS AI</strong>
      </div>

      <p style={{ fontSize: '11px', marginBottom: '15px', lineHeight: '1.5', opacity: 0.7 }}>
        Baserat på vikt <strong>({itemWeight})</strong> och din geoposition har AI:n optimerat rutten för lägsta CO2-avtryck:
      </p>

      <div style={{ display: 'grid', gap: '10px' }}>
        {/* Alternativ 1: Standard */}
        <div style={{ 
          padding: '15px', background: 'rgba(255,255,255,0.02)', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          cursor: 'pointer', border: '1px solid var(--border)', borderRadius: '14px',
          transition: 'all 0.2s'
        }} className="shipping-opt">
          <div>
            <span style={{ display: 'block', fontWeight: 900, fontSize: '11px' }}>📦 BOX-TO-BOX</span>
            <small style={{ fontSize: '9px', opacity: 0.4, fontWeight: 700 }}>INSTABOX / BUDBEE</small>
          </div>
          <strong style={{ color: 'var(--neon-mint)', fontSize: '12px', fontWeight: 900 }}>49 KR</strong>
        </div>

        {/* Alternativ 2: Premium AI-Rutt */}
        <div style={{ 
          padding: '15px', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.1), transparent)', 
          border: '1px solid var(--neon-purple)', display: 'flex', justifyContent: 'space-between', 
          alignItems: 'center', cursor: 'pointer', borderRadius: '14px',
          boxShadow: '0 4px 15px rgba(157, 78, 221, 0.1)'
        }} className="shipping-opt-active">
          <div>
            <span style={{ display: 'block', fontWeight: 900, fontSize: '11px' }}>⚡ KARMA EXPRESS</span>
            <small style={{ color: 'var(--neon-purple)', fontWeight: 800, fontSize: '9px' }}>HEMLEVERANS IKVÄLL</small>
          </div>
          <strong style={{ color: '#fff', fontSize: '12px', fontWeight: 900 }}>79 KR</strong>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        .shipping-opt:hover { background: rgba(255,255,255,0.05); }
      `}</style>
    </div>
  );
}
