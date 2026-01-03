"use client";
import React from 'react';

export default function Profile() {
  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      {/* HEADER SECTION - Kompakt och Proffsig */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', marginTop: '10px' }}>
        <div style={{ 
          width: '70px', height: '70px', borderRadius: '50%', 
          border: '2px solid var(--neon-mint)', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '30px', 
          background: '#080808', boxShadow: '0 0 20px rgba(0, 255, 136, 0.1)' 
        }}>
          🛡️
        </div>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>Alex Lindgren</h1>
          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
            <span style={{ 
              background: 'var(--neon-purple)', color: '#fff', fontSize: '7px', 
              fontWeight: 900, padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.5px' 
            }}>LEVEL 14 MERCHANT</span>
            <span style={{ 
              background: 'rgba(255,255,255,0.05)', color: '#666', fontSize: '7px', 
              fontWeight: 900, padding: '3px 8px', borderRadius: '4px' 
            }}>EST. 2023</span>
          </div>
        </div>
      </div>

      {/* STATS GRID - 3 kolumner på rad utan att ta plats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '25px' }}>
        <div className="glass-card" style={{ textAlign: 'center', padding: '12px 5px' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--neon-mint)' }}>98.2%</div>
          <div style={{ fontSize: '7px', fontWeight: 900, color: '#444', letterSpacing: '0.5px', marginTop: '4px' }}>TRUST SCORE</div>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '12px 5px' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>2,450</div>
          <div style={{ fontSize: '7px', fontWeight: 900, color: '#444', letterSpacing: '0.5px', marginTop: '4px' }}>TOKENS</div>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', padding: '12px 5px' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>42</div>
          <div style={{ fontSize: '7px', fontWeight: 900, color: '#444', letterSpacing: '0.5px', marginTop: '4px' }}>SALES</div>
        </div>
      </div>

      {/* AI DNA CARD - Kompakt med hög densitet av info */}
      <div className="glass-card" style={{ 
        padding: '20px', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.05) 0%, transparent 100%)',
        border: '1px solid rgba(157, 78, 221, 0.15)'
      }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '28px', filter: 'drop-shadow(0 0 10px var(--neon-purple))' }}>🤖</div>
          <div>
            <span style={{ fontSize: '9px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1px' }}>AI HANDELS-DNA</span>
            <strong style={{ fontSize: '1rem', color: '#fff', display: 'block', margin: '2px 0 6px 0', letterSpacing: '-0.3px' }}>
              "The Quick Flipper"
            </strong>
            <p className="muted" style={{ margin: 0, lineHeight: '1.5', fontSize: '10px' }}>
              Analys klar: Du säljer objekt <span style={{color: '#fff'}}>42% snabbare</span> än snittet. 
              Högst likviditet: <span style={{color: 'var(--neon-mint)'}}>Apple & High-end Audio</span>.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER BRANDING */}
      <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.2 }}>
        <div style={{ fontSize: '6px', fontWeight: 800, letterSpacing: '3px' }}>
          KNOW • ACQUIRE • REUSE • MATCH • AGAIN
        </div>
      </div>
    </div>
  );
}
