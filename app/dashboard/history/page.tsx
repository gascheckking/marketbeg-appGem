"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function PurchaseHistory() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  // Vi ser till att nyckeln heter 'name' här...
  const previousPurchases = [
    { id: 101, name: "Vintage Levi's 501", price: "450 kr", img: "👖" },
    { id: 102, name: "iPad Air (4th Gen)", price: "3 200 kr", img: "📱" }
  ];

  const handleLoopAgain = (id: number) => {
    setLoadingId(id);
    setTimeout(() => {
      router.push('/sell?source=history&itemId=' + id);
    }, 1200);
  };

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1px' }}>MINA KÖP</h1>
        <p style={{ fontSize: '10px', color: 'var(--neon-purple)', fontWeight: 800 }}>LOOPA DINA PRYLAR IGEN</p>
      </header>

      <div style={{ display: 'grid', gap: '12px' }}>
        {previousPurchases.map((item) => (
          <div key={item.id} className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', background: '#000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: '1px solid var(--border)' }}>
                {item.img}
              </div>
              <div>
                {/* FIXAD RAD: Nu mappar vi mot {item.name} istället för {item.item} */}
                <h3 style={{ margin: 0, fontSize: '12px', fontWeight: 800 }}>{item.name}</h3>
                <p style={{ margin: 0, fontSize: '9px', opacity: 0.5 }}>{item.price}</p>
              </div>
            </div>

            <button 
              onClick={() => handleLoopAgain(item.id)}
              className="primary-btn"
              style={{ background: 'transparent', border: '1px solid var(--neon-purple)', color: 'var(--neon-purple)', fontSize: '9px', padding: '8px 12px', width: 'auto' }}
            >
              {loadingId === item.id ? "HÄMTAR..." : "SÄLJ IGEN"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
