// // components/ShippingAI.tsx
"use client";

export default function ShippingAI({ itemWeight = "0.5kg" }: { itemWeight?: string }) {
  return (
    <div style={{ 
      padding: '24px', 
      background: '#121212', 
      borderRadius: '24px',
      border: '1px solid rgba(255,255,255,0.05)' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <div style={{ width: '10px', height: '10px', background: '#1DB954', borderRadius: '50%' }}></div>
        <span style={{ color: '#fff', fontSize: '10px', letterSpacing: '2px', fontWeight: 900 }}>KARMA LOGISTICS AI</span>
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        <div style={{ 
          padding: '18px', background: '#000', borderRadius: '16px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: '12px', color: '#fff' }}>BOX-TO-BOX</div>
            <div style={{ fontSize: '10px', opacity: 0.4, fontWeight: 700 }}>INSTABOX / BUDBEE</div>
          </div>
          <span style={{ fontWeight: 900, color: '#1DB954' }}>49 kr</span>
        </div>

        <div style={{ 
          padding: '18px', background: '#fff', borderRadius: '16px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: 'none'
        }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: '12px', color: '#000' }}>⚡ KARMA EXPRESS</div>
            <div style={{ fontSize: '10px', color: '#1DB954', fontWeight: 900 }}>HEMLEVERANS IKVÄLL</div>
          </div>
          <span style={{ fontWeight: 900, color: '#000' }}>79 kr</span>
        </div>
      </div>
    </div>
  );
}
