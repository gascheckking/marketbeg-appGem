// // components/AIScanView.tsx
"use client";
import React from "react";

export default function AIScanView() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      {/* SCANNER VIEWPORT */}
      <div style={{ 
        width: '100%', aspectRatio: '1/1', background: '#0a0a0a', 
        position: 'relative', borderBottom: '1px solid #1f1f1f' 
      }}>
        <div style={{ 
          position: 'absolute', top: '10%', left: '10%', padding: '4px 8px', 
          background: 'var(--karma-green)', color: '#000', fontSize: '10px', fontWeight: 900 
        }}>
          LIVE_STREAM: FORRAD_SCAN
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '10px', color: 'var(--text-sub)', marginBottom: '16px' }}>DETEKTERADE_KLUSTER</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { label: "NIKE_VINTAGE_CLUSTER", qty: "6ST", price: "450:-" },
            { label: "MIX_TEXTILE_LOW_VAL", qty: "12ST", price: "80:-" }
          ].map((item, i) => (
            <div key={i} style={{ 
              background: '#121212', padding: '12px', display: 'flex', 
              justifyContent: 'space-between', alignItems: 'center' 
            }}>
              <div>
                <div className="card-title">{item.label}</div>
                <div className="card-meta">{item.qty} ENHETER</div>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 900 }}>{item.price}</div>
            </div>
          ))}
        </div>

        <button className="pill-btn" style={{ width: '100%', marginTop: '24px' }}>
          EXPORTERA TILL FEED
        </button>
      </div>
    </div>
  );
}
