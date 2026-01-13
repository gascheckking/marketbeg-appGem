// // app/chat/[id]/page.tsx
"use client";
import React from 'react';

export default function ChatPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#000' }}>
      <header style={{ padding: '15px', borderBottom: '1px solid #181818', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#282828' }} />
        <div style={{ fontSize: '14px', fontWeight: 900 }}>Köpare: Anna</div>
      </header>

      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ alignSelf: 'flex-start', background: '#282828', padding: '10px 15px', borderRadius: '15px 15px 15px 0', fontSize: '13px', maxWidth: '80%' }}>
          Hej! Kan jag hämta jackan ikväll?
        </div>
        <div style={{ alignSelf: 'flex-end', background: 'var(--karma-green)', color: '#000', padding: '10px 15px', borderRadius: '15px 15px 0 15px', fontSize: '13px', maxWidth: '80%', fontWeight: 600 }}>
          Absolut, passar kl 18?
        </div>
      </div>

      <div style={{ padding: '20px', background: '#121212', display: 'flex', gap: '10px' }}>
        <input placeholder="Skriv meddelande..." style={{ flex: 1, background: '#000', border: 'none', borderRadius: '500px', padding: '12px 20px', color: '#fff', fontSize: '13px' }} />
        <button style={{ background: 'none', border: 'none', fontSize: '20px' }}>⚡</button>
      </div>
    </div>
  );
}
