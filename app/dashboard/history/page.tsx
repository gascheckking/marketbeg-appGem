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
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1.5px', margin: 0 }}>MINA KÖP</h1>
        <p style={{ fontSize: '11px', color: 'var(--neon-purple)', fontWeight: 900, marginTop: '5px' }}>CIRKULÄR STATUS: AKTIV 🔄</p>
      </header>

      <div style={{ display: 'grid', gap: '15px' }}>
        {previousPurchases.map((item) => (
          <div key={item.id} className="glass-card loop-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="item-img-box">{item.img}</div>
              <div>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 900 }}>{item.name}</h3>
                <p style={{ margin: 0, fontSize: '10px', opacity: 0.5 }}>{item.price} • {item.date}</p>
              </div>
            </div>

            <button 
              onClick={() => handleLoopAgain(item.id)}
              className="loop-btn"
            >
              {loadingId === item.id ? "HÄMTAR..." : "LOOPA IGEN"}
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .loop-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.08);
        }
        .item-img-box {
          width: 55px; height: 55px; background: #000; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; border: 1px solid rgba(255,255,255,0.1);
        }
        .loop-btn {
          background: transparent; border: 1px solid var(--neon-purple);
          color: var(--neon-purple); font-size: 10px; font-weight: 900;
          padding: 10px 16px; borderRadius: 12px; cursor: pointer;
          transition: all 0.2s;
        }
        .loop-btn:hover { background: var(--neon-purple); color: #fff; }
      `}</style>
    </div>
  );
}
