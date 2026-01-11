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
        <small>Pengarna hålls i valvet tills båda är nöjda.</small>
      </div>

      <style jsx>{`
        .order-card { 
          background: var(--bg-card); 
          border: 1px solid var(--border); 
          border-radius: 24px; 
          padding: 20px; 
        }
        .order-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .order-header h3 { margin: 0; font-size: 11px; font-weight: 900; letter-spacing: 0.5px; }
        .shield-tag { 
          font-size: 8px; font-weight: 900; 
          color: var(--karma-green); 
          background: rgba(29, 185, 84, 0.1); 
          padding: 5px 10px; border-radius: 10px; 
        }
        .qr-box { background: #fff; border-radius: 20px; padding: 30px; text-align: center; }
        .qr-placeholder { font-size: 50px; color: #000; line-height: 1; }
        .qr-box p { color: #000; font-weight: 900; font-size: 13px; margin: 10px 0 2px; }
        .qr-box small { color: #666; font-size: 9px; font-weight: 700; }
      `}</style>
    </div>
  );
}
