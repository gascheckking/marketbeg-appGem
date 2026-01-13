// // app/match/page.tsx
"use client";
import React from 'react';

export default function MatchPage() {
  return (
    <div style={{ height: '100vh', background: 'linear-gradient(180deg, #1DB954 0%, #000 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <div style={{ fontSize: '80px', marginBottom: '20px' }}>🤝</div>
      <h1 style={{ fontSize: '32px', fontWeight: 900, textAlign: 'center' }}>PERFEKT MATCH!</h1>
      <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 600 }}>Anna vill ha din jacka. Du får 150:- eller ett byte mot hennes sneakers.</p>
      
      <div style={{ width: '100%', marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button className="pill-btn" style={{ background: '#fff' }}>CHAT OCH SLUTFÖR</button>
        <button className="pill-btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>NEJ TACK</button>
      </div>
    </div>
  );
}
