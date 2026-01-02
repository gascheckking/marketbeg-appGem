"use client";
import React from 'react';

export default function VaultPage() {
  return (
    <div className="page-wrapper">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, margin: 0, letterSpacing: '-3px' }}>Vault & Rewards</h1>
            <p className="muted" style={{ fontSize: '1.2rem' }}>Hantera din likviditet och dina framtida tokens.</p>
          </div>
          <div className="glass-card" style={{ padding: '25px 45px', textAlign: 'right', border: '1px solid var(--neon-mint)' }}>
            <p className="muted" style={{ margin: 0, fontSize: '11px', fontWeight: 800 }}>TOTAL LIKVIDITET (SEK)</p>
            <h2 style={{ fontSize: '3rem', margin: 0, color: 'var(--neon-mint)', letterSpacing: '-2px' }}>14 250,00</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="glass-card" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '2px', color: 'var(--neon-purple)' }}>KARMA SCORE</h3>
            <div style={{ fontSize: '5rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-5px' }}>850</div>
            <p className="muted" style={{ fontSize: '13px' }}>Du är i topp **2%** av globala handlare denna månad.</p>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginTop: '30px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: 'var(--neon-purple)', boxShadow: '0 0 15px var(--neon-purple)' }}></div>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '40px', background: 'rgba(0,255,136,0.02)' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '2px', color: 'var(--neon-mint)' }}>BEGTOKENS</h3>
            <div style={{ fontSize: '5rem', fontWeight: 900, margin: '10px 0', letterSpacing: '-5px' }}>2,450</div>
            <p style={{ color: 'var(--neon-mint)', fontWeight: 800, fontSize: '13px' }}>● +450 Tokens redo att claimas</p>
            <button className="primary-btn" style={{ width: '100%', marginTop: '30px', background: 'var(--neon-mint)', color: '#000' }}>VÄXLA TILL SEK</button>
          </div>

          <div className="glass-card" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '2px' }}>CASHBACK LOGG</h3>
            <div style={{ marginTop: '25px' }}>
              {[
                { label: "Sälj-bonus: iPhone 15", amount: "+142", date: "Idag" },
                { label: "Köp-rebate: MacBook Pro", amount: "+450", date: "Igår" },
                { label: "Trust-milestone reached", amount: "+1000", date: "2 Okt" }
              ].map((log, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="muted" style={{ fontSize: '13px' }}>{log.label}</span>
                  <span style={{ color: 'var(--neon-mint)', fontWeight: 900 }}>{log.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
