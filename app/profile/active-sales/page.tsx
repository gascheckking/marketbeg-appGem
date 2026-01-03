"use client";
import OrderTrack from "@/components/OrderTrack";

export default function ActiveSalesPage() {
  const activeOrders = [
    { id: "ORD-992", item: "iPhone 15 Pro", status: "Väntar på inlämning", price: "9 200 kr" },
    { id: "ORD-441", item: "Bulk-pack: 15st Tröjor", status: "Postad", price: "750 kr" }
  ];

  return (
    <div className="page-wrapper" style={{ padding: '10px 15px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>FÖRSÄLJNINGAR</h1>
        <p style={{ fontSize: '9px', color: 'var(--neon-purple)', fontWeight: 800, letterSpacing: '1px', marginTop: '4px' }}>
          MATCHED • READY • AGAIN
        </p>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {activeOrders.map(order => (
          <div key={order.id} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ padding: '12px 15px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '0.9rem', fontWeight: 800 }}>{order.item}</strong>
                <div className="muted" style={{ fontSize: '9px', fontWeight: 700 }}>ID: {order.id} • {order.price}</div>
              </div>
              <span style={{ color: order.status === "Postad" ? 'var(--neon-mint)' : 'var(--neon-purple)', fontWeight: 900, fontSize: '8px', letterSpacing: '0.5px' }}>
                {order.status.toUpperCase()}
              </span>
            </div>
            
            <div style={{ padding: '15px' }}>
              {order.status === "Väntar på inlämning" ? (
                <OrderTrack status="Visa QR vid inlämning" />
              ) : (
                <p className="muted" style={{ fontSize: '9px', margin: 0, textAlign: 'center', lineHeight: '1.4' }}>
                  Paketet är på väg. Karma Shield håller likviditeten tills köparen godkänt.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
