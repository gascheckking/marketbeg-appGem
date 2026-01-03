"use client";
import React from 'react';

/** * Karma Rewards / Vault - Optimerad för "utzoomad" mobilvy.
 * Branding: KNOW • ACQUIRE • REUSE • MATCH • AGAIN
 */
export default function VaultPage() {
  return (
    <div className="page-wrapper" style={{ padding: '12px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>REWARDS</h1>
        <p className="muted" style={{ fontSize: '11px', marginTop: '4px' }}>
          KNOW your value. ACQUIRE your tokens.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        {/* TOTAL LIKVIDITET CARD - Mer kompakt */}
        <div className="glass-card" style={{ 
          padding: '18px 15px', 
          border: '1px solid rgba(0,255,136,0.3)', 
          background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, transparent 100%)' 
        }}>
          <p style={{ margin: 0, fontSize: '8px', fontWeight: 900, letterSpacing: '1px', color: 'var(--neon-mint)', opacity: 0.8 }}>TOTALT INKÖRT (SEK)</p>
          <h2 style={{ fontSize: '1.8rem', margin: '2px 0', color: '#fff', letterSpacing: '-1px', fontWeight: 900 }}>14 250,00</h2>
          <div style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--neon-mint)', borderRadius: '50%', boxShadow: '0 0 8px var(--neon-mint)' }}></span>
            REDO FÖR UTTAG
          </div>
        </div>

        {/* GRID FÖR SCORE OCH TOKENS - Mindre text, mer krispigt */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          
          {/* KARMA SCORE CARD */}
          <div className="glass-card" style={{ padding: '15px' }}>
            <h3 style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px', color: 'var(--neon-purple)', marginBottom: '8px' }}>KARMA SCORE</h3>
            <div style={{ fontSize: '2rem', fontWeight: 900, margin: '5px 0', letterSpacing: '-1px' }}>850</div>
            <p className="muted" style={{ fontSize: '9px', lineHeight: '1.3' }}>Topp <span style={{color: '#fff'}}>2%</span> i loopen.</p>
            <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: 'var(--neon-purple)' }}></div>
            </div>
          </div>
          
          {/* TOKENS CARD */}
          <div className="glass-card" style={{ padding: '15px' }}>
            <h3 style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px', color: 'var(--neon-mint)', marginBottom: '8px' }}>TOKENS</h3>
            <div style={{ fontSize: '2rem', fontWeight: 900, margin: '5px 0', letterSpacing: '-1px' }}>2,450</div>
            <p style={{ color: 'var(--neon-mint)', fontWeight: 800, fontSize: '8px' }}>+450 READY</p>
            <button className="primary-btn" style={{ width: '100%', marginTop: '10px', background: 'var(--neon-mint)', color: '#000', fontSize: '9px', padding: '6px' }}>VÄXLA</button>
          </div>
        </div>

        {/* LOGG CARD - Slimmad historik */}
        <div className="glass-card" style={{ padding: '15px' }}>
          <h3 style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '1px', marginBottom: '12px', opacity: 0.6 }}>TRANSAKTIONER</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: "Sälj-bonus", amount: "+142", date: "Idag" },
              { label: "Köp-rebate", amount: "+450", date: "Igår" },
              { label: "Trust-milestone", amount: "+1000", date: "2 Okt" }
            ].map((log, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700 }}>{log.label}</span>
                  <span className="muted" style={{ fontSize: '8px' }}>{log.date}</span>
                </div>
                <span style={{ color: 'var(--neon-mint)', fontWeight: 900, fontSize: '11px' }}>{log.amount}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER BRANDING */}
      <div style={{ textAlign: 'center', marginTop: '20px', opacity: 0.3 }}>
        <p style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '2px' }}>KNOW • ACQUIRE • REUSE • MATCH • AGAIN</p>
      </div>
    </div>
  );
}
