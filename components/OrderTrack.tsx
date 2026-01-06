// // components/OrderTrack.tsx
"use client";
export default function OrderTrack({ status = "Aktiv" }: { status?: string }) {
  return (
    <div className="order-card">
      <div className="order-header">
         <h3>AFFÄR {status.toUpperCase()}</h3>
         <div className="shield-tag">🛡️ KARMA SHIELD</div>
      </div>
      
      <div className="qr-box">
        <div className="qr-placeholder">🔳</div>
        <p>SKANNA HOS OMBUD</p>
        <small>Pengarna hålls tills båda är nöjda.</small>
      </div>

      <style jsx>{`
        .order-card { background: #0a0a0a; border: 1px solid #111; border-radius: 20px; padding: 20px; }
        .order-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .order-header h3 { margin: 0; font-size: 12px; font-weight: 900; }
        .shield-tag { font-size: 8px; font-weight: 900; color: var(--neon-mint); background: rgba(0,255,136,0.05); padding: 4px 10px; border-radius: 8px; }
        .qr-box { background: #fff; border-radius: 15px; padding: 30px; text-align: center; }
        .qr-placeholder { font-size: 50px; color: #000; }
        .qr-box p { color: #000; font-weight: 900; font-size: 12px; margin: 10px 0 0; }
        .qr-box small { color: #999; font-size: 8px; font-weight: 800; }
      `}</style>
    </div>
  );
}
