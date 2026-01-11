// // components/ShippingAI.tsx
"use client";
export default function ShippingAI() {
  return (
    <div style={{ padding: '24px', background: '#121212', borderRadius: '24px', border: '1px solid #1c1c1c' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <div style={{ width: '8px', height: '8px', background: '#1DB954', borderRadius: '50%' }} />
        <span style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 900 }}>KARMA LOGISTICS AI</span>
      </div>
      <div style={{ display: 'grid', gap: '10px' }}>
        <div style={{ padding: '15px', background: '#000', borderRadius: '15px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '12px', fontWeight: 700 }}>Box-to-Box (Instabox)</span>
          <span style={{ color: '#1DB954', fontWeight: 900 }}>49:-</span>
        </div>
        <div style={{ padding: '15px', background: '#fff', color: '#000', borderRadius: '15px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '12px', fontWeight: 900 }}>⚡ Karma Express (Ikväll)</span>
          <span style={{ fontWeight: 900 }}>79:-</span>
        </div>
      </div>
    </div>
  );
}

// // components/OrderTrack.tsx
"use client";
export default function OrderTrack({ status = "Aktiv" }) {
  return (
    <div style={{ background: '#121212', border: '1px solid #1c1c1c', borderRadius: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
         <h3 style={{ fontSize: '11px', fontWeight: 900 }}>AFFÄR {status.toUpperCase()}</h3>
         <div style={{ fontSize: '8px', color: '#1DB954', background: 'rgba(29, 185, 84, 0.1)', padding: '5px 10px', borderRadius: '10px', fontWeight: 900 }}>🛡️ KARMA SHIELD</div>
      </div>
      <div style={{ background: '#fff', borderRadius: '20px', padding: '30px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px' }}>🔳</div>
        <p style={{ color: '#000', fontWeight: 900, fontSize: '13px', margin: '10px 0' }}>SKANNA HOS OMBUD</p>
        <small style={{ color: '#666', fontSize: '9px' }}>AI-validering sker vid inlämning.</small>
      </div>
    </div>
  );
}
