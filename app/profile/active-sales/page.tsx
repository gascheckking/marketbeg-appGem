// // app/profile/active-sales/page.tsx
"use client";
import OrderTrack from "@/components/OrderTrack";

export default function ActiveSalesPage() {
  const activeOrders = [
    { id: "ORD-992", item: "iPhone 15 Pro", status: "Väntar på inlämning", price: "9 200 kr" },
    { id: "ORD-441", item: "Bulk-pack: Tröjor", status: "Postad", price: "750 kr" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>FÖRSÄLJNINGAR</h1>
        <p style={{ fontSize: '8px', color: 'var(--neon-purple)', fontWeight: 900 }}>AKTIVA LOPPAR</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {activeOrders.map(order => (
          <div key={order.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '16px' }}>
            <div style={{ padding: '12px 15px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '11px', fontWeight: 900 }}>{order.item}</strong>
                <div style={{ fontSize: '9px', opacity: 0.4 }}>{order.id} • {order.price}</div>
              </div>
              <span style={{ color: order.status === "Postad" ? 'var(--neon-mint)' : '#ff4444', fontWeight: 900, fontSize: '8px' }}>
                {order.status.toUpperCase()}
              </span>
            </div>
            <div style={{ padding: '15px' }}>
              {order.status === "Väntar på inlämning" ? <OrderTrack status="Visa QR vid inlämning" /> : 
                <p style={{ fontSize: '10px', opacity: 0.5, textAlign: 'center', margin: 0 }}>Paketet är på väg till sortering.</p>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
