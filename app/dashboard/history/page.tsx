"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PurchaseHistory() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const previousPurchases = [
    { id: 101, name: "Vintage Levi's 501", price: "450 kr", date: "2025-11-12", img: "👖", originalSeller: "Oscar W." },
    { id: 102, name: "iPad Air (4th Gen)", price: "3 200 kr", date: "2025-10-05", img: "📱", originalSeller: "TechSwap" },
    { id: 103, name: "Fjällräven Kånken", price: "300 kr", date: "2025-08-20", img: "🎒", originalSeller: "Lisa B." }
  ];

  const handleLoopAgain = (id: number) => {
    setLoadingId(id);
    // Simulerar AI-återställning av annonsdata
    setTimeout(() => {
      router.push('/sell/instant?source=history&itemId=' + id);
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px', margin: 0 }}>Mina Köp</h1>
        <p className="muted">Ge dina tidigare köp en ny Loop genom K.A.R.M.A.-protokollet.</p>
      </header>

      <div style={{ display: 'grid', gap: '20px' }}>
        {previousPurchases.map((item) => (
          <div key={item.id} className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
              <div style={{ 
                width: '80px', height: '80px', background: '#000', borderRadius: '18px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '35px',
                border: '1px solid var(--border)' 
              }}>
                {item.img}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{item.name}</h3>
                <p className="muted" style={{ margin: '5px 0', fontSize: '13px' }}>Köpt {item.date} för {item.price}</p>
                <div className="stat-pill" style={{ fontSize: '10px', marginTop: '5px' }}>
                  KÖPT FRÅN: {item.originalSeller}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <button 
                onClick={() => handleLoopAgain(item.id)}
                className="primary-btn"
                style={{ 
                  background: 'transparent', 
                  border: '1px solid var(--neon-purple)', 
                  color: 'var(--neon-purple)',
                  fontSize: '12px',
                  padding: '12px 25px'
                }}
              >
                {loadingId === item.id ? "HÄMTAR DATA..." : "LOOPA IGEN (SELL)"}
              </button>
              <p style={{ fontSize: '10px', color: '#444', marginTop: '10px', fontWeight: 800 }}>
                K.A.R.M.A. ÅTERANVÄNDER BILDER & INFO
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box om Again-funktionen */}
      <div className="glass-card" style={{ marginTop: '50px', border: '1px dashed var(--neon-purple)', background: 'rgba(157, 78, 221, 0.02)' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ fontSize: '30px' }}>♻️</div>
          <div>
            <strong style={{ color: 'var(--neon-purple)' }}>Varför "Again"?</strong>
            <p className="muted" style={{ fontSize: '13px', margin: '5px 0' }}>
              När du väljer att sälja en vara du köpt här tidigare, använder vi AI för att återställa den ursprungliga annonsen. 
              Du behöver inte fota eller skriva något – kontrollera bara att skicket är detsamma och klicka på publicera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
