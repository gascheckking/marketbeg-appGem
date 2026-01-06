// // app/profile/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  return (
    <div className="page-wrapper" style={{ padding: '20px', animation: 'fadeIn 0.5s ease' }}>
      
      {/* USER HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
        <div style={{ 
          width: '70px', height: '70px', borderRadius: '50%', 
          border: '2px solid var(--neon-mint)', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '28px', 
          background: '#080808', boxShadow: '0 0 15px rgba(0, 255, 136, 0.2)' 
        }}>🛡️</div>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>Alex Lindgren</h1>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <span style={{ background: 'var(--neon-purple)', color: '#fff', fontSize: '8px', fontWeight: 900, padding: '4px 10px', borderRadius: '6px' }}>LVL 14</span>
            <span style={{ background: 'rgba(255,255,255,0.05)', color: '#666', fontSize: '8px', fontWeight: 900, padding: '4px 10px', borderRadius: '6px' }}>EST. 2023</span>
          </div>
        </div>
      </div>

      {/* STATS GRID */}
      <div style={{ display: grid, gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '25px' }}>
        {[
          { val: '98.2%', label: 'TRUST SCORE', color: 'var(--neon-mint)' },
          { val: '2,450', label: 'KARMA TOKENS', color: '#fff' },
          { val: '42', label: 'COMPLETED LOOPS', color: '#fff' }
        ].map((stat, i) => (
          <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '15px 5px', borderRadius: '18px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: stat.color }}>{stat.val}</div>
            <div style={{ fontSize: '7px', fontWeight: 900, opacity: 0.4, marginTop: '4px', letterSpacing: '0.5px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* AI HANDELS-DNA (VÄGLEDNING) */}
      <div className="glass-card" style={{ 
        padding: '20px', background: 'rgba(157, 78, 221, 0.05)', 
        border: '1px solid rgba(157, 78, 221, 0.2)', borderRadius: '22px',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
          <div style={{ fontSize: '32px' }}>🤖</div>
          <div>
            <span style={{ fontSize: '9px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1px' }}>AI HANDELS-DNA</span>
            <strong style={{ fontSize: '1.1rem', display: 'block', margin: '2px 0', fontWeight: 900 }}>"The Quick Flipper"</strong>
            <p style={{ margin: 0, fontSize: '11px', opacity: 0.6, lineHeight: '1.5' }}>
              Du säljer <span style={{color: '#fff', fontWeight: 800}}>42% snabbare</span> än snittet inom <span style={{color: 'var(--neon-mint)', fontWeight: 800}}>Apple Tech</span>.
            </p>
          </div>
        </div>
      </div>

      {/* SNABB-NAVIGERING */}
      <button 
        onClick={() => router.push('/profile/active-sales')}
        style={{ 
          width: '100%', padding: '18px', borderRadius: '18px', 
          background: 'rgba(255,255,255,0.03)', border: '1px solid #222',
          color: '#fff', fontWeight: 900, fontSize: '12px', textAlign: 'left',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
        <span>📦 MINA AKTIVA FÖRSÄLJNINGAR</span>
        <span style={{ color: 'var(--neon-purple)' }}>→</span>
      </button>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
