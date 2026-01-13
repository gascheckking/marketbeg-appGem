// // app/profile/page.tsx
"use client";
import React from 'react';
import KarmaTrustCard from '@/components/KarmaTrustCard';

export default function ProfilePage() {
  return (
    <div style={{ padding: '20px', paddingBottom: '100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#282828' }} />
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 900 }}>Ditt Namn</h1>
          <div style={{ fontSize: '12px', color: 'var(--karma-green)', fontWeight: 900 }}>KARMA MASTER • NIVÅ 4</div>
        </div>
      </div>

      <KarmaTrustCard score={98} />

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 900, marginBottom: '15px' }}>Dina Aktiva Loops</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {/* Exempel på egna listningar */}
          <div style={{ background: '#121212', padding: '10px', borderRadius: '4px' }}>
            <div style={{ width: '100%', aspectRatio: '1', background: '#282828', borderRadius: '2px', marginBottom: '8px' }} />
            <div style={{ fontSize: '11px', fontWeight: 700 }}>VINTAGE HOODIE</div>
            <div style={{ fontSize: '10px', color: 'var(--karma-green)' }}>6 BUD • 2 DAGAR KVAR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
