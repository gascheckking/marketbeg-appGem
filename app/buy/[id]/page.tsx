// // app/buy/[id]/page.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div style={{ background: '#000', minHeight: '100vh', paddingBottom: '100px' }}>
      <div style={{ width: '100%', aspectRatio: '1/1', background: '#181818', position: 'relative' }}>
        <button onClick={() => router.back()} style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', fontSize: '20px' }}>✕</button>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 900 }}>VINTAGE HOODIE</h1>
            <p style={{ color: 'var(--karma-green)', fontWeight: 900, fontSize: '12px', marginTop: '4px' }}>99% TRUSTED SELLER</p>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 900 }}>150:-</div>
        </div>

        <p style={{ marginTop: '20px', fontSize: '14px', color: '#b3b3b3', lineHeight: '1.6' }}>
          Hittad via AI-scan. Bra skick, använd en säsong. Perfekt för loopen.
        </p>

        <div style={{ marginTop: '30px', display: 'flex', gap: '12px' }}>
          <button className="pill-btn" style={{ flex: 1, background: '#fff' }}>KÖP NU</button>
          <button className="pill-btn" style={{ flex: 1, background: 'transparent', border: '1px solid #333', color: '#fff' }}>BYTE 🔄</button>
        </div>
      </div>
    </div>
  );
}
