// // app/profile/page.tsx
"use client";
import React from 'react';

export default function ProfilePage() {
  return (
    <div style={{ padding: '24px', background: '#000', minHeight: '100vh', color: '#fff' }}>
      {/* USER HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#282828' }} />
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 900 }}>Ditt Karma</h1>
          <div style={{ color: 'var(--karma-green)', fontSize: '12px', fontWeight: 900 }}>98% TRUST • ELITE</div>
        </div>
      </div>

      {/* SALDO & ACTION (Ersätter Vault) */}
      <div style={{ background: '#121212', padding: '24px', borderRadius: '12px', marginBottom: '32px' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, opacity: 0.5, letterSpacing: '1px' }}>TILLGÄNGLIGT ATT TA UT</div>
        <div style={{ fontSize: '42px', fontWeight: 900, margin: '8px 0' }}>14.250:-</div>
        <button className="pill-btn" style={{ width: '100%', background: '#fff', color: '#000', marginTop: '12px' }}>
          ÖVERFÖR TILL BANK
        </button>
      </div>

      {/* DINA LOOPAR (Resultatet av din Video Scan) */}
      <h3 style={{ fontSize: '16px', fontWeight: 900, marginBottom: '16px' }}>Dina Aktiva Loops</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="karma-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700 }}>Mass-scan: Förråd Söder</div>
            <div style={{ fontSize: '11px', opacity: 0.6 }}>12 objekt • Publicerat idag</div>
          </div>
          <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--karma-green)' }}>ACTIVE</div>
        </div>
      </div>
    </div>
  );
}
