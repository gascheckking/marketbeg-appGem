// // app/dashboard/history/page.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function PurchaseHistory() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const previousPurchases = [
    { id: 101, name: "Vintage Levi's 501", price: "450 kr", img: "👖", date: "KÖPT 12 MAR", condition: "EXCELLENT" },
    { id: 102, name: "iPad Air (4th Gen)", price: "3 200 kr", img: "📱", date: "KÖPT 28 JAN", condition: "GOOD" }
  ];

  const handleLoopAgain = (id: number) => {
    setLoadingId(id);
    setTimeout(() => {
      router.push(`/sell?source=history&itemId=${id}`);
    }, 800);
  };

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1.5px' }}>Mina Köp</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
          <div style={{ width: '8px', height: '8px', background: '#1DB954', borderRadius: '50%' }}></div>
          <p style={{ fontSize: '10px', color: '#1DB954', fontWeight: 900, letterSpacing: '1px' }}>LOOPBARA TILLGÅNGAR</p>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {previousPurchases.map((item) => (
          <div key={item.id} style={{ 
            background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
            padding: '16px', borderRadius: '24px', border: '1px solid #111' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ 
                width: '55px', height: '55px', background: '#000', borderRadius: '16px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'
              }}>
                {item.img}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 900 }}>{item.name}</h3>
                <p style={{ margin: '2px 0 0', fontSize: '9px', opacity: 0.3, fontWeight: 800 }}>{item.date} • {item.condition}</p>
              </div>
            </div>

            <button 
              onClick={() => handleLoopAgain(item.id)}
              style={{
                background: '#fff', border: 'none', color: '#000', 
                fontSize: '10px', fontWeight: 900, padding: '10px 16px', borderRadius: '12px'
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
