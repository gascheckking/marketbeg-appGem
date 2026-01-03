"use client";
import React from 'react';

/** * Denna sida fungerar nu som "Karma Rewards" - en fördjupning av Saldo-sidan.
 * Här hanterar vi Tokens och historik.
 */
export default function VaultPage() {
  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, margin: 0, letterSpacing: '-2px' }}>Rewards</h1>
        <p className="muted" style={{ fontSize: '14px' }}>Hantera din intjänade karma och framtida tokens.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        
        {/* TOTAL LIKVIDITET CARD */}
        <div className="glass-card" style={{ padding: '30px 20px', border: '1px solid var(--neon-mint)', background: 'rgba(0,255,136,0.02)' }}>
          <p className="muted" style={{ margin: 0, fontSize: '10px', fontWeight: 900, letterSpacing: '1px' }}>TOTALT INKÖRT (SEK)</p>
          <h2 style={{ fontSize: '2.5rem', margin: '5px 0', color: '#fff', letterSpacing: '-1px' }}>14 250,00</h2>
          <div style={{ fontSize: '12px', color: 'var(--neon-mint)', fontWeight: 700 }}>● Redo för uttag</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          {/* KARMA SCORE CARD */}
          <div className="glass-card" style={{ padding: '25px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '1px', color: 'var(--neon-purple)', marginBottom: '15px' }}>KARMA SCORE</h3>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-3px' }}>850</div>
            <p className="muted" style={{ fontSize: '12px', lineHeight: '1.4' }}>Du är i topp <span style={{color: '#fff'}}>2%</span> av globala handlare denna månad.</p>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginTop: '20px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: 'var(--neon-purple)', boxShadow: '0 0 10px var(--neon-purple)' }}></div>
            </div>
          </div>
          
          {/* TOKENS CARD */}
          <div className="glass-card" style={{ padding: '25px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '1px', color: 'var(--neon-mint)', marginBottom: '15px' }}>BEGTOKENS</h3>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-3px' }}>2,450</div>
            <p style={{ color: 'var(--neon-mint)', fontWeight: 800, fontSize: '11px' }}>+450 Tokens redo att claimas</p>
            <button className="primary-btn" style={{ width: '100%', marginTop: '20px', background: 'var(--neon-mint)', color: '#000', fontSize: '11px' }}>VÄXLA TILL SEK</button>
          </div>

          {/* LOGG CARD */}
          <div className="glass-card" style={{ padding: '25px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '1px', marginBottom: '15px' }}>HISTORIK</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: "Sälj-bonus", amount: "+142", date: "Idag" },
                { label: "Köp-rebate", amount: "+450", date: "Igår" },
                { label: "Trust-milestone", amount: "+1000", date: "2 Okt" }
              ].map((log, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="muted" style={{ fontSize: '12px' }}>{log.label}</span>
                  <span style={{ color: 'var(--neon-mint)', fontWeight: 800, fontSize: '12px' }}>{log.amount}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
