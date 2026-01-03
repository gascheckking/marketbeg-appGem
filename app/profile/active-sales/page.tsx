"use client";
import OrderTrack from "@/components/OrderTrack";

export default function ActiveSalesPage() {
  const activeOrders = [
    { id: "ORD-992", item: "iPhone 15 Pro", status: "Väntar på inlämning", price: "9 200 kr" },
    { id: "ORD-441", item: "Bulk-pack: 15st Tröjor", status: "Postad", price: "750 kr" }
  ];

  return (
    <div className="page-wrapper">
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px', letterSpacing: '-2px' }}>Mina Försäljningar</h1>
      
      <div style={{ display: 'grid', gap: '30px' }}>
        {activeOrders.map(order => (
          <div key={order.id} className="glass-card" style={{ padding: '0' }}>
            <div style={{ padding: '20px 30px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '1.2rem' }}>{order.item}</strong>
                <div className="muted" style={{ fontSize: '12px' }}>Order: {order.id} • {order.price}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: order.status === "Postad" ? 'var(--neon-mint)' : 'var(--neon-purple)', fontWeight: 900, fontSize: '12px' }}>
                  {order.status.toUpperCase()}
                </span>
              </div>
            </div>
            
            {order.status === "Väntar på inlämning" && (
              <div style={{ padding: '30px' }}>
                <OrderTrack status="Visa QR vid inlämning" />
              </div>
            )}
            
            {order.status === "Postad" && (
              <div style={{ padding: '30px', textAlign: 'center' }}>
                <p className="muted">Paketet är på väg till köparen. Karma Shield håller pengarna tills köparen godkänt.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
