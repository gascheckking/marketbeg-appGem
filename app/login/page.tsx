"use client";
import { useRouter } from 'next/navigation';

export default function EntryChoice() {
  const router = useRouter();

  return (
    <div style={{ 
      height: '100vh', width: '100vw', display: 'flex', 
      background: 'radial-gradient(circle, #0a0e1a 0%, #02040a 100%)',
      alignItems: 'center', justifyContent: 'center', gap: '40px'
    }}>
      {/* KÖP-Sidan */}
      <div onClick={() => router.push('/feed')} className="glass-card" style={{ 
        width: '400px', height: '500px', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.4s' 
      }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🛍️</div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>JAG VILL KÖPA</h2>
        <p className="muted">Utforska AI-verifierade deals</p>
      </div>

      {/* SNABB-SÄLJ (Världens snabbaste) */}
      <div onClick={() => router.push('/sell/instant')} className="glass-card" style={{ 
        width: '400px', height: '500px', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', cursor: 'pointer', 
        border: '2px solid var(--neon-mint)', background: 'rgba(0, 255, 136, 0.05)'
      }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>⚡</div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>JAG VILL SÄLJA</h2>
        <p style={{ color: 'var(--neon-mint)', fontWeight: 800 }}>LIVE PÅ UNDER 60 SEKUNDER</p>
      </div>
    </div>
  );
}
