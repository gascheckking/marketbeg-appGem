// // app/profile/active-sales/page.tsx
"use client";
import OrderTrack from "@/components/OrderTrack";

export default function ActiveSalesPage() {
  const activeOrders = [
    { id: "ORD-992", item: "iPhone 15 Pro", status: "Väntar på inlämning", price: "9 200 kr", time: "22h kvar" },
    { id: "ORD-441", item: "Bulk-pack: Tröjor", status: "Postad", price: "750 kr", time: "På väg" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '20px', animation: 'fadeIn 0.5s ease' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>FÖRSÄLJNINGAR</h1>
        <p style={{ fontSize: '9px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1px', marginTop: '4px' }}>DINA AKTIVA LOPPAR</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {activeOrders.map(order => (
          <div key={order.id} className="glass-card" style={{ 
            padding: '0', overflow: 'hidden', borderRadius: '22px', 
            border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(2, 4, 10, 0.4)' 
          }}>
            <div style={{ 
              padding: '15px 20px', borderBottom: '1px solid #111', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'rgba(255,255,255,0.01)'
            }}>
              <div>
                <strong style={{ fontSize: '12px', fontWeight: 900, display: 'block' }}>{order.item}</strong>
                <div style={{ fontSize: '10px', opacity: 0.4, marginTop: '2px' }}>{order.id} • {order.price}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ 
                  color: order.status === "Postad" ? 'var(--neon-mint)' : '#ff4444', 
                  fontWeight: 900, fontSize: '9px', display: 'block' 
                }}>
                  {order.status.toUpperCase()}
                </span>
                <span style={{ fontSize: '8px', opacity: 0.3, fontWeight: 800 }}>{order.time}</span>
              </div>
            </div>
            
            <div style={{ padding: '20px' }}>
              {order.status === "Väntar på inlämning" ? (
                <div>
                  <OrderTrack status="Visa QR vid inlämning" />
                  <p style={{ fontSize: '9px', opacity: 0.4, textAlign: 'center', marginTop: '12px', fontWeight: 700 }}>
                    Lämna in hos närmaste PostNord-ombud.
                  </p>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>🚚</div>
                  <p style={{ fontSize: '10px', opacity: 0.6, margin: 0, fontWeight: 700 }}>
                    Paketet har lämnat din nod och är på väg till köparen.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
