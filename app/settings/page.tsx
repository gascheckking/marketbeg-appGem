// // app/settings/page.tsx
"use client";
import React from 'react';

export default function SettingsPage() {
  const sections = ['Konto', 'Notiser', 'Betalmetoder', 'Integritet'];
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '30px' }}>Inställningar</h1>
      {sections.map(s => (
        <div key={s} style={{ padding: '16px 0', borderBottom: '1px solid #181818', fontSize: '14px', fontWeight: 600 }}>
          {s}
        </div>
      ))}
      <button style={{ marginTop: '40px', color: '#ff4444', background: 'none', border: 'none', fontWeight: 700 }}>Logga ut</button>
    </div>
  );
}
