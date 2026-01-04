// // app/profile/active-sales/page.tsx
"use client";
import OrderTrack from "@/components/OrderTrack";

export default function ActiveSalesPage() {
  const activeOrders = [
    { id: "ORD-992", item: "iPhone 15 Pro", status: "Väntar på inlämning", price: "9 200 kr" },
    { id: "ORD-441", item: "Bulk-pack: 15st Tröjor", status: "Postad", price: "750 kr" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>FÖRSÄLJNINGAR</h1>
        <p style={{ fontSize: '10px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '1px' }}>MATCHED • READY • AGAIN</p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {activeOrders.map(order => (
          <div key={order.id} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ padding: '15px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '14px', fontWeight: 900 }}>{order.item.toUpperCase()}</strong>
                <div className="muted" style={{ fontSize: '10px', fontWeight: 700 }}>ID: {order.id} • {order.price}</div>
              </div>
              <span style={{ color: order.status === "Postad" ? 'var(--neon-mint)' : '#ff4444', fontWeight: 900, fontSize: '9px' }}>
                {order.status.toUpperCase()}
              </span>
            </div>
            
            <div style={{ padding: '20px' }}>
              {order.status === "Väntar på inlämning" ? (
                <OrderTrack status="Visa QR vid inlämning" />
              ) : (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <p className="muted" style={{ fontSize: '11px', margin: 0, lineHeight: '1.6' }}>
                    Paketet är på väg till sortering. <br/>
                    Karma Shield håller likviditeten säkrad.
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
