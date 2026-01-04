// // components/ShippingAI.tsx
"use client";
import React from 'react';

export default function ShippingAI({ itemWeight }: { itemWeight: string }) {
  return (
    <div className="glass-card" style={{ padding: '25px', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{ 
          width: '10px', height: '10px', background: 'var(--neon-purple)', 
          borderRadius: '50%', boxShadow: '0 0 12px var(--neon-purple)' 
        }}></div>
        <strong style={{ color: 'var(--neon-purple)', fontSize: '10px', letterSpacing: '2px', fontWeight: 900 }}>KARMA LOGISTICS AI</strong>
      </div>

      <p className="muted" style={{ fontSize: '13px', marginBottom: '20px', lineHeight: '1.5' }}>
        Baserat på vikt <strong>({itemWeight})</strong> och din geoposition har AI:n optimerat rutten:
      </p>

      <div style={{ display: 'grid', gap: '12px' }}>
        {/* Option 1 */}
        <div className="glass-card" style={{ 
          padding: '18px', background: 'rgba(255,255,255,0.02)', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' 
        }}>
          <div>
            <span style={{ display: 'block', fontWeight: 900, fontSize: '13px' }}>📦 Box-to-Box</span>
            <small className="muted" style={{ fontSize: '10px' }}>Närmaste Instabox/Budbee</small>
          </div>
          <strong style={{ color: 'var(--neon-mint)', fontSize: '14px' }}>49 kr</strong>
        </div>

        {/* Option 2 - Rekommenderad */}
        <div className="glass-card" style={{ 
          padding: '18px', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.08), transparent)', 
          border: '1px solid var(--neon-purple)', display: 'flex', justifyContent: 'space-between', 
          alignItems: 'center', cursor: 'pointer', borderRadius: '16px' 
        }}>
          <div>
            <span style={{ display: 'block', fontWeight: 900, fontSize: '13px' }}>⚡ Karma Express</span>
            <small style={{ color: 'var(--neon-purple)', fontWeight: 800, fontSize: '10px' }}>Hemleverans ikväll (AI-rutt)</small>
          </div>
          <strong style={{ color: 'var(--neon-purple)', fontSize: '14px' }}>79 kr</strong>
        </div>
      </div>
    </div>
  );
}
