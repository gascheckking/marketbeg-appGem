// // app/dashboard/history/page.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function PurchaseHistory() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const previousPurchases = [
    { id: 101, name: "Vintage Levi's 501", price: "450 kr", img: "👖", date: "KÖPT 12 MAR" },
    { id: 102, name: "iPad Air (4th Gen)", price: "3 200 kr", img: "📱", date: "KÖPT 28 JAN" }
  ];

  const handleLoopAgain = (id: number) => {
    setLoadingId(id);
    setTimeout(() => {
      router.push(`/sell?source=history&itemId=${id}`);
    }, 1200);
  };

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-1px', margin: 0 }}>MINA KÖP</h1>
        <p style={{ fontSize: '9px', color: 'var(--neon-purple)', fontWeight: 900, marginTop: '3px' }}>CIRKULÄR STATUS: AKTIV 🔄</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {previousPurchases.map((item) => (
          <div key={item.id} className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '45px', height: '45px', background: '#000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {item.img}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '12px', fontWeight: 900 }}>{item.name}</h3>
                <p style={{ margin: 0, fontSize: '9px', opacity: 0.4 }}>{item.price} • {item.date}</p>
              </div>
            </div>

            <button 
              onClick={() => handleLoopAgain(item.id)}
              className="loop-btn"
              style={{
                background: 'transparent', border: '1px solid var(--neon-purple)',
                color: 'var(--neon-purple)', fontSize: '9px', fontWeight: 900,
                padding: '8px 12px', borderRadius: '10px', cursor: 'pointer'
              }}
            >
              {loadingId === item.id ? "..." : "LOOPA"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
