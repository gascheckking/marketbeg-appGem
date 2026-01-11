// // app/profile/active-sales/page.tsx
"use client";
import OrderTrack from "@/components/OrderTrack";

export default function ActiveSalesPage() {
  const activeOrders = [
    { id: "ORD-992", item: "iPhone 15 Pro", status: "Väntar på inlämning", price: "9 200 kr", time: "22h kvar" },
    { id: "ORD-441", item: "Bulk-pack: Tröjor", status: "Postad", price: "750 kr", time: "På väg" }
  ];

  return (
    <div className="page-wrapper">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-1.5px' }}>Försäljningar</h1>
        <p style={{ fontSize: '10px', color: '#1DB954', fontWeight: 900, letterSpacing: '1px' }}>DINA AKTIVA LOPPAR</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {activeOrders.map(order => (
          <div key={order.id} style={{ 
            borderRadius: '24px', border: '1px solid #111', background: '#080808', overflow: 'hidden'
          }}>
            <div style={{ 
              padding: '20px', borderBottom: '1px solid #111', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <div>
                <strong style={{ fontSize: '14px', fontWeight: 900, display: 'block' }}>{order.item}</strong>
                <div style={{ fontSize: '10px', opacity: 0.3, marginTop: '2px', fontWeight: 700 }}>{order.id} • {order.price}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ 
                  color: order.status === "Postad" ? '#1DB954' : '#fff', 
                  fontWeight: 900, fontSize: '10px', display: 'block' 
                }}>
                  {order.status.toUpperCase()}
                </span>
                <span style={{ fontSize: '9px', opacity: 0.2, fontWeight: 800 }}>{order.time}</span>
              </div>
            </div>
            
            <div style={{ padding: '25px' }}>
              {order.status === "Väntar på inlämning" ? (
                <div>
                  <OrderTrack status="Visa QR vid inlämning" />
                  <p style={{ fontSize: '10px', opacity: 0.4, textAlign: 'center', marginTop: '15px', fontWeight: 700 }}>
                    Lämna in hos närmaste PostNord-ombud.
                  </p>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>🚚</div>
                  <p style={{ fontSize: '11px', opacity: 0.5, margin: 0, fontWeight: 700 }}>
                    Paketet har lämnat din nod och är på väg.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
